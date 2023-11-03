const express = require('express')
const router = express.Router();

const { BasicInfos, companyInfoss, productInfos } = require('./employeeTable')

router.post('/add-employee', async (req, res) => {
    const result = new BasicInfos({
        companyName: req.body.companyName,
        HeadOfficeAddress: req.body.HeadOfficeAddress,
        country: req.body.country,
        postalCode: req.body.postalCode,
        city: req.body.city,
        countryCode: req.body.countryCode,
        contactNumber: req.body.contactNumber,
        url: req.body.url,
        name: req.body.name,
        designation: req.body.designation,
        countryCode1: req.body.countryCode1,
        contactNumber1: req.body.contactNumber1,
        email: req.body.email,
        isSubmitted: true
    })
    if (result) {
        await result.save();
    }
    const basicinfo = await BasicInfos.find({ companyName: req.body.companyName })
    if (basicinfo[0].isSubmitted) {
        const companyInfos = new companyInfoss({
            companyName: req.body.ABCcompany,
            briefCompanyProfile: req.body.briefCompanyProfile,
            facebook: req.body.facebook,
            vision: req.body.vision,
            managementName: req.body.managementName,
            managementDesignation: req.body.managementDesignation,
            profileSummary: req.body.profileSummary,
            linkedInProfile: req.body.linkedInProfile,
            isSubmitted2: req.body.isSubmitted2
        })
        await companyInfos.save();

        const company = await companyInfoss.find({ companyName: req.body.companyName })
        if (company[0].isSubmitted2) {
            const product = new productInfos({
                productName: req.body.productName,
                productPortfolio: req.body.productPortfolio,
                facebookProfile: req.body.facebookProfile
            })
            await product.save();
            res.send(product)
        }
    }
    res.send(result)

})

module.exports = router