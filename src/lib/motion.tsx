'use client';

import { motion as framerMotion, type Transition } from 'framer-motion';
import { forwardRef, type ElementType } from 'react';
import { useMotionPreferences } from '@/hooks';

/**
 * Drop-in replacement for framer-motion's `motion` namespace. Import `motion` from
 * here instead of 'framer-motion' directly (enforced by the no-restricted-imports
 * ESLint rule) so every `motion.*` element automatically honors prefers-reduced-motion.
 *
 * framer-motion's own `MotionConfig reducedMotion="user"` only suppresses transform
 * values (x/y/scale/...), never opacity, so fade-in entrance animations still play for
 * reduced-motion users. Forcing `initial={false}` instead makes the element render
 * straight into its `animate`/`whileInView`/variants target with no transition at all
 * (verified against framer-motion's use-visual-state.mjs: this applies uniformly to
 * mount animations, viewport-triggered animations, and staggered parent/child variants,
 * since `initial={false}` cascades to children via MotionContext). Zeroing the
 * `transition` duration on top of that also suppresses hover/tap/exit animations.
 */
const cache = new Map<string, unknown>();

function withReducedMotion(tag: string) {
  const cached = cache.get(tag);
  if (cached) return cached;

  const MotionTag = (framerMotion as unknown as Record<string, ElementType>)[tag];

  const Wrapped = forwardRef<unknown, Record<string, unknown> & { transition?: Transition }>(
    function ReducedMotionTag(props, ref) {
      const { shouldReduceMotion } = useMotionPreferences();

      if (!shouldReduceMotion) {
        return <MotionTag ref={ref} {...props} />;
      }

      return (
        <MotionTag
          ref={ref}
          {...props}
          initial={false}
          transition={{ ...(props.transition ?? {}), duration: 0 }}
        />
      );
    },
  );

  cache.set(tag, Wrapped);
  return Wrapped;
}

export const motion = new Proxy(
  {},
  {
    get: (_target, tag: string) => withReducedMotion(tag),
  },
) as typeof framerMotion;
