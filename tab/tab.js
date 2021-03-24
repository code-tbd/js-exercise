var that;

class Tab {
    constructor(id) {
        that = this;
        this.main = document.querySelector(id);
        this.add = this.main.querySelector('.addTab');
        this.nav = this.main.querySelector('.nav');
        this.content = this.main.querySelector('.content');
        this.init();
    }

    // 0.初始化
    init() {
        this.updateNode();
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i;
            this.lis[i].onclick = this.toggleTab;
        }
        this.add.onclick = this.addTab;
    }

    // 1.切换功能
    toggleTab() {
        for (var i = 0; i < this.length; i++){
            this.className = "";
        }
        // console.log(this.index);
        that.clearClass();
        this.className = 'click';
        that.sections[this.index].className = 'display';
    }

    clearClass() {
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].className = '';
            this.sections[i].className = '';
        }
    }

    updateNode() {
        this.lis = this.main.querySelectorAll('li');
        this.sections = this.main.querySelectorAll('section');
    }

    // 2. 添加功能
    addTab() {
        var newTabNum = that.lis.length+1;
        // var newLi = document.createElement('li');
        // var newSection = document.createElement('section');
        // newLi.innerHTML = newTabNum;
        // newSection.innerHTML = "测试" + newTabNum;
        // that.nav.append(newLi);
        // that.content.append(newSection);
        that.clearClass();
        var li = '<li class="click">'+newTabNum+'<span>x</span></li>';
        var section = '<section class="display">测试'+newTabNum+'</section>';
        that.nav.insertAdjacentHTML('beforeend',li);
        that.content.insertAdjacentHTML('beforeend',section);
        that.init();
    }

    // 3.删除功能
    removeTab() {

    }

    // 4.修改功能
    editTab() {

    }

}

new Tab('#outer');