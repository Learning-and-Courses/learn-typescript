// Enum
//
var Membership;
(function (Membership) {
    Membership[Membership["SIMPLE"] = 0] = "SIMPLE";
    Membership[Membership["STANDARD"] = 1] = "STANDARD";
    Membership[Membership["PREMIUM"] = 2] = "PREMIUM";
})(Membership || (Membership = {}));
var membership = Membership.STANDARD;
console.log(membership); // 1
var membershipReverse = Membership[1];
console.log(membershipReverse); // STANDARD
var SocialMEDIA;
(function (SocialMEDIA) {
    SocialMEDIA["VK"] = "VK";
    SocialMEDIA["FACEBOOK"] = "FACEBOOK";
    SocialMEDIA["INSTARGRAM"] = "INSTAGRAM";
})(SocialMEDIA || (SocialMEDIA = {}));
var social = SocialMEDIA.VK;
console.log(social); // VK
