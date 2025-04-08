const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const configPhieucham = new Schema({
    phieuchamdiem: [{
        linhvuc: {
            text: String,
            diemtoida: Number,
            thutu: Number,
            diemtucham: Number,
            diemthamdinhlan1: Number,
            diemthamdinhlan2: Number,
        },
        tieuchi_group: [{
            tieuchi: {
                text: String,
                diemtoida: Number,
                thutu: Number,
                diemtucham: Number,
                diemthamdinhlan1: Number,
                diemthamdinhlan2: Number,
            },
            tieuchithanhphan_group: [{
                text: String,
                diemtoida: Number,
                thutu: Number,
                noidungthangdiem: String,
                ghichu: String,
                yeucaugiaitrinh: Boolean,
                diemtuchamlan1: Number,
                diemthamdinhlan1: Number,
                diemthamdinhlan2: Number,
                ghichucuadonvilan1: String,
                ghichucuathamdinh1: String,
                ghichucuadonvilan2: String,
                ghichucuathamdinh2: String,
                files: [String], //  files  de kiem chung
                files_bosung: [String], //  files  de kiem chung bổ sung
            }]
        }]
    }],
    name: String,
    user_created: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users"
    }
}, { timestamps: true });

const PhieudiemNew = mongoose.model('PhieudiemNew', configPhieucham);

module.exports = PhieudiemNew;