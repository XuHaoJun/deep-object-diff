import detailedDiff from './detailed.js';
import detailToChangelog from './detailToChangelog.js';

const changelogedDiff = (lhs, rhs) => {
  const detailResult = detailedDiff(lhs, rhs);
  return detailToChangelog(detailResult, lhs);
};

export default changelogedDiff;
