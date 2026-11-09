import { Assignment, AssignmentSubmission } from '../types';

import { GRADE_6_ASSIGNMENTS } from './assignmentsData/grade6Assignments';
import { GRADE_7_ASSIGNMENTS } from './assignmentsData/grade7Assignments';
import { GRADE_8_ASSIGNMENTS } from './assignmentsData/grade8Assignments';
import { GRADE_9_ASSIGNMENTS } from './assignmentsData/grade9Assignments';

// Tổng hợp toàn bộ bài tập chuẩn của 4 khối lớp 6, 7, 8, 9
export const INITIAL_ASSIGNMENTS: Assignment[] = [
  ...GRADE_6_ASSIGNMENTS,
  ...GRADE_7_ASSIGNMENTS,
  ...GRADE_8_ASSIGNMENTS,
  ...GRADE_9_ASSIGNMENTS,
];

// Danh sách bài nộp ban đầu
export const INITIAL_SUBMISSIONS: AssignmentSubmission[] = [];
