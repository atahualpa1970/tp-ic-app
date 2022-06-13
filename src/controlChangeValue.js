exports.changeValueC = (valueA, valueB) => {
    var valueC = ""
    if (!valueA && !valueB) valueC = "FALSE"
    if (valueA && !valueB) valueC = "[ A ]"
    if (!valueA && valueB) valueC = "[ B ]"
    if (valueA && valueB) valueC = "TRUE"
    return valueC
}