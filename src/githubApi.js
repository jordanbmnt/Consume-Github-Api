const axios = require("axios");
const { resultFilter, urlConstructor } = require("./helper");

const getPullRequests = (owner, repositoryName, startDate, endDate) => {
    axios
        .get(
            urlConstructor(owner, repositoryName, startDate, endDate)
        )
        .then((result) => {
            const returnData = resultFilter(
                result.data.items,
                startDate,
                endDate
            );
            console.log(returnData);
        })
        .catch((error) => {
            throw new Error(
                `${error.response.status} User or Repo ${error.response.data.message}`
            );
        });
};