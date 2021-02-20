// Enum
//

enum Membership {
    SIMPLE,
    STANDARD,
    PREMIUM
}

const membership = Membership.STANDARD
console.log(membership) // 1

const membershipReverse = Membership[1]
console.log(membershipReverse) // STANDARD


enum SocialMEDIA {
    VK = 'VK',
    FACEBOOK = 'FACEBOOK',
    INSTARGRAM = 'INSTAGRAM'
}

const social = SocialMEDIA.VK
console.log(social) // VK