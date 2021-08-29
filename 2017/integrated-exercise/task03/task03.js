const data = [
    {
        name: '北京',
        schools: ['北京大学', '清华大学', '中国人民大学', '北京师范大学']
    },
    {
        name: '上海',
        schools: ['复旦大学', '上海交通大学']
    },
    {
        name: '广州',
        schools: ['中山大学', '华南理工大学', '华南师范大学']
    }
];

function init() {
    selectRender();
    optionRender();
    changeStudentType();

    let citySelect = document.getElementById('city-select');
    citySelect.addEventListener('change', changeCity); //绑定事件

    let nodes = document.getElementsByName('atSchool');
    for (let node of nodes) {
        node.addEventListener('click', changeStudentType);
    }
}

function changeCity() {
    let schoolSelect = document.getElementById('school-select');
    schoolSelect.innerHTML = ''; //清除子节点
    optionRender(); //重新添加相应选项
}

function selectRender() {
    let citySelect = document.getElementById('city-select');
    if (citySelect && data && data.length > 0) {
        for (let i = 0; i < data.length; i++) {
            let obj = data[i];
            let node = document.createElement('option');
            node.innerHTML = obj.name;
            node.setAttribute('value', i.toString());
            citySelect.appendChild(node);
        }
    } else {
        console.log('err')
    }
}

function optionRender() {
    let citySelect = document.getElementById('city-select');
    let schoolSelect = document.getElementById('school-select');
    if (citySelect && citySelect.value !== '' && data && data.length > 0) {
        let schools = data[citySelect.value].schools;
        for (let i = 0; i < schools.length; i++) {
            let node = document.createElement('option');
            node.innerHTML = schools[i];
            node.setAttribute('value', i.toString());
            schoolSelect.appendChild(node);
        }
    } else {
        console.log('err')
    }
}

function changeStudentType() {
    let type = getChecked('atSchool');
    let school = document.getElementById('school');
    let company = document.getElementById('company');
    if (type === 'false') {
        school.setAttribute('class', school.getAttribute('class') + ' hidden');
        company.setAttribute('class', company.getAttribute('class').replace(' hidden', ''));
    } else {
        company.setAttribute('class', company.getAttribute('class') + ' hidden');
        school.setAttribute('class', school.getAttribute('class').replace(' hidden', ''));
    }
}

function getChecked(name) { //检测
    let nodes = document.getElementsByName(name);
    let value;
    for (let obj of nodes) {
        if (obj.checked) {
            value = obj.value;
        break;
        }
    }
    return value;
}

init();