/* globals translations */
export const stepsData = [
    {
        'id': 1,
        'name': translations.step01Label
    },
    {
        'id': 2,
        'name': translations.step02Label,
        'title': translations.step02TopHeadingTitle,
        'description': translations.step02TopHeadingDescription
    },
    {
        'id': 3,
        'name': translations.step03Label,
        'title': translations.step03TopHeadingTitle,
        'description': translations.step03TopHeadingDescription
    },
    {
        'id': 4,
        'name': translations.step04Label,
        'title': translations.step04TopHeadingTitle,
        'description': translations.step04TopHeadingDescription
    }
]

export const getHeadingData = (stepId) => {
    return stepsData.find(step => step.id === stepId);
}
