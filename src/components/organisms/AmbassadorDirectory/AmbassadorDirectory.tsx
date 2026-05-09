'use client';

import { DIRECTORY } from '@/data/alumni';
import { ArrowLeft, ArrowRight, GraduationCap, Luggage, ChevronDown, Check } from 'lucide-react';
import { useMemo, useState, useRef, useEffect } from 'react';
import styles from './AmbassadorDirectory.module.css';

const PAGE_SIZE = 9;
const ROLES = ['Marketing', 'Tech', 'Event'];

function CustomSelect({
  value,
  onChange,
  options,
  placeholder,
}: {
  value: string;
  onChange: (val: string) => void;
  options: { label: string; value: string }[];
  placeholder: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <div className={styles.customSelectContainer} ref={ref}>
      <button
        type="button"
        className={styles.customSelectButton}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span
          className={value === '' ? styles.customSelectPlaceholder : styles.customSelectValue}
        >
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown
          size={16}
          className={`${styles.customSelectIcon} ${isOpen ? styles.customSelectIconOpen : ''}`}
        />
      </button>

      {isOpen && (
        <div className={styles.customSelectDropdown}>
          <ul className={styles.customSelectList}>
            <li
              className={`${styles.customSelectOption} ${value === '' ? styles.customSelectOptionSelected : ''}`}
              onClick={() => {
                onChange('');
                setIsOpen(false);
              }}
            >
              <span className={styles.customSelectOptionText}>{placeholder}</span>
              {value === '' && <Check size={16} className={styles.customSelectCheck} />}
            </li>
            {options.map((opt) => (
              <li
                key={opt.value}
                className={`${styles.customSelectOption} ${value === opt.value ? styles.customSelectOptionSelected : ''}`}
                onClick={() => {
                  onChange(opt.value);
                  setIsOpen(false);
                }}
              >
                <span className={styles.customSelectOptionText}>{opt.label}</span>
                {value === opt.value && <Check size={16} className={styles.customSelectCheck} />}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export function AmbassadorDirectory() {
  const [cohort, setCohort] = useState('');
  const [role, setRole] = useState('');
  const [page, setPage] = useState(1);

  const cohorts = useMemo(() => {
    const allCohorts = DIRECTORY.flatMap((p) => p.experience.map((e) => e.cohort));
    const set = new Set(allCohorts);
    return Array.from(set).sort();
  }, []);

  const filtered = useMemo(() => {
    setPage(1);
    return DIRECTORY.filter((p) => {
      const matchCohort = cohort === '' || p.experience.some((e) => e.cohort === cohort);
      const matchRole = role === '' || p.experience.some((e) => e.subRole === role);
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
          <CustomSelect
            value={cohort}
            onChange={setCohort}
            options={cohorts.map((c) => ({ label: `${c} 屆`, value: c }))}
            placeholder="所有屆數"
          />
          <CustomSelect
            value={role}
            onChange={setRole}
            options={ROLES.map((r) => ({ label: r, value: r }))}
            placeholder="所有職能"
          />
        </div>

        {/* 名錄卡片網格 */}
        <div className={styles.grid}>
          {paginated.map((person, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.cardTop}>
                {/* 1. 照片：若資料沒給照片，則顯示一個預設圖 */}
                <img
                  src={person.image || 'https://placehold.co/84x120?text=AWS'}
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

                  {/* 2. 學校或公司 */}
                  <div className={styles.detailRow}>
                    <GraduationCap className={styles.rowIcon} size={18} />
                    <div className={styles.detailTexts}>
                      <span className={styles.detailMain}>{person.school}</span>
                      <span className={styles.detailSub}>{person.dept}</span>
                    </div>
                  </div>

                  {/* 3. 角色*/}
                  <div className={styles.detailRow}>
                    <Luggage className={styles.rowIcon} size={20} />
                    <div className={styles.detailTexts}>
                      <div className={styles.experienceList}>
                        {person.experience.map((exp, idx) => (
                          <span key={idx} className={styles.detailMain}>
                            {exp.cohort} {exp.subRole}
                          </span>
                        ))}
                      </div>

                      <span className={styles.detailSub}>
                        AWS Educate Taiwan Student Ambassador
                      </span>
                    </div>
                  </div>

                  {/* 4. Side Projects */}
                  {person.sideProjects && person.sideProjects.length > 0 && (
                    <div className={styles.detailRow}>
                      <Luggage className={styles.rowIcon} size={20} />
                      <div className={styles.detailTexts}>
                        <div className={styles.experienceList}>
                          {person.sideProjects.map((proj, idx) => (
                            <span key={idx} className={styles.detailMain}>
                              {proj}
                            </span>
                          ))}
                        </div>

                        <span className={styles.detailSub}>Side Project</span>
                      </div>
                    </div>
                  )}

                  {/* 5. 相關證照 */}
                  {person.certs && person.certs.length > 0 && (
                    <div className={styles.certContainer}>
                      {person.certs.map((cert, idx) => (
                        <div key={idx} className={styles.certBadge}>
                          {cert}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* 6 & 7. 心得和 LinkedIn */}
              <div className={styles.actions}>
                {/* 心得連結 */}
                {person.links?.story ? (
                  <a href={person.links.story} className={styles.btn}>
                    大使旅程全心得
                  </a>
                ) : (
                  <button className={styles.btn} disabled>
                    心得整理中
                  </button>
                )}

                {/* LinkedIn 連結 */}
                {person.links?.linkedin ? (
                  <a
                    href={person.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.btn}
                  >
                    LinkedIn 連結
                  </a>
                ) : (
                  <button className={styles.btn} disabled>
                    尚未提供連結
                  </button>
                )}
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
