import { Form } from '../../../src/Form/form';
import cityList from './city';
Page({
    data: {
        onUpload(localFile) {
            return new Promise((resolve) => {
                console.log('上传的图片为：', localFile);
                setTimeout(() => {
                    resolve('https://gw.alipayobjects.com/mdn/rms_226d75/afts/img/A*5m0ZQYhxhjEAAAAAAAAAAAAAARQnAQ');
                }, 2000);
            });
        },
        fruitList: ['苹果', '香蕉', '橘子', '西瓜'],
        cityList,
        radioGroupOptions: [
            { value: 'cat', label: '🐱' },
            { value: 'fox', label: '🦊' },
        ],
        checkboxGroupOptions: [
            { value: 'tomato', label: '🍅' },
            { value: 'potato', label: '🥔' },
            { value: 'eggplant', label: '🍆' },
        ],
        selectorOptions: [
            { value: 'basketball', text: '🏀' },
            { value: 'football', text: '⚽️' },
            { value: 'badminton', text: '🏸️' },
        ],
        toastShow: false,
    },
    onLoad() {
        this.form = new Form();
        if (this.formRefList) {
            this.formRefList.forEach((ref) => {
                this.form.addItem(ref);
            });
        }
    },
    handleRef(ref) {
        if (!this.formRefList) {
            this.formRefList = [];
        }
        this.formRefList.push(ref.detail);
    },
    reset() {
        this.form.reset();
    },
    async submit() {
        const values = await this.form.submit();
        console.log(values);
    },
    showToast() {
        this.setData({
            toastShow: true,
        });
    },
    handleCloseToast() {
        this.setData({
            toastShow: false,
        });
    },
});
