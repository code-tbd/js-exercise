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
        this.add.onclick = this.addTab;
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i;
            this.lis[i].onclick = this.toggleTab;
            this.closes[i].onclick = this.removeTab;
            this.liSpans[i].ondblclick = this.editTab;
            this.seSpans[i].ondblclick = this.editTab;
        }
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
        this.closes = this.main.querySelectorAll('.nav a');
        this.liSpans = this.main.querySelectorAll('li span');
        this.seSpans = this.main.querySelectorAll('section span');
        // console.log(this.liSeSpans[5].innerHTML);
        // console.log(this.closes);
    }

    // 1.切换功能
    toggleTab() {
        // console.log(this.index);
        that.init();
        that.clearClass();
        this.className = 'click';
        that.sections[this.index].className = 'display';
    }

    // 2. 添加功能
    addTab() {
        that.init();
        var newTabNum = that.lis.length + 1;
        // var newLi = document.createElement('li');
        // var newSection = document.createElement('section');
        // newLi.innerHTML = newTabNum;
        // newSection.innerHTML = "测试" + newTabNum;
        // that.nav.append(newLi);
        // that.content.append(newSection);
        that.clearClass();
        var li = '<li onselectstart="return false;" class="click"><span>新标签页</span><a href="#">x</a></li>';
        var section = '<section onselectstart="return false;" class="display"><span>新内容</span></section>';
        that.nav.insertAdjacentHTML('beforeend', li);
        that.content.insertAdjacentHTML('beforeend', section);
        that.init();
    }

    // 3.删除功能
    removeTab(e) {
        that.init();
        var index = this.parentNode.index;
        e.stopPropagation();
        that.lis[index].remove();
        that.sections[index].remove();
        // alert(that.lis[index-1].innerHTML); 
        if (that.lis[index].className != 'click' && index != 0) return;
        if (index != 0) index--;
        that.init();
        that.lis[index] && that.lis[index].click();
    }

    // 4.修改功能
    editTab() {
        that.init();
        var value = this.innerHTML;
        this.innerHTML = '<input type="text">';
        var input = this.children[0];
        input.value = value;
        input.select();
        input.onblur = function(){
            this.parentNode.innerHTML = this.value;
        };
        input.onkeyup = function(e){
            if(e.keyCode === 13)this.blur();
        };

    }

}

new Tab('#outer');
// window.getSelection?window.getSelection().removeAllRanges():document.selection.empty();