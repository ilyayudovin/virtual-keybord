const CONTAINER = document.createElement('div');
const SCREEN = document.createElement('div');
const KEYBORD = document.createElement('div');

CONTAINER.classList.add('container');
KEYBORD.classList.add('keybord');
document.body.appendChild(CONTAINER);
SCREEN.classList.add('screen');
const TA = document.createElement("textarea");
TA.setAttribute('type', 'text');
TA.setAttribute('id', 'textarea');
SCREEN.appendChild(TA);
CONTAINER.appendChild(SCREEN);
CONTAINER.appendChild(KEYBORD);

const keyLayout1_rus_down = [
    'ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=',
    'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\',
    'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э',
    'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.',
];
const keyLayout1_rus_up = [
    'Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+',
    'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/',
    'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э',
    'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',',
];
const keyLayout1_eng_down = [
    '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=',
    'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\',
    'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'",
    'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/',
];
const keyLayout1_eng_up = [
    '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+',
    'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|',
    'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"',
    'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?',
];
const small_rus = [
    '"', '№', ';', '%',
    '\\',
];
const small_eng = [
    '@', '#', '$', '^', '&', '|', '"', '<', '>', '?'
];
const row_1 = document.createElement('div');
const row_2 = document.createElement('div');
const row_3 = document.createElement('div');
const row_4 = document.createElement('div');
const row_5 = document.createElement('div');
row_1.classList.add('row');
KEYBORD.appendChild(row_1);
row_2.classList.add('row');
KEYBORD.appendChild(row_2);
row_3.classList.add('row');
KEYBORD.appendChild(row_3);
row_4.classList.add('row');
KEYBORD.appendChild(row_4);
row_5.classList.add('row');
KEYBORD.appendChild(row_5);

for (let i = 0; i < 13; i++) {
    const number_button = document.createElement('div');
    number_button.classList.add('simple_button');
    const number_button_span_rus = document.createElement('span');
    number_button_span_rus.classList.add('rus');
    const number_button_span_eng = document.createElement('span');
    number_button_span_eng.classList.add('eng');

    const number_button_span_rus_down = document.createElement('span');
    number_button_span_rus_down.classList.add('down');
    const number_button_span_rus_up = document.createElement('span');
    number_button_span_rus_up.classList.add('up');
    number_button_span_rus_down.innerText = keyLayout1_rus_down[i];
    number_button_span_rus_up.innerText = keyLayout1_rus_up[i];
    number_button_span_rus.appendChild(number_button_span_rus_down);
    number_button_span_rus.appendChild(number_button_span_rus_up);
    number_button.appendChild(number_button_span_rus);

    const number_button_span_eng_down = document.createElement('span');
    number_button_span_eng_down.classList.add('down');
    const number_button_span_eng_up = document.createElement('span');
    number_button_span_eng_up.classList.add('up');
    number_button_span_eng_down.innerText = keyLayout1_eng_down[i];
    number_button_span_eng_up.innerText = keyLayout1_eng_up[i];
    number_button_span_eng.appendChild(number_button_span_eng_down);
    number_button_span_eng.appendChild(number_button_span_eng_up);
    number_button.appendChild(number_button_span_eng);

    row_1.appendChild(number_button);
}
const BACKSPACE = document.createElement('div');
const BACKSPACE_SPAN_ENG = document.createElement('span');
BACKSPACE_SPAN_ENG.innerText = "BackSpace";
BACKSPACE.appendChild(BACKSPACE_SPAN_ENG);
BACKSPACE.classList.add('simple_button');
BACKSPACE.classList.add('Backspace');
BACKSPACE.classList.add('tool');

row_1.appendChild(BACKSPACE);

//create second row of keybord
const TAB = document.createElement('div');
const TAB_SPAN = document.createElement('span');
TAB_SPAN.innerText = "Tab";
TAB.appendChild(TAB_SPAN);
TAB.classList.add('Tab');
TAB.classList.add('tool');
TAB.classList.add('simple_button');
row_2.appendChild(TAB);
for (let i = 0; i < 13; i++) {
    const alphabet_button = document.createElement('div');
    alphabet_button.classList.add('simple_button');

    const alphabet_button_span_rus = document.createElement('span');
    alphabet_button_span_rus.classList.add('rus');
    const alphabet_button_span_rus_down = document.createElement('span');
    alphabet_button_span_rus_down.classList.add('down');
    const alphabet_button_span_rus_up = document.createElement('span');
    alphabet_button_span_rus_up.classList.add('up');
    alphabet_button_span_rus_down.innerText = keyLayout1_rus_down[i + 13];
    alphabet_button_span_rus_up.innerText = keyLayout1_rus_up[i + 13];
    alphabet_button_span_rus.appendChild(alphabet_button_span_rus_down);
    alphabet_button_span_rus.appendChild(alphabet_button_span_rus_up);
    alphabet_button.appendChild(alphabet_button_span_rus);

    const alphabet_button_span_eng = document.createElement('span');
    alphabet_button_span_eng.classList.add('eng');
    const alphabet_button_span_eng_down = document.createElement('span');
    alphabet_button_span_eng_down.classList.add('down');
    const alphabet_button_span_eng_up = document.createElement('span');
    alphabet_button_span_eng_up.classList.add('up');
    alphabet_button_span_eng_down.innerText = keyLayout1_eng_down[i + 13];
    alphabet_button_span_eng_up.innerText = keyLayout1_eng_up[i + 13];
    alphabet_button_span_eng.appendChild(alphabet_button_span_eng_down);
    alphabet_button_span_eng.appendChild(alphabet_button_span_eng_up);
    alphabet_button.appendChild(alphabet_button_span_eng);

    if (i === 12) {
        alphabet_button.classList.add('stupid');
        alphabet_button.classList.add('Backslash');
    }


    row_2.appendChild(alphabet_button);
}
const DELETE = document.createElement('div');
const DELETE_SPAN = document.createElement('span');
DELETE_SPAN.innerText = "Del";
DELETE.appendChild(DELETE_SPAN);
DELETE.classList.add('simple_button');
DELETE.classList.add('tool');
DELETE.classList.add('Delete');
row_2.appendChild(DELETE);

//create third row of keybord
const CAPS_LOCK = document.createElement('div');
const CAPS_LOCK_SPAN = document.createElement('span');
CAPS_LOCK_SPAN.innerText = "CapsLock";
CAPS_LOCK.appendChild(CAPS_LOCK_SPAN);
CAPS_LOCK.classList.add('CapsLock');
CAPS_LOCK.classList.add('tool');
CAPS_LOCK.classList.add('simple_button');
row_3.appendChild(CAPS_LOCK);
for (let i = 0; i < 11; i++) {
    const alphabet_button2 = document.createElement('div');
    alphabet_button2.classList.add('simple_button');

    const alphabet_button2_span_rus = document.createElement('span');
    alphabet_button2_span_rus.classList.add('rus');
    const alphabet_button2_span_rus_down = document.createElement('span');
    alphabet_button2_span_rus_down.classList.add('down');
    const alphabet_button2_span_rus_up = document.createElement('span');
    alphabet_button2_span_rus_up.classList.add('up');
    alphabet_button2_span_rus_down.innerText = keyLayout1_rus_down[i + 26];
    alphabet_button2_span_rus_up.innerText = keyLayout1_rus_up[i + 26];
    alphabet_button2_span_rus.appendChild(alphabet_button2_span_rus_down);
    alphabet_button2_span_rus.appendChild(alphabet_button2_span_rus_up);
    alphabet_button2.appendChild(alphabet_button2_span_rus);

    const alphabet_button2_span_eng = document.createElement('span');
    alphabet_button2_span_eng.classList.add('eng');
    const alphabet_button2_span_eng_down = document.createElement('span');
    alphabet_button2_span_eng_down.classList.add('down');
    const alphabet_button2_span_eng_up = document.createElement('span');
    alphabet_button2_span_eng_up.classList.add('up');
    alphabet_button2_span_eng_down.innerText = keyLayout1_eng_down[i + 26];
    alphabet_button2_span_eng_up.innerText = keyLayout1_eng_up[i + 26];
    alphabet_button2_span_eng.appendChild(alphabet_button2_span_eng_down);
    alphabet_button2_span_eng.appendChild(alphabet_button2_span_eng_up);
    alphabet_button2.appendChild(alphabet_button2_span_eng);

    if (i === 10 || i === 9) {
        alphabet_button2.classList.add('stupid');
        if (i === 9)
            alphabet_button2.classList.add('Semicolon');
        if (i === 10)
            alphabet_button2.classList.add('Quote');
    }


    row_3.appendChild(alphabet_button2);
}
const ENTER = document.createElement('div');
const ENTER_SPAN = document.createElement('span');
ENTER_SPAN.innerText = "Enter";
ENTER.appendChild(ENTER_SPAN);
ENTER.classList.add('simple_button');
ENTER.classList.add('tool');
ENTER.classList.add('Enter');
row_3.appendChild(ENTER);

//create fourth row of keybord
const SHIFT_LEFT = document.createElement('div');
const SHIFT_LEFT_SPAN = document.createElement('span');
const SHIFT_LEFT_SPAN_child = document.createElement('span');
SHIFT_LEFT_SPAN_child.innerText = "";
SHIFT_LEFT_SPAN.innerText = "Shift";
SHIFT_LEFT_SPAN.appendChild(SHIFT_LEFT_SPAN_child);
SHIFT_LEFT.appendChild(SHIFT_LEFT_SPAN);
SHIFT_LEFT.classList.add('shifts');
SHIFT_LEFT.classList.add('ShiftLeft');
SHIFT_LEFT.classList.add('tool');
SHIFT_LEFT.classList.add('simple_button');
row_4.appendChild(SHIFT_LEFT);
for (let i = 0; i < 11; i++) {
    const alphabet_button3 = document.createElement('div');
    alphabet_button3.classList.add('simple_button');
    if (i === 10) {
        const ARROW_UP_SPAN = document.createElement('span');
        ARROW_UP_SPAN.innerHTML = "&#8593;";
        alphabet_button3.appendChild(ARROW_UP_SPAN);
        alphabet_button3.classList.add('arrow');
        alphabet_button3.classList.add('ArrowUp');
        alphabet_button3.classList.add('tool');
    }
    else {
        const alphabet_button3_span_rus = document.createElement('span');
        alphabet_button3_span_rus.classList.add('rus');
        const alphabet_button3_span_rus_down = document.createElement('span');
        alphabet_button3_span_rus_down.classList.add('down');
        const alphabet_button3_span_rus_up = document.createElement('span');
        alphabet_button3_span_rus_up.classList.add('up');
        alphabet_button3_span_rus_down.innerText = keyLayout1_rus_down[i + 37];
        alphabet_button3_span_rus_up.innerText = keyLayout1_rus_up[i + 37];
        alphabet_button3_span_rus.appendChild(alphabet_button3_span_rus_down);
        alphabet_button3_span_rus.appendChild(alphabet_button3_span_rus_up);
        alphabet_button3.appendChild(alphabet_button3_span_rus);

        const alphabet_button3_span_eng = document.createElement('span');
        alphabet_button3_span_eng.classList.add('eng');
        const alphabet_button3_span_eng_down = document.createElement('span');
        alphabet_button3_span_eng_down.classList.add('down');
        const alphabet_button3_span_eng_up = document.createElement('span');
        alphabet_button3_span_eng_up.classList.add('up');
        alphabet_button3_span_eng_down.innerText = keyLayout1_eng_down[i + 37];
        alphabet_button3_span_eng_up.innerText = keyLayout1_eng_up[i + 37];
        alphabet_button3_span_eng.appendChild(alphabet_button3_span_eng_down);
        alphabet_button3_span_eng.appendChild(alphabet_button3_span_eng_up);
        alphabet_button3.appendChild(alphabet_button3_span_eng);

        if (i === 7 || i === 8 || i === 9) {
            alphabet_button3.classList.add('stupid');
            if (i === 7)
                alphabet_button3.classList.add('Comma');
            if (i === 8)
                alphabet_button3.classList.add('Period');
            if (i === 9)
                alphabet_button3.classList.add('Slash');
        }
    }
    row_4.appendChild(alphabet_button3);
}
const SHIFT_RIGHT = document.createElement('div');
const SHIFT_RIGHT_SPAN = document.createElement('span');
const SHIFT_RIGHT_SPAN_child = document.createElement('span');
SHIFT_RIGHT_SPAN_child.innerText = "";
SHIFT_RIGHT_SPAN.innerText = "Shift";
SHIFT_RIGHT_SPAN.appendChild(SHIFT_RIGHT_SPAN_child);
SHIFT_RIGHT.appendChild(SHIFT_RIGHT_SPAN);
SHIFT_RIGHT.classList.add('simple_button');
SHIFT_RIGHT.classList.add('tool');
SHIFT_RIGHT.classList.add('ShiftRight');
SHIFT_RIGHT.classList.add('shifts');
row_4.appendChild(SHIFT_RIGHT);

//create fifth row of keybord
for (let i = 0; i < 9; i++) {
    if (i === 3) {
        const SPACE = document.createElement('div');
        const SPACE_SPAN = document.createElement('span');
        SPACE_SPAN.innerText = " ";
        SPACE.appendChild(SPACE_SPAN);
        SPACE.classList.add('Space');
        SPACE.classList.add('tool');
        SPACE.classList.add('simple_button');

        row_5.appendChild(SPACE);
        continue;
    }
    const HELP_BUTTONS = document.createElement('div');
    const HELP_BUTTONS_SPAN = document.createElement('span');
    if (i === 0 || i === 8) {
        if (i === 0) {
            HELP_BUTTONS.classList.add('ControlLeft');
        }
        if (i === 8) {
            HELP_BUTTONS.classList.add('ControlRight');
        }
        HELP_BUTTONS_SPAN.innerText = "Ctrl";
        HELP_BUTTONS.classList.add('ctrl');
    }
    if (i === 1) {
        HELP_BUTTONS_SPAN.innerText = "Win";
        HELP_BUTTONS.classList.add('MetaLeft')
    }
    if (i === 2 || i === 4) {
        if (i === 2) {
            HELP_BUTTONS.classList.add('AltLeft');
        }
        if (i === 4) {
            HELP_BUTTONS.classList.add('AltRight');
        }

        HELP_BUTTONS_SPAN.innerText = "Alt";
        HELP_BUTTONS.classList.add('alt');
    }
    if (i === 5) {
        HELP_BUTTONS_SPAN.innerHTML = "&#8592;";
        HELP_BUTTONS.classList.add('ArrowLeft');

    }
    if (i === 6) {
        HELP_BUTTONS_SPAN.innerHTML = "&#8595;";
        HELP_BUTTONS.classList.add('arrow');
        HELP_BUTTONS.classList.add('ArrowDown');

    }
    if (i === 7) {
        HELP_BUTTONS_SPAN.innerHTML = "&#8594;";
        HELP_BUTTONS.classList.add('arrow');
        HELP_BUTTONS.classList.add('ArrowRight');

    }
    HELP_BUTTONS.appendChild(HELP_BUTTONS_SPAN);
    HELP_BUTTONS.classList.add('simple_button');
    HELP_BUTTONS.classList.add('tool');
    row_5.appendChild(HELP_BUTTONS);
}
//
const rus = document.getElementsByClassName('rus');
const eng = document.getElementsByClassName('eng');
var Language = localStorage.getItem('lang');
if (Language === null) {
    Language = 'rus';
}
if (Language === 'eng') {
    switch_lang('rus');
}
var Case = 'down';
//
const buttons = document.getElementsByClassName('simple_button');
const btns = Array.from(buttons);
const a_d = btns.filter(el => !el.classList.contains('tool'));
const stupid = document.getElementsByClassName('stupid');
const st = Array.from(stupid);
window.onload = function () {
    shift_UP();
    shift_DOWN();
};
Array.from(buttons).forEach((button) => {
    button.addEventListener('mousedown', (el) => {
    if (el.toElement.textContent.length === 1) {
    el.toElement.classList.add('orange-bg');
    insert_letter(el.toElement.textContent);
}
if(el.toElement.textContent==='Enter'){
    el.toElement.classList.add('orange-bg');
    insert_letter('\n');
}
if(el.toElement.textContent==='BackSpace'){
    el.toElement.classList.add('orange-bg');
    backspace();
}
if(el.toElement.textContent==='Del'){
    el.toElement.classList.add('orange-bg');
    delete_letter();
}
if(el.toElement.textContent==='Tab'){
    el.toElement.classList.add('orange-bg');
    insert_tab();
}
if(el.toElement.textContent === 'Shift'){
    el.toElement.classList.add('orange-bg');
    shift_UP();
}
if(el.toElement.textContent === 'Alt'){
    el.toElement.classList.add('orange-bg');
}
if(el.toElement.textContent === 'Ctrl'){
    el.toElement.classList.add('orange-bg');
}
if(el.toElement.textContent === 'Win'){
    el.toElement.classList.add('orange-bg');
}
if(el.toElement.textContent === 'CapsLock'){
    if(Case === 'up'){
        el.toElement.classList.remove('orange-bg');
        shift_DOWN();
    }
    else{
        el.toElement.classList.add('orange-bg');
        shift_UP();
    }

}
});
button.addEventListener('mouseup',(el)=>{
    if(el.toElement.textContent!=='CapsLock') {
    el.toElement.classList.remove('orange-bg');
    if (el.toElement.textContent === 'Shift') {
        el.toElement.classList.remove('orange-bg');
        shift_DOWN();
    }
}
})
});

window.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace') {
    e.preventDefault();
    document.getElementsByClassName(e.code)[0].classList.add('orange-bg');
    backspace();
}
if (e.key === 'Delete') {
    e.preventDefault();
    document.getElementsByClassName(e.code)[0].classList.add('orange-bg');
    delete_letter();
}
if (e.key === 'Enter') {
    e.preventDefault();
    document.getElementsByClassName(e.code)[0].classList.add('orange-bg');
    insert_letter('\n');
}
if (e.code === 'Space') {
    e.preventDefault();
    document.getElementsByClassName(e.code)[0].classList.add('orange-bg');
    insert_letter(' ');
}
if (e.key === 'Shift') {
    e.preventDefault();
    shift_UP();
    document.getElementsByClassName(e.code)[0].classList.add('orange-bg');
}
if (e.key === 'Alt') {
    e.preventDefault();
    document.getElementsByClassName(e.code)[0].classList.add('orange-bg');
}
if (e.key === 'ArrowUp') {
    e.preventDefault();
    document.getElementsByClassName(e.code)[0].classList.add('orange-bg');
    insert_letter(document.getElementsByClassName('ArrowUp')[0].textContent);
}
if (e.key === 'ArrowDown') {
    e.preventDefault();
    document.getElementsByClassName(e.code)[0].classList.add('orange-bg');
    insert_letter(document.getElementsByClassName('ArrowDown')[0].textContent);
}
if (e.key === 'ArrowLeft') {
    e.preventDefault();
    document.getElementsByClassName(e.code)[0].classList.add('orange-bg');
    insert_letter(document.getElementsByClassName('ArrowLeft')[0].textContent);
}
if (e.key === 'ArrowRight') {
    e.preventDefault();
    document.getElementsByClassName(e.code)[0].classList.add('orange-bg');
    insert_letter(document.getElementsByClassName('ArrowRight')[0].textContent);
}
if (e.key === 'Tab') {
    e.preventDefault();
    document.getElementsByClassName(e.code)[0].classList.add('orange-bg');
    insert_tab();
}
if (e.key === 'Meta') {
    e.preventDefault();
    document.getElementsByClassName(e.code)[0].classList.add('orange-bg');
}
if (e.key === 'Control') {
    e.preventDefault();
    document.getElementsByClassName(e.code)[0].classList.add('orange-bg');
}
if (e.key === 'CapsLock') {
    e.preventDefault();
    if (Case === 'down') {
        shift_UP();
        document.getElementsByClassName(e.code)[0].classList.add('orange-bg');

    }
    else {
        shift_DOWN();
        document.getElementsByClassName(e.code)[0].classList.remove('orange-bg');
    }
}
});
window.addEventListener('keypress', (e) => {
    if (e.code.substring(0, e.code.length - 1) === 'Digit' || e.code === 'Backquote') {
    for (let i = 0; i < 11; i++) {
        let rus_down = a_d[i].firstElementChild.firstElementChild.textContent;
        let rus_up = a_d[i].firstElementChild.lastElementChild.textContent;
        let eng_down = a_d[i].lastElementChild.firstElementChild.textContent;
        let eng_up = a_d[i].lastElementChild.lastElementChild.textContent;
        if (rus_down === e.key || rus_up === e.key || eng_down === e.key || eng_up === e.key) {
            a_d[i].classList.add('orange-bg');
            what_to_print(a_d[i]);
        }
    }
}
else if (e.code === 'Comma' || e.code === 'Period' || e.code === 'Slash' ||
    e.code === 'Semicolon' || e.code === 'Quote' || e.code === 'Backslash') {
    for (let i = 0; i < st.length; i++) {
        if (st[i].classList.contains(e.code)) {
            st[i].classList.add('orange-bg');
            what_to_print(st[i]);
        }
    }
}
else {
    for (let i = 11; i < a_d.length; i++) {
        let rus_down = a_d[i].firstElementChild.firstElementChild.textContent;
        let rus_up = a_d[i].firstElementChild.lastElementChild.textContent;
        let eng_down = a_d[i].lastElementChild.firstElementChild.textContent;
        let eng_up = a_d[i].lastElementChild.lastElementChild.textContent;
        if (rus_down === e.key || rus_up === e.key || eng_down === e.key || eng_up === e.key) {
            a_d[i].classList.add('orange-bg');
            what_to_print(a_d[i]);
        }
    }
}
});
window.addEventListener('keyup', (e) => {
    e.preventDefault();
let a = document.getElementsByClassName('shifts')[0];
let b = document.getElementsByClassName('alt')[0];

if ((e.key === 'Alt' && a.classList.contains('orange-bg')) || (e.key === 'Shift' && b.classList.contains('orange-bg'))) {
    switch_lang(Language);
}
if (e.key === 'Shift') {
    shift_DOWN();
    document.getElementsByClassName(e.code)[0].classList.remove('orange-bg');
}
if (e.key === 'Alt') {
    document.getElementsByClassName(e.code)[0].classList.remove('orange-bg');
}
if (e.key === 'Backspace') {
    document.getElementsByClassName(e.code)[0].classList.remove('orange-bg');
}
if (e.key === 'Delete') {
    document.getElementsByClassName(e.code)[0].classList.remove('orange-bg');
}
if (e.key === 'Enter') {
    document.getElementsByClassName(e.code)[0].classList.remove('orange-bg');
}
if (e.code === 'Space') {
    document.getElementsByClassName(e.code)[0].classList.remove('orange-bg');
}
if (e.key === 'ArrowUp') {
    document.getElementsByClassName(e.code)[0].classList.remove('orange-bg');
}
if (e.key === 'ArrowDown') {
    document.getElementsByClassName(e.code)[0].classList.remove('orange-bg');
}
if (e.key === 'ArrowLeft') {
    document.getElementsByClassName(e.code)[0].classList.remove('orange-bg');
}
if (e.key === 'ArrowRight') {
    document.getElementsByClassName(e.code)[0].classList.remove('orange-bg');
}
if (e.key === 'Tab') {
    document.getElementsByClassName(e.code)[0].classList.remove('orange-bg');
}
if (e.key === 'Control') {
    document.getElementsByClassName(e.code)[0].classList.remove('orange-bg');
}
if (e.key === 'Meta') {
    document.getElementsByClassName(e.code)[0].classList.remove('orange-bg');
}
for (let i = 0; i < a_d.length; i++) {
    let rus_down = a_d[i].firstElementChild.firstElementChild.textContent;
    let rus_up = a_d[i].firstElementChild.lastElementChild.textContent;
    let eng_down = a_d[i].lastElementChild.firstElementChild.textContent;
    let eng_up = a_d[i].lastElementChild.lastElementChild.textContent;
    if (rus_down === e.key || rus_up === e.key || eng_down === e.key || eng_up === e.key)
        a_d[i].classList.remove('orange-bg');
}

});

//
function what_to_print(btn) {
    let rus_down = btn.firstElementChild.firstElementChild;
    let rus_up = btn.firstElementChild.lastElementChild;
    let eng_down = btn.lastElementChild.firstElementChild;
    let eng_up = btn.lastElementChild.lastElementChild;
    if (rus_down.style.display === 'block' && Case === 'down' && Language === 'rus')
        insert_letter(rus_down.textContent);
    if (rus_up.style.display === 'block' && Case === 'up' && Language === 'rus')
        insert_letter(rus_up.textContent);
    if (eng_down.style.display === 'block' && Case === 'down' && Language === 'eng')
        insert_letter(eng_down.textContent);
    if (eng_up.style.display === 'block' && Case === 'up' && Language === 'eng')
        insert_letter(eng_up.textContent);

}

function switch_lang(lang) {
    if (lang === 'eng') {
        Language = 'rus';
        let rus_btns = document.getElementsByClassName('rus');
        let eng_btns = document.getElementsByClassName('eng');
        Array.from(rus_btns).forEach((el) => {
            el.style.display = 'block';
    });
        Array.from(eng_btns).forEach((el) => {
            el.style.display = 'none';
    });
        localStorage.setItem('lang', 'rus');
    }
    if (lang === 'rus') {
        Language = 'eng';
        let rus_btns = document.getElementsByClassName('rus');
        let eng_btns = document.getElementsByClassName('eng');
        Array.from(eng_btns).forEach((el) => {
            el.style.display = 'block';
    });
        Array.from(rus_btns).forEach((el) => {
            el.style.display = 'none';
    });
        localStorage.setItem('lang', 'eng');
    }
}

function capslock_action(btn) {
    if (btn.classList.contains('orange-bg')) {
        shift_DOWN();
        btn.classList.remove('orange-bg');
        Case = 'down';
    }
    else {
        shift_UP();
        btn.classList.add('orange-bg');
        Case = 'up';
    }
}

function shift_UP() {
    let btns = document.getElementsByClassName(Language);
    Array.from(btns).forEach((el) => {
        el.childNodes[0].style.display = "none";
    el.childNodes[1].style.display = "block";
});
    Case = 'up';
}

function shift_DOWN() {
    let btns = document.getElementsByClassName(Language);
    Array.from(btns).forEach((el) => {
        el.childNodes[1].style.display = "none";
    el.childNodes[0].style.display = "block";
})
    Case = 'down';
}

function getCursorPosition(id) {
    return document.getElementById(id).selectionStart;
}

function backspace() {
    var element = document.getElementById('textarea');
    var cursorPosition = getCursorPosition('textarea');

    element.value = element.value.substring(0, cursorPosition - 1) + element.value.substring(cursorPosition);
    element.selectionStart = element.selectionEnd = cursorPosition - 1;
}

function delete_letter() {
    var element = document.getElementById('textarea');
    var cursorPosition = getCursorPosition('textarea');

    element.value = element.value.substring(0, cursorPosition) + element.value.substring(cursorPosition + 1);
    element.selectionStart = element.selectionEnd = cursorPosition;
}

function insert_letter(myValue) {
    let myField = document.getElementById('textarea');
    var startPos = myField.selectionStart;
    var endPos = myField.selectionEnd;
    myField.value = myField.value.substring(0, startPos)
        + myValue
        + myField.value.substring(endPos, myField.value.length);
    myField.selectionStart = myField.selectionEnd = startPos + 1;

}

function insert_tab() {
    let myField = document.getElementById('textarea');
    var startPos = myField.selectionStart;
    var endPos = myField.selectionEnd;
    myField.value = myField.value.substring(0, startPos)
        + '     '
        + myField.value.substring(endPos, myField.value.length);
    myField.selectionStart = myField.selectionEnd = startPos + 5;
}