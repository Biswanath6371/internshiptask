function f1(D) {
    let D1 = { 'Mon': 0, 'Tue': 0, 'Wed': 0, 'Thu': 0, 'Fri': 0, 'Sat': 0, 'Sun': 0 }
    let checkDate = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 }
    for (const key of Object.keys(D)) {
        let str = key;
        let val = D[key];
        const d = new Date(str);
        const day = d.getDay();
        if (day == 0) {
            D1["Sun"] += val
            checkDate[6] = 1
        }
        if (day > 0) {
            D1[Object.keys(D1)[day - 1]] += val
            checkDate[parseInt(Object.keys(checkDate)[day - 1])] = 1
        }
    }
    if (checkDate[1] == 0) {
        D1["Tue"] = parseInt((D1["Mon"] * 2) - D2["Sun"])
    }
    for (let i = 2; i <= 5; i++) {
        if (checkDate[i] == 0) {
            D1[Object.keys(D1)[i]] = parseInt((D1[Object.keys(D1)[i - 1]] * 2) - D1[Object.keys(D1)[i - 2]])
        }
    }
    return D1
}

