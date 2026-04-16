import prompt from 'prompt';
import PromptSchemaMain from "./prompts-schema/prompt-schema-main.js"
import createQRCode from './services/qr-code/create.js';
import createPassword from './services/password/create.js';

async function main() {
    prompt.start();

    prompt.get(PromptSchemaMain, async (err, choose) => {
        if (err) {
            console.log("Erro no prompt:", err);
            return;
        }
        if (choose.select == 1) await createQRCode();
        if (choose.select == 2) await createPassword();
    });
};

main();