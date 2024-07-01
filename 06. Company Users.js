    function companyUsers(input) {
        let obj = {};
        input.forEach(pair => {
            let [company, id] = pair.split(' -> ');
            if (!obj.hasOwnProperty(company)) {
                obj[company] = [];
            }
            obj[company].push(id);
        });
        let sortedCompanies = Object.entries(obj);
        sortedCompanies.sort((a, b) => a[0].localeCompare(b[0]));
        for (const element of sortedCompanies) {
            let companyName = element[0];
            console.log(companyName);
            let set = new Set(element[1]);
            for (const number of set) {
                console.log(`-- ${number}`);
            }
        }
    }
companyUsers(['SoftUni -> AA12345', 'SoftUni -> BB12345', 'Microsoft -> CC12345', 'HP -> BB12345']);