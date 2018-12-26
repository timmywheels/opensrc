export const setRepoIssueColor = (issueCount) => {
	const classNamesArr = [];
	if (issueCount === 0) {
		return;
	} else if (issueCount > 0 && issueCount <= 10) {
		classNamesArr.push("issues-sm")
	} else if (issueCount > 10 && issueCount <= 50) {
		classNamesArr.push("issues-md")
	} else if (issueCount > 50 && issueCount <= 100) {
		classNamesArr.push("issues-lg")
	} else if (issueCount > 100) {
		classNamesArr.push("issues-xl")
	}
	return classNamesArr;
}
//
// if (repo.open_issues == 0) {
// 	return;
// } else if (repo.open_issues > 0 && repo.open_issues <= 10) {
// 	classNames.push("issues-sm")
// } else if (repo.open_issues > 10 && repo.open_issues <= 50) {
// 	classNames.push("issues-md")
// } else if (repo.open_issues > 50 && repo.open_issues <= 100) {
// 	classNames.push("issues-lg")
// } else if (repo.open_issues > 100) {
// 	classNames.push("issues-xl")
// }