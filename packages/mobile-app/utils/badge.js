/* eslint-disable no-plusplus */
const generateBadgeTargetDays = () => {
  const targetDays = [];
  for (let i = 1; i <= 53; i++) {
    if (i < 4) {
      const startDays = 90;
      targetDays.push(startDays * i);
    } else {
      const startDays = 365;
      targetDays.push(startDays * (i - 3));
    }
  }
  return targetDays;
};

const processBadgeAward = (soberDays = 0) => {
  const badgeTargetDays = generateBadgeTargetDays();
  const qualifiedBadges = [];
  let nextBadgeIndex = null;

  for (let i = 0; i < badgeTargetDays.length; i++) {
    if (soberDays >= badgeTargetDays[i]) {
      qualifiedBadges.push(badgeTargetDays[i]);
    } else {
      nextBadgeIndex = i;
      break;
    }
  }

  return {
    qualifiedBadges,
    daysToNextBadge: badgeTargetDays[nextBadgeIndex] - soberDays,
    nextBadge: badgeTargetDays[nextBadgeIndex],
  };
};

export default processBadgeAward;
