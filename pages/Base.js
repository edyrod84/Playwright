class BasePage {
    url = 'https://decemberlabs.com';
    constructor(page){
        this.page = page;
    }
    async navigate(){
        const current = await this.page.url();
        if(current=='about:blank'){
            await this.page.goto(this.url);
        }
    }
    
}
module.exports = { BasePage }