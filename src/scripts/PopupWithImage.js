import Popup from './popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
    }

    open({ link, name }) {
        this._popupElement.querySelector('.modal__input_image-link)').src = link;
        this._popupElement.querySelector('.modal__input_caption').textContent = name;

        super.open();
    }
}