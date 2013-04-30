Ext.define('viewportDataView', {

    extend: 'Ext.container.Viewport',
    alias : 'widget.viewportdataview',

    layout: 'fit',


    initComponent: function() {
        var me = this;

        var drag_record;
        var initializePatientDragZone = function(v) {
            Ext.getBody().on('contextmenu', Ext.emptyFn,
                null, {preventDefault: true});

            v.dragZone = Ext.create('Ext.dd.DragZone', v.getEl(), {
                onInitDrag : function(x, y) {
                    return true;
                },

                getDragData: function(e) {
                    var sourceEl = e.getTarget(v.itemSelector, 10), d;
                    if (sourceEl) {
                        drag_record = v.getRecord(sourceEl);
                        d = sourceEl.cloneNode(true);
                        d.id = Ext.id();
                        return v.dragData = {
                            sourceEl: sourceEl,
                            repairXY: Ext.fly(sourceEl).getXY(),
                            ddel: d,
                            patientData: v.getRecord(sourceEl).data
                        };
                    }
                },

                getRepairXY: function() {
                    return this.dragData.repairXY;
                }
            });

             v.dropZone = Ext.create('Ext.dd.DropZone', v.el, {

                 getTargetFromEvent: function(e) {

                    var temp = {
                        x: e.getX()-55-me.getPosition()[0],
                        y: e.getY()-40-me.getPosition()[1]
                    };

                    return temp;

                },
                
                onNodeEnter : function(target, dd, e, data){
                    Ext.fly(target).addCls('my-row-highlight-class');
                },

                onNodeOut : function(target, dd, e, data){
                    Ext.fly(target).removeCls('my-row-highlight-class');
                },

                onNodeOver : function(target, dd, e, data){
                    var foo = document.getElementById(drag_record.data['id'] + '-shortcut');
                    foo.style.left = target.x + 'px';
                    foo.style.top = target.y + 'px';

                    return Ext.dd.DropZone.prototype.dropAllowed;
                },

                onNodeDrop : function(target, dd, e, data) {

                    var foo = document.getElementById(drag_record.data['id'] + '-shortcut');

                    foo.style.left = target.x + 'px';
                    foo.style.top = target.y + 'px';
                    drag_record.set('x', target.x);
                    drag_record.set('y', target.y);
                    return true;
                }
            });

        };

        Ext.applyIf(me, {
            items:[
                Ext.create('dataView', {
                listeners: {
                    render: initializePatientDragZone
                }
            })]
        });
        
        this.callParent(arguments);
    }
});