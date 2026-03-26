export const filterColleges = (options, searchTerm) => {
  if (!searchTerm) return options;
  return options.filter((o) =>
    o.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

export const getSelectedCollege = (options, selectedId) => {
  return options.find((o) => o.id === selectedId) || null;
};

export const handleCollegeSelectionClick = ({
  collegeId,
  isAlreadyChosen,
  setAttemptedId,
  setSelectedId
}) => {
  if (isAlreadyChosen) {
    setAttemptedId(collegeId);
    setSelectedId(null);
  } else {
    setAttemptedId(null);
    setSelectedId(collegeId);
  }
};
