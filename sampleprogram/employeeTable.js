const mongoose = require("mongoose");


const BasicInfo = new mongoose.Schema({

    companyName:
    {
        type: String,
    },
    HeadOfficeAddress:
    {
        type: String,
    },
    country: {
        type: String,
    },
    postalCode:
    {
        type: String,
    },

    city:
    {
        type: String,
    },

    countryCode:
    {
        type: String
    },
    contactNumber:
    {
        type: String,
    },
    url:
    {
        type: String,
    },
    name:
    {
        type: String,
    },
    designation: {
        type: String,
    },
    countryCode1: {
        type: String,
    },
    contactNumber1: {
        type: String,
    },
    email: {
        type: String,
    },
    isSubmitted:
    {
        type: Boolean,
        default: false
    },
    isActive:
    {
        type: Boolean,
        default: true
    },
    created:
    {
        type: Date,
        default: Date.now()
    }

})

const companyInfo = new mongoose.Schema({
    briefCompanyProfile: {
        type: String,
    },

    facebook: {
        type: String,
    },

    vision: {
        type: String,
    },

    managementName: {
        type: String,
    },

    managementDesignation: {
        type: String,
    },
    profileSummary: {
        type: String,
    },
    linkedInProfile: {
        type: String,
    },
    isSubmitted2:
    {
        type: Boolean,
        default: false
    },
    isActive:
    {
        type: Boolean,
        default: true
    },

    created:
    {
        type: Date,
        default: Date.now()
    }

})

const ProductInfo = new mongoose.Schema({
    productName: {
        type: String,
    },
    productPortfolio: {
        type: String,
    },
    facebookProfile: {
        type: String,
    },
    isActive:
    {
        type: Boolean,
        default: true
    },

    created:
    {
        type: Date,
        default: Date.now()
    }

})

const BasicInfos = mongoose.model("BasicInfo", BasicInfo);
const companyInfoss = mongoose.model("companyInfo", companyInfo);
const productInfos = mongoose.model("productInfo", ProductInfo);


module.exports = { BasicInfos, companyInfoss, productInfos }
