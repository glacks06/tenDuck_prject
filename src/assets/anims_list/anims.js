const anims_100m = [
    {
        name: "원피스",
        path: `${process.env.PUBLIC_URL}/imgs/anim_imgs/onepiece.png`,
        plot: '세계 제일 대비보 원피스를 찾고자 여행에 나선 해적 몽키 D. 루피와 그가 이끄는 해적단 밀짚모자 일당이 동료들을 영입하며, 바다를 항해하고 여러 섬들을 모험하는 여정을 그리고 있다.',
        barrier: '애니화된 분량이 매우 많아 전부 다 보기 힘들다.',
        pv: 'https://www.youtube.com/embed/fX9NK-_YqlI?si=DJjhGVH9pxdWIfta'
    },
    {
        name: "나루토",
        path: `${process.env.PUBLIC_URL}/imgs/anim_imgs/naruto.png`,
        plot: '나뭇잎 마을의 고아 소년인 우즈마키 나루토가 닌자의 세계에서 호카게(마을의 수장)가 되기 위해 노력하며 성장하는 이야기',
        barrier: '후속작을 제외하면 이미 완결이 났으나 애니화된 분량이 많은 편',
        pv: 'https://www.youtube.com/embed/Sxd-fZ22H_c'
    },
    {
        name: "블리치",
        path: `${process.env.PUBLIC_URL}/imgs/anim_imgs/bleach.png`,
        plot: '유령을 볼 수 있는 고등학생의 소년 쿠로사키 이치고. 어느 날 자신을 사신이라고 칭한 여자, 쿠치키 루키아를 만나 사신의 힘을 양도 받게 되고 대신 사신의 일을 하게 되는데',
        barrier: '원작 완결 후 오랜 공백기를 거쳐 최종장이 애니화되었고, 중간에 원작과 무관한 애니 오리지널 스토리(필러)가 많은 편이다.',
        pv: 'https://www.youtube.com/embed/68-81j80BvA'
    },
    {
        name: "드래곤볼",
        path: `${process.env.PUBLIC_URL}/imgs/anim_imgs/dragonball.png`,
        plot: '신비한 존재인 드래곤볼을 모아 소원을 이루는 모험을 떠나는 손오공이라는 소년의 성장 이야기',
        barrier: '오리지널, Z, GT, 슈퍼 등 시리즈가 많아 어디부터 봐야 할지 막막할 수 있으며, 초반부의 개그 분위기와 Z의 배틀물 분위기가 다르다.',
        pv: 'https://www.youtube.com/embed/i_454s5s0s8'
    },
    {
        name: "짱구",
        path: `${process.env.PUBLIC_URL}/imgs/anim_imgs/shinchan.png`,
        plot: '말썽꾸러기 5살짜리 짱구(노하라 신노스케)와 그의 가족, 그리고 이웃들이 겪는 일상을 코믹하게 그린 일본 만화 및 애니메이션',
        barrier: '에피소드 형식이라 스토리가 이어지지 않아 가볍게 볼 수 있지만, 1000화가 넘는 방대한 분량과 초반의 자극적인 개그가 취향에 맞지 않을 수 있다.',
        pv: 'https://www.youtube.com/embed/hwnc3_3oO-g'
    },
    {
        name: "코난",
        path: `${process.env.PUBLIC_URL}/imgs/anim_imgs/detectiveconan.png`,
        plot: '고등학생 탐정 쿠도 신이치가 검은 조직의 약물로 인해 초등학생의 몸이 되어 에도와 코난이라는 이름으로 활동하며 사건을 해결하고, 조직의 비밀을 파헤치는 이야기',
        barrier: '1000화가 넘는 압도적인 분량에 비해 메인 스토리 진행이 매우 느리고, 대부분이 단발성 사건 해결 에피소드이다.',
        pv: 'https://www.youtube.com/embed/2yV3zB_g-4w'
    },
    {
        name: "포켓몬스터",
        path: `${process.env.PUBLIC_URL}/imgs/anim_imgs/pokemon.png`,
        plot: "'포켓몬 마스터'가 되기를 꿈꾸는 소년 '한지우'가 파트너 포켓몬 '피카츄'와 함께 여러 지방을 여행하며 새로운 포켓몬들을 만나고, 동료들과 친구가 되어 포켓몬 배틀을 통해 성장해나가는 이야기",
        barrier: '시리즈가 계속 리부트되는 형식이라 어디서든 시작할 수 있지만, 전체 시리즈를 다 보려면 분량이 매우 방대하고 패턴이 반복적인 편이다.',
        pv: 'https://www.youtube.com/embed/pkWn20c_yIA'
    }
];

const anims_150m = [
    {
        name: "귀멸의 칼날",
        path: `${process.env.PUBLIC_URL}/imgs/anim_imgs/demonslayer.png`,
        plot: "혈귀로 변해버린 여동생을 인간으로 되돌리기 위해, 주인공 카마도 탄지로가 귀살대에 입단하여 혈귀들과 싸워나가는 이야기.",
        barrier: "일부 잔인한 묘사가 있어 폭력적인 장면에 거부감이 있다면 시청하기 어려울 수 있다."
    },
    {
        name: "진격의 거인",
        path: `${process.env.PUBLIC_URL}/imgs/anim_imgs/attackontitan.png`,
        plot: "벽 바깥 세상에 대한 자유를 갈망하는 소년 엘런 예거가 거인들의 위협에 맞서 싸우며 세계의 진실에 다가가는 다크 판타지.",
        barrier: "꿈도 희망도 없는 어두운 세계관과 충격적이고 잔혹한 전개가 많아 정신적으로 피로감을 느낄 수 있다."
    },
    {
        name: "주술회전",
        path: `${process.env.PUBLIC_URL}/imgs/anim_imgs/jujutsukaisen.png`,
        plot: "경이로운 신체 능력을 가진 고등학생 이타도리 유지가 저주를 풀기 위해 주술고전에 들어가 주령들과 싸우는 이야기.",
        barrier: "주력, 술식, 영역 전개 등 고유의 설정과 개념이 다소 복잡하게 느껴질 수 있다."
    },
    {
        name: "하이큐!!",
        path: `${process.env.PUBLIC_URL}/imgs/anim_imgs/haikyuu.png`,
        plot: "작은 키의 주인공 히나타 쇼요가 배구에 대한 열정으로 카라스노 고교에 입학하여 동료들과 함께 전국 대회를 목표로 성장하는 스포츠물.",
        barrier: "스포츠 장르에 흥미가 없거나, 여러 시즌에 걸친 긴 호흡의 경기 진행이 지루하게 느껴질 수 있다."
    },
    {
        name: "원펀맨",
        path: `${process.env.PUBLIC_URL}/imgs/anim_imgs/onepunchman.png`,
        plot: "어떤 적이든 단 한 방의 펀치로 쓰러뜨리는 너무나도 강력한 히어로 사이타마의 허무하고 코믹한 일상을 그린 히어로물.",
        barrier: "주인공이 압도적으로 강해 긴장감이 부족하고, 시즌 간의 출시 간격이 매우 길다."
    },
    {
        name: "나 혼자만 레벨업",
        path: `${process.env.PUBLIC_URL}/imgs/anim_imgs/sololeveling.png`,
        plot: "인류 최약체 헌터로 불리던 주인공 성진우가 특정 계기로 혼자만 레벨업 할 수 있는 능력을 얻게 되어 최강의 헌터로 거듭나는 이야기.",
        barrier: "주인공이 빠르게 강해지는 먼치킨 장르에 흥미가 없다면 다소 단조롭게 느껴질 수 있다."
    },
    {
        name: "헌터X헌터",
        path: `${process.env.PUBLIC_URL}/imgs/anim_imgs/hunterxhunter.png`,
        plot: "아버지와 같은 최고의 헌터가 되기 위해 고향을 떠난 주인공 곤 프릭스가 동료들을 만나고 어려운 시험에 도전하며 성장하는 모험물.",
        barrier: "원작 만화의 연재 중단이 잦아 이야기가 언제 완결될지 알 수 없다는 점이 가장 큰 장벽이다."
    },
    {
        name: "SPYxFAMILY",
        path: `${process.env.PUBLIC_URL}/imgs/anim_imgs/spyxfamily.png`,
        plot: "서로의 정체를 숨긴 채 위장 가족을 만든 스파이 아빠, 암살자 엄마, 초능력자 딸이 세계 평화를 위해 고군분투하는 코믹 액션물.",
        barrier: "주된 내용이 액션보다는 일상 코미디와 가족 드라마에 가까워, 화끈한 첩보 액션을 기대했다면 심심하게 느껴질 수 있다."
    },
    {
        name: "장송의 프리렌",
        path: `${process.env.PUBLIC_URL}/imgs/anim_imgs/frieren.png`,
        plot: "마왕을 물리친 용사 일행의 엘프 마법사 프리렌이 동료의 죽음 후, 인간을 알아가기 위해 새로운 여행을 떠나는 판타지 드라마.",
        barrier: "큰 사건 없이 잔잔하고 서정적으로 흘러가는 분위기 때문에 전개가 느리고 지루하다고 느낄 수 있다."
    },
    {
        name: "마슐",
        path: `${process.env.PUBLIC_URL}/imgs/anim_imgs/mashle.png`,
        plot: "마법이 당연한 세상에서 마법을 쓰지 못하는 주인공 마슈 번데드가 오직 단련된 근육만으로 마법학교의 정점에 서려는 판타지 코미디.",
        barrier: "단순하고 반복적인 개그 패턴에 의존하는 경향이 있어, 취향에 맞지 않으면 쉽게 질릴 수 있다."
    },
    {
        name: "체인소맨",
        path: `${process.env.PUBLIC_URL}/imgs/anim_imgs/chainsawman.png`,
        plot: "빚더미에 시달리는 소년 덴지가 체인톱 악마 포치타와 계약하여 악마의 심장을 가진 '체인소맨'으로 거듭나, 공안 데블 헌터가 되어 수많은 악마와 맞서 싸우는 다크 히어로 액션물. 평범한 삶을 꿈꾸는 덴지의 처절한 사투를 그리고 있다.",
        barrier: "피와 내장이 난무하는 매우 폭력적이고 잔인한 묘사가 많아 호불호가 극명하게 갈린다. 선정적인 장면도 다수 있다. 그럼에도 이 작품을 150m에 위치시킨 이유는 귀주톱(귀칼, 주술회전, 체인소맨)이라고 불릴 만큼 인지도가 비교적 높기 때문이다."
    },

];

const anims_200m = [
    {
        name: "닥터 스톤",
        path: `${process.env.PUBLIC_URL}/imgs/anim_imgs/drstone.png`,
        plot: "어느 날 갑자기 전 인류가 돌로 변해버린 후 수천 년이 지나 깨어난 천재 소년 이시가미 센쿠가 과학의 힘으로 문명을 재건하는 이야기.",
        barrier: "작품의 핵심이 과학을 이용한 문명 재건이라, 과학에 대한 설명이 길고 자세하게 나와 흥미가 없다면 지루하게 느껴질 수 있다."
    }
];

const anims_500m = [
    {
        name: "시원찮은 그녀를 위한 육성방법",
        path: `${process.env.PUBLIC_URL}/imgs/anim_imgs/saekano.png`,
        plot: "오타쿠 고교생 아키 토모야가 존재감 없는 반 친구 카토 메구미를 최고의 미소녀 게임 히로인으로 만들기 위해 동아리 멤버들과 고군분투하는 청춘 코미디.",
        barrier: "오타쿠 문화나 미소녀 게임 제작에 대한 내용이 중심이라 해당 분야에 관심이 없다면 공감하기 어렵다."
    },
    {
        name: "유사 하렘",
        path: `${process.env.PUBLIC_URL}/imgs/anim_imgs/gishiharem.png`,
        plot: "연극부 선배 키타하마 에이지의 '하렘' 소망을 이뤄주기 위해 후배 나나쿠라 린이 츤데레, 쿨뷰티 등 다양한 캐릭터를 연기하며 벌어지는 로맨틱 코미디.",
        barrier: "큰 사건 없이 두 주인공의 1대1 관계에만 집중하기 때문에 전개가 단조롭다고 느낄 수 있다."
    },
    {
        name: "오키나와에서 좋아하게 된 아이가 사투리가 심해서 너무 괴로워",
        path: `${process.env.PUBLIC_URL}/imgs/anim_imgs/okinawadialect.png`,
        plot: "도쿄에서 오키나와로 전학 온 나카무라 테루아키가, 알아듣기 힘든 오키나와 사투리를 쓰는 喜屋武(캰) 히나를 좋아하게 되면서 벌어지는 이문화 로맨틱 코미디.",
        barrier: "오키나와 사투리와 문화에 기반한 개그가 많아 배경지식이 없으면 재미가 반감될 수 있다."
    },
    {
        name: "사랑은 세계정복 후에",
        path: `${process.env.PUBLIC_URL}/imgs/anim_imgs/koisekai.png`,
        plot: "세계 평화를 목표로 하는 히어로 전대의 리더 아이카와 후도와 세계 정복을 노리는 비밀 결사의 전투원 데스미 마가미가 적대 관계를 넘어 비밀 연애를 하는 이야기.",
        barrier: "특촬물(파워레인저 등) 패러디가 많고 유치하게 느껴질 수 있는 설정 때문에 취향을 탈 수 있다."
    },
    {
        name: "그 비스크 돌은 사랑을 한다",
        path: `${process.env.PUBLIC_URL}/imgs/anim_imgs/bisquedoll.png`,
        plot: "히나 인형 장인을 꿈꾸는 소년 고죠 와카나와 코스프레를 좋아하는 인싸 소녀 키타가와 마린이 코스프레 의상 제작을 통해 서로의 세계를 알아가는 로맨스.",
        barrier: "코스프레 문화에 대한 묘사가 자세하며, 서비스씬(팬서비스)이 다소 포함되어 있다."
    },
    {
        name: "카구야님은 고백받고 싶어",
        path: `${process.env.PUBLIC_URL}/imgs/anim_imgs/kaguyasama.png`,
        plot: "엘리트들이 모인 슈치인 학원 학생회에서, 서로 좋아하지만 자존심 때문에 먼저 고백하지 않으려는 회장 시로가네 미유키와 부회장 시노미야 카구야의 밀당 두뇌 싸움.",
        barrier: "등장인물들의 심리 묘사와 대화가 중심이라, 행동이나 사건 중심의 스토리를 선호하면 지루할 수 있다."
    },
    {
        name: "내 마음의 위험한 녀석",
        path: `${process.env.PUBLIC_URL}/imgs/anim_imgs/bokuyaba.png`,
        plot: "중2병 음침 소년 이치카와 쿄타로가 반의 인기 미소녀 야마다 안나를 관찰하며 망상에 빠지지만, 점차 그녀의 의외의 모습에 마음을 빼앗기는 청춘 로맨스.",
        barrier: "초반부 주인공의 중2병적인 독백과 행동이 불편하게 느껴져 하차 장벽이 될 수 있다."
    },
    {
        name: "당신은 저승님.",
        path: `${process.env.PUBLIC_URL}/imgs/anim_imgs/anatawacest.png`,
        plot: "어느 날 갑자기 집안일을 돕기 위해 나타난 정체불명의 메이드와 고용주인 고등학생 히토요시 유키의 일상을 그린 미스터리 메이드 코미디.",
        barrier: "일상 코미디와 미스터리/액션 요소가 혼재되어 있어 특정 장르의 깊이를 기대하면 아쉬울 수 있다."
    },
    {
        name: "장난을 잘 치는 타카기 양",
        path: `${process.env.PUBLIC_URL}/imgs/anim_imgs/takagi.png`,
        plot: "중학생 소년 니시카타가 옆자리의 소녀 타카기 양에게 끊임없이 장난을 당하고, 이를 되갚아주려 하지만 번번이 실패하며 겪는 풋풋한 일상 로맨스.",
        barrier: "매 화 비슷한 패턴의 장난과 반응이 반복되어 단조롭고 지루하게 느껴질 수 있다."
    },
    {
        name: "토라도라!",
        path: `${process.env.PUBLIC_URL}/imgs/anim_imgs/toradora.png`,
        plot: "험악한 인상 때문에 오해받는 타카스 류지와 작은 키 때문에 '미니 타이거'라 불리는 아이사카 타이가가 서로의 짝사랑을 돕기로 하면서 벌어지는 이야기.",
        barrier: "여주인공의 츤데레 성격이 초반에는 다소 과격하고 폭력적으로 보여 거부감을 느낄 수 있다."
    },
    {
        name: "선배가 짜증나는 후배 이야기",
        path: `${process.env.PUBLIC_URL}/imgs/anim_imgs/senpaikouhai.png`,
        plot: "직장 후배 이가라시 후타바와 덩치 크고 둔감하지만 잘 챙겨주는 선배 타케다 하루미의 관계를 중심으로 펼쳐지는 오피스 로맨틱 코미디.",
        barrier: "주인공 커플의 연애 진도가 매우 느리고 답답하게 느껴질 수 있다."
    },
    {
        name: "괴수 8호",
        path: `${process.env.PUBLIC_URL}/imgs/anim_imgs/kaiju.png`,
        plot: "괴수 청소부로 일하던 주인공 히비노 카프카가 의도치 않게 괴수의 힘을 얻게 되어, 방위대원으로서 괴수와 싸우는 꿈에 다시 도전하는 이야기.",
        barrier: "소년 만화의 왕도적인 전개를 따라가므로, 예측 가능하고 클리셰적인 부분이 많다."
    },
    {
        name: "괴롭히지 말아요, 나가토로 양",
        path: `${process.env.PUBLIC_URL}/imgs/anim_imgs/nagatoro.png`,
        plot: "소심한 선배를 짓궂게 놀리는 것을 좋아하는 후배 나가토로 하야세의 장난을 통해 두 사람의 관계가 점차 가까워지는 로맨틱 코미디.",
        barrier: "초반부 여주인공의 장난이 괴롭힘에 가깝게 느껴져 시청자에 따라 불쾌감을 느낄 수 있다."
    },
    {
        name: "귀엽기만 한 게 아닌 시키모리 양",
        path: `${process.env.PUBLIC_URL}/imgs/anim_imgs/shikimori.png`,
        plot: "불행 체질인 남자친구 이즈미 유우를 지키기 위해 결정적인 순간에帅帅한 'イケメン'으로 변하는 시키모리 미촌의 모습을 그린 로맨틱 코미디.",
        barrier: "남주인공이 수동적이고 불행을 몰고 다니는 모습이 답답하게 느껴질 수 있다."
    },
    {
        name: "아하렌 양은 알 수가 없어",
        path: `${process.env.PUBLIC_URL}/imgs/anim_imgs/aharen.png`,
        plot: "타인과의 거리 조절을 잘 못하는 작은 소녀 아하렌 레이나와 그녀의 옆자리 남학생 라이도 마츠보시의 예측 불가능한 일상을 그린 청춘 코미디.",
        barrier: "개연성 없는 상황 개그에 크게 의존하므로, 취향에 맞지 않으면 이해하기 어려울 수 있다."
    },
    {
        name: "지박소년 하나코 군",
        path: `${process.env.PUBLIC_URL}/imgs/anim_imgs/hanakokun.png`,
        plot: "구교사 여자 화장실의 '하나코 씨'를 불러낸 소녀 야시로 네네가 학교의 7대 불가사의와 얽히며 벌어지는 괴이 로맨스.",
        barrier: "독특하고 개성 강한 그림체 때문에 호불호가 갈릴 수 있으며, 애니메이션의 전개가 다소 불친절하다."
    },
    {
        name: "이 회사에 좋아하는 사람이 있습니다",
        path: `${process.env.PUBLIC_URL}/imgs/anim_imgs/konishasuki.png`,
        plot: "경리부의 진지하고 과묵한 남자 사토와 동료인 타테이시가 사내 비밀 연애를 시작하면서 겪는 달콤하고 설레는 오피스 로맨스.",
        barrier: "큰 갈등이나 사건 없이 잔잔하게 흘러가기 때문에 자극적인 전개를 선호한다면 심심할 수 있다."
    },
    {
        name: "철야의 노래",
        path: `${process.env.PUBLIC_URL}/imgs/anim_imgs/yofukashinouta.png`,
        plot: "등교 거부를 하며 밤에 잠 못 이루는 소년 야모리 코우가 흡혈귀 나나쿠사 나즈나를 만나 밤의 즐거움에 눈을 뜨고, 그녀처럼 흡혈귀가 되기 위해 분투하는 이야기.",
        barrier: "뚜렷한 스토리보다는 밤의 분위기와 등장인물 간의 대화에 집중하여, 전개가 느리다고 느낄 수 있다."
    },
    {
        name: "이세계 유유자적 농가",
        path: `${process.env.PUBLIC_URL}/imgs/anim_imgs/nouka.png`,
        plot: "병으로 죽은 주인공이 신에게 받은 '만능농구'로 이세계의 숲에서 농사를 지으며 엘프, 흡혈귀 등 다양한 종족과 함께 마을을 만들어가는 슬로우 라이프물.",
        barrier: "갈등이나 위기가 거의 없는 치유물 장르라, 사건 중심의 흥미진진한 스토리를 원한다면 매우 지루할 수 있다."
    }
];

const anims_1000m = [
    {
        name: "아마가미 씨네 인연 맺기",
        path: `${process.env.PUBLIC_URL}/imgs/anim_imgs/amagami.png`,
        plot: "의대생을 목표로 하는 고등학생 우류 카미유가 교토의 신사를 이어받게 되면서, 그곳의 무녀인 세 자매와 함께 살며 벌어지는 로맨틱 코미디.",
        barrier: "전형적인 하렘 러브 코미디의 왕도적인 전개를 따라가므로, 신선함이 부족하게 느껴질 수 있다."
    },
    {
        name: "Re: 제로부터 시작하는 이세계 생활",
        path: `${process.env.PUBLIC_URL}/imgs/anim_imgs/rezero.png`,
        plot: "편의점에서 돌아오던 중 갑자기 이세계로 소환된 주인공 나츠키 스바루가 사망 시 시간을 되돌리는 '사망귀환' 능력으로 소중한 사람들을 지키기 위해 절망에 맞서는 이야기.",
        barrier: "주인공이 계속해서 죽고 고통받는 등 피폐하고 잔혹한 전개가 많아 시청하기 힘들 수 있다."
    },
    {
        name: "단다단",
        path: `${process.env.PUBLIC_URL}/imgs/anim_imgs/dandadan.png`,
        plot: "유령의 존재를 믿는 소녀 아야세 모모와 UFO의 존재를 믿는 소년 타카쿠라 켄이 서로의 신념을 증명하기 위해 기괴한 사건들에 맞서는 오컬트 액션 만화.",
        barrier: "정신없이 빠른 전개와 혼합된 장르, 선정적인 장면과 대사 때문에 호불호가 크게 갈릴 수 있다."
    },
    {
        name: "미래일기",
        path: `${process.env.PUBLIC_URL}/imgs/anim_imgs/mirainikki.png`,
        plot: "우연히 미래를 예측하는 '미래일기'를 손에 넣은 중학생 아마노 유키테루가 다른 일기 소유자들과 최후의 1인이 되기 위해 벌이는 서바이벌 게임.",
        barrier: "매우 폭력적이고 잔인하며, 여주인공의 얀데레 성향이 극단적이라 거부감을 느낄 수 있다."
    },
    {
        name: "어둠의 실력자가 되고 싶어서!",
        path: `${process.env.PUBLIC_URL}/imgs/anim_imgs/shadow.png`,
        plot: "어릴 때부터 '어둠의 실력자'를 동경하던 한 소년이 이세계로 전생하여, 망상으로 만들어낸 조직 '섀도우 가든'을 이끌며 진짜 악의 조직과 맞서 싸우는 이야기.",
        barrier: "주인공의 중2병 설정과 착각물 개그 코드가 취향에 맞지 않으면 오글거리고 유치하게 느껴질 수 있다. 또한 주인공이 능력을 쓸 때 오글거리는 영어 굴리기 asmr을 들을 수 있다."
    },
    {
        name: "중2병이라도 사랑이 하고 싶어!",
        path: `${process.env.PUBLIC_URL}/imgs/anim_imgs/chunibyo.png`,
        plot: "중2병을 졸업하고 평범한 고등학생이 되려는 토가시 유타가 아직 중2병에서 헤어나오지 못한 동급생 타카나시 릿카를 만나면서 벌어지는 학원 로맨틱 코미디.",
        barrier: "중2병이라는 특정 문화에 대한 이해나 공감이 없으면 등장인물들의 행동이 오글거리고 보기 힘들 수 있다."
    },
    {
        name: "언데드 언럭",
        path: `${process.env.PUBLIC_URL}/imgs/anim_imgs/undeadunluck.png`,
        plot: "자신과 닿는 사람에게 불운을 가져다주는 소녀 이즈모 후코와 절대 죽지 않는 불사의 능력을 가진 남자 앤디가 만나 세계의 룰에 맞서는 이야기.",
        barrier: "세계관과 설정이 복잡하고 초반부의 개그나 서비스신이 다소 과하게 느껴질 수 있다."
    },
    {
        name: "Lv2부터 치트였던 전직 용사 후보의 유유자적 이세계 라이프",
        path: `${process.env.PUBLIC_URL}/imgs/anim_imgs/lv2cheat.png`,
        plot: "용사 후보로 이세계에 소환되었지만 레벨 1 능력치가 낮다는 이유로 추방된 주인공이, 레벨 2가 되자마자 먼치킨 능력을 각성하여 유유자적한 이세계 생활을 즐기는 이야기.",
        barrier: "먼치킨, 이세계, 하렘 등 전형적인 클리셰를 많이 사용해 독창성이 부족하게 느껴질 수 있다."
    },
    {
        name: "모브부터 시작하는 탐색 영웅담",
        path: `${process.env.PUBLIC_URL}/imgs/anim_imgs/mobhero.png`,
        plot: "평범한 '모브(엑스트라)' 고등학생이었던 타카기 카이토가 어느 날 갑자기 강력한 힘을 손에 넣고, 매력적인 히로인들과 함께 던전을 탐험하며 영웅으로 성장하는 이야기.",
        barrier: "전형적인 하렘 먼치킨 장르로, 기존의 유사 작품들과 차별점을 찾기 어려울 수 있다. 액션도 굉장히 대충 그려서 헛웃음이 나온다."
    },
    {
        name: "내 여자친구와 소꿉친구가 완전 수라장",
        path: `${process.env.PUBLIC_URL}/imgs/anim_imgs/shuraba.png`,
        plot: "연애에 관심 없는 평범한 고등학생 키도 에이타가 은발의 미소녀 나츠카와 마스즈의 가짜 남자친구 행세를 하게 되면서 소꿉친구 하루사키 치와까지 얽혀 복잡한 연애 수라장에 빠지는 이야기.",
        barrier: "2010년대 초반 하렘물의 특징이 강해, 요즘 시청자에게는 다소 유치하거나 진부하게 보일 수 있다."
    },
    {
        name: "청춘 돼지는 바니걸 선배의 꿈을 꾸지 않는다",
        path: `${process.env.PUBLIC_URL}/imgs/anim_imgs/bunnygirlsenpai.png`,
        plot: "주변 사람들에게 모습이 보이지 않게 되는 '사춘기 증후군'을 겪는 선배 사쿠라지마 마이를 도와주면서, 주인공 아즈사가와 사쿠타가 다른 소녀들의 불가사의한 사건들을 해결해 나가는 이야기.",
        barrier: "일단 제목부터가 진입장벽이다. 양자역학 등 과학 이론을 섞은 설정이 다소 난해하고, 대화의 비중이 높아 집중력이 필요하다."
    },
    {
        name: "가끔씩 툭하고 러시아어로 부끄러워하는 옆자리의 아랴 양",
        path: `${process.env.PUBLIC_URL}/imgs/anim_imgs/aryasan.png`,
        plot: "은발의 러시아 혼혈 미소녀 아랴가 옆자리 남학생 쿠제 마사치카에게 러시아어로 본심을 고백하지만, 사실 마사치카가 러시아어를 알아들으면서 벌어지는 달콤한 청춘 러브 코미디.",
        barrier: "제목부터 진입장벽이다. 하나의 핵심 설정(러시아어 고백)에 크게 의존하는 단순한 구조의 로맨틱 코미디이다. 쉽지 않은 대사도 조금 나오는 편..."
    },
    {
        name: "이 멋진 세계에 축복을!",
        path: `${process.env.PUBLIC_URL}/imgs/anim_imgs/konosuba.png`,
        plot: "게임을 사랑하는 은둔형 외톨이 소년 카즈마가 갑작스러운 사고로 사망한 후, 여신 아쿠아와 함께 이세계로 전생하여 벌이는 대모험을 그린 코미디 판타지. 하지만 그의 파티원은 잉여신, 폭렬 마법만 쓰는 중2병 마법사, 공격을 맞고 희열을 느끼는 변태 여기사 등 어딘가 나사 빠진 동료들뿐이다.",
        barrier: "이세계 전생물의 클리셰를 비꼬는 패러디 개그가 많아, 해당 장르에 익숙하지 않으면 재미가 반감될 수 있다. 또한, 주인공 파티가 정상인 없이 괴짜들(중2병, 마조히스트 등)으로만 구성되어 있어 호불호가 갈릴 수 있다. 선정적인 장면도 다수 있다."
    }
];

const anims_1500m = [
    {
        name: "환생했는데 제7왕자라 내맘대로 마술을 연마합니다",
        path: `${process.env.PUBLIC_URL}/imgs/anim_imgs/prince7.png`,
        plot: "마술에 인생을 바쳤지만 평범한 혈통 때문에 능력을 제대로 발휘하지 못하고 죽은 마술사가, 엄청난 마력과 혈통을 지닌 왕국의 제7왕자로 환생하여 자유롭게 마술을 연마하는 이야기.",
        barrier: "주인공이 어린아이의 모습으로 등장하지만 행동이나 생각이 성인에 가까워 위화감을 느낄 수 있으며, 선정적인 장면이 많이 포함된다."
    },
    {
        name: "너를 너무너무너무너무 좋아하는 100명의 그녀",
        path: `${process.env.PUBLIC_URL}/imgs/anim_imgs/100girlfriends.png`,
        plot: "중학교 졸업까지 100번 고백하고 100번 차인 주인공 렌타로가 고등학교에서 만날 100명의 운명의 그녀들을 모두 행복하게 해주기 위해 고군분투하는 학원 하렘 코미디.",
        barrier: "하렘 장르를 극단적으로 비튼 패러디물으로, 비현실적이고 정신없는 전개가 취향에 맞지 않을 수 있다. 여친 엄마까지 히로인이 되는 건 진짜 어지럽다..."
    }
];

const anims = [anims_100m, anims_150m, anims_200m, anims_500m, anims_1000m, anims_1500m];
export default anims;