var that;

class Inquire {
    constructor() {
        that = this;
        this.tbody = document.querySelector('tbody');
        this.btn1 = document.querySelector('.search-price');
        this.btn2 = document.querySelector('.search-pro');
        this.btn1.onclick = this.searchByPrice;
        this.btn2.onclick = this.searchByPname;
        this.load(this.data);
    }

    data = [{
        id: 1,
        pname: '小米',
        price: 3999
    }, {
        id: 2,
        pname: 'oppo',
        price: 999
    }, {
        id: 3,
        pname: '荣耀',
        price: 1299
    }, {
        id: 4,
        pname: '华为',
        price: 1999
    }];

    // 加载渲染表格
    load(data) {
        data.forEach(function (obj) {
            // <tr>
            //     <td></td>
            //     <td></td>
            //     <td></td>
            // </tr>
            var str = '<tr><td>' + obj.id + '</td><td>' + obj.pname + '</td><td>' + obj.price + '</td></tr>';
            that.tbody.insertAdjacentHTML('beforeend', str);
        });
    }

    //  按照价格查询
    searchByPrice() {
        var start = document.querySelector('.start').value;
        var end = document.querySelector('.end').value;
        var newData = that.data.filter(function (obj) {
            return obj.price >= start && obj.price <= end;
        });
        if (start != '' && end != '') {
            that.tbody.innerHTML = '';
            that.load(newData);
        } else {
            that.tbody.innerHTML = '';
            that.load(that.data);
        }
    }

    //  按照商品名称查询
    searchByPname() {
        var pname = document.querySelector('.product').value;
        var newData = that.data.filter(function (obj) {
            return obj.pname == pname;
        });
        if (pname != '') {
            that.tbody.innerHTML = '';
            that.load(newData);
        } else {
            that.tbody.innerHTML = '';
            that.load(that.data);
        }
    }
}

new Inquire();