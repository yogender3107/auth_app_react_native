export const selectLibrary = libraryId => {
  console.log("ibraryId>>>", libraryId);
  return {
    type: "select_library",
    payload: libraryId
  };
};
