import Button from "sap/m/Button";
import { wdi5Selector } from "wdio-ui5-service/dist/types/wdi5.types";

const selector: wdi5Selector = {
    selector: {
        id: "NavFwdButton",
        viewName: "test.Sample.tsapp.view.Main"
    }
}

describe("ButtonTest on Main.view", async () => {
    it("Should read the content of the button", async () => {
        const button: unknown = await browser.asControl(selector);
        const value: string = await (button as Button).getText();
        expect(value).toEqual("to Other view");
    });

    it("test if button is clickable" , async () => {
        const button: unknown = await browser.asControl(selector);
        expect(button).toBeClickable();
    });

    it("Test if button redirects to #/other page", async () => {
        const button = await browser.asControl(selector);
        await button.press();
        const browserUrl = await browser.getUrl();
        expect(browserUrl).toContain('#/other');
    });
});