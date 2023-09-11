const resultFilter = (obj) => {
    const filteredObjectArray = [];
    for (let i = 0; i < obj.length; i++) {
        filteredObjectArray.push({
            id: obj[i]["id"],
            user: obj[i].user.login,
            title: obj[i].title,
            state: obj[i].state,
            created_at: obj[i].created_at.slice(0, 10),
        });
    }
    return filteredObjectArray;
};


const urlConstructor = (owner, repositoryName, startDate, endDate) => {
    const dateFilterStr = `+is:pr+created:${startDate}..${endDate}`;
    return `https://api.github.com/search/issues?q=repo:${owner}/${repositoryName}${dateFilterStr}`
}

module.exports = { resultFilter, urlConstructor };
