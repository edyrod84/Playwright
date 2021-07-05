const { BasePage } = require("./Base");
const {expect} = require('@playwright/test')

class HomePage extends BasePage {
    constructor(page){
        super(page);
        this.page = page;
    }
    get meenu() { return 'a.btn_mobile'; }
    get getInTouch_btn() { return 'li a.btn_start_project'; }
    get getITouchHeader() { return '#email-form h3'; }
    get inputName() { return 'input#name'; }
    get inputEmail() { return 'input#email'; }
    get inputCompany() { return 'input#company'; }
    get textareaMessage() { return 'textarea#message'; }
    get warningClass() { return '.warning'}
    get sendBtn() { return 'input.contact-form-submit'; }
    get errorLabels() { return `${this.warningClass} label`; }
    get getITSusscess() { return '.get-in-touch-success'}
    get successMSelector() { return `${this.getITSusscess} span.row`; }
    get okButton() { return `${this.getITSusscess} .close-modal-success`}

    async getInTouch(name, email, message, company){
        await this.navigate();
        try {
            await this.page.click(this.meenu);
            await this.page.click(this.getInTouch_btn);
            await this.page.waitForSelector(this.getITouchHeader);
            await this.fillOutForm(name, email, message, company);
            const successMessage = await this.getSuccessMessage();
            return successMessage;
        } catch (error) {
            const fieldWithErros = await this.page.$$(this.warningClass);
            const names = fieldWithErros.length && await this.page.$$eval(this.errorLabels, labels=> labels.map(el=> el.innerText));
            throw (names.length ? new Error(`Required fields: ${names.join(', ')}`) : error)
        }
    }
    async fillOutForm(name, email, message, company){
        try {
            await this.page.fill(this.inputName, name);
            await this.page.fill(this.inputEmail, email);
            await this.page.fill(this.textareaMessage, message);
            if(company){
                await this.page.fill(this.inputCompany, company);
            }
            await this.page.click(this.sendBtn);
            const warmings = await this.page.$(this.warningClass,{timeout:1500});
            if(warmings) {
                throw new Error('Unable to send');
            }
        } catch (error) {
            throw error;
        }
    }
    async getSuccessMessage(){
        const successMessage = await this.page.$$eval(this.successMSelector, spans => spans.map(e => e.textContent));
        await this.page.click(this.okButton);
        return successMessage.join(', ')
    }

}
module.exports = { HomePage }