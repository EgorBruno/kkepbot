
import { Student, Absence, DutyAssignment } from '../types';

export const students: Student[] = [
  { id: 1, name: 'Иванов Иван', group: 'ИС-31', totalDutyCount: 3 },
  { id: 2, name: 'Петрова Мария', group: 'ИС-31', totalDutyCount: 2 },
  { id: 3, name: 'Сидоров Алексей', group: 'ИС-31', totalDutyCount: 4 },
  { id: 4, name: 'Козлова Анна', group: 'ИС-31', totalDutyCount: 1 },
  { id: 5, name: 'Новиков Дмитрий', group: 'ИС-31', totalDutyCount: 2 },
  { id: 6, name: 'Морозова Елена', group: 'ИС-31', totalDutyCount: 3 },
  { id: 7, name: 'Волков Кирилл', group: 'ИС-31', totalDutyCount: 2 },
  { id: 8, name: 'Лебедева Ольга', group: 'ИС-31', totalDutyCount: 1 },
  { id: 9, name: 'Соколов Михаил', group: 'ИС-31', totalDutyCount: 3 },
  { id: 10, name: 'Павлова Татьяна', group: 'ИС-31', totalDutyCount: 2 },
];

export const absences: Absence[] = [
  { id: 1, studentId: 3, date: '2025-04-13', reason: 'Болезнь' },
  { id: 2, studentId: 5, date: '2025-04-13', reason: 'Семейные обстоятельства' },
  { id: 3, studentId: 8, date: '2025-04-13', reason: 'Соревнования' },
];

export const dutyAssignments: DutyAssignment[] = [
  { id: 1, studentId: 1, date: '2025-04-13', completed: true },
  { id: 2, studentId: 6, date: '2025-04-13', completed: false },
  { id: 3, studentId: 2, date: '2025-04-14', completed: false },
  { id: 4, studentId: 7, date: '2025-04-14', completed: false },
];

export const getAbsentStudents = (date: string): Student[] => {
  const absentIds = absences
    .filter(absence => absence.date === date)
    .map(absence => absence.studentId);
  
  return students.filter(student => absentIds.includes(student.id));
};

export const getPresentStudents = (date: string): Student[] => {
  const absentIds = absences
    .filter(absence => absence.date === date)
    .map(absence => absence.studentId);
  
  return students.filter(student => !absentIds.includes(student.id));
};

export const getDutyAssignments = (date: string): (DutyAssignment & { student: Student })[] => {
  return dutyAssignments
    .filter(duty => duty.date === date)
    .map(duty => {
      const student = students.find(s => s.id === duty.studentId);
      return {
        ...duty,
        student: student!
      };
    });
};

export const getStudentById = (id: number): Student | undefined => {
  return students.find(student => student.id === id);
};
