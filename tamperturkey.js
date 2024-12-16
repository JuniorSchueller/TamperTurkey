const floatingLogoC = document.createElement('img');
floatingLogoC.src = 'https://i.imgur.com/WveYM48.png';
floatingLogoC.classList.add('floating');
floatingLogoC.alt = 'TamperTurkey Logo';
floatingLogoC.id = 'floating-logo';
document.body.appendChild(floatingLogoC);

const tamperTurkeyPanelC = document.createElement('div');
tamperTurkeyPanelC.classList.add('tamperTurkey');
tamperTurkeyPanelC.id = 'tamperTurkey-panel';

const tools = document.createElement('div');
tools.classList.add('tools');
const p = document.createElement('p');
p.textContent = 'TamperTurkey';
tools.appendChild(p);

const addButton = document.createElement('button');
addButton.id = 'tamperTurkey-add';
addButton.textContent = '+';
tools.appendChild(addButton);

const closeButton = document.createElement('button');
closeButton.id = 'tamperTurkey-close';
closeButton.textContent = 'X';
tools.appendChild(closeButton);

tamperTurkeyPanelC.appendChild(tools);

const scripts = document.createElement('div');
scripts.classList.add('scripts');
tamperTurkeyPanelC.appendChild(scripts);

document.body.appendChild(tamperTurkeyPanelC);

const tamperTurkeyAddMenuC = document.createElement('div');
tamperTurkeyAddMenuC.classList.add('tamperTurkey', 'add');
tamperTurkeyAddMenuC.id = 'tamperTurkey-add-menu';

const toolsAddMenu = document.createElement('div');
toolsAddMenu.classList.add('tools');
const pAddMenu = document.createElement('p');
pAddMenu.textContent = 'TamperTurkey';
toolsAddMenu.appendChild(pAddMenu);

const closeAddButton = document.createElement('button');
closeAddButton.id = 'tamperTurkey-close-add';
closeAddButton.textContent = 'X';
toolsAddMenu.appendChild(closeAddButton);

tamperTurkeyAddMenuC.appendChild(toolsAddMenu);

const textarea = document.createElement('textarea');
textarea.id = 'script-content';
textarea.placeholder = 'Script';
textarea.value = `=START
= SCRIPT_ID - MeuIDUnico
= SCRIPT_NAME - Novo Script
= SCRIPT_DESCRIPTION - Esse é meu novo script do TamperTurkey
= SCRIPT_AUTHOR - Você
= SCRIPT_VERSION - 1.0
=END
window.alert('TamperTurkey está funcionando! 🎉');`;
tamperTurkeyAddMenuC.appendChild(textarea);

const addButtonMenu = document.createElement('button');
addButtonMenu.classList.add('add-script-button');
addButtonMenu.textContent = 'Adicionar';
tamperTurkeyAddMenuC.appendChild(addButtonMenu);

document.body.appendChild(tamperTurkeyAddMenuC);

const style = document.createElement('style');
style.innerText = `
    #floating-logo {
        position: fixed;
        top: 20px;
        right: 20px;
        width: 60px;
        cursor: pointer;
        transition: transform 0.3s ease;
        background: white;
        border-radius: 100%;
        border: solid 1px white;
        z-index: 9999;
    }

    #floating-logo:hover {
        transform: rotate(45deg);
    }

    .tamperTurkey, .tamperTurkey.add {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(0, 0, 0, 0.8);
        color: white;
        border-radius: 10px;
        padding: 20px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        width: 400px;
        max-width: 90%;
        display: none;
        animation: fadeIn 0.3s ease-out;
        z-index: 9999;
    }

    .tamperTurkey.add {
        display: none;
    }

    .tamperTurkey .tools {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
    }

    .tamperTurkey .tools p {
        margin: 0;
    }

    .tamperTurkey .tools > button {
        background: transparent;
        border: none;
        color: white;
        font-size: 24px;
        cursor: pointer;
        transition: color 0.3s ease;
    }

    .tamperTurkey .tools button:hover {
        color: #ff6347;
    }
    .tamperTurkey .tools button#tamperTurkey-add:hover {
        color: #4791ff;
    }

    .tamperTurkey .scripts .tableCols, .tamperTurkey .scripts .script {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #fff;
        padding: 10px;
    }

    .tamperTurkey .scripts .script {
        transition: background-color 0.3s ease;
        cursor: pointer;
    }

    .tamperTurkey .scripts .script:hover {
        background-color: rgba(255, 255, 255, 0.1);
    }

    .tamperTurkey .scripts .name, .tamperTurkey .scripts .version, .tamperTurkey .scripts > .author {
        width: 25%;
    }

    .tamperTurkey .scripts .script .tools .edit, .tamperTurkey .scripts .script .tools .delete {
        cursor: pointer;
        padding: 5px;
        transition: transform 0.3s ease;
    }

    .tamperTurkey .scripts .script .tools .edit:hover, .tamperTurkey .scripts .script .tools .delete:hover {
        transform: scale(1.2);
    }

    .tamperTurkey.add #script-content {
        width: 100%;
        padding: 10px;
        margin: 10px 0;
        border-radius: 5px;
        border: 1px solid #ddd;
        font-size: 16px;
        background: #333;
        color: white;
        box-sizing: border-box;
    }

    .tamperTurkey.add #script-content:focus {
        background: #444;
    }

    .tamperTurkey.add textarea {
        resize: vertical;
        height: 150px;
    }

    .tamperTurkey .tools #tamperTurkey-add {
        margin-left: auto;
        font-size: 30px;
        cursor: pointer;
    }

    .tamperTurkey.add .add-script-button {
        background: #2575fc;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
        width: 100%;
        font-size: 16px;
        margin-top: 20px;
        transition: background-color 0.3s ease;
    }

    .tamperTurkey.add .add-script-button:hover {
        background: #2574fcbb;
        color: white;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

const floatingLogo = document.querySelector('#floating-logo');
const tamperTurkeyPanel = document.querySelector('#tamperTurkey-panel');
const tamperTurkeyScriptList = document.querySelector('#tamperTurkey-panel > .scripts');
const tamperTurkeyAddMenu = document.querySelector('#tamperTurkey-add-menu');
const tamperTurkeyClose = document.querySelector('#tamperTurkey-close');
const tamperTurkeyCloseAdd = document.querySelector('#tamperTurkey-close-add');
const tamperTurkeyAdd = document.querySelector('#tamperTurkey-add');
const tamperTurkeyScriptContent = document.querySelector('.tamperTurkey.add > textarea');
const tamperTurkeyAddButton = document.querySelector('.tamperTurkey.add > .add-script-button');

function closeMenus() {
    tamperTurkeyPanel.style.display = 'none';
    tamperTurkeyAddMenu.style.display = 'none';
}

function openTamperTurkeyPanel() {
    tamperTurkeyPanel.style.display = 'block';
    tamperTurkeyAddMenu.style.display = 'none';
}

function openTamperTurkeyAddMenu() {
    tamperTurkeyAddMenu.style.display = 'block';
    tamperTurkeyPanel.style.display = 'none';
}

function getScriptAttributes(script) {
    try {
        const regex = /=\s*(\w+)\s*-\s*(.+)/gi;
        let match;
        const attributes = {};

        while ((match = regex.exec(script)) !== null) {
            const key = match[1].toLowerCase();
            const value = match[2].trim();
            attributes[key] = value;
        }

        return attributes;
    } catch {
        console.log('[TamperTurkey] An error ocurred on getScriptAttributes.');
    }
}

function getScriptContent(script) {
    try {
        const endRegex = /=\s*END\s*/i;

        const lines = script.split(/\r?\n/);

        let foundEnd = false;
        const scriptLines = lines.filter(line => {
            if (foundEnd) return true;
            if (endRegex.test(line)) {
                foundEnd = true;
            }
            return false;
        });

        return scriptLines.join('\n').trim();
    } catch (error) {
        console.log('[TamperTurkey] An error ocurred on getScriptContent.');
    }
}

function addListeners() {
    try {
        const tamperTurkeyScripts = document.querySelectorAll('#tamperTurkey-panel > .scripts > .script');

        tamperTurkeyScripts.forEach(tamperTurkeyScript => {
            const scriptId = tamperTurkeyScript.getAttribute('data-id');

            const newElement = tamperTurkeyScript.cloneNode(true);
            tamperTurkeyScript.parentNode.replaceChild(newElement, tamperTurkeyScript);

            newElement.addEventListener('click', () => {
                const localScripts = JSON.parse(localStorage.getItem('tamperturkey-scripts'));
                const script = getScriptContent(localScripts[scriptId]);

                eval(script);

                window.alert(`[TamperTurkey] ${getScriptAttributes(localScripts[scriptId])['script_name']} iniciado.`)
            });

            newElement.querySelector('.edit').addEventListener('click', (event) => {
                event.stopPropagation();
                editScript(scriptId);
            });

            newElement.querySelector('.delete').addEventListener('click', (event) => {
                event.stopPropagation();
                deleteScript(scriptId);
            });
        });
    } catch (error) {
        console.log('[TamperTurkey] An error ocurred on addListeners.', error);
    }
}


function addScript() {
    try {
        const script = tamperTurkeyScriptContent.value;
        const scriptId = getScriptAttributes(script)['script_id'];

        let localScripts = localStorage.getItem('tamperturkey-scripts');
        if (localScripts) {
            localScripts = JSON.parse(localScripts);

            localScripts[scriptId] = script;
            localStorage.setItem('tamperturkey-scripts', JSON.stringify(localScripts));

            tamperTurkeyAddMenu.style.display = 'none';
            tamperTurkeyPanel.style.display = 'block';

            updateList();
        } else {
            localScripts = {};

            localScripts[scriptId] = script;
            localStorage.setItem('tamperturkey-scripts', JSON.stringify(localScripts));

            tamperTurkeyAddMenu.style.display = 'none';
            tamperTurkeyPanel.style.display = 'block';

            updateList();
        }
    } catch {
        console.log('[TamperTurkey] An error ocurred on addScript.');
    }
}

function editScript(scriptId) {
    try {
        tamperTurkeyAddMenu.style.display = 'block';
        tamperTurkeyPanel.style.display = 'none';

        const localScripts = JSON.parse(localStorage.getItem('tamperturkey-scripts'));
        const script = localScripts[scriptId];

        tamperTurkeyScriptContent.value = script;
    } catch {
        console.log('[TamperTurkey] An error ocurred on editScript.');
    }
}

function deleteScript(scriptId) {
    try {
        const deleteConfirmation = window.confirm('[TamperTurkey] Você realmente quer deletar esse script?');

        if (deleteConfirmation) {
            const localScripts = JSON.parse(localStorage.getItem('tamperturkey-scripts'));
            delete localScripts[scriptId];

            localStorage.setItem('tamperturkey-scripts', JSON.stringify(localScripts));
            updateList();
        }
    } catch {
        console.log('[TamperTurkey] An error ocurred on deleteScript.');
    }
}

function clearList() {
    try {
        tamperTurkeyScriptList.innerHTML = '<div class="tableCols"><div>Nome</div><div>Versão</div><div>Autor</div><div>Ações</div></div>';
    } catch {
        console.log('[TamperTurkey] An error ocurred on clearList.');
    }
}

function updateList() {
    try {
        clearList();

        let localScripts = localStorage.getItem('tamperturkey-scripts');

        if (localScripts) {
            localScripts = JSON.parse(localScripts);

            if (Object.keys(localScripts).length === 0) {
                tamperTurkeyScriptList.innerText = 'Você ainda não tem scripts para esse site.';
            } else {
                Object.entries(localScripts).forEach(([key, value]) => {
                    const scriptDiv = document.createElement('div');
                    const nameDiv = document.createElement('div');
                    const versionDiv = document.createElement('div');
                    const authorDiv = document.createElement('div');
                    const toolsDiv = document.createElement('div');

                    const editP = document.createElement('p');
                    const deleteP = document.createElement('p');

                    scriptDiv.classList.add('script');
                    scriptDiv.setAttribute('data-id', getScriptAttributes(value)['script_id']);

                    nameDiv.classList.add('name');
                    versionDiv.classList.add('version');
                    authorDiv.classList.add('author');

                    if (getScriptAttributes(value)['script_name'].length >= 20) {
                        let shortName = '';

                        for (let i = 0; i < 20; i++) {
                            shortName += getScriptAttributes(value)['script_name'][i];
                        }
                        shortName += '...';

                        nameDiv.innerText = shortName;
                    } else {
                        nameDiv.innerText = getScriptAttributes(value)['script_name'];
                    }

                    versionDiv.innerText = getScriptAttributes(value)['script_version'];
                    authorDiv.innerText = getScriptAttributes(value)['script_author'];

                    scriptDiv.title = getScriptAttributes(value)['script_description'];
                    nameDiv.title = getScriptAttributes(value)['script_name'];
                    versionDiv.title = getScriptAttributes(value)['script_version'];
                    authorDiv.title = getScriptAttributes(value)['script_author'];

                    toolsDiv.classList.add('tools');

                    editP.classList.add('edit');
                    deleteP.classList.add('delete');

                    editP.innerText = '✏️';
                    deleteP.innerText = '🗑️';

                    scriptDiv.appendChild(nameDiv);
                    scriptDiv.appendChild(versionDiv);
                    scriptDiv.appendChild(authorDiv);
                    scriptDiv.appendChild(toolsDiv);

                    toolsDiv.appendChild(editP);
                    toolsDiv.appendChild(deleteP);

                    tamperTurkeyScriptList.appendChild(scriptDiv);

                    addListeners();
                });
            }
        } else {
            tamperTurkeyScriptList.innerText = 'Você ainda não tem scripts para esse site.';
        }
    } catch (error) {
        console.log('[TamperTurkey] An error ocurred on updateList.', error);
    }
}

floatingLogo.addEventListener('click', () => {
    if (tamperTurkeyPanel.style.display === 'block' || tamperTurkeyAddMenu.style.display === 'block') {
        closeMenus();
    } else {
        openTamperTurkeyPanel();
    }
});

updateList();

tamperTurkeyClose.addEventListener('click', closeMenus);
tamperTurkeyCloseAdd.addEventListener('click', closeMenus);
tamperTurkeyAdd.addEventListener('click', openTamperTurkeyAddMenu);
tamperTurkeyAddButton.addEventListener('click', addScript);
