import Control from '../../ui/Control';
import XType from '../../ui/XType';

/**
 * 场景菜单
 * @param {*} options 
 */
function SceneMenu(options) {
    Control.call(this, options);
    options = options || {};

    this.app = options.app;
}

SceneMenu.prototype = Object.create(Control.prototype);
SceneMenu.prototype.constructor = SceneMenu;

SceneMenu.prototype.render = function () {
    var _this = this;

    var data = {
        xtype: 'div',
        cls: 'menu',
        children: [{
            xtype: 'div',
            cls: 'title',
            html: '场景'
        }, {
            xtype: 'div',
            cls: 'options',
            children: [{
                xtype: 'div',
                id: 'mNewScene',
                html: '新建',
                cls: 'option',
                onClick: function () {
                    _this.app.call('mNewScene');
                }
            }, {
                xtype: 'div',
                id: 'mLoadScene',
                html: '载入',
                cls: 'option',
                onClick: function () {
                    _this.app.call('mLoadScene');
                }
            }, {
                xtype: 'div',
                id: 'mSaveScene',
                html: '保存',
                cls: 'option',
                onClick: function () {
                    _this.app.call('mSaveScene');
                }
            }, {
                xtype: 'hr'
            }, {
                xtype: 'div',
                id: 'mPublishScene',
                html: '发布',
                cls: 'option',
                onClick: function () {
                    _this.app.call('mPublishScene');
                }
            }]
        }]
    };

    var control = XType.create(data);
    control.parent = this.parent;
    control.render();
}

export default SceneMenu;