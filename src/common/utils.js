let utils={}
utils.getTable = (table) => {
    let rows = localStorage.getItem(table)
    return rows ? JSON.parse(rows) : []
}

utils.saveTable = (table, rows) => localStorage.setItem(table, JSON.stringify(rows))

export default utils
