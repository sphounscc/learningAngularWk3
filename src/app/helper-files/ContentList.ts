import { Content } from '../interfaces/Content';

class ContentList {
    static contentCount = 0;
    private _items: Content[];
    constructor(item: Content) {
        this._items = []; // initialize array this._items[0] = item; this.increaseCount();
    }
    
    increaseCount() {
        return ++ContentList.contentCount;
    }

    get items(): Content[] {
        return this._items;
    }
}