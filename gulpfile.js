var gulp = require('gulp');
var awspublish = require('gulp-awspublish');
var cloudfront = require("gulp-cloudfront-invalidate-aws-publish");
var AWS = require("aws-sdk");

gulp.task('aws-deploy', function () {
    var aws = {
        distribution: "E2A5G6IQWQFB57",
        credentials: new AWS.SharedIniFileCredentials(),
        params: {
            Bucket: "bruship.yuliacech.com"
        },
        region: "eu-central-1",
        wait: true
    };
    var publisher = awspublish.create(aws);

    var normalHeaders = {
        "Cache-Control": "max-age=315360000, no-transform, public",
    };
    var StreamAll = gulp.src(["dist/**/*"])
        .pipe(publisher.publish(normalHeaders));

    return StreamAll
        .pipe(publisher.sync())
        .pipe(cloudfront(aws))
        .pipe(awspublish.reporter());

});
