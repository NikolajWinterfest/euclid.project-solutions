export const stages = () => {
    // __________ Tabs for "Stages Section" __________ //
    // Get classes of elements
    const stepsButtonOfStages = document.querySelectorAll('.steps__item-btn')
    const itemsOfStages = document.querySelectorAll('.details-stages__item')
    const picturesOfStages = document.querySelectorAll('.pictureblock__item')

    // Check buttons with class "--active"
    function addActiveClassBtn(button) {
        const activeBtn = document.querySelector('.steps__item-btn--active')
        if (activeBtn) {
            activeBtn.classList.remove('steps__item-btn--active')
        }
        button.classList.add('steps__item-btn--active')
        return button
    }

    // Check items and pictures with class "active"
    function addActiveClass(item, picture) {
        const activeElements = document.querySelectorAll('.tabs-active')
        activeElements.forEach((elem) => elem.classList.remove('tabs-active'))
        item.classList.add('tabs-active')
        picture.classList.add('tabs-active')
        return item, picture
    }

    // (TABS) Iteration of buttons
    stepsButtonOfStages.forEach((button, index) => {
        button.addEventListener('click', () => {
            const activeItem = itemsOfStages[index]
            const activePicture = picturesOfStages[index]
            if (
                button.classList.contains('steps__item-btn--active') &&
                activeItem.classList.contains('tabs-active') &&
                activePicture.classList.contains('tabs-active')
            ) {
                return
            } else {
                addActiveClassBtn(button)
                addActiveClass(activeItem, activePicture)
            }
        })
    })
}
