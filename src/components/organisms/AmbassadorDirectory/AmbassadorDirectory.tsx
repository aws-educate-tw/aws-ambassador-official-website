'use client';

import { DIRECTORY } from '@/data/alumni';
import { ArrowLeft, ArrowRight, GraduationCap, Luggage } from 'lucide-react';
import { useMemo, useState } from 'react';
import styles from './AmbassadorDirectory.module.css';

const PAGE_SIZE = 9;
const ROLES = ['Marketing', 'Tech', 'Event'];

export function AmbassadorDirectory() {
  const [cohort, setCohort] = useState('');
  const [role, setRole] = useState('');
  const [page, setPage] = useState(1);

  const cohorts = useMemo(() => {
    const set = new Set(DIRECTORY.map((p) => p.role.split(' ')[0]));
    return Array.from(set).sort();
  }, []);

  const filtered = useMemo(() => {
    setPage(1);
    return DIRECTORY.filter((p) => {
      const matchCohort = cohort === '' || p.role.startsWith(cohort + ' ');
      const matchRole = role === '' || p.role.endsWith(role);
      return matchCohort && matchRole;
    });
  }, [cohort, role]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const showPagination = filtered.length > PAGE_SIZE;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>歷屆大使名錄</h2>
          <p className={styles.subtitle}>探索來自全台各大專院校的優秀雲端人才</p>
        </div>

        {/* 篩選列 */}
        <div className={styles.filters}>
          <div className={styles.selectWrapper}>
            <select
              value={cohort}
              onChange={(e) => setCohort(e.target.value)}
              className={styles.select}
            >
              <option value="">所有屆數</option>
              {cohorts.map((c) => (
                <option key={c} value={c}>
                  {c} 屆
                </option>
              ))}
            </select>
          </div>
          <div className={styles.selectWrapper}>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className={styles.select}
            >
              <option value="">所有職能</option>
              {ROLES.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* 名錄卡片網格 */}
        <div className={styles.grid}>
          {paginated.map((person, i) => (
            <div key={i} className={styles.card}>
              {/* 上方：頭像 + 姓名 + 學校資訊 */}
              <div className={styles.cardTop}>
                <img
                  src="https://placehold.co/84x120"
                  className={styles.avatar}
                  alt={person.name}
                  width={84}
                  height={120}
                />
                <div className={styles.cardInfo}>
                  {/* 姓名 */}
                  <div className={styles.nameRow}>
                    <span className={styles.personName}>{person.name}</span>
                  </div>

                  {/* 學校 */}
                  <div className={styles.detailRow}>
                    <GraduationCap className={styles.rowIcon} size={20} />
                    <div className={styles.detailTexts}>
                      <span className={styles.detailMain}>{person.school}</span>
                      <span className={styles.detailSub}>{person.dept}</span>
                    </div>
                  </div>

                  {/* 角色 */}
                  <div className={styles.detailRow}>
                    <Luggage className={styles.rowIcon} size={20} />
                    <div className={styles.detailTexts}>
                      <span className={styles.detailMain}>{person.role}</span>
                      <span className={styles.detailSub}>
                        AWS Educate Taiwan Student Ambassador
                      </span>
                    </div>
                  </div>

                  {/* Side Project */}
                  <div className={styles.detailRow}>
                    <Luggage className={styles.rowIcon} size={20} />
                    <div className={styles.detailTexts}>
                      <span className={styles.detailMain}>{person.side}</span>
                      <span className={styles.detailSub}>Side Project</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 下方：操作按鈕 */}
              <div className={styles.actions}>
                <button className={styles.btn}>大使旅程全心得</button>
                <button className={styles.btn}>LinkedIn 連結</button>
              </div>
            </div>
          ))}
        </div>

        {showPagination && (
          <div className={styles.pagination}>
            <button
              className={styles.pageBtn}
              onClick={() => setPage((p) => p - 1)}
              disabled={page === 1}
            >
              <ArrowLeft size={20} color="white" />
              <span className={styles.pageBtnLabel}>上一頁</span>
            </button>
            <span className={styles.pageInfo}>
              {page} / {totalPages}
            </span>
            <button
              className={styles.pageBtn}
              onClick={() => setPage((p) => p + 1)}
              disabled={page === totalPages}
            >
              <span className={styles.pageBtnLabel}>下一頁</span>
              <ArrowRight size={20} color="white" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
