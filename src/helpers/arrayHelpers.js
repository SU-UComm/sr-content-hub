export const arrayHelperRemoveElementByValue = (itemToBeRemoved, array) => {
    return array.filter(item => item !== itemToBeRemoved)
}
