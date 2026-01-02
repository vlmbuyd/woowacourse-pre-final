export const INPUT_MSG = Object.freeze({
  SELECT: `\n오늘은 12월 13일 금요일입니다. 기능을 선택해 주세요.
1. 출석 확인
2. 출석 수정
3. 크루별 출석 기록 확인
4. 제적 위험자 확인
Q. 종료\n`,

  CHECK_ATTENDANCE: ['닉네임을 입력해 주세요.', '등교 시간을 입력해 주세요.'],
  EDIT_ATTENDANCE: [
    '출석을 수정하려는 크루의 닉네임을 입력해 주세요.',
    '수정하려는 날짜(일)를 입력해 주세요.',
    '언제로 변경하겠습니까?',
  ],
  CREW_ATTENDANCE_HISTORY: ['닉네임을 입력해 주세요.'],
});

export const ERROR_MSG = Object.freeze({
  PREFIX: '[ERROR]',
});

export const ATTENDANCE_MODE = Object.freeze({
  1: 'checkAttendance',
  2: 'editAttendance',
  3: 'crewAttendanceHistory',
  4: 'riskOfExpulsion',
  q: 'quit',
});

export const ATTENDANCE_STATUS = Object.freeze({
  ATTENDANCE: '출석',
  LATE: '지각',
  ABSENCE: '결석',
});

export const RULE = Object.freeze({
  LATE_MIN: 5,
  ABSENCE_MIN: 30,
});
