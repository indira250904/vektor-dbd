var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Kelurahanpasirkaliki_1 = new ol.format.GeoJSON();
var features_Kelurahanpasirkaliki_1 = format_Kelurahanpasirkaliki_1.readFeatures(json_Kelurahanpasirkaliki_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kelurahanpasirkaliki_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kelurahanpasirkaliki_1.addFeatures(features_Kelurahanpasirkaliki_1);
var lyr_Kelurahanpasirkaliki_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kelurahanpasirkaliki_1, 
                style: style_Kelurahanpasirkaliki_1,
                popuplayertitle: "Kelurahan pasirkaliki",
                interactive: true,
                title: '<img src="styles/legend/Kelurahanpasirkaliki_1.png" /> Kelurahan pasirkaliki'
            });
var format_Buffered_2 = new ol.format.GeoJSON();
var features_Buffered_2 = format_Buffered_2.readFeatures(json_Buffered_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffered_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffered_2.addFeatures(features_Buffered_2);
var lyr_Buffered_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffered_2, 
                style: style_Buffered_2,
                popuplayertitle: "Buffered",
                interactive: true,
                title: '<img src="styles/legend/Buffered_2.png" /> Buffered'
            });
var format_titiksebaranvektor_3 = new ol.format.GeoJSON();
var features_titiksebaranvektor_3 = format_titiksebaranvektor_3.readFeatures(json_titiksebaranvektor_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_titiksebaranvektor_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_titiksebaranvektor_3.addFeatures(features_titiksebaranvektor_3);
var lyr_titiksebaranvektor_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_titiksebaranvektor_3, 
                style: style_titiksebaranvektor_3,
                popuplayertitle: "titik sebaran vektor",
                interactive: true,
                title: '<img src="styles/legend/titiksebaranvektor_3.png" /> titik sebaran vektor'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Kelurahanpasirkaliki_1.setVisible(true);lyr_Buffered_2.setVisible(true);lyr_titiksebaranvektor_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Kelurahanpasirkaliki_1,lyr_Buffered_2,lyr_titiksebaranvektor_3];
lyr_Kelurahanpasirkaliki_1.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'CIMAHI_ADM': 'CIMAHI_ADM', 'CIMAHI_A_1': 'CIMAHI_A_1', 'KECAMATAN': 'KECAMATAN', 'KELURAHAN': 'KELURAHAN', 'RW': 'RW', 'RT': 'RT', });
lyr_Buffered_2.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_titiksebaranvektor_3.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Kelurahanpasirkaliki_1.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'CIMAHI_ADM': 'TextEdit', 'CIMAHI_A_1': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KELURAHAN': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', });
lyr_Buffered_2.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_titiksebaranvektor_3.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Kelurahanpasirkaliki_1.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'CIMAHI_ADM': 'no label', 'CIMAHI_A_1': 'no label', 'KECAMATAN': 'no label', 'KELURAHAN': 'no label', 'RW': 'no label', 'RT': 'no label', });
lyr_Buffered_2.set('fieldLabels', {'Name': 'inline label - always visible', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_titiksebaranvektor_3.set('fieldLabels', {'Name': 'inline label - always visible', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_titiksebaranvektor_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});