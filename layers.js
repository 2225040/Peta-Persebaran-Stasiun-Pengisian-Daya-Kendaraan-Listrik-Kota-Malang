var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_ADMINISTRASIDESA_AR_25K_1 = new ol.format.GeoJSON();
var features_ADMINISTRASIDESA_AR_25K_1 = format_ADMINISTRASIDESA_AR_25K_1.readFeatures(json_ADMINISTRASIDESA_AR_25K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIDESA_AR_25K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIDESA_AR_25K_1.addFeatures(features_ADMINISTRASIDESA_AR_25K_1);
var lyr_ADMINISTRASIDESA_AR_25K_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ADMINISTRASIDESA_AR_25K_1, 
                style: style_ADMINISTRASIDESA_AR_25K_1,
                popuplayertitle: "ADMINISTRASIDESA_AR_25K",
                interactive: true,
    title: 'ADMINISTRASIDESA_AR_25K<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_0.png" /> <br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_1.png" /> AMPELDENTO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_2.png" /> ARJOWINANGUN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_3.png" /> BAKALANKRAJAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_4.png" /> BALEARJOSARI<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_5.png" /> BANJARARUM<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_6.png" /> CEMOROKANDANG<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_7.png" /> DINOYO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_8.png" /> JEDONG<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_9.png" /> KALISONGO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_10.png" /> KARANGWIDORO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_11.png" /> KEBONAGUNG<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_12.png" /> KEL. ARJOSARI<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_13.png" /> KEL. BANDULAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_14.png" /> KEL. BANDUNGREJOSARI<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_15.png" /> KEL. BARENG<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_16.png" /> KEL. BLIMBING<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_17.png" /> KEL. BUMIAYU<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_18.png" /> KEL. BUNULREJO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_19.png" /> KEL. BURING<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_20.png" /> KEL. CIPTOMULYO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_21.png" /> KEL. GADANG<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_22.png" /> KEL. GADINGKASRI<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_23.png" /> KEL. JATIMULYO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_24.png" /> KEL. JODIPAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_25.png" /> KEL. KARANGBESUKI<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_26.png" /> KEL. KASIN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_27.png" /> KEL. KAUMAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_28.png" /> KEL. KEBONSARI<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_29.png" /> KEL. KEDUNGKANDANG<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_30.png" /> KEL. KESATRIAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_31.png" /> KEL. KETAWANGGEDE<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_32.png" /> KEL. KIDULDALEM<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_33.png" /> KEL. KLOJEN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_34.png" /> KEL. KOTALAMA<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_35.png" /> KEL. KRLURAHAN LOWOKWARU<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_36.png" /> KEL. LESANPURO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_37.png" /> KEL. MADYOPURO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_38.png" /> KEL. MERGOSONO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_39.png" /> KEL. MOJOLANGU<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_40.png" /> KEL. ORO-ORODOWO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_41.png" /> KEL. PANDANWANGI<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_42.png" /> KEL. PENAGGUNGAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_43.png" /> KEL. PISANGCANDI<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_44.png" /> KEL. POLEHAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_45.png" /> KEL. POLOWIJEN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_46.png" /> KEL. PURWANTORO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_47.png" /> KEL. PURWODADI<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_48.png" /> KEL. RAMPALCELAKET<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_49.png" /> KEL. SAMAAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_50.png" /> KEL. SAWOJAJAR<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_51.png" /> KEL. SUKOHARJO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_52.png" /> KEL. SUKUN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_53.png" /> KEL. SUMBERSARI<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_54.png" /> KEL. TANJUNGREJO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_55.png" /> KEL. TLOGOMAS<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_56.png" /> KEL. TULUSREJO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_57.png" /> KEL. TUNJUNGSEKAR<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_58.png" /> KEL. WONOKOYO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_59.png" /> KENDALPAYAK<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_60.png" /> KEPUHARJO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_61.png" /> KIDAL<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_62.png" /> LANDUNGSARI<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_63.png" /> MANGLIAWAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_64.png" /> MERJOSARI<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_65.png" /> MULYOAGUNG<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_66.png" /> MULYOREJO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_67.png" /> NGINGIT<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_68.png" /> PANDANLANDUNG<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_69.png" /> SEKARPURO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_70.png" /> SIDORAHAYU<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_71.png" /> SITIREJO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_72.png" /> SUMBERKRADENAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_73.png" /> SUMBERSUKO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_74.png" /> TAMBAKSARI<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_75.png" /> TANGKILSARI<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_76.png" /> TASIKMADU<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_77.png" /> TEGALGONDO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_78.png" /> TEGALWERU<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_79.png" /> TELOGOWARU<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_80.png" /> TIRTOMOYO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_81.png" /> TUNGGULWULUNG<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_82.png" /> TUNJUNGTIRTO<br />'
        });
var format_SUNGAI_AR_25K_2 = new ol.format.GeoJSON();
var features_SUNGAI_AR_25K_2 = format_SUNGAI_AR_25K_2.readFeatures(json_SUNGAI_AR_25K_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAI_AR_25K_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_AR_25K_2.addFeatures(features_SUNGAI_AR_25K_2);
var lyr_SUNGAI_AR_25K_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SUNGAI_AR_25K_2, 
                style: style_SUNGAI_AR_25K_2,
                popuplayertitle: "SUNGAI_AR_25K",
                interactive: true,
                title: '<img src="styles/legend/SUNGAI_AR_25K_2.png" /> SUNGAI_AR_25K'
            });
var format_JALAN_LN_25K_3 = new ol.format.GeoJSON();
var features_JALAN_LN_25K_3 = format_JALAN_LN_25K_3.readFeatures(json_JALAN_LN_25K_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_LN_25K_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_LN_25K_3.addFeatures(features_JALAN_LN_25K_3);
var lyr_JALAN_LN_25K_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JALAN_LN_25K_3, 
                style: style_JALAN_LN_25K_3,
                popuplayertitle: "JALAN_LN_25K",
                interactive: true,
                title: '<img src="styles/legend/JALAN_LN_25K_3.png" /> JALAN_LN_25K'
            });
var format_JEMBATAN_LN_25K_4 = new ol.format.GeoJSON();
var features_JEMBATAN_LN_25K_4 = format_JEMBATAN_LN_25K_4.readFeatures(json_JEMBATAN_LN_25K_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JEMBATAN_LN_25K_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JEMBATAN_LN_25K_4.addFeatures(features_JEMBATAN_LN_25K_4);
var lyr_JEMBATAN_LN_25K_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JEMBATAN_LN_25K_4, 
                style: style_JEMBATAN_LN_25K_4,
                popuplayertitle: "JEMBATAN_LN_25K",
                interactive: true,
                title: '<img src="styles/legend/JEMBATAN_LN_25K_4.png" /> JEMBATAN_LN_25K'
            });
var format_titik_stasiun_5 = new ol.format.GeoJSON();
var features_titik_stasiun_5 = format_titik_stasiun_5.readFeatures(json_titik_stasiun_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_titik_stasiun_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_titik_stasiun_5.addFeatures(features_titik_stasiun_5);
var lyr_titik_stasiun_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_titik_stasiun_5, 
                style: style_titik_stasiun_5,
                popuplayertitle: "titik_stasiun",
                interactive: true,
                title: '<img src="styles/legend/titik_stasiun_5.png" /> titik_stasiun'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_ADMINISTRASIDESA_AR_25K_1.setVisible(true);lyr_SUNGAI_AR_25K_2.setVisible(true);lyr_JALAN_LN_25K_3.setVisible(true);lyr_JEMBATAN_LN_25K_4.setVisible(true);lyr_titik_stasiun_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_ADMINISTRASIDESA_AR_25K_1,lyr_SUNGAI_AR_25K_2,lyr_JALAN_LN_25K_3,lyr_JEMBATAN_LN_25K_4,lyr_titik_stasiun_5];
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_SUNGAI_AR_25K_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSSNG': 'JNSSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_JALAN_LN_25K_3.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_JEMBATAN_LN_25K_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPJMB': 'TIPJMB', 'FGSJMB': 'FGSJMB', 'TONJMB': 'TONJMB', 'TGGJMB': 'TGGJMB', 'JBTJMB': 'JBTJMB', 'LBRJMB': 'LBRJMB', 'MATJMB': 'MATJMB', 'STRJMB': 'STRJMB', 'DEKJMB': 'DEKJMB', 'BTSJMB': 'BTSJMB', 'AYUJMB': 'AYUJMB', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_titik_stasiun_5.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'HasLabel': 'HasLabel', 'LabelID': 'LabelID', 'Alamat': 'Alamat', 'Tipe_Stasi': 'Tipe_Stasi', 'Kelurahan': 'Kelurahan', 'Kab_Kota': 'Kab_Kota', 'Kecamatan': 'Kecamatan', 'Kapasitas': 'Kapasitas', 'Jmlh_Unit': 'Jmlh_Unit', 'Connector': 'Connector', 'Status': 'Status', 'Operator': 'Operator', });
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_SUNGAI_AR_25K_2.set('fieldImages', {'NAMOBJ': 'TextEdit', 'JNSSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_JALAN_LN_25K_3.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'MATRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'WLYRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'KLSRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'ARHRJL': 'TextEdit', 'STARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'LOCRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_JEMBATAN_LN_25K_4.set('fieldImages', {'NAMOBJ': 'TextEdit', 'TIPJMB': 'TextEdit', 'FGSJMB': 'TextEdit', 'TONJMB': 'Range', 'TGGJMB': 'Range', 'JBTJMB': 'Range', 'LBRJMB': 'Range', 'MATJMB': 'TextEdit', 'STRJMB': 'TextEdit', 'DEKJMB': 'Range', 'BTSJMB': 'TextEdit', 'AYUJMB': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_titik_stasiun_5.set('fieldImages', {'OID_': 'TextEdit', 'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'TextEdit', 'AltMode': 'Range', 'Base': 'TextEdit', 'Snippet': 'TextEdit', 'PopupInfo': 'TextEdit', 'HasLabel': 'Range', 'LabelID': 'TextEdit', 'Alamat': 'TextEdit', 'Tipe_Stasi': 'TextEdit', 'Kelurahan': 'TextEdit', 'Kab_Kota': 'TextEdit', 'Kecamatan': 'TextEdit', 'Kapasitas': 'TextEdit', 'Jmlh_Unit': '', 'Connector': '', 'Status': '', 'Operator': '', });
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldLabels', {'KDPPUM': 'inline label - visible with data', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_SUNGAI_AR_25K_2.set('fieldLabels', {'NAMOBJ': 'no label', 'JNSSNG': 'no label', 'KLSSNG': 'inline label - visible with data', 'FCODE': 'header label - always visible', 'REMARK': 'inline label - always visible', 'SRS_ID': 'inline label - always visible', 'LCODE': 'inline label - always visible', 'METADATA': 'inline label - always visible', 'NAMWS': 'inline label - always visible', 'NAMDAS': 'inline label - always visible', 'SHAPE_Leng': 'inline label - always visible', 'SHAPE_Area': 'inline label - always visible', });
lyr_JALAN_LN_25K_3.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_JEMBATAN_LN_25K_4.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPJMB': 'no label', 'FGSJMB': 'no label', 'TONJMB': 'no label', 'TGGJMB': 'no label', 'JBTJMB': 'no label', 'LBRJMB': 'no label', 'MATJMB': 'no label', 'STRJMB': 'no label', 'DEKJMB': 'no label', 'BTSJMB': 'no label', 'AYUJMB': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_titik_stasiun_5.set('fieldLabels', {'OID_': 'no label', 'Name': 'no label', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'HasLabel': 'no label', 'LabelID': 'no label', 'Alamat': 'no label', 'Tipe_Stasi': 'no label', 'Kelurahan': 'no label', 'Kab_Kota': 'no label', 'Kecamatan': 'no label', 'Kapasitas': 'no label', 'Jmlh_Unit': 'no label', 'Connector': 'no label', 'Status': 'no label', 'Operator': 'no label', });
lyr_titik_stasiun_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});