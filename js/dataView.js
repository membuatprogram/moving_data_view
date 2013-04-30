Ext.define('dataView', {

    extend: 'Ext.view.View',
    alias : 'widget.dataview',
    style: {
        position: 'absolute'
    },
    x: 0, y: 0,
    trackOver: true,

    store: Ext.create('jsonDataStore', {
        fields: ['id', 'nama','nama_file_icon', 'modul', 'x', 'y'],
        url: 'store/menuIconDataStore.php',
        autoLoad: true
    }),

    tpl  : Ext.create('Ext.XTemplate',
            '<tpl for=".">',
                '<div style="position:absolute; top:{y}px; left:{x}px;" id="{id}-shortcut">',
                    '<div class="phone">',
                        (!Ext.isIE6? '<img width="48" height="48" src="images/{nama_file_icon}" />' :
                         '<div style="width:48px;height:48px;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\'images/{nama_file_icon}\',sizingMethod=\'scale\')"></div>'),
                        '<strong>{nama}</strong>',
                    '</div>',
                '</div>',
            '</tpl>'
    ),

    cls: 'phones',
    autoScroll: true,
    itemSelector: 'div.phone',
    overItemCls : 'phone-hover',
    multiSelect : true,
    deferInitialRefresh: false,

    onItemClick:function(record) {

        alert('Lakukan pemanggilan kelas ' + record.data['modul'] + '.');
    }
});