import flat from 'flat';
import _get from 'lodash.get';
import _toPath from 'lodash.topath';

/**
 * Convert detail diff result to changelog
 */
const detailToChangelog = (detailDiff, lhs) => {
  return ['added', 'deleted', 'updated'].reduce((acc, key) => {
    const difference = detailDiff[key];
    const type = keyToChangeType(key);
    const changelog = differenceToChangelog(lhs, difference, type);
    return acc.concat(changelog);
  }, []);
};

const keyToChangeType = (key) => {
  const mapping = {
    added: 'create',
    deleted: 'delete',
    updated: 'update',
  };
  return mapping[key];
};

const differenceToChangelog = (lhs, difference, type) => {
  const x = flat(difference);
  return Object.keys(x).reduce((acc, fpath) => {
    const from = _get(lhs, fpath);
    const to = _get(x, fpath);
    const path = _toPath(fpath);
    const change = {
      type,
      path,
      from,
      to,
    };
    acc.push(change);
    return acc;
  }, []);
};

export default detailToChangelog;
