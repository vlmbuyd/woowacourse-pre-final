export const INPUT_MSG = Object.freeze({
  PURCHASE_AMOUNT: '구입금액을 입력해 주세요.\n',
  WINNING_NUMBER: '당첨 번호를 입력해 주세요.\n',
  BONUS_NUMBER: '\n보너스 번호를 입력해 주세요.\n',
});

export const OUTPUT_MSG = Object.freeze({
  PURCHASE_AMOUNT: (amount) => `\n${amount}개를 구매했습니다.`,
  WINNING_STATS: '당첨 통계\n---\n',
  PROFIT_RATE: (rate) => `총 수익률은 ${rate}%입니다.`,
});

export const ERROR_MSG = Object.freeze({
  ERROR_PREFIX: '[ERROR] ',
  INVALID_UNIT: '구입 금액은 1,000원 단위여야 합니다.',
  INVALID_LOTTO_AMOUNT: '로또 번호는 6개여야 합니다.',
  INVALID_WINNING_AMOUNT: '당첨 번호는 6개여야 합니다.',
  OUT_OF_RNAGE: '번호는 1부터 45 사이의 숫자여야 합니다.',
  DUPLICATE_NUM: '중복된 숫자가 포함되어 있습니다.',
});

export const GAME_RULE = Object.freeze({
  PRICE_UNIT: 1000,
  LOTTO_NUM_AMOUNT: 6,
  BONUS_NUM_AMOUNT: 1,
  LOTTO_MIN_NUM: 1,
  LOTTO_MAX_NUM: 45,
});
