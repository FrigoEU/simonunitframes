export {};
declare global {
  type BigInteger = number;
  type BigUInteger = number;
  type CalendarEventID = string;
  type ClubId = string;
  type ClubInvitationId = string;
  type ClubStreamId = string;
  type FileAsset = string;
  type fileID = number;
  type GarrisonFollower = string;
  type IDOrLink = string | number;
  type kstringClubMessage = string;
  type kstringLfgListApplicant = string;
  type kstringLfgListSearch = string;
  type ModelAsset = string;
  type normalizedValue = number;
  type RecruitAcceptanceID = string;
  type ScriptRegion = SimpleScriptRegion;
  type SimpleButtonStateToken = string;
  type SingleColorValue = number;
  type size = number;
  type TBFFlags = string;
  type TBFStyleFlags = string;
  type textureAtlas = string;
  type textureKit = string;
  type time_t = number;
  type uiAddon = string;
  type uiFontHeight = number;
  type uiMapID = number;
  type uiUnit = number;
  type UnitToken = string;
  type WeeklyRewardItemDBID = string;
  type WOWGUID = string;
  type WOWMONEY = string;
  type luaFunction = (this: void, ...args: any[]) => any;
  type AnimationDataEnum = any;
  type AuraData = {
    applications: number;
    auraInstanceID: number;
    canApplyAura: boolean;
    charges: number;
    dispelName?: string;
    duration: number;
    expirationTime: number;
    icon: number;
    isBossAura: boolean;
    isFromPlayerOrPlayerPet: boolean;
    isHarmful: boolean;
    isHelpful: boolean;
    isNameplateOnly: boolean;
    isRaid: boolean;
    isStealable: boolean;
    maxCharges: number;
    name: string;
    nameplateShowAll: boolean;
    nameplateShowPersonal: boolean;
    points: any[];
    sourceUnit?: string;
    spellId: number;
    timeMod: number;
  };
  type AzeriteEmpoweredItemLocation = any;
  type AzeriteItemLocation = any;
  type BlendMode = string;
  type CachedRewardType = any;
  type ChatBubbleFrame = any;
  type colorRGBA = { r: number; g: number; b: number; a: number };
  type colorRGB = { r: number; g: number; b: number };
  type CScriptObject = any;
  type CurveType = string;
  type DrawLayer = string;
  type EmptiableItemLocation = any;
  type FilterMode = string;
  type FramePoint = string;
  type FrameStrata = string;
  type HTMLTextType = any;
  type InsertMode = string;
  type InventorySlots = any;
  type ItemInfo = any;
  type ItemSoundType = any;
  type ItemTransmogInfo = any;
  type LoopType = string;
  type ModelSceneFrameActor = any;
  type ModelSceneFrame = any;
  type NotificationDbId = any;
  type Orientation = string;
  type PlayerLocation = any;
  type ReportInfo = string;
  type SimplePathAnim = any;
  type SmoothingType = string;
  type StatusBarFillStyle = string;
  type TextureAsset = any;
  type TextureAssetDisk = any;
  type TooltipComparisonItem = any;
  type TooltipData = any;
  type TransmogLocation = any;
  type TransmogPendingInfo = any;
  type UiMapPoint = any;
  type uiRect = any;
  type vector2 = any;
  type vector3 = any;
  type WeeklyRewardChestThresholdType = any;
  type ItemLocation = any;
  type CalendarGetEventType = any;
  type CharCustomizationType = any;
  type LFGRole = any;
  type ArtifactTiers = any;
  type ConnectionIptype = any;
  type stringView = any;
  type SimpleWindow = any;
  type GameMode = any;
  type GameRule = any;
  type ItemCreationContext = any;
  type mouseButton = any;
  type LuaValueVariant = any;
  type JustifyHorizontal = any;
  type JustifyVertical = any;
  type Vocalerrorsounds = any;
  type SpellIdentifier = any;
  const ItemLocation: any;

  namespace Enum {
    enum AccountData {
      Config = 0,
      Config2 = 1,
      Bindings = 2,
      Bindings2 = 3,
      Macros = 4,
      Macros2 = 5,
      UILayout = 6,
      ChatSettings = 7,
      TtsSettings = 8,
      TtsSettings2 = 9,
      FlaggedIDs = 10,
      FlaggedIDs2 = 11,
      ClickBindings = 12,
      UIEditModeAccount = 13,
      UIEditModeChar = 14,
      FrontendChatSettings = 15,
      CharacterListOrder = 16,
    }

    enum AccountDataUpdateStatus {
      AccountDataUpdateSuccess = 0,
      AccountDataUpdateFailed = 1,
      AccountDataUpdateCorrupt = 2,
      AccountDataUpdateToobig = 3,
    }

    enum AccountExportResult {
      Success = 0,
      UnknownError = 1,
      Cancelled = 2,
      ShuttingDown = 3,
      TimedOut = 4,
      NoAccountFound = 5,
      RequestedInvalidCharacter = 6,
      RpcError = 7,
      FileInvalid = 8,
      FileWriteFailed = 9,
      Unavailable = 10,
      AlreadyInProgress = 11,
      FailedToLockAccount = 12,
      FailedToGenerateFile = 13,
    }

    enum AccountTransType {
      ProxyForwarder = 0,
      Purchase = 1,
      Distribution = 2,
      Battlepet = 3,
      Achievements = 4,
      Criteria = 5,
      Mounts = 6,
      Characters = 7,
      Purchases = 8,
      ArchivedPurchases = 9,
      Distributions = 10,
      CurrencyCaps = 11,
      QuestLog = 12,
      CriteriaNotif = 13,
      Settings = 14,
      FixedLicense = 15,
      AddLicense = 16,
      ItemCollections = 17,
      AuctionableToken = 18,
      ConsumableToken = 19,
      VasTransaction = 20,
      Productitem = 21,
      TrialBoostHistory = 22,
      TrialBoostHistories = 23,
      QuestCriteria = 24,
      BattlenetAccount = 25,
      AccountCurrencies = 26,
      RafRecruiterAcceptances = 27,
      RafFriendMonth = 28,
      RafReward = 29,
      DynamicCriteria = 30,
      RafActivity = 31,
      CreateOrderInfo = 32,
      ProxyHonorInitialConversion = 33,
      ProxyCreateAccountHonor = 34,
      ProxyValidateAccountHonor = 35,
      ProxyGmSetHonor = 36,
      ProxyGenerateBpayID = 37,
      AccountNotifications = 38,
      PerkItemHold = 39,
      PerkPendingRewards = 40,
      PerkRecentPurchases = 41,
      PerkPastRewards = 42,
      PerkTransaction = 43,
      OutstandingRpc = 44,
      LoadWowlabs = 45,
      UpgradeAccount = 46,
      GetOrderStatusByPurchaseID = 47,
      Items = 48,
      BankTab = 49,
      Factions = 50,
      BitVectors = 51,
      CombinedQuestLog = 52,
      PlayerDataElements = 53,
    }

    enum BnetAccountFlag {
      None = 0,
      BattlePetTrainer = 1,
      RafVeteranNotified = 2,
      TwitterLinked = 4,
      TwitterHasTempSecret = 8,
      Employee = 16,
      EmployeeFlagIsManual = 32,
      AccountQuestBitFixUp = 64,
      AchievementsToBi = 128,
      InvalidTransmogsFixUp = 256,
      InvalidTransmogsFixUp2 = 512,
      GdprErased = 1024,
      DarkRealmLightCopy = 2048,
      QuestLogFlagsFixUp = 4096,
      WasSecured = 8192,
      LockedForExport = 16384,
      CanBuyAhGameTimeTokens = 32768,
      PetAchievementFixUp = 65536,
      IsLegacy = 131072,
      CataLegendaryMountChecked = 262144,
      CataLegendaryMountObtained = 524288,
    }

    enum DisableAccountProfilesFlags {
      None = 0,
      Document = 1,
      SharedCollections = 2,
      MountsCollections = 4,
      PetsCollections = 8,
      ItemsCollections = 16,
    }

    enum AddOnEnableState {
      None = 0,
      Some = 1,
      All = 2,
    }

    enum AnimaDiversionNodeState {
      Unavailable = 0,
      Available = 1,
      SelectedTemporary = 2,
      SelectedPermanent = 3,
      Cooldown = 4,
    }

    enum ArrowCalloutDirection {
      Up = 0,
      Down = 1,
      Left = 2,
      Right = 3,
    }

    enum ArrowCalloutType {
      None = 0,
      Generic = 1,
      WorldLootObject = 2,
      Tutorial = 3,
      WidgetContainerNoBorder = 4,
    }

    enum AuctionHouseFilterCategory {
      Uncategorized = 0,
      Equipment = 1,
      Rarity = 2,
    }

    enum AuctionStatus {
      Active = 0,
      Sold = 1,
    }

    enum ItemCommodityStatus {
      Unknown = 0,
      Item = 1,
      Commodity = 2,
    }

    enum AuctionHouseCommoditySortOrder {
      UnitPrice = 0,
      Quantity = 1,
    }

    enum AuctionHouseError {
      NotEnoughMoney = 0,
      HigherBid = 1,
      BidIncrement = 2,
      BidOwn = 3,
      ItemNotFound = 4,
      RestrictedAccountTrial = 5,
      HasRestriction = 6,
      IsBusy = 7,
      Unavailable = 8,
      ItemHasQuote = 9,
      DatabaseError = 10,
      MinBid = 11,
      NotEnoughItems = 12,
      RepairItem = 13,
      UsedCharges = 14,
      QuestItem = 15,
      BoundItem = 16,
      ConjuredItem = 17,
      LimitedDurationItem = 18,
      IsBag = 19,
      EquippedBag = 20,
      WrappedItem = 21,
      LootItem = 22,
      DoubleBid = 23,
      FavoritesMaxed = 24,
      ItemNotAvailable = 25,
      ItemBoundToAccountUntilEquip = 26,
    }

    enum AuctionHouseExtraColumn {
      None = 0,
      Ilvl = 1,
      Slots = 2,
      Level = 3,
      Skill = 4,
    }

    enum AuctionHouseFilter {
      None = 0,
      UncollectedOnly = 1,
      UsableOnly = 2,
      CurrentExpansionOnly = 3,
      UpgradesOnly = 4,
      ExactMatch = 5,
      PoorQuality = 6,
      CommonQuality = 7,
      UncommonQuality = 8,
      RareQuality = 9,
      EpicQuality = 10,
      LegendaryQuality = 11,
      ArtifactQuality = 12,
      LegendaryCraftedItemOnly = 13,
    }

    enum AuctionHouseItemSortOrder {
      Bid = 0,
      Buyout = 1,
    }

    enum AuctionHouseNotification {
      BidPlaced = 0,
      AuctionRemoved = 1,
      AuctionWon = 2,
      AuctionOutbid = 3,
      AuctionSold = 4,
      AuctionExpired = 5,
    }

    enum AuctionHouseSortOrder {
      Price = 0,
      Name = 1,
      Level = 2,
      Bid = 3,
      Buyout = 4,
      TimeRemaining = 5,
    }

    enum AuctionHouseTimeLeftBand {
      Short = 0,
      Medium = 1,
      Long = 2,
      VeryLong = 3,
    }

    enum AzeriteEssenceSlot {
      MainSlot = 0,
      PassiveOneSlot = 1,
      PassiveTwoSlot = 2,
      PassiveThreeSlot = 3,
    }

    enum AzeritePowerLevel {
      Base = 0,
      Upgraded = 1,
      Downgraded = 2,
    }

    enum BagFlag {
      DontFindStack = 1,
      AlreadyOwner = 2,
      AlreadyBound = 4,
      Swap = 8,
      BagIsEmpty = 16,
      LookInInventory = 32,
      IgnoreBoundItemCheck = 64,
      StackOnly = 128,
      RecurseQuivers = 256,
      IgnoreBankcheck = 512,
      AllowBagsInNonBagSlots = 1024,
      PreferQuivers = 2048,
      SwapBags = 4096,
      IgnoreExisting = 8192,
      AllowPartialStack = 16384,
      LookInBankOnly = 32768,
      AllowBuyback = 65536,
      IgnorePetBankcheck = 131072,
      PreferPriorityBags = 262144,
      PreferNeutralPriorityBags = 524288,
      LookInReagentsBankOnly = 1048576,
      AsymmetricSwap = 2097152,
      PreferReagentBags = 4194304,
      IgnoreSoulbound = 8388608,
      IgnoreReagentBags = 16777216,
      LookInAccountBankOnly = 33554432,
      HasRefund = 67108864,
      SkipValidCountCheck = 134217728,
    }

    enum BagSlotFlags {
      DisableAutoSort = 1,
      ClassEquipment = 2,
      ClassConsumables = 4,
      ClassProfessionGoods = 8,
      ClassJunk = 16,
      ClassQuestItems = 32,
      ExcludeJunkSell = 64,
      ClassReagents = 128,
      ExpansionCurrent = 256,
      ExpansionLegacy = 512,
    }

    enum BagIndex {
      Accountbanktab = -5,
      Bankbag = -4,
      Reagentbank = -3,
      Keyring = -2,
      Bank = -1,
      Backpack = 0,
      Bag_1 = 1,
      Bag_2 = 2,
      Bag_3 = 3,
      Bag_4 = 4,
      ReagentBag = 5,
      BankBag_1 = 6,
      BankBag_2 = 7,
      BankBag_3 = 8,
      BankBag_4 = 9,
      BankBag_5 = 10,
      BankBag_6 = 11,
      BankBag_7 = 12,
      AccountBankTab_1 = 13,
      AccountBankTab_2 = 14,
      AccountBankTab_3 = 15,
      AccountBankTab_4 = 16,
      AccountBankTab_5 = 17,
    }

    enum BattlePetAbilityFlag {
      DisplayAsHostileDebuff = 1,
      HideStrongWeakHints = 2,
      Passive = 4,
      ServerOnlyAura = 8,
      ShowCast = 16,
      StartOnCooldown = 32,
    }

    enum BattlePetAbilitySlot {
      A = 0,
      B = 1,
      C = 2,
    }

    enum BattlePetAbilityTargets {
      EnemyFrontPet = 0,
      FriendlyFrontPet = 1,
      Weather = 2,
      EnemyPad = 3,
      FriendlyPad = 4,
      EnemyBackPet_1 = 5,
      EnemyBackPet_2 = 6,
      FriendlyBackPet_1 = 7,
      FriendlyBackPet_2 = 8,
      Caster = 9,
      Owner = 10,
      Specific = 11,
      ProcTarget = 12,
    }

    enum BattlePetAbilityTurnFlag {
      CanProcFromProc = 1,
      TriggerBySelf = 2,
      TriggerByFriend = 4,
      TriggerByEnemy = 8,
      TriggerByWeather = 16,
      TriggerByAuraCaster = 32,
    }

    enum BattlePetAbilityTurnType {
      Normal = 0,
      TriggeredEffect = 1,
    }

    enum BattlePetAbilityType {
      Ability = 0,
      Aura = 1,
    }

    enum BattlePetAction {
      None = 0,
      Ability = 1,
      SwitchPet = 2,
      Trap = 3,
      Skip = 4,
    }

    enum BattlePetBreedQuality {
      Poor = 0,
      Common = 1,
      Uncommon = 2,
      Rare = 3,
      Epic = 4,
      Legendary = 5,
    }

    enum BattlePetEffectFlags {
      EnableAbilityPicker = 1,
      LuaNeedsAllPets = 2,
    }

    enum BattlePetEffectParamType {
      Int = 0,
      Ability = 1,
    }

    enum BattlePetEvent {
      OnAuraApplied = 0,
      OnDamageTaken = 1,
      OnDamageDealt = 2,
      OnHealTaken = 3,
      OnHealDealt = 4,
      OnAuraRemoved = 5,
      OnRoundStart = 6,
      OnRoundEnd = 7,
      OnTurn = 8,
      OnAbility = 9,
      OnSwapIn = 10,
      OnSwapOut = 11,
      PostAuraTicks = 12,
    }

    enum BattlePetNpcEmote {
      BattleUnused = 0,
      BattleStart = 1,
      BattleWin = 2,
      BattleLose = 3,
      PetSwap = 4,
      PetKill = 5,
      PetDie = 6,
      PetAbility = 7,
    }

    enum BattlePetNpcTeamFlag {
      MatchPlayerHighPetLevel = 1,
      NoPlayerXP = 2,
    }

    enum BattlePetOwner {
      Weather = 0,
      Ally = 1,
      Enemy = 2,
    }

    enum BattlePetSources {
      Drop = 0,
      Quest = 1,
      Vendor = 2,
      Profession = 3,
      WildPet = 4,
      Achievement = 5,
      WorldEvent = 6,
      Promotion = 7,
      Tcg = 8,
      PetStore = 9,
      Discovery = 10,
      TradingPost = 11,
    }

    enum BattlePetSpeciesFlags {
      NoRename = 1,
      WellKnown = 2,
      NotAcccountwide = 4,
      Capturable = 8,
      NotTradable = 16,
      HideFromJournal = 32,
      LegacyAccountUnique = 64,
      CantBattle = 128,
      HordeOnly = 256,
      AllianceOnly = 512,
      Boss = 1024,
      RandomDisplay = 2048,
      NoLicenseRequired = 4096,
      AddsAllowedWithBoss = 8192,
      HideUntilLearned = 16384,
      MatchPlayerHighPetLevel = 32768,
      NoWildPetAddsAllowed = 65536,
    }

    enum BattlePetStateFlag {
      None = 0,
      SwapOutLock = 1,
      TurnLock = 2,
      SpeedBonus = 4,
      Client = 8,
      MaxHealthBonus = 16,
      Stamina = 32,
      QualityDoesNotEffect = 64,
      DynamicScaling = 128,
      Power = 256,
      SpeedMult = 512,
      SwapInLock = 1024,
      ServerOnly = 2048,
    }

    enum BattlePetTypes {
      Humanoid = 0,
      Dragonkin = 1,
      Flying = 2,
      Undead = 3,
      Critter = 4,
      Magic = 5,
      Elemental = 6,
      Beast = 7,
      Aquatic = 8,
      Mechanical = 9,
    }

    enum BattlePetVisualFlag {
      Test1 = 1,
      Test2 = 2,
      Test3 = 4,
    }

    enum BattlePetVisualRange {
      Melee = 0,
      Ranged = 1,
      InPlace = 2,
      PointBlank = 3,
      BehindMelee = 4,
      BehindRanged = 5,
    }

    enum BattlepetDbFlags {
      None = 0,
      Favorite = 1,
      Converted = 2,
      Revoked = 4,
      LockedForConvert = 8,
      Ability0Selection = 16,
      Ability1Selection = 32,
      Ability2Selection = 64,
      FanfareNeeded = 128,
      DisplayOverridden = 256,
      AcquiredViaLicense = 512,
      TradingPost = 1024,
      LockMask = 12,
    }

    enum BattlepetDeletedReason {
      Unknown = 0,
      PlayerReleased = 1,
      PlayerCaged = 2,
      Gm = 3,
      CageError = 4,
      DelJournal = 5,
      TradingPost = 6,
    }

    enum BattlepetSlotLockCheat {
      Cheat_2_Locked = -3,
      Cheat_1_Locked = -2,
      Cheat_0_Locked = -1,
      CheatOff = 0,
      UnlockAll = 1,
    }

    enum CalendarCommandType {
      Create = 0,
      Invite = 1,
      Rsvp = 2,
      RemoveInvite = 3,
      RemoveEvent = 4,
      Status = 5,
      ModeratorStatus = 6,
      GetCalendar = 7,
      GetEvent = 8,
      UpdateEvent = 9,
      Complain = 10,
      Notes = 11,
    }

    enum CalendarErrorType {
      Success = 0,
      CommunityEventsExceeded = 1,
      EventsExceeded = 2,
      SelfInvitesExceeded = 3,
      OtherInvitesExceeded = 4,
      NoPermission = 5,
      EventInvalid = 6,
      NotInvited = 7,
      UnknownError = 8,
      NotInGuild = 9,
      NotInCommunity = 10,
      TargetAlreadyInvited = 11,
      NameNotFound = 12,
      WrongFaction = 13,
      Ignored = 14,
      InvitesExceeded = 15,
      InvalidMaxSize = 16,
      InvalidDate = 17,
      InvalidTime = 18,
      NoInvites = 19,
      NeedsTitle = 20,
      EventPassed = 21,
      EventLocked = 22,
      DeleteCreatorFailed = 23,
      DataAlreadySet = 24,
      CalendarDisabled = 25,
      RestrictedAccount = 26,
      ArenaEventsExceeded = 27,
      RestrictedLevel = 28,
      Squelched = 29,
      NoInvite = 30,
      ComplaintDisabled = 31,
      ComplaintSelf = 32,
      ComplaintSameGuild = 33,
      ComplaintGm = 34,
      ComplaintLimit = 35,
      ComplaintNotFound = 36,
      EventWrongServer = 37,
      NoCommunityInvites = 38,
      InvalidSignup = 39,
      NoModerator = 40,
      ModeratorRestricted = 41,
      InvalidNotes = 42,
      InvalidTitle = 43,
      InvalidDescription = 44,
      InvalidClub = 45,
      CreatorNotFound = 46,
      EventThrottled = 47,
      InviteThrottled = 48,
      Internal = 49,
      ComplaintAdded = 50,
    }

    enum CalendarEventBits {
      Player = 1,
      GuildDeprecated = 2,
      System = 4,
      Holiday = 8,
      Locked = 16,
      AutoApprove = 32,
      CommunityAnnouncement = 64,
      RaidLockout = 128,
      ArenaDeprecated = 256,
      RaidResetDeprecated = 512,
      CommunitySignup = 1024,
      GuildSignup = 2048,
      CommunityWide = 3136,
      PlayerCreated = 3395,
      CantComplain = 3788,
    }

    enum CalendarEventRepeatOptions {
      Never = 0,
      Weekly = 1,
      Biweekly = 2,
      Monthly = 3,
    }

    enum CalendarEventType {
      Raid = 0,
      Dungeon = 1,
      PvP = 2,
      Meeting = 3,
      Other = 4,
      HeroicDeprecated = 5,
    }

    enum CalendarFilterFlags {
      WeeklyHoliday = 1,
      Darkmoon = 2,
      Battleground = 4,
      RaidLockout = 8,
      RaidReset = 16,
    }

    enum CalendarGetEventType {
      Get = 0,
      Add = 1,
      Copy = 2,
    }

    enum CalendarHolidayFilterType {
      Weekly = 0,
      Darkmoon = 1,
      Battleground = 2,
    }

    enum CalendarInviteBits {
      None = 0,
      PendingInvite = 1,
      Moderator = 2,
      Creator = 4,
      Signup = 8,
    }

    enum CalendarInviteSortType {
      Name = 0,
      Level = 1,
      Class = 2,
      Status = 3,
      Party = 4,
      Notes = 5,
    }

    enum CalendarInviteType {
      Normal = 0,
      Signup = 1,
    }

    enum CalendarModeratorStatus {
      None = 0,
      Moderator = 1,
      Creator = 2,
    }

    enum CalendarStatus {
      Invited = 0,
      Available = 1,
      Declined = 2,
      Confirmed = 3,
      Out = 4,
      Standby = 5,
      Signedup = 6,
      NotSignedup = 7,
      Tentative = 8,
    }

    enum CalendarTexturesType {
      Dungeons = 0,
      Raid = 1,
    }

    enum CalendarType {
      Player = 0,
      Community = 1,
      RaidLockout = 2,
      RaidResetDeprecated = 3,
      Holiday = 4,
      HolidayWeekly = 5,
      HolidayDarkmoon = 6,
      HolidayBattleground = 7,
    }

    enum CalendarWebActionType {
      Accept = 0,
      Decline = 1,
      Remove = 2,
      ReportSpam = 3,
      Signup = 4,
      Tentative = 5,
      TentativeSignup = 6,
    }

    enum HolidayCalendarFlags {
      Alliance = 1,
      Horde = 2,
    }

    enum HolidayFlags {
      IsRegionwide = 1,
      DontShowInCalendar = 2,
      DontDisplayEnd = 4,
      DontDisplayBanner = 8,
      NotAvailableClientSide = 16,
      DurationUseMinutes = 32,
      BeginEventOnlyOnStageChange = 64,
    }

    enum CameraModeAspectRatio {
      Default = 0,
      LegacyLetterbox = 1,
      HighDefinition_16_X_9 = 2,
      Cinemascope_2_Dot_4_X_1 = 3,
    }

    enum CharCustomizationType {
      Skin = 0,
      Face = 1,
      Hair = 2,
      HairColor = 3,
      FacialHair = 4,
      CustomOptionTattoo = 5,
      CustomOptionHorn = 6,
      CustomOptionFacewear = 7,
      CustomOptionTattooColor = 8,
      Outfit = 9,
      Facepaint = 10,
      FacepaintColor = 11,
    }

    enum ChrCustomizationCategoryFlag {
      UndressModel = 1,
      Subcategory = 2,
    }

    enum ChrCustomizationOptionType {
      Dropdown = 0,
      Checkbox = 1,
      Slider = 2,
    }

    enum ChrModelFeatureFlags {
      Summons = 1,
      Forms = 2,
      Identity = 4,
      DragonCompanions = 8,
      Mounts = 16,
      HunterPets = 32,
    }

    enum CustomizationScope {
      Player = 0,
      DragonCompanion = 1,
    }

    enum WarbandEventState {
      None = 0,
      DelayingEvent = 1,
      SheathingWeapon = 2,
      DelayingStandStateTransition = 3,
      StandStateTransitioning = 4,
      ShowingWeapon = 5,
      StandStateLooping = 6,
      NumWarbandEventStates = 7,
    }

    enum WarbandGroupFlags {
      None = 0,
      Collapsed = 1,
    }

    enum WarbandSceneAnimationEvent {
      StartingPose = 0,
      Idle = 1,
      Mouseover = 2,
      Select = 3,
      Deselect = 4,
      Insert = 5,
      EnterWorld = 6,
      Spin = 7,
      Poke = 8,
    }

    enum WarbandSceneAnimationSheatheState {
      Maintain = 0,
      SheatheWeapons = 1,
      ShowWeapons = 2,
    }

    enum WarbandSceneAnimationStandState {
      Maintain = 0,
      Stand = 1,
      SitOnGround = 2,
      Kneel = 3,
      ReadyStance = 4,
      Sleep = 5,
    }

    enum WarbandSceneSlotType {
      Character = 0,
      Pet = 1,
    }

    enum ChatChannelRuleset {
      None = 0,
      Mentor = 1,
      Disabled = 2,
      ChromieTimeCataclysm = 3,
      ChromieTimeBuringCrusade = 4,
      ChromieTimeWrath = 5,
      ChromieTimeMists = 6,
      ChromieTimeWoD = 7,
      ChromieTimeLegion = 8,
    }

    enum ChatChannelType {
      None = 0,
      Custom = 1,
      PrivateParty = 2,
      PublicParty = 3,
      Communities = 4,
    }

    enum ChatToxityFilterOptOut {
      FilterAll = 0,
      ExcludeFilterFriend = 1,
      ExcludeFilterGuild = 2,
      ExcludeFilterAll = 4294967295,
    }

    enum ChatWhisperTargetStatus {
      CanWhisper = 0,
      CanWhisperGuild = 1,
      Offline = 2,
      WrongFaction = 3,
    }

    enum ExcludedCensorSources {
      None = 0,
      Friends = 1,
      Guild = 2,
      Reserve1 = 4,
      Reserve2 = 8,
      Reserve3 = 16,
      Reserve4 = 32,
      Reserve5 = 64,
      Reserve6 = 128,
      All = 255,
    }

    enum LanguageFlag {
      IsExotic = 1,
      HiddenFromPlayer = 2,
      HideLanguageNameInChat = 4,
    }

    enum PermanentChatChannelType {
      None = 0,
      Zone = 1,
      Communities = 2,
      Custom = 3,
    }

    enum TtsBoolSetting {
      PlaySoundSeparatingChatLineBreaks = 0,
      AddCharacterNameToSpeech = 1,
      PlayActivitySoundWhenNotFocused = 2,
      AlternateSystemVoice = 3,
      NarrateMyMessages = 4,
    }

    enum TtsVoiceType {
      Standard = 0,
      Alternate = 1,
    }

    enum RegisterAddonMessagePrefixResult {
      Success = 0,
      DuplicatePrefix = 1,
      InvalidPrefix = 2,
      MaxPrefixes = 3,
    }

    enum SendAddonMessageResult {
      Success = 0,
      InvalidPrefix = 1,
      InvalidMessage = 2,
      AddonMessageThrottle = 3,
      InvalidChatType = 4,
      NotInGroup = 5,
      TargetRequired = 6,
      InvalidChannel = 7,
      ChannelThrottle = 8,
      GeneralError = 9,
    }

    enum CinematicType {
      GlueMovie = 0,
      GameMovie = 1,
      GameClientScene = 2,
      GameCinematicSequence = 3,
    }

    enum LoadConfigResult {
      Error = 0,
      NoChangesNecessary = 1,
      LoadInProgress = 2,
      Ready = 3,
    }

    enum ClickBindingInteraction {
      Target = 1,
      OpenContextMenu = 2,
    }

    enum ClickBindingType {
      None = 0,
      Spell = 1,
      Macro = 2,
      Interaction = 3,
      PetAction = 4,
    }

    enum ClientSceneType {
      DefaultSceneType = 0,
      MinigameSceneType = 1,
    }

    enum ClientSettingsConfigFlag {
      ClientSettingsConfigDebug = 1,
      ClientSettingsConfigInternal = 2,
      ClientSettingsConfigPerf = 4,
      ClientSettingsConfigGm = 8,
      ClientSettingsConfigTest = 16,
      ClientSettingsConfigTestRetail = 32,
      ClientSettingsConfigBeta = 64,
      ClientSettingsConfigBetaRetail = 128,
      ClientSettingsConfigRetail = 256,
    }

    enum ClubActionType {
      ErrorClubActionSubscribe = 0,
      ErrorClubActionCreate = 1,
      ErrorClubActionEdit = 2,
      ErrorClubActionDestroy = 3,
      ErrorClubActionLeave = 4,
      ErrorClubActionCreateTicket = 5,
      ErrorClubActionDestroyTicket = 6,
      ErrorClubActionRedeemTicket = 7,
      ErrorClubActionGetTicket = 8,
      ErrorClubActionGetTickets = 9,
      ErrorClubActionGetBans = 10,
      ErrorClubActionGetInvitations = 11,
      ErrorClubActionRevokeInvitation = 12,
      ErrorClubActionAcceptInvitation = 13,
      ErrorClubActionDeclineInvitation = 14,
      ErrorClubActionCreateStream = 15,
      ErrorClubActionEditStream = 16,
      ErrorClubActionDestroyStream = 17,
      ErrorClubActionInviteMember = 18,
      ErrorClubActionEditMember = 19,
      ErrorClubActionEditMemberNote = 20,
      ErrorClubActionKickMember = 21,
      ErrorClubActionAddBan = 22,
      ErrorClubActionRemoveBan = 23,
      ErrorClubActionCreateMessage = 24,
      ErrorClubActionEditMessage = 25,
      ErrorClubActionDestroyMessage = 26,
    }

    enum ClubErrorType {
      ErrorCommunitiesNone = 0,
      ErrorCommunitiesUnknown = 1,
      ErrorCommunitiesNeutralFaction = 2,
      ErrorCommunitiesUnknownRealm = 3,
      ErrorCommunitiesBadTarget = 4,
      ErrorCommunitiesWrongFaction = 5,
      ErrorCommunitiesRestricted = 6,
      ErrorCommunitiesIgnored = 7,
      ErrorCommunitiesGuild = 8,
      ErrorCommunitiesWrongRegion = 9,
      ErrorCommunitiesUnknownTicket = 10,
      ErrorCommunitiesMissingShortName = 11,
      ErrorCommunitiesProfanity = 12,
      ErrorCommunitiesTrial = 13,
      ErrorCommunitiesVeteranTrial = 14,
      ErrorCommunitiesChatMute = 15,
      ErrorClubFull = 16,
      ErrorClubNoClub = 17,
      ErrorClubNotMember = 18,
      ErrorClubAlreadyMember = 19,
      ErrorClubNoSuchMember = 20,
      ErrorClubNoSuchInvitation = 21,
      ErrorClubInvitationAlreadyExists = 22,
      ErrorClubInvalidRoleID = 23,
      ErrorClubInsufficientPrivileges = 24,
      ErrorClubTooManyClubsJoined = 25,
      ErrorClubVoiceFull = 26,
      ErrorClubStreamNoStream = 27,
      ErrorClubStreamInvalidName = 28,
      ErrorClubStreamCountAtMin = 29,
      ErrorClubStreamCountAtMax = 30,
      ErrorClubMemberHasRequiredRole = 31,
      ErrorClubSentInvitationCountAtMax = 32,
      ErrorClubReceivedInvitationCountAtMax = 33,
      ErrorClubTargetIsBanned = 34,
      ErrorClubBanAlreadyExists = 35,
      ErrorClubBanCountAtMax = 36,
      ErrorClubTicketCountAtMax = 37,
      ErrorClubTicketNoSuchTicket = 38,
      ErrorClubTicketHasConsumedAllowedRedeemCount = 39,
      ErrorClubDoesntAllowCrossFaction = 40,
      ErrorClubEditHasCrossFactionMembers = 41,
    }

    enum ClubFieldType {
      ClubName = 0,
      ClubShortName = 1,
      ClubDescription = 2,
      ClubBroadcast = 3,
      ClubStreamName = 4,
      ClubStreamSubject = 5,
      NumTypes = 6,
    }

    enum ClubInvitationCandidateStatus {
      Available = 0,
      InvitePending = 1,
      AlreadyMember = 2,
    }

    enum ClubMemberPresence {
      Unknown = 0,
      Online = 1,
      OnlineMobile = 2,
      Offline = 3,
      Away = 4,
      Busy = 5,
    }

    enum ClubRemovedReason {
      None = 0,
      Banned = 1,
      Removed = 2,
      ClubDestroyed = 3,
    }

    enum ClubRestrictionReason {
      None = 0,
      Unavailable = 1,
    }

    enum ClubStreamNotificationFilter {
      None = 0,
      Mention = 1,
      All = 2,
    }

    enum ClubStreamType {
      General = 0,
      Guild = 1,
      Officer = 2,
      Other = 3,
    }

    enum ClubType {
      BattleNet = 0,
      Character = 1,
      Guild = 2,
      Other = 3,
    }

    enum ClubFinderApplicationUpdateType {
      None = 0,
      AcceptInvite = 1,
      DeclineInvite = 2,
      Cancel = 3,
    }

    enum ClubFinderClubPostingStatusFlags {
      None = 0,
      NeedsCacheUpdate = 1,
      ForceDescriptionChange = 2,
      ForceNameChange = 3,
      UnderReview = 4,
      Banned = 5,
      FakePost = 6,
      PendingDelete = 7,
      PostDelisted = 8,
    }

    enum ClubFinderDisableReason {
      Muted = 0,
      Silenced = 1,
      VeteranTrial = 2,
    }

    enum ClubFinderPostingReportType {
      PostersName = 0,
      ClubName = 1,
      PostingDescription = 2,
      ApplicantsName = 3,
      JoinNote = 4,
    }

    enum ClubFinderRequestType {
      None = 0,
      Guild = 1,
      Community = 2,
      All = 3,
    }

    enum ClubFinderSettingFlags {
      None = 0,
      Dungeons = 1,
      Raids = 2,
      PvP = 3,
      RP = 4,
      Social = 5,
      Small = 6,
      Medium = 7,
      Large = 8,
      Tank = 9,
      Healer = 10,
      Damage = 11,
      EnableListing = 12,
      MaxLevelOnly = 13,
      AutoAccept = 14,
      FactionHorde = 15,
      FactionAlliance = 16,
      FactionNeutral = 17,
      SortRelevance = 18,
      SortMemberCount = 19,
      SortNewest = 20,
      LanguageReserved1 = 21,
      LanguageReserved2 = 22,
      LanguageReserved3 = 23,
      LanguageReserved4 = 24,
      LanguageReserved5 = 25,
    }

    enum PlayerClubRequestStatus {
      None = 0,
      Pending = 1,
      AutoApproved = 2,
      Declined = 3,
      Approved = 4,
      Joined = 5,
      JoinedAnother = 6,
      Canceled = 7,
    }

    enum ClubRoleIdentifier {
      Owner = 1,
      Leader = 2,
      Moderator = 3,
      Member = 4,
    }

    enum TrackedSpellCategory {
      None = 0,
      Offensive = 1,
      Defensive = 2,
      Debuff = 3,
      RacialAbility = 4,
    }

    enum ConfigurationWarning {
      ShaderModelWillBeOutdated = 0,
      ShaderModelIsOutdated = 1,
      ConsoleDeviceSseOutdated = 2,
      DriverBlocklisted = 3,
      DriverOutOfDate = 4,
      DeviceBlocklisted = 5,
      GraphicsApiWillBeOutdated = 6,
      OsBitsWillBeOutdated = 7,
    }

    enum ConsoleCategory {
      Debug = 0,
      Graphics = 1,
      Console = 2,
      Combat = 3,
      Game = 4,
      Default = 5,
      Net = 6,
      Sound = 7,
      Gm = 8,
      Reveal = 9,
      None = 10,
    }

    enum ConsoleColorType {
      DefaultColor = 0,
      InputColor = 1,
      EchoColor = 2,
      ErrorColor = 3,
      WarningColor = 4,
      GlobalColor = 5,
      AdminColor = 6,
      HighlightColor = 7,
      BackgroundColor = 8,
      ClickbufferColor = 9,
      PrivateColor = 10,
      DefaultGreen = 11,
    }

    enum ConsoleCommandType {
      Cvar = 0,
      Command = 1,
      Macro = 2,
      Script = 3,
    }

    enum ContentTrackingError {
      Untrackable = 0,
      MaxTracked = 1,
      AlreadyTracked = 2,
    }

    enum ContentTrackingResult {
      Success = 0,
      DataPending = 1,
      Failure = 2,
    }

    enum ContentTrackingStopType {
      Invalidated = 0,
      Collected = 1,
      Manual = 2,
    }

    enum ContentTrackingTargetType {
      JournalEncounter = 0,
      Vendor = 1,
      Achievement = 2,
      Profession = 3,
      Quest = 4,
    }

    enum ContentTrackingType {
      Appearance = 0,
      Mount = 1,
      Achievement = 2,
    }

    enum ContributionAppearanceFlags {
      TooltipUseTimeRemaining = 0,
    }

    enum ContributionResult {
      Success = 0,
      MustBeNearNpc = 1,
      IncorrectState = 2,
      InvalidID = 3,
      QuestDataMissing = 4,
      FailedConditionCheck = 5,
      UnableToCompleteTurnIn = 6,
      InternalError = 7,
    }

    enum CallingStates {
      QuestOffer = 0,
      QuestActive = 1,
      QuestCompleted = 2,
    }

    enum CovenantAbilityType {
      Class = 0,
      Signature = 1,
      Soulbind = 2,
    }

    enum CraftingOrderCustomerCategoryType {
      Primary = 0,
      Secondary = 1,
      Tertiary = 2,
    }

    enum CraftingOrderReagentsType {
      All = 0,
      Some = 1,
      None = 2,
    }

    enum AccountCurrencyTransferResult {
      Success = 0,
      InvalidCharacter = 1,
      CharacterLoggedIn = 2,
      InsufficientCurrency = 3,
      MaxQuantity = 4,
      InvalidCurrency = 5,
      NoValidSourceCharacter = 6,
      ServerError = 7,
      CannotUseCurrency = 8,
    }

    enum CurrencyFlags {
      CurrencyTradable = 1,
      CurrencyAppearsInLootWindow = 2,
      CurrencyComputedWeeklyMaximum = 4,
      Currency_100_Scaler = 8,
      CurrencyNoLowLevelDrop = 16,
      CurrencyIgnoreMaxQtyOnLoad = 32,
      CurrencyLogOnWorldChange = 64,
      CurrencyTrackQuantity = 128,
      CurrencyResetTrackedQuantity = 256,
      CurrencyUpdateVersionIgnoreMax = 512,
      CurrencySuppressChatMessageOnVersionChange = 1024,
      CurrencySingleDropInLoot = 2048,
      CurrencyHasWeeklyCatchup = 4096,
      CurrencyDoNotCompressChat = 8192,
      CurrencyDoNotLogAcquisitionToBi = 16384,
      CurrencyNoRaidDrop = 32768,
      CurrencyNotPersistent = 65536,
      CurrencyDeprecated = 131072,
      CurrencyDynamicMaximum = 262144,
      CurrencySuppressChatMessages = 524288,
      CurrencyDoNotToast = 1048576,
      CurrencyDestroyExtraOnLoot = 2097152,
      CurrencyDontShowTotalInTooltip = 4194304,
      CurrencyDontCoalesceInLootWindow = 8388608,
      CurrencyAccountWide = 16777216,
      CurrencyAllowOverflowMailer = 33554432,
      CurrencyHideAsReward = 67108864,
      CurrencyHasWarmodeBonus = 134217728,
      CurrencyIsAllianceOnly = 268435456,
      CurrencyIsHordeOnly = 536870912,
      CurrencyLimitWarmodeBonusOncePerTooltip = 1073741824,
      DeprecatedCurrencyFlag = 2147483648,
    }

    enum CurrencyFlagsB {
      CurrencyBUseTotalEarnedForEarned = 1,
      CurrencyBShowQuestXPGainInTooltip = 2,
      CurrencyBNoNotificationMailOnOfflineProgress = 4,
      CurrencyBBattlenetVirtualCurrency = 8,
      FutureCurrencyFlag = 16,
      CurrencyBDontDisplayIfZero = 32,
      CurrencyBScaleMaxQuantityBySeasonWeeks = 64,
      CurrencyBScaleMaxQuantityByWeeksSinceStart = 128,
    }

    enum CurrencyGainFlags {
      None = 0,
      BonusAward = 1,
      DroppedFromDeath = 2,
      FromAccountServer = 4,
      Autotracking = 8,
    }

    enum CurrencyTokenCategoryFlags {
      FlagSortLast = 1,
      FlagPlayerItemAssignment = 2,
      Hidden = 4,
      Virtual = 8,
      StartsCollapsed = 16,
    }

    enum LinkedCurrencyFlags {
      IgnoreAdd = 1,
      IgnoreSubtract = 2,
      SuppressChatLog = 4,
      AddIgnoresMax = 8,
    }

    enum PlayerCurrencyFlags {
      Incremented = 1,
      Loading = 2,
    }

    enum PlayerCurrencyFlagsDbFlags {
      IgnoreMaxQtyOnload = 1,
      Reuse1 = 2,
      InBackpack = 4,
      UnusedInUI = 8,
      Reuse2 = 16,
    }

    enum CurrencyDestroyReason {
      Cheat = 0,
      Spell = 1,
      VersionUpdate = 2,
      QuestTurnin = 3,
      Vendor = 4,
      Trade = 5,
      Capped = 6,
      Garrison = 7,
      DroppedToCorpse = 8,
      BonusRoll = 9,
      FactionConversion = 10,
      FulfillCraftingOrder = 11,
      Script = 12,
      ConcentrationCast = 13,
      AccountTransfer = 14,
    }

    enum CurrencySource {
      ConvertOldItem = 0,
      ConvertOldPvPCurrency = 1,
      ItemRefund = 2,
      QuestReward = 3,
      Cheat = 4,
      Vendor = 5,
      PvPKillCredit = 6,
      PvPMetaCredit = 7,
      PvPScriptedAward = 8,
      Loot = 9,
      UpdatingVersion = 10,
      LFGReward = 11,
      Trade = 12,
      Spell = 13,
      ItemDeletion = 14,
      RatedBattleground = 15,
      RandomBattleground = 16,
      Arena = 17,
      ExceededMaxQty = 18,
      PvPCompletionBonus = 19,
      Script = 20,
      GuildBankWithdrawal = 21,
      Pushloot = 22,
      GarrisonBuilding = 23,
      PvPDrop = 24,
      GarrisonFollowerActivation = 25,
      GarrisonBuildingRefund = 26,
      GarrisonMissionReward = 27,
      GarrisonResourceOverTime = 28,
      QuestRewardIgnoreCapsDeprecated = 29,
      GarrisonTalent = 30,
      GarrisonWorldQuestBonus = 31,
      PvPHonorReward = 32,
      BonusRoll = 33,
      AzeriteRespec = 34,
      WorldQuestReward = 35,
      WorldQuestRewardIgnoreCapsDeprecated = 36,
      FactionConversion = 37,
      DailyQuestReward = 38,
      DailyQuestWarModeReward = 39,
      WeeklyQuestReward = 40,
      WeeklyQuestWarModeReward = 41,
      AccountCopy = 42,
      WeeklyRewardChest = 43,
      GarrisonTalentTreeReset = 44,
      DailyReset = 45,
      AddConduitToCollection = 46,
      Barbershop = 47,
      ConvertItemsToCurrencyValue = 48,
      PvPTeamContribution = 49,
      Transmogrify = 50,
      AuctionDeposit = 51,
      PlayerTrait = 52,
      PhBuffer_53 = 53,
      PhBuffer_54 = 54,
      RenownRepGain = 55,
      CraftingOrder = 56,
      CatalystBalancing = 57,
      CatalystCraft = 58,
      ProfessionInitialAward = 59,
      PlayerTraitRefund = 60,
      AccountHwmUpdate = 61,
      ConvertItemsToCurrencyAndReputation = 62,
      PhBuffer_63 = 63,
      SpellSkipLinkedCurrency = 64,
      AccountTransfer = 65,
    }

    enum CursorStyle {
      Mouse = 0,
      Crosshair = 1,
    }

    enum Cursormode {
      NoCursor = 0,
      PointCursor = 1,
      CastCursor = 2,
      BuyCursor = 3,
      AttackCursor = 4,
      InteractCursor = 5,
      SpeakCursor = 6,
      InspectCursor = 7,
      PickupCursor = 8,
      TaxiCursor = 9,
      TrainerCursor = 10,
      MineCursor = 11,
      SkinCursor = 12,
      GatherCursor = 13,
      LockCursor = 14,
      MailCursor = 15,
      LootAllCursor = 16,
      RepairCursor = 17,
      RepairnpcCursor = 18,
      ItemCursor = 19,
      SkinHordeCursor = 20,
      SkinAllianceCursor = 21,
      InnkeeperCursor = 22,
      CampaignQuestCursor = 23,
      CampaignQuestTurninCursor = 24,
      QuestCursor = 25,
      QuestRepeatableCursor = 26,
      QuestTurninCursor = 27,
      QuestLegendaryCursor = 28,
      QuestLegendaryTurninCursor = 29,
      QuestImportantCursor = 30,
      QuestImportantTurninCursor = 31,
      QuestMetaCursor = 32,
      QuestMetaTurninCursor = 33,
      QuestRecurringCursor = 34,
      QuestRecurringTurninCursor = 35,
      VehicleCursor = 36,
      MapPinCursor = 37,
      PingCursor = 38,
      EnchantCursor = 39,
      UIMoveCursor = 40,
      UIResizeCursor = 41,
      PointErrorCursor = 42,
      CastErrorCursor = 43,
      BuyErrorCursor = 44,
      AttackErrorCursor = 45,
      InteractErrorCursor = 46,
      SpeakErrorCursor = 47,
      InspectErrorCursor = 48,
      PickupErrorCursor = 49,
      TaxiErrorCursor = 50,
      TrainerErrorCursor = 51,
      MineErrorCursor = 52,
      SkinErrorCursor = 53,
      GatherErrorCursor = 54,
      LockErrorCursor = 55,
      MailErrorCursor = 56,
      LootAllErrorCursor = 57,
      RepairErrorCursor = 58,
      RepairnpcErrorCursor = 59,
      ItemErrorCursor = 60,
      SkinHordeErrorCursor = 61,
      SkinAllianceErrorCursor = 62,
      InnkeeperErrorCursor = 63,
      CampaignQuestErrorCursor = 64,
      CampaignQuestTurninErrorCursor = 65,
      QuestErrorCursor = 66,
      QuestRepeatableErrorCursor = 67,
      QuestTurninErrorCursor = 68,
      QuestLegendaryErrorCursor = 69,
      QuestLegendaryTurninErrorCursor = 70,
      QuestImportantErrorCursor = 71,
      QuestImportantTurninErrorCursor = 72,
      QuestMetaErrorCursor = 73,
      QuestMetaTurninErrorCursor = 74,
      QuestRecurringErrorCursor = 75,
      QuestRecurringTurninErrorCursor = 76,
      VehicleErrorCursor = 77,
      MapPinErrorCursor = 78,
      PingErrorCursor = 79,
      EnchantErrorCursor = 80,
      CustomCursor = 81,
    }

    enum UICursorType {
      Default = 0,
      Item = 1,
      Money = 2,
      Spell = 3,
      PetAction = 4,
      Merchant = 5,
      ActionBar = 6,
      Macro = 7,
      AmmoObsolete = 8,
      Pet = 9,
      GuildBank = 10,
      GuildBankMoney = 11,
      EquipmentSet = 12,
      Currency = 13,
      Flyout = 14,
      VoidItem = 15,
      BattlePet = 16,
      Mount = 17,
      Toy = 18,
      ConduitCollectionItem = 19,
      PerksProgramVendorItem = 20,
    }

    enum WorldCursorAnchorType {
      None = 0,
      Default = 1,
      Cursor = 2,
      Nameplate = 3,
    }

    enum Causeofdeath {
      None = 0,
      PlayerPvP = 1,
      PlayerDuel = 2,
      Creature = 3,
      Falling = 4,
      Drowning = 5,
      Fatigue = 6,
      Slime = 7,
      Lava = 8,
      Fire = 9,
    }

    enum CauseofdeathFlags {
      NoneNeeded = 0,
      PlayerNameNeeded = 1,
      CreatureNameNeeded = 2,
      ZoneNameNeeded = 4,
    }

    enum Damageclass {
      Physical = 0,
      Holy = 1,
      Fire = 2,
      Nature = 3,
      Frost = 4,
      Shadow = 5,
      Arcane = 6,
      FirstResist = 2,
      LastResist = 6,
      MaskNone = 0,
      MaskPhysical = 1,
      MaskHoly = 2,
      MaskFire = 4,
      MaskNature = 8,
      MaskFrost = 16,
      MaskShadow = 32,
      MaskArcane = 64,
      AllPhysical = 1,
      AllMagical = 126,
      All = 127,
      MaskFlamestrike = 5,
      MaskFroststrike = 17,
      MaskSpellstrike = 65,
      MaskShadowstrike = 33,
      MaskStormstrike = 9,
      MaskHolystrike = 3,
      MaskFrostfire = 20,
      MaskSpellfire = 68,
      MaskFirestorm = 12,
      MaskShadowflame = 36,
      MaskHolyfire = 6,
      MaskSpellfrost = 80,
      MaskFroststorm = 24,
      MaskShadowfrost = 48,
      MaskHolyfrost = 18,
      MaskSpellstorm = 72,
      MaskSpellshadow = 96,
      MaskDivine = 66,
      MaskShadowstorm = 40,
      MaskHolystorm = 10,
      MaskTwilight = 34,
      MaskElemental = 28,
      MaskChromatic = 62,
      MaskMagical = 126,
      MaskChaos = 124,
      MaskCosmic = 106,
    }

    enum DamageclassType {
      Physical = 0,
      Magical = 1,
    }

    enum EnvironmentalDamageFlags {
      OneTime = 1,
      DmgIsPct = 2,
    }

    enum Environmentaldamagetype {
      Fatigue = 0,
      Drowning = 1,
      Falling = 2,
      Lava = 3,
      Slime = 4,
      Fire = 5,
    }

    enum TimeEventFlag {
      GlueScreenShortcut = 1,
      WeeklyReset = 2,
      GlobalLaunch = 4,
    }

    enum SelfResurrectOptionType {
      Spell = 0,
      Item = 1,
    }

    enum CompanionConfigSlotTypes {
      Role = 0,
      Utility = 1,
      Combat = 2,
    }

    enum CurioRarity {
      Common = 1,
      Uncommon = 2,
      Rare = 3,
      Epic = 4,
    }

    enum CompanionRoleType {
      Dps = 0,
      Heal = 1,
    }

    enum CurioType {
      Combat = 0,
      Utility = 1,
    }

    enum ActionBarOrientation {
      Horizontal = 0,
      Vertical = 1,
    }

    enum ActionBarVisibleSetting {
      Always = 0,
      InCombat = 1,
      OutOfCombat = 2,
      Hidden = 3,
    }

    enum AuraFrameIconDirection {
      Down = 0,
      Up = 1,
      Left = 0,
      Right = 1,
    }

    enum AuraFrameIconWrap {
      Down = 0,
      Up = 1,
      Left = 0,
      Right = 1,
    }

    enum AuraFrameOrientation {
      Horizontal = 0,
      Vertical = 1,
    }

    enum BagsDirection {
      Left = 0,
      Right = 1,
      Up = 0,
      Down = 1,
    }

    enum BagsOrientation {
      Horizontal = 0,
      Vertical = 1,
    }

    enum EditModeAccountSetting {
      ShowGrid = 0,
      GridSpacing = 1,
      SettingsExpanded = 2,
      ShowTargetAndFocus = 3,
      ShowStanceBar = 4,
      ShowPetActionBar = 5,
      ShowPossessActionBar = 6,
      ShowCastBar = 7,
      ShowEncounterBar = 8,
      ShowExtraAbilities = 9,
      ShowBuffsAndDebuffs = 10,
      DeprecatedShowDebuffFrame = 11,
      ShowPartyFrames = 12,
      ShowRaidFrames = 13,
      ShowTalkingHeadFrame = 14,
      ShowVehicleLeaveButton = 15,
      ShowBossFrames = 16,
      ShowArenaFrames = 17,
      ShowLootFrame = 18,
      ShowHudTooltip = 19,
      ShowStatusTrackingBar2 = 20,
      ShowDurabilityFrame = 21,
      EnableSnap = 22,
      EnableAdvancedOptions = 23,
      ShowPetFrame = 24,
      ShowTimerBars = 25,
      ShowVehicleSeatIndicator = 26,
      ShowArchaeologyBar = 27,
    }

    enum EditModeActionBarSetting {
      Orientation = 0,
      NumRows = 1,
      NumIcons = 2,
      IconSize = 3,
      IconPadding = 4,
      VisibleSetting = 5,
      HideBarArt = 6,
      DeprecatedSnapToSide = 7,
      HideBarScrolling = 8,
      AlwaysShowButtons = 9,
    }

    enum EditModeActionBarSystemIndices {
      MainBar = 1,
      Bar2 = 2,
      Bar3 = 3,
      RightBar1 = 4,
      RightBar2 = 5,
      ExtraBar1 = 6,
      ExtraBar2 = 7,
      ExtraBar3 = 8,
      StanceBar = 11,
      PetActionBar = 12,
      PossessActionBar = 13,
    }

    enum EditModeArchaeologyBarSetting {
      Size = 0,
    }

    enum EditModeAuraFrameSetting {
      Orientation = 0,
      IconWrap = 1,
      IconDirection = 2,
      IconLimitBuffFrame = 3,
      IconLimitDebuffFrame = 4,
      IconSize = 5,
      IconPadding = 6,
      DeprecatedShowFull = 7,
    }

    enum EditModeAuraFrameSystemIndices {
      BuffFrame = 1,
      DebuffFrame = 2,
    }

    enum EditModeBagsSetting {
      Orientation = 0,
      Direction = 1,
      Size = 2,
    }

    enum EditModeCastBarSetting {
      BarSize = 0,
      LockToPlayerFrame = 1,
      ShowCastTime = 2,
    }

    enum EditModeChatFrameSetting {
      WidthHundreds = 0,
      WidthTensAndOnes = 1,
      HeightHundreds = 2,
      HeightTensAndOnes = 3,
    }

    enum EditModeDurabilityFrameSetting {
      Size = 0,
    }

    enum EditModeLayoutType {
      Preset = 0,
      Account = 1,
      Character = 2,
      Override = 3,
    }

    enum EditModeMicroMenuSetting {
      Orientation = 0,
      Order = 1,
      Size = 2,
      EyeSize = 3,
    }

    enum EditModeMinimapSetting {
      HeaderUnderneath = 0,
      RotateMinimap = 1,
      Size = 2,
    }

    enum EditModeObjectiveTrackerSetting {
      Height = 0,
      Opacity = 1,
      TextSize = 2,
    }

    enum EditModePresetLayouts {
      Modern = 0,
      Classic = 1,
    }

    enum EditModeSettingDisplayType {
      Dropdown = 0,
      Checkbox = 1,
      Slider = 2,
    }

    enum EditModeStatusTrackingBarSetting {
      Height = 0,
      Width = 1,
      TextSize = 2,
    }

    enum EditModeStatusTrackingBarSystemIndices {
      StatusTrackingBar1 = 1,
      StatusTrackingBar2 = 2,
    }

    enum EditModeSystem {
      ActionBar = 0,
      CastBar = 1,
      Minimap = 2,
      UnitFrame = 3,
      EncounterBar = 4,
      ExtraAbilities = 5,
      AuraFrame = 6,
      TalkingHeadFrame = 7,
      ChatFrame = 8,
      VehicleLeaveButton = 9,
      LootFrame = 10,
      HudTooltip = 11,
      ObjectiveTracker = 12,
      MicroMenu = 13,
      Bags = 14,
      StatusTrackingBar = 15,
      DurabilityFrame = 16,
      TimerBars = 17,
      VehicleSeatIndicator = 18,
      ArchaeologyBar = 19,
    }

    enum EditModeTimerBarsSetting {
      Size = 0,
    }

    enum EditModeUnitFrameSetting {
      HidePortrait = 0,
      CastBarUnderneath = 1,
      BuffsOnTop = 2,
      UseLargerFrame = 3,
      UseRaidStylePartyFrames = 4,
      ShowPartyFrameBackground = 5,
      UseHorizontalGroups = 6,
      CastBarOnSide = 7,
      ShowCastTime = 8,
      ViewRaidSize = 9,
      FrameWidth = 10,
      FrameHeight = 11,
      DisplayBorder = 12,
      RaidGroupDisplayType = 13,
      SortPlayersBy = 14,
      RowSize = 15,
      FrameSize = 16,
      ViewArenaSize = 17,
    }

    enum EditModeUnitFrameSystemIndices {
      Player = 1,
      Target = 2,
      Focus = 3,
      Party = 4,
      Raid = 5,
      Boss = 6,
      Arena = 7,
      Pet = 8,
    }

    enum EditModeVehicleSeatIndicatorSetting {
      Size = 0,
    }

    enum MicroMenuOrder {
      Default = 0,
      Reverse = 1,
    }

    enum MicroMenuOrientation {
      Horizontal = 0,
      Vertical = 1,
    }

    enum RaidGroupDisplayType {
      SeparateGroupsVertical = 0,
      SeparateGroupsHorizontal = 1,
      CombineGroupsVertical = 2,
      CombineGroupsHorizontal = 3,
    }

    enum SortPlayersBy {
      Role = 0,
      Group = 1,
      Alphabetical = 2,
    }

    enum ViewArenaSize {
      Two = 0,
      Three = 1,
    }

    enum ViewRaidSize {
      Ten = 0,
      TwentyFive = 1,
      Forty = 2,
    }

    enum JournalEncounterFlags {
      Obsolete = 1,
      LimitDifficulties = 2,
      AllianceOnly = 4,
      HordeOnly = 8,
      NoMap = 16,
      InternalOnly = 32,
      DoNotDisplayEncounter = 64,
    }

    enum JournalEncounterIconFlags {
      Tank = 1,
      Dps = 2,
      Healer = 4,
      Heroic = 8,
      Deadly = 16,
      Important = 32,
      Interruptible = 64,
      Magic = 128,
      Curse = 256,
      Poison = 512,
      Disease = 1024,
      Enrage = 2048,
      Mythic = 4096,
      Bleed = 8192,
    }

    enum JournalEncounterItemFlags {
      Obsolete = 1,
      LimitDifficulties = 2,
      DisplayAsPerPlayerLoot = 4,
      DisplayAsVeryRare = 8,
      DisplayAsExtremelyRare = 16,
    }

    enum JournalEncounterLocFlags {
      Primary = 1,
    }

    enum JournalEncounterSecTypes {
      Generic = 0,
      Creature = 1,
      Ability = 2,
      Overview = 3,
    }

    enum JournalEncounterSectionFlags {
      StartExpanded = 1,
      LimitDifficulties = 2,
    }

    enum JournalInstanceFlags {
      Timewalker = 1,
      HideUserSelectableDifficulty = 2,
      DoNotDisplayInstance = 4,
    }

    enum JournalLinkTypes {
      Instance = 0,
      Encounter = 1,
      Section = 2,
      Tier = 3,
    }

    enum ItemSlotFilterType {
      Head = 0,
      Neck = 1,
      Shoulder = 2,
      Cloak = 3,
      Chest = 4,
      Wrist = 5,
      Hand = 6,
      Waist = 7,
      Legs = 8,
      Feet = 9,
      MainHand = 10,
      OffHand = 11,
      Finger = 12,
      Trinket = 13,
      Other = 14,
      NoFilter = 15,
    }

    enum SubscriptionInterstitialResponseType {
      Clicked = 0,
      Closed = 1,
      WebRedirect = 2,
    }

    enum SubscriptionInterstitialType {
      Standard = 0,
      LeftNpeArea = 1,
      MaxLevel = 2,
    }

    enum ExpansionLandingPageType {
      None = 0,
      Dragonflight = 1,
      WarWithin = 2,
    }

    enum ModelLightType {
      Directional = 0,
      Point = 1,
    }

    enum EventRealmQueues {
      None = 0,
      PlunderstormSolo = 1,
      PlunderstormDuo = 2,
      PlunderstormTrio = 4,
    }

    enum GameEnvironment {
      WoW = 0,
      WoWLabs = 1,
    }

    enum GamePadPowerLevel {
      Critical = 0,
      Low = 1,
      Medium = 2,
      High = 3,
      Wired = 4,
      Unknown = 5,
    }

    enum GameRuleFlags {
      None = 0,
      AllowClient = 1,
    }

    enum ContributionState {
      None = 0,
      Building = 1,
      Active = 2,
      UnderAttack = 3,
      Destroyed = 4,
    }

    enum CovenantSkill {
      Kyrian = 2730,
      Venthyr = 2731,
      NightFae = 2732,
      Necrolord = 2733,
    }

    enum CovenantType {
      None = 0,
      Kyrian = 1,
      Venthyr = 2,
      NightFae = 3,
      Necrolord = 4,
    }

    enum FollowerAbilityCastResult {
      Success = 0,
      Failure = 1,
      NoPendingCast = 2,
      InvalidTarget = 3,
      InvalidFollowerSpell = 4,
      RerollNotAllowed = 5,
      SingleMissionDuration = 6,
      MustTargetFollower = 7,
      MustTargetTrait = 8,
      InvalidFollowerType = 9,
      MustBeUnique = 10,
      CannotTargetLimitedUseFollower = 11,
      MustTargetLimitedUseFollower = 12,
      AlreadyAtMaxDurability = 13,
      CannotTargetNonAutoMissionFollower = 14,
    }

    enum GarrAutoBoardIndex {
      None = -1,
      AllyLeftBack = 0,
      AllyRightBack = 1,
      AllyLeftFront = 2,
      AllyCenterFront = 3,
      AllyRightFront = 4,
      EnemyLeftFront = 5,
      EnemyCenterLeftFront = 6,
      EnemyCenterRightFront = 7,
      EnemyRightFront = 8,
      EnemyLeftBack = 9,
      EnemyCenterLeftBack = 10,
      EnemyCenterRightBack = 11,
      EnemyRightBack = 12,
    }

    enum GarrAutoCombatSpellTutorialFlag {
      None = 0,
      Single = 1,
      Column = 2,
      Row = 3,
      All = 4,
    }

    enum GarrAutoCombatTutorial {
      SelectMission = 1,
      PlaceCompanion = 2,
      HealCompanion = 4,
      LevelHeal = 8,
      BeneficialEffect = 16,
      AttackSingle = 32,
      AttackColumn = 64,
      AttackRow = 128,
      AttackAll = 256,
      TroopTutorial = 512,
      EnvironmentalEffect = 1024,
    }

    enum GarrAutoCombatantRole {
      None = 0,
      Melee = 1,
      RangedPhysical = 2,
      RangedMagic = 3,
      HealSupport = 4,
      Tank = 5,
    }

    enum GarrAutoEventFlags {
      None = 0,
      AutoAttack = 1,
      Passive = 2,
      Environment = 4,
    }

    enum GarrAutoMissionEventType {
      MeleeDamage = 0,
      RangeDamage = 1,
      SpellMeleeDamage = 2,
      SpellRangeDamage = 3,
      Heal = 4,
      PeriodicDamage = 5,
      PeriodicHeal = 6,
      ApplyAura = 7,
      RemoveAura = 8,
      Died = 9,
    }

    enum GarrAutoPreviewTargetType {
      None = 0,
      Damage = 1,
      Heal = 2,
      Buff = 4,
      Debuff = 8,
    }

    enum GarrFollowerMissionCompleteState {
      Alive = 0,
      KilledByMissionFailure = 1,
      SavedByPreventDeath = 2,
      OutOfDurability = 3,
    }

    enum GarrFollowerQuality {
      None = 0,
      Common = 1,
      Uncommon = 2,
      Rare = 3,
      Epic = 4,
      Legendary = 5,
      Title = 6,
    }

    enum GarrTalentCostType {
      Initial = 0,
      Respec = 1,
      MakePermanent = 2,
      TreeReset = 3,
    }

    enum GarrTalentFeatureSubtype {
      Generic = 0,
      Bastion = 1,
      Revendreth = 2,
      Ardenweald = 3,
      Maldraxxus = 4,
    }

    enum GarrTalentFeatureType {
      Generic = 0,
      AnimaDiversion = 1,
      TravelPortals = 2,
      Adventures = 3,
      ReservoirUpgrades = 4,
      SanctumUnique = 5,
      SoulBinds = 6,
      AnimaDiversionMap = 7,
      Cyphers = 8,
    }

    enum GarrTalentResearchCostSource {
      Talent = 0,
      Tree = 1,
    }

    enum GarrTalentSocketType {
      None = 0,
      Spell = 1,
      Conduit = 2,
    }

    enum GarrTalentTreeType {
      Tiers = 0,
      Classic = 1,
    }

    enum GarrTalentType {
      Standard = 0,
      Minor = 1,
      Major = 2,
      Socket = 3,
    }

    enum GarrTalentUI {
      Generic = 0,
      CovenantSanctum = 1,
      SoulBinds = 2,
      AnimaDiversionMap = 3,
    }

    enum GarrisonTalentAvailability {
      Available = 0,
      Unavailable = 1,
      UnavailableAnotherIsResearching = 2,
      UnavailableNotEnoughResources = 3,
      UnavailableNotEnoughGold = 4,
      UnavailableTierUnavailable = 5,
      UnavailablePlayerCondition = 6,
      UnavailableAlreadyHave = 7,
      UnavailableRequiresPrerequisiteTalent = 8,
    }

    enum GarrisonFollowerType {
      FollowerType_6_0_GarrisonFollower = 1,
      FollowerType_6_0_Boat = 2,
      FollowerType_7_0_GarrisonFollower = 4,
      FollowerType_8_0_GarrisonFollower = 22,
      FollowerType_9_0_GarrisonFollower = 123,
    }

    enum GarrisonType {
      Type_6_0_Garrison = 2,
      Type_7_0_Garrison = 3,
      Type_8_0_Garrison = 9,
      Type_9_0_Garrison = 111,
    }

    enum GossipNpcOption {
      None = 0,
      Vendor = 1,
      Taxinode = 2,
      Trainer = 3,
      SpiritHealer = 4,
      Binder = 5,
      Banker = 6,
      PetitionVendor = 7,
      GuildTabardVendor = 8,
      Battlemaster = 9,
      Auctioneer = 10,
      TalentMaster = 11,
      Stablemaster = 12,
      PetSpecializationMaster = 13,
      GuildBanker = 14,
      Spellclick = 15,
      DisableXPGain = 16,
      EnableXPGain = 17,
      Mailbox = 18,
      WorldPvPQueue = 19,
      LFGDungeon = 20,
      ArtifactRespec = 21,
      CemeterySelect = 22,
      SpecializationMaster = 23,
      GlyphMaster = 24,
      QueueScenario = 25,
      GarrisonArchitect = 26,
      GarrisonMissionNpc = 27,
      ShipmentCrafter = 28,
      GarrisonTradeskillNpc = 29,
      GarrisonRecruitment = 30,
      AdventureMap = 31,
      GarrisonTalent = 32,
      ContributionCollector = 33,
      Transmogrify = 34,
      AzeriteRespec = 35,
      IslandsMissionNpc = 36,
      UIItemInteraction = 37,
      WorldMap = 38,
      Soulbind = 39,
      ChromieTimeNpc = 40,
      CovenantPreviewNpc = 41,
      RuneforgeLegendaryCrafting = 42,
      NewPlayerGuide = 43,
      RuneforgeLegendaryUpgrade = 44,
      CovenantRenownNpc = 45,
      BlackMarketAuctionHouse = 46,
      PerksProgramVendor = 47,
      ProfessionsCraftingOrder = 48,
      ProfessionsOpen = 49,
      ProfessionsCustomerOrder = 50,
      TraitSystem = 51,
      BarbersChoice = 52,
      MajorFactionRenown = 53,
      PersonalTabardVendor = 54,
      ForgeMaster = 55,
      CharacterBanker = 56,
      AccountBanker = 57,
    }

    enum GossipNpcOptionDisplayFlags {
      ForceInteractionOnSingleChoice = 1,
    }

    enum GossipOptionRecFlags {
      QuestLabelPrepend = 1,
      HideOptionIDFromClient = 2,
    }

    enum GossipOptionRewardType {
      Item = 0,
      Currency = 1,
    }

    enum GossipOptionStatus {
      Available = 0,
      Unavailable = 1,
      Locked = 2,
      AlreadyComplete = 3,
    }

    enum GossipOptionUIWidgetSetTypes {
      Modifiers = 0,
      Background = 1,
    }

    enum SummonStatus {
      None = 0,
      Pending = 1,
      Accepted = 2,
      Declined = 3,
    }

    enum NavigationState {
      Invalid = 0,
      Occluded = 1,
      InRange = 2,
      Disabled = 3,
    }

    enum InputContext {
      None = 0,
      Keyboard = 1,
      Mouse = 2,
      GamePad = 3,
    }

    enum BankType {
      Character = 0,
      Guild = 1,
      Account = 2,
    }

    enum BonusStatIndex {
      Mana = 0,
      Health = 1,
      Endurance = 2,
      Agility = 3,
      Strength = 4,
      Intellect = 5,
      SpiritUnused = 6,
      Stamina = 7,
      Energy = 8,
      Rage = 9,
      Focus = 10,
      WeaponSkillRatingObsolete = 11,
      DefenseSkillRating = 12,
      DodgeRating = 13,
      ParryRating = 14,
      BlockRating = 15,
      HitMeleeRating = 16,
      HitRangedRating = 17,
      HitSpellRating = 18,
      CritMeleeRating = 19,
      CritRangedRating = 20,
      CritSpellRating = 21,
      Corruption = 22,
      CorruptionResistance = 23,
      ModifiedCraftingStat_1 = 24,
      ModifiedCraftingStat_2 = 25,
      CritTakenRangedRatingObsolete = 26,
      CritTakenSpellRatingObsolete = 27,
      HasteMeleeRatingObsolete = 28,
      HasteRangedRatingObsolete = 29,
      HasteSpellRatingObsolete = 30,
      HitRating = 31,
      CritRating = 32,
      HitTakenRatingObsolete = 33,
      CritTakenRatingObsolete = 34,
      ResilienceRating = 35,
      HasteRating = 36,
      ExpertiseRating = 37,
      AttackPower = 38,
      RangedAttackPower = 39,
      Versatility = 40,
      SpellHealingDone = 41,
      SpellDamageDone = 42,
      ManaRegenerationObsolete = 43,
      Unused = 44,
      SpellPower = 45,
      HealthRegen = 46,
      SpellPenetration = 47,
      BlockValueObsolete = 48,
      MasteryRating = 49,
      ExtraArmor = 50,
      FireResistance = 51,
      FrostResistance = 52,
      HolyResistance = 53,
      ShadowResistance = 54,
      NatureResistance = 55,
      ArcaneResistance = 56,
      PvPPower = 57,
      CombatRatingUnused_0 = 58,
      CombatRatingUnused_2 = 59,
      CombatRatingUnused_3 = 60,
      CombatRatingSpeed = 61,
      CombatRatingLifesteal = 62,
      CombatRatingAvoidance = 63,
      CombatRatingSturdiness = 64,
      CombatRatingUnused_7 = 65,
      CombatRatingUnused_27 = 66,
      CombatRatingUnused_9 = 67,
      CombatRatingUnused_10 = 68,
      CombatRatingUnused_11 = 69,
      CombatRatingUnused_12 = 70,
      AgilityOrStrengthOrIntellect = 71,
      AgilityOrStrength = 72,
      AgilityOrIntellect = 73,
      StrengthOrIntellect = 74,
      ProfessionInspiration = 75,
      ProfessionResourcefulness = 76,
      ProfessionFinesse = 77,
      ProfessionDeftness = 78,
      ProfessionPerception = 79,
      ProfessionCraftingSpeed = 80,
      ProfessionMulticraft = 81,
      ProfessionIngenuity = 82,
    }

    enum InventoryType {
      IndexNonEquipType = 0,
      IndexHeadType = 1,
      IndexNeckType = 2,
      IndexShoulderType = 3,
      IndexBodyType = 4,
      IndexChestType = 5,
      IndexWaistType = 6,
      IndexLegsType = 7,
      IndexFeetType = 8,
      IndexWristType = 9,
      IndexHandType = 10,
      IndexFingerType = 11,
      IndexTrinketType = 12,
      IndexWeaponType = 13,
      IndexShieldType = 14,
      IndexRangedType = 15,
      IndexCloakType = 16,
      Index2HweaponType = 17,
      IndexBagType = 18,
      IndexTabardType = 19,
      IndexRobeType = 20,
      IndexWeaponmainhandType = 21,
      IndexWeaponoffhandType = 22,
      IndexHoldableType = 23,
      IndexAmmoType = 24,
      IndexThrownType = 25,
      IndexRangedrightType = 26,
      IndexQuiverType = 27,
      IndexRelicType = 28,
      IndexProfessionToolType = 29,
      IndexProfessionGearType = 30,
      IndexEquipablespellOffensiveType = 31,
      IndexEquipablespellUtilityType = 32,
      IndexEquipablespellDefensiveType = 33,
      IndexEquipablespellWeaponType = 34,
    }

    enum ItemArmorSubclass {
      Generic = 0,
      Cloth = 1,
      Leather = 2,
      Mail = 3,
      Plate = 4,
      Cosmetic = 5,
      Shield = 6,
      Libram = 7,
      Idol = 8,
      Totem = 9,
      Sigil = 10,
      Relic = 11,
    }

    enum ItemBind {
      None = 0,
      OnAcquire = 1,
      OnEquip = 2,
      OnUse = 3,
      Quest = 4,
      Unused1 = 5,
      Unused2 = 6,
      ToWoWAccount = 7,
      ToBnetAccount = 8,
      ToBnetAccountUntilEquipped = 9,
    }

    enum ItemClass {
      Consumable = 0,
      Container = 1,
      Weapon = 2,
      Gem = 3,
      Armor = 4,
      Reagent = 5,
      Projectile = 6,
      Tradegoods = 7,
      ItemEnhancement = 8,
      Recipe = 9,
      CurrencyTokenObsolete = 10,
      Quiver = 11,
      Questitem = 12,
      Key = 13,
      PermanentObsolete = 14,
      Miscellaneous = 15,
      Glyph = 16,
      Battlepet = 17,
      WoWToken = 18,
      Profession = 19,
    }

    enum ItemConsumableSubclass {
      Generic = 0,
      Potion = 1,
      Elixir = 2,
      Flasksphials = 3,
      Scroll = 4,
      Fooddrink = 5,
      Itemenhancement = 6,
      Bandage = 7,
      Other = 8,
      VantusRune = 9,
      UtilityCurio = 10,
      CombatCurio = 11,
    }

    enum ItemGemColor {
      Meta = 1,
      Red = 2,
      Yellow = 4,
      Blue = 8,
      Hydraulic = 16,
      Cogwheel = 32,
      Iron = 64,
      Blood = 128,
      Shadow = 256,
      Fel = 512,
      Arcane = 1024,
      Frost = 2048,
      Fire = 4096,
      Water = 8192,
      Life = 16384,
      Wind = 32768,
      Holy = 65536,
      PunchcardRed = 131072,
      PunchcardYellow = 262144,
      PunchcardBlue = 524288,
      DominationBlood = 1048576,
      DominationFrost = 2097152,
      DominationUnholy = 4194304,
      Cypher = 8388608,
      Tinker = 16777216,
      Primordial = 33554432,
      Fragrance = 67108864,
    }

    enum ItemMiscellaneousSubclass {
      Junk = 0,
      Reagent = 1,
      CompanionPet = 2,
      Holiday = 3,
      Other = 4,
      Mount = 5,
      MountEquipment = 6,
    }

    enum ItemProfessionSubclass {
      Blacksmithing = 0,
      Leatherworking = 1,
      Alchemy = 2,
      Herbalism = 3,
      Cooking = 4,
      Mining = 5,
      Tailoring = 6,
      Engineering = 7,
      Enchanting = 8,
      Fishing = 9,
      Skinning = 10,
      Jewelcrafting = 11,
      Inscription = 12,
      Archaeology = 13,
    }

    enum ItemQuality {
      Poor = 0,
      Common = 1,
      Uncommon = 2,
      Rare = 3,
      Epic = 4,
      Legendary = 5,
      Artifact = 6,
      Heirloom = 7,
      WoWToken = 8,
    }

    enum ItemReagentSubclass {
      Reagent = 0,
      Keystone = 1,
      ContextToken = 2,
    }

    enum ItemRecipeSubclass {
      Book = 0,
      Leatherworking = 1,
      Tailoring = 2,
      Engineering = 3,
      Blacksmithing = 4,
      Cooking = 5,
      Alchemy = 6,
      FirstAid = 7,
      Enchanting = 8,
      Fishing = 9,
      Jewelcrafting = 10,
      Inscription = 11,
    }

    enum ItemSocketType {
      None = 0,
      Meta = 1,
      Red = 2,
      Yellow = 3,
      Blue = 4,
      Hydraulic = 5,
      Cogwheel = 6,
      Prismatic = 7,
      Iron = 8,
      Blood = 9,
      Shadow = 10,
      Fel = 11,
      Arcane = 12,
      Frost = 13,
      Fire = 14,
      Water = 15,
      Life = 16,
      Wind = 17,
      Holy = 18,
      PunchcardRed = 19,
      PunchcardYellow = 20,
      PunchcardBlue = 21,
      Domination = 22,
      Cypher = 23,
      Tinker = 24,
      Primordial = 25,
      Fragrance = 26,
    }

    enum ItemSubclassDisplay {
      HideSubclassInTooltips = 1,
      HideSubclassInAuction = 2,
      ShowItemCount = 4,
    }

    enum ItemSubclassFlag {
      WeaponsubclassCanparry = 1,
      WeaponsubclassSetfingerseq = 2,
      WeaponsubclassIsunarmed = 4,
      WeaponsubclassIsrifle = 8,
      WeaponsubclassIsthrown = 16,
      WeaponsubclassRighthandRanged = 32,
      ItemsubclassQuivernotrequired = 64,
      WeaponsubclassRanged = 128,
      WeaponsubclassDeprecatedReuseMe = 256,
      ItemsubclassUsesInvtype = 512,
      ArmorsubclassLfgscalingarmor = 1024,
    }

    enum ItemWeaponSubclass {
      Axe1H = 0,
      Axe2H = 1,
      Bows = 2,
      Guns = 3,
      Mace1H = 4,
      Mace2H = 5,
      Polearm = 6,
      Sword1H = 7,
      Sword2H = 8,
      Warglaive = 9,
      Staff = 10,
      Bearclaw = 11,
      Catclaw = 12,
      Unarmed = 13,
      Generic = 14,
      Dagger = 15,
      Thrown = 16,
      Obsolete3 = 17,
      Crossbow = 18,
      Wand = 19,
      Fishingpole = 20,
    }

    enum Itemclassfilterflags {
      Consumable = 1,
      Container = 2,
      Weapon = 4,
      Gem = 8,
      Armor = 16,
      Reagent = 32,
      Projectile = 64,
      Tradegoods = 128,
      ItemEnhancement = 256,
      Recipe = 512,
      CurrencyTokenObsolete = 1024,
      Quiver = 2048,
      Questitemclassfilterflags = 4096,
      Key = 8192,
      PermanentObsolete = 16384,
      Miscellaneous = 32768,
      Glyph = 65536,
      Battlepet = 131072,
    }

    enum Itemsetflags {
      Legacy = 1,
      UseItemHistorySetSlots = 2,
      RequiresPvPTalentsActive = 4,
    }

    enum SlotRegion {
      Invalid = 0,
      PlayerEquip = 1,
      PlayerBags = 2,
      PlayerInv = 3,
      Bank = 4,
      ReagentBank = 5,
      AccountBank = 6,
    }

    enum SlotRegionMask {
      Invalid = 1,
      PlayerEquip = 2,
      PlayerBags = 4,
      PlayerInv = 8,
      Bank = 16,
      ReagentBank = 32,
      AccountBank = 64,
    }

    enum SubcontainerType {
      Bag = 0,
      Equipped = 1,
      Bankgeneric = 2,
      Bankbag = 3,
      Mail = 4,
      Auction = 5,
      KeyringObsolete = 6,
      GuildBank0 = 7,
      GuildBank1 = 8,
      GuildBank2 = 9,
      GuildBank3 = 10,
      GuildBank4 = 11,
      GuildBank5 = 12,
      GuildOverflow = 13,
      Equipablespells = 14,
      CurrencytokenOboslete = 15,
      GuildBank6 = 16,
      GuildBank7 = 17,
      GuildBank8 = 18,
      GuildBank9 = 19,
      GuildBank10 = 20,
      GuildBank11 = 21,
      Reagentbank = 22,
      Childequipmentstorage = 23,
      Quarantine = 24,
      CreatedImmediately = 25,
      BuybackSlots = 26,
      CachedReward = 27,
      EquippedBags = 28,
      EquippedProfession1 = 29,
      EquippedProfession2 = 30,
      EquippedCooking = 31,
      EquippedFishing = 32,
      EquippedReagentbag = 33,
      CraftingOrder = 34,
      CraftingOrderReagents = 35,
      AccountBankTabs = 36,
    }

    enum UIItemInteractionFlags {
      DisplayWithInset = 1,
      ConfirmationHasDelay = 2,
      ConversionMode = 4,
      ClickShowsFlyout = 8,
      AddCurrency = 16,
      UsesCharges = 32,
    }

    enum UIItemInteractionType {
      None = 0,
      CastSpell = 1,
      CleanseCorruption = 2,
      RunecarverScrapping = 3,
      ItemConversion = 4,
    }

    enum ItemGemSubclass {
      Intellect = 0,
      Agility = 1,
      Strength = 2,
      Stamina = 3,
      Spirit = 4,
      Criticalstrike = 5,
      Mastery = 6,
      Haste = 7,
      Versatility = 8,
      Other = 9,
      Multiplestats = 10,
      Artifactrelic = 11,
    }

    enum ItemRedundancySlot {
      Head = 0,
      Neck = 1,
      Shoulder = 2,
      Chest = 3,
      Waist = 4,
      Legs = 5,
      Feet = 6,
      Wrist = 7,
      Hand = 8,
      Finger = 9,
      Trinket = 10,
      Cloak = 11,
      Twohand = 12,
      MainhandWeapon = 13,
      OnehandWeapon = 14,
      OnehandWeaponSecond = 15,
      Offhand = 16,
    }

    enum PointsModifierSourceType {
      PlayerLevel = 0,
      SkillRank = 1,
      ProgressiveEventMissCount = 2,
      ProgressiveEventItemWinCount = 3,
      NumLooters = 4,
      BaseItemLevel = 5,
      LootLevel = 6,
      InstanceGroupSize = 7,
      QuestItemGroupMissCount = 8,
      TreasureItemPvalue = 9,
      FollowerLevelInBuilding = 10,
      FollowerQualityInBuilding = 11,
      NumGroupFriends = 12,
      FollowerLevelForCurrentShipment = 13,
      FollowerQualityForCurrentShipment = 14,
      PvPBracketRatingSpecific = 15,
      ChallengeModeLevel = 16,
      CurrencyMaxDelta = 17,
      WorldStateValue = 18,
      PlayerKeystoneLevel = 19,
      PlayerCondition = 20,
      PassesTreasureTrackingQuestEligibility = 21,
      PvPBracketRatingCurrentInstance = 22,
      PvPTeamSize = 23,
      ItemLevelHighWaterMarkAverage = 24,
      ProgressiveEventNumWinsForLootSpec = 25,
      ProgressiveEventNumRemainingForLootSpec = 26,
      WorldStateExpression = 27,
      ProgressiveEventNumRemainingForClass = 28,
      CreatureClassification = 29,
      HonorEarnedThisPvPMatch = 30,
      NumTappers = 31,
      PvPJackpotTier = 32,
      PlayerLevelContentTuningMax = 33,
      SalvagedItemIsCloth = 34,
      SalvagedItemIsLeather = 35,
      SalvagedItemIsMail = 36,
      SalvagedItemIsPlate = 37,
      SalvagedItemIsMisc = 38,
      QuestExpansionID = 39,
      Reserved_2 = 40,
      JailersTowerActiveFloorDifficulty = 41,
      NumLootSourceAuraStacks = 42,
      HasLegendaryCloakUpdgradeAvailable = 43,
      ObjectLevel = 44,
      PercentThroughContentTuning = 45,
      PvPTier = 46,
      CurrencyQuantity = 47,
      AreaGroup = 48,
      ObjectLabelID = 49,
      WeeklyMythicPlusCount = 50,
      PercentThroughExpansion = 51,
      AutoMissionScalar = 52,
      RenownCatchup = 53,
      RenownRapidCatchup = 54,
      ParagonLevel = 55,
      NumPlayersThatGainedDungeonScore = 56,
      ProfessionQualityLevel = 57,
      CraftSkill = 58,
      NumWeeklyRewardsThresholdsEarned = 59,
      SalvagedItemLevel = 60,
      ProfessionRatingFinessePercent = 61,
      ProfessionRatingPerceptionPercent = 62,
      ProfessionTraitRanksByLabel = 63,
      CreatureHealthMod = 64,
      FirstTimeQuestCompletionRewards = 65,
      PointsModifierSet = 66,
    }

    enum BindingSet {
      Default = 0,
      Account = 1,
      Character = 2,
      Current = 3,
    }

    enum CustomBindingType {
      VoicePushToTalk = 0,
    }

    enum RuneforgePowerFilter {
      All = 0,
      Relevant = 1,
      Available = 2,
      Unavailable = 3,
    }

    enum RuneforgePowerState {
      Available = 0,
      Unavailable = 1,
      Invalid = 2,
    }

    enum LFGEntryPlaystyle {
      None = 0,
      Standard = 1,
      Casual = 2,
      Hardcore = 3,
    }

    enum LFGListFilter {
      Recommended = 1,
      NotRecommended = 2,
      PvE = 4,
      PvP = 8,
      Timerunning = 16,
      CurrentExpansion = 32,
      CurrentSeason = 64,
      NotCurrentSeason = 128,
    }

    enum LFGRole {
      Tank = 0,
      Healer = 1,
      Damage = 2,
    }

    enum LFGListDisplayType {
      RoleCount = 0,
      RoleEnumerate = 1,
      ClassEnumerate = 2,
      HideAll = 3,
      PlayerCount = 4,
      Comment = 5,
    }

    enum LootSlotType {
      None = 0,
      Item = 1,
      Money = 2,
      Currency = 3,
    }

    enum EncounterLootDropRollState {
      NeedMainSpec = 0,
      NeedOffSpec = 1,
      Transmog = 2,
      Greed = 3,
      NoRoll = 4,
      Pass = 5,
    }

    enum MajorFactionFeatureAbility {
      Generic = 0,
      Fishing = 1,
      Hunts = 2,
    }

    enum MajorFactionType {
      None = 0,
      DragonscaleExpedition = 1,
      MaruukCentaur = 2,
      IskaaraTuskarr = 3,
      ValdrakkenAccord = 4,
    }

    enum MapCanvasPosition {
      None = 0,
      BottomLeft = 1,
      BottomRight = 2,
      TopLeft = 3,
      TopRight = 4,
    }

    enum UIMapFlag {
      NoHighlight = 1,
      ShowOverlays = 2,
      ShowTaxiNodes = 4,
      GarrisonMap = 8,
      FallbackToParentMap = 16,
      NoHighlightTexture = 32,
      ShowTaskObjectives = 64,
      NoWorldPositions = 128,
      HideArchaeologyDigs = 256,
      DoNotTranslateBranches = 512,
      HideIcons = 1024,
      HideVignettes = 2048,
      ForceAllOverlayExplored = 4096,
      FlightMapShowZoomOut = 8192,
      FlightMapAutoZoom = 16384,
      ForceOnNavbar = 32768,
      AlwaysAllowUserWaypoints = 65536,
      AlwaysAllowTaxiPathing = 131072,
      ForceAllowMapLinks = 262144,
      DoNotShowOnNavbar = 524288,
      IsCityMap = 1048576,
    }

    enum UIMapGroupFlag {
      ShowIconsAcrossFloors = 1,
    }

    enum UIMapSystem {
      World = 0,
      Taxi = 1,
      Adventure = 2,
      Minimap = 3,
    }

    enum UIMapType {
      Cosmic = 0,
      World = 1,
      Continent = 2,
      Zone = 3,
      Dungeon = 4,
      Micro = 5,
      Orphan = 6,
    }

    enum MinimapTrackingFilter {
      Unfiltered = 0,
      Auctioneer = 1,
      Banker = 2,
      Battlemaster = 4,
      TaxiNode = 8,
      VenderFood = 16,
      Innkeeper = 32,
      Mailbox = 64,
      TrainerProfession = 128,
      VendorReagent = 256,
      Repair = 512,
      TrivialQuests = 1024,
      Stablemaster = 2048,
      Transmogrifier = 4096,
      POI = 8192,
      Target = 16384,
      Focus = 32768,
      QuestPoIs = 65536,
      Digsites = 131072,
      Barber = 262144,
      ItemUpgrade = 524288,
      VendorPoison = 1048576,
      AccountCompletedQuests = 2097152,
      AccountBanker = 4194304,
    }

    enum ModelBlendOperation {
      None = 0,
      Anim = 1,
    }

    enum MountType {
      Ground = 0,
      Flying = 1,
      Aquatic = 2,
      Dragonriding = 3,
      RideAlong = 4,
    }

    enum MountTypeFlag {
      IsFlyingMount = 1,
      IsAquaticMount = 2,
      IsDragonRidingMount = 4,
      IsRideAlongMount = 8,
    }

    enum AvgItemLevelCategories {
      Base = 0,
      EquippedBase = 1,
      EquippedEffective = 2,
      PvP = 3,
      PvPWeighted = 4,
      EquippedEffectiveWeighted = 5,
    }

    enum RestrictPingsTo {
      None = 0,
      Lead = 1,
      Assist = 2,
      TankHealer = 3,
    }

    enum PartyRequestJoinRelation {
      None = 0,
      Friend = 1,
      Guild = 2,
      Club = 3,
      NumPartyRequestJoinRelations = 4,
    }

    enum PartyPoseFlags {
      HideLeaveInstanceButton = 1,
    }

    enum PerksVendorCategoryType {
      Transmog = 1,
      Mount = 2,
      Pet = 3,
      Toy = 5,
      Illusion = 7,
      Transmogset = 8,
    }

    enum PetBattleQueueStatus {
      None = 0,
      Queued = 1,
      QueuedUpdate = 2,
      AlreadyQueued = 3,
      JoinFailed = 4,
      JoinFailedSlots = 5,
      JoinFailedJournalLock = 6,
      JoinFailedNeutral = 7,
      MatchAccepted = 8,
      MatchDeclined = 9,
      MatchOpponentDeclined = 10,
      ProposalTimedOut = 11,
      Removed = 12,
      RequeuedAfterInternalError = 13,
      RequeuedAfterOpponentRemoved = 14,
      Matchmaking = 15,
      LostConnection = 16,
      Shutdown = 17,
      Suspended = 18,
      Unsuspended = 19,
      InBattle = 20,
      NoBattlingHere = 21,
    }

    enum PetbattleAuraStateFlags {
      None = 0,
      Infinite = 1,
      Canceled = 2,
      InitDisabled = 4,
      CountdownFirstRound = 8,
      JustApplied = 16,
      RemoveEventHandled = 32,
    }

    enum PetbattleCheatFlags {
      None = 0,
      AutoPlay = 1,
    }

    enum PetbattleEffectFlags {
      None = 0,
      InvalidTarget = 1,
      Miss = 2,
      Crit = 4,
      Blocked = 8,
      Dodge = 16,
      Heal = 32,
      Unkillable = 64,
      Reflect = 128,
      Absorb = 256,
      Immune = 512,
      Strong = 1024,
      Weak = 2048,
      SuccessChain = 4096,
      AuraReapply = 8192,
    }

    enum PetbattleEffectType {
      SetHealth = 0,
      AuraApply = 1,
      AuraCancel = 2,
      AuraChange = 3,
      PetSwap = 4,
      StatusChange = 5,
      SetState = 6,
      SetMaxHealth = 7,
      SetSpeed = 8,
      SetPower = 9,
      TriggerAbility = 10,
      AbilityChange = 11,
      NpcEmote = 12,
      AuraProcessingBegin = 13,
      AuraProcessingEnd = 14,
      ReplacePet = 15,
      OverrideAbility = 16,
      WorldStateUpdate = 17,
    }

    enum PetbattleEnviros {
      Pad0 = 0,
      Pad1 = 1,
      Weather = 2,
    }

    enum PetbattleInputMoveMsgDebugFlag {
      None = 0,
      DontValidate = 1,
      EnemyCast = 2,
    }

    enum PetbattleMoveType {
      Quit = 0,
      Ability = 1,
      Swap = 2,
      Trap = 3,
      FinalRoundOk = 4,
      Pass = 5,
    }

    enum PetbattlePboid {
      P0Pet_0 = 0,
      P0Pet_1 = 1,
      P0Pet_2 = 2,
      P1Pet_0 = 3,
      P1Pet_1 = 4,
      P1Pet_2 = 5,
      EnvPad_0 = 6,
      EnvPad_1 = 7,
      EnvWeather = 8,
    }

    enum PetbattlePetStatus {
      FlagNone = 0,
      FlagTrapped = 1,
      Stunned = 2,
      SwapOutLocked = 4,
      SwapInLocked = 8,
    }

    enum PetbattlePlayer {
      Player_0 = 0,
      Player_1 = 1,
    }

    enum PetbattlePlayerInputFlags {
      None = 0,
      TurnInProgress = 1,
      AbilityLocked = 2,
      SwapLocked = 4,
      WaitingForPet = 8,
    }

    enum PetbattleResult {
      FailUnknown = 0,
      FailNotHere = 1,
      FailNotHereOnTransport = 2,
      FailNotHereUnevenGround = 3,
      FailNotHereObstructed = 4,
      FailNotWhileInCombat = 5,
      FailNotWhileDead = 6,
      FailNotWhileFlying = 7,
      FailTargetInvalid = 8,
      FailTargetOutOfRange = 9,
      FailTargetNotCapturable = 10,
      FailNotATrainer = 11,
      FailDeclined = 12,
      FailInBattle = 13,
      FailInvalidLoadout = 14,
      FailInvalidLoadoutAllDead = 15,
      FailInvalidLoadoutNoneSlotted = 16,
      FailNoJournalLock = 17,
      FailWildPetTapped = 18,
      FailRestrictedAccount = 19,
      FailOpponentNotAvailable = 20,
      FailLogout = 21,
      FailDisconnect = 22,
      Success = 23,
    }

    enum PetbattleSlot {
      Slot_0 = 0,
      Slot_1 = 1,
      Slot_2 = 2,
    }

    enum PetbattleSlotAbility {
      Ability_0 = 0,
      Ability_1 = 1,
      Ability_2 = 2,
    }

    enum PetbattleSlotResult {
      Success = 0,
      SlotLocked = 1,
      SlotEmpty = 2,
      NoTracker = 3,
      NoSpeciesRec = 4,
      CantBattle = 5,
      Revoked = 6,
      Dead = 7,
      NoPet = 8,
    }

    enum PetbattleState {
      Created = 0,
      WaitingPreBattle = 1,
      RoundInProgress = 2,
      WaitingForFrontPets = 3,
      CreatedFailed = 4,
      FinalRound = 5,
      Finished = 6,
    }

    enum PetbattleTrapstatus {
      Invalid = 0,
      CanTrap = 1,
      CantTrapNewbie = 2,
      CantTrapPetDead = 3,
      CantTrapPetHealth = 4,
      CantTrapNoRoomInJournal = 5,
      CantTrapPetNotCapturable = 6,
      CantTrapTrainerBattle = 7,
      CantTrapTwice = 8,
    }

    enum PetbattleType {
      PvE = 0,
      PvP = 1,
      Lfpb = 2,
      Npc = 3,
    }

    enum PetJournalError {
      None = 0,
      PetIsDead = 1,
      JournalIsLocked = 2,
      InvalidFaction = 3,
      NoFavoritesToSummon = 4,
      NoValidRandomSummon = 5,
    }

    enum PingMode {
      KeyDown = 0,
      ClickDrag = 1,
    }

    enum PingResult {
      Success = 0,
      FailedGeneric = 1,
      FailedSpamming = 2,
      FailedDisabledByLeader = 3,
      FailedDisabledBySettings = 4,
      FailedOutOfPingArea = 5,
      FailedSquelched = 6,
      FailedUnspecified = 7,
    }

    enum PingSubjectType {
      Attack = 0,
      Warning = 1,
      Assist = 2,
      OnMyWay = 3,
      AlertThreat = 4,
      AlertNotThreat = 5,
    }

    enum PingTypeFlags {
      DefaultPing = 1,
    }

    enum ClientPlatformType {
      Windows = 0,
      Macintosh = 1,
    }

    enum PlayerChoiceRarity {
      Common = 0,
      Uncommon = 1,
      Rare = 2,
      Epic = 3,
    }

    enum PlayerInteractionType {
      None = 0,
      TradePartner = 1,
      Item = 2,
      Gossip = 3,
      QuestGiver = 4,
      Merchant = 5,
      TaxiNode = 6,
      Trainer = 7,
      Banker = 8,
      AlliedRaceDetailsGiver = 9,
      GuildBanker = 10,
      Registrar = 11,
      Vendor = 12,
      PetitionVendor = 13,
      GuildTabardVendor = 14,
      TalentMaster = 15,
      SpecializationMaster = 16,
      MailInfo = 17,
      SpiritHealer = 18,
      AreaSpiritHealer = 19,
      Binder = 20,
      Auctioneer = 21,
      StableMaster = 22,
      BattleMaster = 23,
      Transmogrifier = 24,
      LFGDungeon = 25,
      VoidStorageBanker = 26,
      BlackMarketAuctioneer = 27,
      AdventureMap = 28,
      WorldMap = 29,
      GarrArchitect = 30,
      GarrTradeskill = 31,
      GarrMission = 32,
      ShipmentCrafter = 33,
      GarrRecruitment = 34,
      GarrTalent = 35,
      Trophy = 36,
      PlayerChoice = 37,
      ArtifactForge = 38,
      ObliterumForge = 39,
      ScrappingMachine = 40,
      ContributionCollector = 41,
      AzeriteRespec = 42,
      IslandQueue = 43,
      ItemInteraction = 44,
      ChromieTime = 45,
      CovenantPreview = 46,
      AnimaDiversion = 47,
      LegendaryCrafting = 48,
      WeeklyRewards = 49,
      Soulbind = 50,
      CovenantSanctum = 51,
      NewPlayerGuide = 52,
      ItemUpgrade = 53,
      AdventureJournal = 54,
      Renown = 55,
      AzeriteForge = 56,
      PerksProgramVendor = 57,
      ProfessionsCraftingOrder = 58,
      Professions = 59,
      ProfessionsCustomerOrder = 60,
      TraitSystem = 61,
      BarbersChoice = 62,
      JailersTowerBuffs = 63,
      MajorFactionRenown = 64,
      PersonalTabardVendor = 65,
      ForgeMaster = 66,
      CharacterBanker = 67,
      AccountBanker = 68,
    }

    enum PlayerMentorshipApplicationResult {
      Success = 0,
      AlreadyMentor = 1,
      Ineligible = 2,
    }

    enum PlayerMentorshipStatus {
      None = 0,
      Newcomer = 1,
      Mentor = 2,
    }

    enum BalanceType {
      None = -1,
      Eclipse = 0,
    }

    enum PowerType {
      Mana = 0,
      Rage = 1,
      Focus = 2,
      Energy = 3,
      ComboPoints = 4,
      Runes = 5,
      RunicPower = 6,
      SoulShards = 7,
      LunarPower = 8,
      HolyPower = 9,
      Alternate = 10,
      Maelstrom = 11,
      Chi = 12,
      Insanity = 13,
      Obsolete = 14,
      Obsolete2 = 15,
      ArcaneCharges = 16,
      Fury = 17,
      Pain = 18,
      Essence = 19,
      RuneBlood = 20,
      RuneFrost = 21,
      RuneUnholy = 22,
      AlternateQuest = 23,
      AlternateEncounter = 24,
      AlternateMount = 25,
      Balance = 26,
    }

    enum PowerTypeSign {
      None = -1,
      Positive = 0,
      Negative = 1,
    }

    enum PowerTypeSlot {
      Slot_0 = 0,
      Slot_1 = 1,
      Slot_2 = 2,
      Slot_3 = 3,
      Slot_4 = 4,
      Slot_5 = 5,
      Slot_6 = 6,
      Slot_7 = 7,
      Slot_8 = 8,
      Slot_9 = 9,
    }

    enum CraftingOrderDuration {
      Short = 0,
      Medium = 1,
      Long = 2,
    }

    enum CraftingOrderFlags {
      IsRecraft = 1,
      HasNoneReagents = 2,
      HasSomeReagents = 4,
      HasAllReagents = 8,
      IsFulfillable = 16,
    }

    enum CraftingOrderItemType {
      Reagent = 0,
      Recraft = 1,
      CraftedResult = 2,
      RemoveReagent = 3,
      NpcProvided = 4,
    }

    enum CraftingOrderReagentSource {
      Any = 0,
      Customer = 1,
      Crafter = 2,
      None = 3,
    }

    enum CraftingOrderResult {
      Ok = 0,
      Aborted = 1,
      AlreadyClaimed = 2,
      AlreadyCrafted = 3,
      CannotBeOrdered = 4,
      CannotCancel = 5,
      CannotClaim = 6,
      CannotClaimOwnOrder = 7,
      CannotCraft = 8,
      CannotCreate = 9,
      CannotFulfill = 10,
      CannotRecraft = 11,
      CannotReject = 12,
      CannotRelease = 13,
      CrafterIsIgnored = 14,
      DatabaseError = 15,
      Expired = 16,
      Locked = 17,
      InvalidDuration = 18,
      InvalidMinQuality = 19,
      InvalidNotes = 20,
      InvalidReagent = 21,
      InvalidRealm = 22,
      InvalidRecipe = 23,
      InvalidRecraftItem = 24,
      InvalidSort = 25,
      InvalidTarget = 26,
      InvalidType = 27,
      MaxOrdersReached = 28,
      MissingCraftingTable = 29,
      MissingItem = 30,
      MissingNpc = 31,
      MissingOrder = 32,
      MissingRecraftItem = 33,
      NoAccountItems = 34,
      NotClaimed = 35,
      NotCrafted = 36,
      NotInGuild = 37,
      NotYetImplemented = 38,
      OutOfPublicOrderCapacity = 39,
      ServerIsNotAvailable = 40,
      ThrottleViolation = 41,
      TargetCannotCraft = 42,
      TargetLocked = 43,
      Timeout = 44,
      TooManyItems = 45,
      WrongVersion = 46,
    }

    enum CraftingOrderSortType {
      ItemName = 0,
      AveTip = 1,
      MaxTip = 2,
      Quantity = 3,
      Reagents = 4,
      Tip = 5,
      TimeRemaining = 6,
      Status = 7,
    }

    enum CraftingOrderState {
      None = 0,
      Creating = 1,
      Created = 2,
      Claiming = 3,
      Claimed = 4,
      Rejecting = 5,
      Rejected = 6,
      Releasing = 7,
      Crafting = 8,
      Recrafting = 9,
      Fulfilling = 10,
      Fulfilled = 11,
      Canceling = 12,
      Canceled = 13,
      Expiring = 14,
      Expired = 15,
    }

    enum CraftingOrderType {
      Public = 0,
      Guild = 1,
      Personal = 2,
      Npc = 3,
    }

    enum CraftingReagentType {
      Modifying = 0,
      Basic = 1,
      Finishing = 2,
      Automatic = 3,
    }

    enum ItemRecraftFlags {
      ItemRecraftFlagInvalid = 1,
    }

    enum NpcCraftingOrderSetFlags {
      CraftingOrderFlagAllowMultiple = 1,
      CraftingOrderFlagAllowDuplicate = 2,
    }

    enum Profession {
      FirstAid = 0,
      Blacksmithing = 1,
      Leatherworking = 2,
      Alchemy = 3,
      Herbalism = 4,
      Cooking = 5,
      Mining = 6,
      Tailoring = 7,
      Engineering = 8,
      Enchanting = 9,
      Fishing = 10,
      Skinning = 11,
      Jewelcrafting = 12,
      Inscription = 13,
      Archaeology = 14,
    }

    enum ProfessionActionType {
      Craft = 0,
      Gather = 1,
    }

    enum ProfessionEffect {
      Skill = 0,
      StatInspiration = 1,
      StatResourcefulness = 2,
      StatFinesse = 3,
      StatDeftness = 4,
      StatPerception = 5,
      StatCraftingSpeed = 6,
      StatMulticraft = 7,
      UnlockReagentSlot = 8,
      ModInspiration = 9,
      ModResourcefulness = 10,
      ModFinesse = 11,
      ModDeftness = 12,
      ModPerception = 13,
      ModCraftingSpeed = 14,
      ModMulticraft = 15,
      ModUnused_1 = 16,
      ModUnused_2 = 17,
      ModCraftExtraQuantity = 18,
      ModGatherExtraQuantity = 19,
      ModCraftCritSize = 20,
      ModCraftReductionQuantity = 21,
      DecreaseDifficulty = 22,
      IncreaseDifficulty = 23,
      ModSkillGain = 24,
      AccumulateRanksByLabel = 25,
      StatIngenuity = 26,
      ModConcentration = 27,
      Tokenizer = 28,
      ModIngenuity = 29,
      ConcentrationRefund = 30,
    }

    enum ProfessionRating {
      Inspiration = 0,
      Resourcefulness = 1,
      Finesse = 2,
      Deftness = 3,
      Perception = 4,
      CraftingSpeed = 5,
      Multicraft = 6,
      Ingenuity = 7,
      Unused_2 = 8,
    }

    enum ProfessionRatingType {
      Craft = 0,
      Gather = 1,
    }

    enum RcoCloseReason {
      RcoCloseFulfill = 0,
      RcoCloseExpire = 1,
      RcoCloseCancel = 2,
      RcoCloseReject = 3,
      RcoCloseGmCancel = 4,
      RcoCloseCrafterFulfill = 5,
      RcoCloseInvalid = 6,
    }

    enum SkinningState {
      None = 0,
      Reserved = 1,
      Skinning = 2,
      Looting = 3,
      Skinned = 4,
    }

    enum ProfTraitPerkNodeFlags {
      UnlocksSubpath = 1,
      IsMajorBonus = 2,
    }

    enum ProfessionsSpecPathState {
      Locked = 0,
      Progressing = 1,
      Completed = 2,
    }

    enum ProfessionsSpecPerkState {
      Unearned = 0,
      Pending = 1,
      Earned = 2,
    }

    enum ProfessionsSpecTabState {
      Locked = 0,
      Unlocked = 1,
      Unlockable = 2,
    }

    enum PvPFaction {
      Horde = 0,
      Alliance = 1,
    }

    enum BrawlType {
      None = 0,
      Battleground = 1,
      Arena = 2,
      LFG = 3,
      SoloShuffle = 4,
      SoloRbg = 5,
    }

    enum PvPMatchState {
      Inactive = 0,
      Waiting = 1,
      StartUp = 2,
      Engaged = 3,
      PostRound = 4,
      Complete = 5,
    }

    enum CombinedQuestLogStatus {
      Available = 0,
      Complete = 1,
      CompleteDaily = 2,
      CompleteWeekly = 3,
      CompleteMonthly = 4,
      CompleteYearly = 5,
      CompleteGameReset = 6,
      Reset = 7,
    }

    enum CombinedQuestStatus {
      Invalid = 0,
      Completed = 1,
      NotCompleted = 2,
    }

    enum QuestCompleteSpellType {
      LegacyBehavior = 0,
      Follower = 1,
      Tradeskill = 2,
      Ability = 3,
      Aura = 4,
      Spell = 5,
      Unlock = 6,
      Companion = 7,
      QuestlineUnlock = 8,
      QuestlineReward = 9,
      QuestlineUnlockPart = 10,
    }

    enum QuestRepeatability {
      None = 0,
      Daily = 1,
      Weekly = 2,
      Turnin = 3,
      World = 4,
    }

    enum QuestRewardContextFlags {
      None = 0,
      FirstCompletionBonus = 1,
      RepeatCompletionBonus = 2,
    }

    enum QuestTagType {
      Tag = 0,
      Profession = 1,
      Normal = 2,
      PvP = 3,
      PetBattle = 4,
      Bounty = 5,
      Dungeon = 6,
      Invasion = 7,
      Raid = 8,
      Contribution = 9,
      RatedReward = 10,
      InvasionWrapper = 11,
      FactionAssault = 12,
      Islands = 13,
      Threat = 14,
      CovenantCalling = 15,
      DragonRiderRacing = 16,
      Capstone = 17,
      WorldBoss = 18,
    }

    enum QuestTreasurePickerType {
      Visible = 0,
      Hidden = 1,
      Select = 2,
    }

    enum RelativeContentDifficulty {
      Trivial = 0,
      Easy = 1,
      Fair = 2,
      Difficult = 3,
      Impossible = 4,
    }

    enum QuestClassification {
      Important = 0,
      Legendary = 1,
      Campaign = 2,
      Calling = 3,
      Meta = 4,
      Recurring = 5,
      Questline = 6,
      Normal = 7,
      BonusObjective = 8,
      Threat = 9,
      WorldQuest = 10,
    }

    enum QuestLineFloorLocation {
      Above = 0,
      Below = 1,
      Same = 2,
    }

    enum MapOverlayDisplayLocation {
      Default = 0,
      BottomLeft = 1,
      TopLeft = 2,
      BottomRight = 3,
      TopRight = 4,
      Hidden = 5,
    }

    enum QuestFrequency {
      Default = 0,
      Daily = 1,
      Weekly = 2,
      ResetByScheduler = 3,
    }

    enum QuestTag {
      Group = 1,
      PvP = 41,
      Raid = 62,
      Dungeon = 81,
      Legendary = 83,
      Heroic = 85,
      Raid10 = 88,
      Raid25 = 89,
      Scenario = 98,
      Account = 102,
      CombatAlly = 266,
      Delve = 288,
    }

    enum QuestWatchType {
      Automatic = 0,
      Manual = 1,
    }

    enum WorldQuestQuality {
      Common = 0,
      Rare = 1,
      Epic = 2,
    }

    enum QuestSessionCommand {
      None = 0,
      Start = 1,
      Stop = 2,
      SessionActiveNoCommand = 3,
    }

    enum QuestSessionResult {
      Ok = 0,
      NotInParty = 1,
      InvalidOwner = 2,
      AlreadyActive = 3,
      NotActive = 4,
      InRaid = 5,
      OwnerRefused = 6,
      Timeout = 7,
      Disabled = 8,
      Started = 9,
      Stopped = 10,
      Joined = 11,
      Left = 12,
      OwnerLeft = 13,
      ReadyCheckFailed = 14,
      PartyDestroyed = 15,
      MemberTimeout = 16,
      AlreadyMember = 17,
      NotOwner = 18,
      AlreadyOwner = 19,
      AlreadyJoined = 20,
      NotMember = 21,
      Busy = 22,
      JoinRejected = 23,
      Logout = 24,
      Empty = 25,
      QuestNotCompleted = 26,
      Resync = 27,
      Restricted = 28,
      InPetBattle = 29,
      InvalidPublicParty = 30,
      Unknown = 31,
      InCombat = 32,
      MemberInCombat = 33,
      RestrictedCrossFaction = 34,
    }

    enum RafRecruitActivityState {
      Incomplete = 0,
      Complete = 1,
      RewardClaimed = 2,
    }

    enum RafRecruitSubStatus {
      Trial = 0,
      Active = 1,
      Inactive = 2,
    }

    enum RafRewardType {
      Pet = 0,
      Mount = 1,
      Appearance = 2,
      Title = 3,
      GameTime = 4,
      AppearanceSet = 5,
      Illusion = 6,
      Invalid = 7,
    }

    enum RafLinkType {
      None = 0,
      Recruit = 1,
      Friend = 2,
      Both = 3,
    }

    enum RecruitAFriendRewardsVersion {
      InvalidVersion = 0,
      UnusedVersionOne = 1,
      VersionTwo = 2,
      VersionThree = 3,
    }

    enum ReportMajorCategory {
      InappropriateCommunication = 0,
      GameplaySabotage = 1,
      Cheating = 2,
      InappropriateName = 3,
    }

    enum ReportMinorCategory {
      TextChat = 1,
      Boosting = 2,
      Spam = 4,
      Afk = 8,
      IntentionallyFeeding = 16,
      BlockingProgress = 32,
      Hacking = 64,
      Botting = 128,
      Advertisement = 256,
      BTag = 512,
      GroupName = 1024,
      CharacterName = 2048,
      GuildName = 4096,
      Description = 8192,
      Name = 16384,
      HarmfulToMinors = 32768,
    }

    enum ReportSubComplaintTypes {
      Inappropriate = 0,
      Advertising = 1,
    }

    enum ReportType {
      Chat = 0,
      InWorld = 1,
      ClubFinderPosting = 2,
      ClubFinderApplicant = 3,
      GroupFinderPosting = 4,
      GroupFinderApplicant = 5,
      ClubMember = 6,
      GroupMember = 7,
      Friend = 8,
      Pet = 9,
      BattlePet = 10,
      Calendar = 11,
      Mail = 12,
      PvP = 13,
      PvPScoreboard = 14,
      PvPGroupMember = 15,
      CraftingOrder = 16,
    }

    enum ReputationSortType {
      None = 0,
      Account = 1,
      Character = 2,
    }

    enum JailersTowerType {
      TwistingCorridors = 0,
      SkoldusHalls = 1,
      FractureChambers = 2,
      Soulforges = 3,
      Coldheart = 4,
      Mortregar = 5,
      UpperReaches = 6,
      ArkobanHall = 7,
      TormentChamberJaina = 8,
      TormentChamberThrall = 9,
      TormentChamberAnduin = 10,
      AdamantVaults = 11,
      ForgottenCatacombs = 12,
      Ossuary = 13,
      BossRush = 14,
    }

    enum ScriptedAnimationBehavior {
      None = 0,
      TargetShake = 1,
      TargetKnockBack = 2,
      SourceRecoil = 3,
      SourceCollideWithTarget = 4,
      UIParentShake = 5,
    }

    enum ScriptedAnimationFlags {
      UseTargetAsSource = 1,
    }

    enum ScriptedAnimationTrajectory {
      AtSource = 0,
      AtTarget = 1,
      Straight = 2,
      CurveLeft = 3,
      CurveRight = 4,
      CurveRandom = 5,
      HalfwayBetween = 6,
    }

    enum PingTextureType {
      Center = 0,
      Expand = 1,
      Rotation = 2,
    }

    enum SocialWhoOrigin {
      Unknown = 0,
      Social = 1,
      Chat = 2,
      Item = 3,
    }

    enum SoftTargetEnableFlags {
      None = 0,
      Gamepad = 1,
      Kbm = 2,
      Any = 3,
    }

    enum AddSoulbindConduitReason {
      None = 0,
      Cheat = 1,
      SpellEffect = 2,
      Upgrade = 3,
    }

    enum SoulbindConduitFlags {
      VisibleToGetallsoulbindconduitScript = 1,
    }

    enum SoulbindConduitInstallResult {
      Success = 0,
      InvalidItem = 1,
      InvalidConduit = 2,
      InvalidTalent = 3,
      DuplicateConduit = 4,
      ForgeNotInProximity = 5,
      SocketNotEmpty = 6,
    }

    enum SoulbindConduitTransactionType {
      Install = 0,
      Uninstall = 1,
    }

    enum SoulbindConduitType {
      Finesse = 0,
      Potency = 1,
      Endurance = 2,
      Flex = 3,
    }

    enum SoulbindNodeState {
      Unavailable = 0,
      Unselected = 1,
      Selectable = 2,
      Selected = 3,
    }

    enum SpellBookSkillLineIndex {
      General = 1,
      Class = 2,
      MainSpec = 3,
      OffSpecStart = 4,
    }

    enum SpellBookItemType {
      None = 0,
      Spell = 1,
      FutureSpell = 2,
      PetAction = 3,
      Flyout = 4,
    }

    enum SpellBookSpellBank {
      Player = 0,
      Pet = 1,
    }

    enum SplashScreenType {
      WhatsNew = 0,
      SeasonRollOver = 1,
    }

    enum SuperTrackingMapPinType {
      AreaPOI = 0,
      QuestOffer = 1,
      TaxiNode = 2,
      DigSite = 3,
    }

    enum SuperTrackingType {
      Quest = 0,
      UserWaypoint = 1,
      Corpse = 2,
      Scenario = 3,
      Content = 4,
      PartyMember = 5,
      MapPin = 6,
      Vignette = 7,
    }

    enum FlightPathFaction {
      Neutral = 0,
      Horde = 1,
      Alliance = 2,
    }

    enum FlightPathState {
      Current = 0,
      Reachable = 1,
      Unreachable = 2,
    }

    enum TitleIconVersion {
      Small = 0,
      Medium = 1,
      Large = 2,
    }

    enum StartTimerType {
      PvPBeginTimer = 0,
      ChallengeModeCountdown = 1,
      PlayerCountdown = 2,
      PlunderstormCountdown = 3,
    }

    enum TooltipComparisonMethod {
      Single = 0,
      WithBothHands = 1,
      WithBagMainHandItem = 2,
      WithBagOffHandItem = 3,
    }

    enum TooltipSide {
      Left = 0,
      Right = 1,
      Top = 2,
      Bottom = 3,
    }

    enum TooltipTextureAnchor {
      LeftTop = 0,
      LeftCenter = 1,
      LeftBottom = 2,
      RightTop = 3,
      RightCenter = 4,
      RightBottom = 5,
      All = 6,
    }

    enum TooltipTextureRelativeRegion {
      LeftLine = 0,
      RightLine = 1,
    }

    enum TooltipDataItemBinding {
      Quest = 0,
      Account = 1,
      BnetAccount = 2,
      Soulbound = 3,
      BindToAccount = 4,
      BindToBnetAccount = 5,
      BindOnPickup = 6,
      BindOnEquip = 7,
      BindOnUse = 8,
    }

    enum TooltipDataLineType {
      None = 0,
      Blank = 1,
      UnitName = 2,
      GemSocket = 3,
      AzeriteEssenceSlot = 4,
      AzeriteEssencePower = 5,
      LearnableSpell = 6,
      UnitThreat = 7,
      QuestObjective = 8,
      AzeriteItemPowerDescription = 9,
      RuneforgeLegendaryPowerDescription = 10,
      SellPrice = 11,
      ProfessionCraftingQuality = 12,
      SpellName = 13,
      CurrencyTotal = 14,
      ItemEnchantmentPermanent = 15,
      UnitOwner = 16,
      QuestTitle = 17,
      QuestPlayer = 18,
      NestedBlock = 19,
      ItemBinding = 20,
      RestrictedRaceClass = 21,
      RestrictedFaction = 22,
      RestrictedSkill = 23,
      RestrictedPvPMedal = 24,
      RestrictedReputation = 25,
      RestrictedSpellKnown = 26,
      RestrictedLevel = 27,
      EquipSlot = 28,
      ItemName = 29,
      Separator = 30,
      ToyName = 31,
      ToyText = 32,
      ToyEffect = 33,
      ToyDuration = 34,
      RestrictedArena = 35,
      RestrictedBg = 36,
      ToyFlavorText = 37,
      ToyDescription = 38,
      ToySource = 39,
      GemSocketEnchantment = 40,
    }

    enum TooltipDataType {
      Item = 0,
      Spell = 1,
      Unit = 2,
      Corpse = 3,
      Object = 4,
      Currency = 5,
      BattlePet = 6,
      UnitAura = 7,
      AzeriteEssence = 8,
      CompanionPet = 9,
      Mount = 10,
      PetAction = 11,
      Achievement = 12,
      EnhancedConduit = 13,
      EquipmentSet = 14,
      InstanceLock = 15,
      PvPBrawl = 16,
      RecipeRankInfo = 17,
      Totem = 18,
      Toy = 19,
      CorruptionCleanser = 20,
      MinimapMouseover = 21,
      Flyout = 22,
      Quest = 23,
      QuestPartyProgress = 24,
      Macro = 25,
      Debug = 26,
    }

    enum CraftingReagentItemFlag {
      TooltipShowsAsStatModifications = 0,
    }

    enum RecipeRequirementType {
      SpellFocus = 0,
      Totem = 1,
      Area = 2,
    }

    enum TradeskillOrderDuration {
      Short = 1,
      Medium = 2,
      Long = 3,
    }

    enum TradeskillOrderRecipient {
      Public = 1,
      Guild = 2,
      Private = 3,
    }

    enum TradeskillOrderStatus {
      Unclaimed = 1,
      Started = 2,
      Completed = 3,
      Expired = 4,
    }

    enum TradeskillRecipeType {
      Item = 1,
      Salvage = 2,
      Enchant = 3,
      Recraft = 4,
      Gathering = 5,
    }

    enum TradeskillRelativeDifficulty {
      Optimal = 0,
      Medium = 1,
      Easy = 2,
      Trivial = 3,
    }

    enum TradeskillSlotDataType {
      Reagent = 1,
      ModifiedReagent = 2,
      Currency = 3,
    }

    enum NodeOpFailureReason {
      None = 0,
      MissingEdgeConnection = 1,
      RequiredForEdge = 2,
      MissingRequiredEdge = 3,
      HasMutuallyExclusiveEdge = 4,
      NotEnoughSourcedCurrencySpent = 5,
      NotEnoughCurrencySpent = 6,
      NotEnoughGoldSpent = 7,
      MissingAchievement = 8,
      MissingQuest = 9,
      WrongSpec = 10,
      WrongSelection = 11,
      MaxRank = 12,
      DataError = 13,
      NotEnoughSourcedCurrency = 14,
      NotEnoughCurrency = 15,
      NotEnoughGold = 16,
      SameSelection = 17,
      NodeNotFound = 18,
      EntryNotFound = 19,
      RequiredForCondition = 20,
      WrongTreeID = 21,
      LevelTooLow = 22,
      TreeFlaggedNoRefund = 23,
      NodeNeverPurchasable = 24,
      AccountDataNoMatch = 25,
    }

    enum SharedStringFlag {
      InternalOnly = 1,
    }

    enum TraitCombatConfigFlags {
      ActiveForSpec = 1,
      StarterBuild = 2,
      SharedActionBars = 4,
    }

    enum TraitCondFlag {
      IsGate = 1,
      IsAlwaysMet = 2,
      IsSufficient = 4,
    }

    enum TraitConditionType {
      Available = 0,
      Visible = 1,
      Granted = 2,
      Increased = 3,
      DisplayError = 4,
    }

    enum TraitConfigDbState {
      Ready = 0,
      Created = 1,
      Removed = 2,
      Deleted = 3,
    }

    enum TraitConfigType {
      Invalid = 0,
      Combat = 1,
      Profession = 2,
      Generic = 3,
    }

    enum TraitCurrencyFlag {
      ShowQuantityAsSpent = 1,
      TraitSourcedShowMax = 2,
      UseClassIcon = 4,
      UseSpecIcon = 8,
    }

    enum TraitCurrencyType {
      Gold = 0,
      CurrencyTypesBased = 1,
      TraitSourced = 2,
    }

    enum TraitDefinitionSubType {
      DragonflightRed = 0,
      DragonflightBlue = 1,
      DragonflightGreen = 2,
      DragonflightBronze = 3,
      DragonflightBlack = 4,
    }

    enum TraitEdgeType {
      VisualOnly = 0,
      DeprecatedRankConnection = 1,
      SufficientForAvailability = 2,
      RequiredForAvailability = 3,
      MutuallyExclusive = 4,
      DeprecatedSelectionOption = 5,
    }

    enum TraitEdgeVisualStyle {
      None = 0,
      Straight = 1,
    }

    enum TraitNodeEntryType {
      SpendHex = 0,
      SpendSquare = 1,
      SpendCircle = 2,
      SpendSmallCircle = 3,
      DeprecatedSelect = 4,
      DragAndDrop = 5,
      SpendDiamond = 6,
      ProfPath = 7,
      ProfPerk = 8,
      ProfPathUnlock = 9,
    }

    enum TraitNodeFlag {
      ShowMultipleIcons = 1,
      NeverPurchasable = 2,
      TestPositionLocked = 4,
      TestGridPositioned = 8,
    }

    enum TraitNodeGroupFlag {
      AvailableByDefault = 1,
    }

    enum TraitNodeType {
      Single = 0,
      Tiered = 1,
      Selection = 2,
      SubTreeSelection = 3,
    }

    enum TraitPointsOperationType {
      None = -1,
      Set = 0,
      Multiply = 1,
    }

    enum TraitSystemFlag {
      AllowMultipleLoadoutsPerTree = 1,
      ShowSpendConfirmation = 2,
    }

    enum TraitTreeFlag {
      CannotRefund = 1,
      HideSingleRankNumbers = 2,
    }

    enum TransmogIllisionFlags {
      HideUntilCollected = 1,
      PlayerConditionGrantsOnLogin = 2,
    }

    enum TransmogSlot {
      Head = 0,
      Shoulder = 1,
      Back = 2,
      Chest = 3,
      Body = 4,
      Tabard = 5,
      Wrist = 6,
      Hand = 7,
      Waist = 8,
      Legs = 9,
      Feet = 10,
      Mainhand = 11,
      Offhand = 12,
    }

    enum TransmogPendingType {
      Apply = 0,
      Revert = 1,
      ToggleOn = 2,
      ToggleOff = 3,
    }

    enum TransmogCameraVariation {
      None = 0,
      RightShoulder = 1,
      CloakBackpack = 1,
    }

    enum TransmogCollectionType {
      None = 0,
      Head = 1,
      Shoulder = 2,
      Back = 3,
      Chest = 4,
      Shirt = 5,
      Tabard = 6,
      Wrist = 7,
      Hands = 8,
      Waist = 9,
      Legs = 10,
      Feet = 11,
      Wand = 12,
      OneHAxe = 13,
      OneHSword = 14,
      OneHMace = 15,
      Dagger = 16,
      Fist = 17,
      Shield = 18,
      Holdable = 19,
      TwoHAxe = 20,
      TwoHSword = 21,
      TwoHMace = 22,
      Staff = 23,
      Polearm = 24,
      Bow = 25,
      Gun = 26,
      Crossbow = 27,
      Warglaives = 28,
      Paired = 29,
    }

    enum TransmogModification {
      Main = 0,
      Secondary = 1,
    }

    enum TransmogSearchType {
      Items = 1,
      BaseSets = 2,
      UsableSets = 3,
    }

    enum TransmogSource {
      None = 0,
      JournalEncounter = 1,
      Quest = 2,
      Vendor = 3,
      WorldDrop = 4,
      HiddenUntilCollected = 5,
      CantCollect = 6,
      Achievement = 7,
      Profession = 8,
      NotValidForTransmog = 9,
      TradingPost = 10,
    }

    enum TransmogType {
      Appearance = 0,
      Illusion = 1,
    }

    enum TransmogUseErrorType {
      None = 0,
      PlayerCondition = 1,
      Skill = 2,
      Ability = 3,
      Reputation = 4,
      Holiday = 5,
      HotRecheckFailed = 6,
      Class = 7,
      Race = 8,
      Faction = 9,
      ItemProficiency = 10,
    }

    enum EventToastDisplayType {
      NormalSingleLine = 0,
      NormalBlockText = 1,
      NormalTitleAndSubTitle = 2,
      NormalTextWithIcon = 3,
      LargeTextWithIcon = 4,
      NormalTextWithIconAndRarity = 5,
      Scenario = 6,
      ChallengeMode = 7,
      ScenarioClickExpand = 8,
      WeeklyRewardUnlock = 9,
      WeeklyRewardUpgrade = 10,
      FlightpointDiscovered = 11,
      CapstoneUnlocked = 12,
      SingleLineWithIcon = 13,
    }

    enum EventToastEventType {
      LevelUp = 0,
      LevelUpSpell = 1,
      LevelUpDungeon = 2,
      LevelUpRaid = 3,
      LevelUpPvP = 4,
      PetBattleNewAbility = 5,
      PetBattleFinalRound = 6,
      PetBattleCapture = 7,
      BattlePetLevelChanged = 8,
      BattlePetLevelUpAbility = 9,
      QuestBossEmote = 10,
      MythicPlusWeeklyRecord = 11,
      QuestTurnedIn = 12,
      WorldStateChange = 13,
      Scenario = 14,
      LevelUpOther = 15,
      PlayerAuraAdded = 16,
      PlayerAuraRemoved = 17,
      SpellScript = 18,
      CriteriaUpdated = 19,
      PvPTierUpdate = 20,
      SpellLearned = 21,
      TreasureItem = 22,
      WeeklyRewardUnlock = 23,
      WeeklyRewardUpgrade = 24,
      FlightpointDiscovered = 25,
    }

    enum EventToastFlags {
      DisableRightClickDismiss = 1,
    }

    enum UIFrameType {
      JailersTowerBuffs = 0,
    }

    enum ModelSceneSetting {
      AlignLightToOrbitDelta = 1,
    }

    enum ModelSceneType {
      MountJournal = 0,
      PetJournalCard = 1,
      ShopCard = 2,
      EncounterJournal = 3,
      PetJournalLoadout = 4,
      ArtifactTier2 = 5,
      ArtifactTier2ForgingScene = 6,
      ArtifactTier2SlamEffect = 7,
      CommentatorVictoryFanfare = 8,
      ArtifactRelicTalentEffect = 9,
      PvPWarModeOrb = 10,
      PvPWarModeFire = 11,
      PartyPose = 12,
      AzeriteItemLevelUpToast = 13,
      AzeritePowers = 14,
      AzeriteRewardGlow = 15,
      HeartOfAzeroth = 16,
      WorldMapThreat = 17,
      Soulbinds = 18,
      JailersTowerAnimaGlow = 19,
    }

    enum UIModelSceneActorFlag {
      Deprecated1 = 1,
      UseCenterForOriginX = 2,
      UseCenterForOriginY = 4,
      UseCenterForOriginZ = 8,
    }

    enum ItemTryOnReason {
      Success = 0,
      WrongRace = 1,
      NotEquippable = 2,
      DataPending = 3,
    }

    enum UIModelSceneContext {
      None = -1,
      PerksProgram = 0,
    }

    enum UIModelSceneFlags {
      SheatheWeapon = 1,
      HideWeapon = 2,
      Autodress = 4,
    }

    enum UISystemType {
      InGameNavigation = 0,
    }

    enum UITextureSliceMode {
      Stretched = 0,
      Tiled = 1,
    }

    enum CaptureBarWidgetFillDirectionType {
      RightToLeft = 0,
      LeftToRight = 1,
    }

    enum IconAndTextWidgetState {
      Hidden = 0,
      Shown = 1,
      ShownWithDynamicIconFlashing = 2,
      ShownWithDynamicIconNotFlashing = 3,
    }

    enum IconState {
      Hidden = 0,
      ShowState1 = 1,
      ShowState2 = 2,
    }

    enum ItemDisplayTextDisplayStyle {
      WorldQuestReward = 0,
      ItemNameAndInfoText = 1,
      ItemNameOnlyCentered = 2,
      PlayerChoiceReward = 3,
    }

    enum ItemDisplayTooltipEnabledType {
      Enabled = 0,
      Disabled = 1,
    }

    enum MapPinAnimationType {
      None = 0,
      Pulse = 1,
    }

    enum SpellDisplayBorderColor {
      None = 0,
      Black = 1,
      White = 2,
      Red = 3,
      Yellow = 4,
      Orange = 5,
      Purple = 6,
      Green = 7,
      Blue = 8,
    }

    enum SpellDisplayIconDisplayType {
      Buff = 0,
      Debuff = 1,
      Circular = 2,
      NoBorder = 3,
    }

    enum SpellDisplayTextShownStateType {
      Shown = 0,
      Hidden = 1,
    }

    enum SpellDisplayTint {
      None = 0,
      Red = 1,
    }

    enum StatusBarColorTintValue {
      None = 0,
      Black = 1,
      White = 2,
      Red = 3,
      Yellow = 4,
      Orange = 5,
      Purple = 6,
      Green = 7,
      Blue = 8,
    }

    enum StatusBarOverrideBarTextShownType {
      Never = 0,
      Always = 1,
      OnlyOnMouseover = 2,
      OnlyNotOnMouseover = 3,
    }

    enum StatusBarValueTextType {
      Hidden = 0,
      Percentage = 1,
      Value = 2,
      Time = 3,
      TimeShowOneLevelOnly = 4,
      ValueOverMax = 5,
      ValueOverMaxNormalized = 6,
    }

    enum TugOfWarMarkerArrowShownState {
      Never = 0,
      Always = 1,
      FlashOnMove = 2,
    }

    enum TugOfWarStyleValue {
      DefaultYellow = 0,
      ArchaeologyBrown = 1,
    }

    enum UIWidgetBlendModeType {
      Opaque = 0,
      Additive = 1,
    }

    enum UIWidgetFlag {
      UniversalWidget = 1,
    }

    enum UIWidgetFontType {
      Normal = 0,
      Shadow = 1,
      Outline = 2,
    }

    enum UIWidgetModelSceneLayer {
      None = 0,
      Front = 1,
      Back = 2,
    }

    enum UIWidgetMotionType {
      Instant = 0,
      Smooth = 1,
    }

    enum UIWidgetOverrideState {
      Inactive = 0,
      Active = 1,
    }

    enum UIWidgetRewardShownState {
      Hidden = 0,
      ShownEarned = 1,
      ShownUnearned = 2,
    }

    enum UIWidgetTextSizeType {
      Small12Pt = 0,
      Medium16Pt = 1,
      Large24Pt = 2,
      Huge27Pt = 3,
      Standard14Pt = 4,
      Small10Pt = 5,
      Small11Pt = 6,
      Medium18Pt = 7,
      Large20Pt = 8,
    }

    enum UIWidgetTextureAndTextSizeType {
      Small = 0,
      Medium = 1,
      Large = 2,
      Huge = 3,
      Standard = 4,
      Medium2 = 5,
    }

    enum UIWidgetTooltipLocation {
      Default = 0,
      BottomLeft = 1,
      Left = 2,
      TopLeft = 3,
      Top = 4,
      TopRight = 5,
      Right = 6,
      BottomRight = 7,
      Bottom = 8,
    }

    enum UIWidgetUpdateAnimType {
      None = 0,
      Flash = 1,
    }

    enum WidgetAnimationType {
      None = 0,
      Fade = 1,
    }

    enum WidgetCurrencyClass {
      Currency = 0,
      Item = 1,
    }

    enum WidgetEnabledState {
      Disabled = 0,
      Yellow = 1,
      Red = 2,
      White = 3,
      Green = 4,
      Artifact = 5,
      Black = 6,
      BrightBlue = 7,
    }

    enum WidgetGlowAnimType {
      None = 0,
      Pulse = 1,
    }

    enum WidgetIconSizeType {
      Small = 0,
      Medium = 1,
      Large = 2,
      Standard = 3,
    }

    enum WidgetIconSourceType {
      Spell = 0,
      Item = 1,
    }

    enum WidgetOpacityType {
      OneHundred = 0,
      Ninety = 1,
      Eighty = 2,
      Seventy = 3,
      Sixty = 4,
      Fifty = 5,
      Forty = 6,
      Thirty = 7,
      Twenty = 8,
      Ten = 9,
      Zero = 10,
    }

    enum WidgetShowGlowState {
      HideGlow = 0,
      ShowGlow = 1,
    }

    enum WidgetShownState {
      Hidden = 0,
      Shown = 1,
    }

    enum WidgetTextHorizontalAlignmentType {
      Left = 0,
      Center = 1,
      Right = 2,
    }

    enum WidgetUnitPowerBarFlashMomentType {
      FlashWhenMax = 0,
      FlashWhenMin = 1,
      NeverFlash = 2,
    }

    enum ZoneControlActiveState {
      Inactive = 0,
      Active = 1,
    }

    enum ZoneControlDangerFlashType {
      ShowOnGoodStates = 0,
      ShowOnBadStates = 1,
      ShowOnBoth = 2,
      ShowOnNeither = 3,
    }

    enum ZoneControlFillType {
      SingleFillClockwise = 0,
      SingleFillCounterClockwise = 1,
      DoubleFillClockwise = 2,
      DoubleFillCounterClockwise = 3,
    }

    enum ZoneControlLeadingEdgeType {
      NoLeadingEdge = 0,
      UseLeadingEdge = 1,
    }

    enum ZoneControlMode {
      BothStatesAreGood = 0,
      State1IsGood = 1,
      State2IsGood = 2,
      NeitherStateIsGood = 3,
    }

    enum ZoneControlState {
      State1 = 0,
      State2 = 1,
    }

    enum MapIconUIWidgetSetType {
      Tooltip = 0,
      BehindIcon = 1,
    }

    enum UIWidgetHorizontalDirection {
      LeftToRight = 0,
      RightToLeft = 1,
    }

    enum UIWidgetLayoutDirection {
      Default = 0,
      Vertical = 1,
      Horizontal = 2,
      Overlap = 3,
      HorizontalForceNewRow = 4,
    }

    enum UIWidgetScale {
      OneHundred = 0,
      Ninty = 1,
      Eighty = 2,
      Seventy = 3,
      Sixty = 4,
      Fifty = 5,
      OneHundredTen = 6,
      OneHundredTwenty = 7,
      OneHundredThirty = 8,
      OneHundredForty = 9,
      OneHundredFifty = 10,
      OneHundredSixty = 11,
      OneHundredSeventy = 12,
      OneHundredEighty = 13,
      OneHundredNinety = 14,
      TwoHundred = 15,
    }

    enum UIWidgetSetLayoutDirection {
      Vertical = 0,
      Horizontal = 1,
      Overlap = 2,
    }

    enum UIWidgetVisualizationType {
      IconAndText = 0,
      CaptureBar = 1,
      StatusBar = 2,
      DoubleStatusBar = 3,
      IconTextAndBackground = 4,
      DoubleIconAndText = 5,
      StackedResourceTracker = 6,
      IconTextAndCurrencies = 7,
      TextWithState = 8,
      HorizontalCurrencies = 9,
      BulletTextList = 10,
      ScenarioHeaderCurrenciesAndBackground = 11,
      TextureAndText = 12,
      SpellDisplay = 13,
      DoubleStateIconRow = 14,
      TextureAndTextRow = 15,
      ZoneControl = 16,
      CaptureZone = 17,
      TextureWithAnimation = 18,
      DiscreteProgressSteps = 19,
      ScenarioHeaderTimer = 20,
      TextColumnRow = 21,
      Spacer = 22,
      UnitPowerBar = 23,
      FillUpFrames = 24,
      TextWithSubtext = 25,
      MapPinAnimation = 26,
      ItemDisplay = 27,
      TugOfWar = 28,
      ScenarioHeaderDelves = 29,
    }

    enum PhaseReason {
      Phasing = 0,
      Sharding = 1,
      WarMode = 2,
      ChromieTime = 3,
    }

    enum PvPUnitClassification {
      FlagCarrierHorde = 0,
      FlagCarrierAlliance = 1,
      FlagCarrierNeutral = 2,
      CartRunnerHorde = 3,
      CartRunnerAlliance = 4,
      AssassinHorde = 5,
      AssassinAlliance = 6,
      OrbCarrierBlue = 7,
      OrbCarrierGreen = 8,
      OrbCarrierOrange = 9,
      OrbCarrierPurple = 10,
    }

    enum UnitSex {
      Male = 0,
      Female = 1,
      None = 2,
      Both = 3,
      Neutral = 4,
    }

    enum ScrubStringFlags {
      None = 0,
      TruncateNewLines = 1,
      AllowBarCodes = 2,
      StripControlCodes = 4,
    }

    enum ValidateNameResult {
      Success = 0,
      Failure = 1,
      NoName = 2,
      TooShort = 3,
      TooLong = 4,
      InvalidCharacter = 5,
      MixedLanguages = 6,
      Profane = 7,
      Reserved = 8,
      InvalidApostrophe = 9,
      MultipleApostrophes = 10,
      ThreeConsecutive = 11,
      InvalidSpace = 12,
      ConsecutiveSpaces = 13,
      RussianConsecutiveSilentCharacters = 14,
      RussianSilentCharacterAtBeginningOrEnd = 15,
      DeclensionDoesntMatchBaseName = 16,
      SpacesDisallowed = 17,
    }

    enum GraphicsValidationResult {
      Supported = 0,
      Illegal = 1,
      Unsupported = 2,
      Graphics = 3,
      DualCore = 4,
      QuadCore = 5,
      CpuMem_2 = 6,
      CpuMem_4 = 7,
      CpuMem_8 = 8,
      Needs_5_0 = 9,
      Needs_6_0 = 10,
      NeedsRt = 11,
      NeedsDx12 = 12,
      NeedsDx12Vrs2 = 13,
      NeedsAppleGpu = 14,
      NeedsAmdGpu = 15,
      NeedsIntelGpu = 16,
      NeedsNvidiaGpu = 17,
      NeedsQualcommGpu = 18,
      NeedsMacOs_10_13 = 19,
      NeedsMacOs_10_14 = 20,
      NeedsMacOs_10_15 = 21,
      NeedsMacOs_11_0 = 22,
      NeedsMacOs_12_0 = 23,
      NeedsMacOs_13_0 = 24,
      NeedsWindows_10 = 25,
      NeedsWindows_11 = 26,
      MacOsUnsupported = 27,
      WindowsUnsupported = 28,
      LegacyUnsupported = 29,
      Dx11Unsupported = 30,
      Dx12Win7Unsupported = 31,
      RemoteDesktopUnsupported = 32,
      WineUnsupported = 33,
      NvapiWineUnsupported = 34,
      AppleGpuUnsupported = 35,
      AmdGpuUnsupported = 36,
      IntelGpuUnsupported = 37,
      NvidiaGpuUnsupported = 38,
      QualcommGpuUnsupported = 39,
      GpuDriver = 40,
      CompatMode = 41,
      Unknown = 42,
    }

    enum VignetteType {
      Normal = 0,
      PvPBounty = 1,
      Torghast = 2,
      Treasure = 3,
      FyrakkFlight = 4,
    }

    enum CommunicationMode {
      PushToTalk = 0,
      OpenMic = 1,
    }

    enum VoiceChannelErrorReason {
      Unknown = 0,
      IsBattleNetChannel = 1,
    }

    enum VoiceChatStatusCode {
      Success = 0,
      OperationPending = 1,
      TooManyRequests = 2,
      LoginProhibited = 3,
      ClientNotInitialized = 4,
      ClientNotLoggedIn = 5,
      ClientAlreadyLoggedIn = 6,
      ChannelNameTooShort = 7,
      ChannelNameTooLong = 8,
      ChannelAlreadyExists = 9,
      AlreadyInChannel = 10,
      TargetNotFound = 11,
      Failure = 12,
      ServiceLost = 13,
      UnableToLaunchProxy = 14,
      ProxyConnectionTimeOut = 15,
      ProxyConnectionUnableToConnect = 16,
      ProxyConnectionUnexpectedDisconnect = 17,
      Disabled = 18,
      UnsupportedChatChannelType = 19,
      InvalidCommunityStream = 20,
      PlayerSilenced = 21,
      PlayerVoiceChatParentalDisabled = 22,
      InvalidInputDevice = 23,
      InvalidOutputDevice = 24,
    }

    enum VoiceTtsDestination {
      RemoteTransmission = 0,
      LocalPlayback = 1,
      RemoteTransmissionWithLocalPlayback = 2,
      QueuedRemoteTransmission = 3,
      QueuedLocalPlayback = 4,
      QueuedRemoteTransmissionWithLocalPlayback = 5,
      ScreenReader = 6,
    }

    enum VoiceTtsStatusCode {
      Success = 0,
      InvalidEngineType = 1,
      EngineAllocationFailed = 2,
      NotSupported = 3,
      MaxCharactersExceeded = 4,
      UtteranceBelowMinimumDuration = 5,
      InputTextEnqueued = 6,
      SdkNotInitialized = 7,
      DestinationQueueFull = 8,
      EnqueueNotNecessary = 9,
      UtteranceNotFound = 10,
      ManagerNotFound = 11,
      InvalidArgument = 12,
      InternalError = 13,
    }

    enum CampaignState {
      Invalid = 0,
      Complete = 1,
      InProgress = 2,
      Stalled = 3,
    }

    enum ConquestProgressBarDisplayType {
      FirstChest = 0,
      AdditionalChest = 1,
      Seasonal = 2,
    }

    enum WoWEntitlementType {
      Item = 0,
      Mount = 1,
      Battlepet = 2,
      Toy = 3,
      Appearance = 4,
      AppearanceSet = 5,
      GameTime = 6,
      Title = 7,
      Illusion = 8,
      Invalid = 9,
    }
  }

  namespace Constants {
    namespace AuctionConstants {
      const DEFAULT_AUCTION_PRICE_MULTIPLIER = 1.5;
    }

    namespace CalendarGetEventTypeConstants {
      const DEFAULT_CALENDAR_GET_EVENT_TYPE: CalendarGetEventType;
    }

    namespace CharCustomizationConstants {
      const CHAR_CUSTOMIZE_CUSTOM_DISPLAY_OPTION_FIRST: CharCustomizationType;
      const CHAR_CUSTOMIZE_CUSTOM_DISPLAY_OPTION_LAST: CharCustomizationType;
      const NUM_CUSTOM_DISPLAY = 1;
    }

    namespace ContentTrackingConsts {
      const MaxTrackedCollectableSources = 15;
      const MaxTrackedAchievements = 10;
    }

    namespace Callings {
      const MaxCallings = 3;
    }

    namespace CraftingOrderConsts {
      const MAX_CRAFTING_ORDER_FAVORITE_RECIPES = 100;
      const NPC_CRAFTING_ORDER_NUM_SUPPORTED_REWARDS = 2;
    }

    namespace CurrencyConsts {
      const PLAYER_CURRENCY_CLIENT_FLAGS: number;
      const MAX_CURRENCY_QUANTITY = 100000000;
      const CONQUEST_ARENA_AND_BG_META_CURRENCY_ID = 483;
      const CONQUEST_RATED_BG_META_CURRENCY_ID = 484;
      const CONQUEST_ASHRAN_META_CURRENCY_ID = 692;
      const ACCOUNT_WIDE_HONOR_CURRENCY_ID = 1585;
      const ACCOUNT_WIDE_HONOR_LEVEL_CURRENCY_ID = 1586;
      const CONQUEST_CURRENCY_ID = 1602;
      const CONQUEST_POINTS_CURRENCY_ID = 390;
      const CONQUEST_ARENA_META_CURRENCY_ID = 483;
      const CONQUEST_BG_META_CURRENCY_ID = 484;
      const HONOR_CURRENCY_ID = 1792;
      const ARTIFACT_KNOWLEDGE_CURRENCY_ID = 1171;
      const WAR_RESOURCES_CURRENCY_ID = 1560;
      const ECHOES_OF_NYALOTHA_CURRENCY_ID = 1803;
      const DRAGON_ISLES_SUPPLIES_CURRENCY_ID = 2003;
      const QUESTIONMARK_INV_ICON = 134400;
      const PVP_CURRENCY_CONQUEST_ALLIANCE_INV_ICON = 463448;
      const PVP_CURRENCY_CONQUEST_HORDE_INV_ICON = 463449;
      const PVP_CURRENCY_HONOR_ALLIANCE_INV_ICON = 463450;
      const PVP_CURRENCY_HONOR_HORDE_INV_ICON = 463451;
      const CURRENCY_ID_RENOWN = 1822;
      const CURRENCY_ID_RENOWN_KYRIAN = 1829;
      const CURRENCY_ID_RENOWN_VENTHYR = 1830;
      const CURRENCY_ID_RENOWN_NIGHT_FAE = 1831;
      const CURRENCY_ID_RENOWN_NECROLORD = 1832;
      const CURRENCY_ID_WILLING_SOUL = 1810;
      const CURRENCY_ID_RESERVOIR_ANIMA = 1813;
      const CURRENCY_ID_PERKS_PROGRAM_DISPLAY_INFO = 2032;
    }

    namespace DelvesConsts {
      const DELVES_MIN_PLAYER_LEVEL_CONTENT_TUNING_ID = 2677;
      const DELVES_NORMAL_KEY_CURRENCY_ID = 3028;
      const DELVES_COMPANION_TOOLTIP_WIDGET_SET_ID = 1331;
      const DELVES_COMPANION_TRAIT_SYSTEM_ID = 6;
      const BRANN_COMPANION_INFO_ID = 1;
    }

    namespace EditModeConsts {
      const EditModeDefaultGridSpacing = 100;
      const EditModeMinGridSpacing = 20;
      const EditModeMaxGridSpacing = 300;
      const EditModeMaxLayoutsPerType = 5;
    }

    namespace ItemConsts {
      const NUM_ITEM_ENCHANTMENT_SOCKETS = 3;
      const MAX_LOOT_OBJECT_ITEMS = 31;
      const INVALID_TRANSACTION_BANK_TAB_SLOT = 255;
    }

    namespace ITEM_WEAPON_SUBCLASSConstants {
      const ITEM_WEAPON_SUBCLASS_NONE = -1;
    }

    namespace InventoryConstants {
      const NumBagSlots: number;
      const NumGenericBankSlots: number;
      const NumBankBagSlots: number;
      const NumReagentBagSlots: number;
      const NumAccountBankSlots: number;
      const MAX_TRANSACTION_BANK_TABS: number;
    }

    namespace LevelConstsExposed {
      const MIN_RES_SICKNESS_LEVEL = 10;
      const MIN_ACHIEVEMENT_LEVEL = 10;
    }

    namespace GroupFinderConstants {
      const MAX_GROUP_FINDER_ACTIVITIES = 41;
    }

    namespace LFG_ROLEConstants {
      const LFG_ROLE_NO_ROLE = -1;
      const LFG_ROLE_ANY: LFGRole;
    }

    namespace LootConsts {
      const MasterLootQualityThreshold = 5;
    }

    namespace MajorFactionsConsts {
      const WORLD_STATE_RENOWN_CAP_10_0 = 19735;
      const WORLD_STATE_RAPID_RENOWN_CAP_10_0 = 20851;
      const PLUNDERSTORM_MAJOR_FACTION_ID = 2593;
    }

    namespace MoneyFormattingConstants {
      const GOLD_REWARD_THRESHOLD_TO_HIDE_COPPER = 10;
    }

    namespace MountDynamicFlightConsts {
      const TRAIT_SYSTEM_ID = 1;
      const TREE_ID = 672;
    }

    namespace PetConsts_PostCata {
      const MAX_STABLE_SLOTS = 200;
      const MAX_SUMMONABLE_PETS = 25;
      const MAX_SUMMONABLE_HUNTER_PETS = 5;
      const NUM_PET_SLOTS_THAT_NEED_LEARNED_SPELL = 5;
      const NUM_PET_SLOTS = 30;
      const EXTRA_PET_STABLE_SLOT = 5;
      const STABLED_PETS_FIRST_SLOT_INDEX = 6;
    }

    namespace PetConsts_PreWrath {
      const MAX_STABLE_SLOTS = 2;
      const MAX_SUMMONABLE_PETS = 25;
      const MAX_SUMMONABLE_HUNTER_PETS = 1;
      const NUM_PET_SLOTS_THAT_NEED_LEARNED_SPELL = 1;
      const NUM_PET_SLOTS = 30;
      const EXTRA_PET_STABLE_SLOT: number;
      const STABLED_PETS_FIRST_SLOT_INDEX = 6;
    }

    namespace PetConsts_Wrath {
      const MAX_STABLE_SLOTS = 4;
      const MAX_SUMMONABLE_PETS = 25;
      const MAX_SUMMONABLE_HUNTER_PETS = 1;
      const NUM_PET_SLOTS_THAT_NEED_LEARNED_SPELL = 1;
      const NUM_PET_SLOTS = 30;
      const EXTRA_PET_STABLE_SLOT: number;
      const STABLED_PETS_FIRST_SLOT_INDEX = 6;
    }

    namespace ProfessionConsts {
      const NUM_PRIMARY_PROFESSIONS = 2;
      const CLASSIC_PROFESSION_PARENT_TIER_INDEX = 4;
      const RUNEFORGING_SKILL_LINE_ID = 960;
      const RUNEFORGING_ROOT_CATEGORY_ID = 210;
      const MAX_CRAFTING_REAGENT_SLOTS = 12;
      const CRAFTING_ORDER_CLAIM_DURATION: number;
      const PUBLIC_CRAFTING_ORDER_STALE_THRESHOLD: number;
      const CRAFTING_ORDER_ITEM_RETENTION = 30;
    }

    namespace PvpInfoConsts {
      const MaxPlayersPerInstance = 80;
    }

    namespace QuestWatchConsts {
      const MAX_QUEST_WATCHES = 25;
      const MAX_WORLD_QUEST_WATCHES_AUTOMATIC = 1;
      const MAX_WORLD_QUEST_WATCHES_MANUAL = 5;
    }

    namespace TimerunningConsts {
      const TIMERUNNING_SEASON_NONE: number;
      const TIMERUNNING_SEASON_PANDARIA = 1;
      const TIMERUNNING_ITEM_CTR = 2905;
      const TIMERUNNING_STARTLOC_ID_ALLIANCE = 10211;
      const TIMERUNNING_STARTLOC_ID_HORDE = 10212;
    }

    namespace TraitConsts {
      const MAX_COMBAT_TRAIT_CONFIGS = 40;
      const COMMIT_COMBAT_TRAIT_CONFIG_CHANGES_SPELL_ID = 384255;
      const INSPECT_TRAIT_CONFIG_ID = -1;
      const STARTER_BUILD_TRAIT_CONFIG_ID = -2;
      const VIEW_TRAIT_CONFIG_ID = -3;
    }

    namespace Transmog {
      const NoTransmogID: number;
      const MainHandTransmogIsIndividualWeapon = -1;
      const MainHandTransmogIsPairedWeapon: number;
    }
  }

  namespace C_AccessibilityOptions {}

  namespace C_AccountInfo {
    function GetIDFromBattleNetAccountGUID(
      this: void,
      battleNetAccountGUID: WOWGUID
    ): number;
    function IsGUIDBattleNetAccountType(this: void, guid: WOWGUID): boolean;
    function IsGUIDRelatedToLocalAccount(this: void, guid: WOWGUID): boolean;
  }

  namespace C_AchievementInfo {
    function AreGuildAchievementsEnabled(this: void): boolean;
    function GetRewardItemID(
      this: void,
      achievementID: number
    ): number | undefined;
    function GetSupercedingAchievements(
      this: void,
      achievementID: number
    ): number[];
    function IsGuildAchievement(this: void, achievementId: number): boolean;
    function IsValidAchievement(this: void, achievementId: number): boolean;
    function SetPortraitTexture(this: void, textureObject: SimpleTexture): void;
  }

  namespace C_ActionBar {
    interface ActionUsableState {
      slot: number;
      usable: boolean;
      noMana: boolean;
    }

    function EnableActionRangeCheck(
      this: void,
      actionID: number,
      enable: boolean
    ): void;
    function FindFlyoutActionButtons(this: void, flyoutID: number): number[];
    function FindPetActionButtons(this: void, petActionID: number): number[];
    function FindSpellActionButtons(this: void, spellID: number): number[];
    function GetBonusBarIndexForSlot(
      this: void,
      slotID: number
    ): number | undefined;
    function GetItemActionOnEquipSpellID(
      this: void,
      actionID: number
    ): number | undefined;
    function GetPetActionPetBarIndices(
      this: void,
      petActionID: number
    ): number[];
    function GetProfessionQuality(
      this: void,
      actionID: number
    ): number | undefined;
    function GetSpell(this: void, actionID: number): number;
    function HasFlyoutActionButtons(this: void, flyoutID: number): boolean;
    function HasPetActionButtons(this: void, petActionID: number): boolean;
    function HasPetActionPetBarIndices(
      this: void,
      petActionID: number
    ): boolean;
    function HasSpellActionButtons(this: void, spellID: number): boolean;
    function IsAutoCastPetAction(this: void, slotID: number): boolean;
    function IsEnabledAutoCastPetAction(this: void, slotID: number): boolean;
    function IsHarmfulAction(
      this: void,
      actionID: number,
      useNeutral: boolean
    ): boolean;
    function IsHelpfulAction(
      this: void,
      actionID: number,
      useNeutral: boolean
    ): boolean;
    function IsOnBarOrSpecialBar(this: void, spellID: number): boolean;
    function PutActionInSlot(this: void, slotID: number): void;
    function ShouldOverrideBarShowHealthBar(this: void): boolean;
    function ShouldOverrideBarShowManaBar(this: void): boolean;
    function ToggleAutoCastPetAction(this: void, slotID: number): void;
  }

  namespace C_AddOns {
    interface AddOnInfo {
      name: string;
      title: string;
      notes: string;
      loadable: boolean;
      reason: string;
      security: string;
      updateAvailable: boolean;
    }

    interface AddOnLoadableInfo {
      loadable: boolean;
      reason: string;
    }

    function DisableAddOn(this: void, name: uiAddon, character?: string): void;
    function DisableAllAddOns(this: void, character?: string): void;
    function DoesAddOnExist(this: void, name: uiAddon): boolean;
    function EnableAddOn(this: void, name: uiAddon, character?: string): void;
    function EnableAllAddOns(this: void, character?: string): void;
    function GetAddOnDependencies(this: void, name: uiAddon): string;
    function GetAddOnEnableState(
      this: void,
      name: uiAddon,
      character?: string
    ): Enum.AddOnEnableState;
    function GetAddOnInfo(
      this: void,
      name: uiAddon
    ): LuaMultiReturn<
      [string, string, string, boolean, string, string, boolean]
    >;
    function GetAddOnMetadata(
      this: void,
      name: uiAddon,
      variable: string
    ): string;
    function GetAddOnOptionalDependencies(this: void, name: uiAddon): string;
    function GetNumAddOns(this: void): number;
    function GetScriptsDisallowedForBeta(this: void): boolean;
    function IsAddOnLoadOnDemand(this: void, name: uiAddon): boolean;
    function IsAddOnLoadable(
      this: void,
      name: uiAddon,
      character?: string,
      demandLoaded?: boolean
    ): LuaMultiReturn<[boolean, string]>;
    function IsAddOnLoaded(
      this: void,
      name: uiAddon
    ): LuaMultiReturn<[boolean, boolean]>;
    function IsAddonVersionCheckEnabled(this: void): boolean;
    function LoadAddOn(
      this: void,
      name: uiAddon
    ): LuaMultiReturn<[boolean | undefined, string | undefined]>;
    function ResetAddOns(this: void): void;
    function ResetDisabledAddOns(this: void): void;
    function SaveAddOns(this: void): void;
    function SetAddonVersionCheck(this: void, enabled: boolean): void;
  }

  namespace C_AdventureJournal {}

  namespace C_AdventureMap {
    function GetAdventureMapTextureKit(this: void): textureKit;
  }

  namespace C_AlliedRaces {
    interface AlliedRaceInfo {
      raceID: number;
      maleModelID: number;
      femaleModelID: number;
      achievementIds: number[];
      maleName: string;
      femaleName: string;
      description: string;
      raceFileString: string;
      crestAtlas: textureAtlas;
      modelBackgroundAtlas: textureAtlas;
      bannerColor: colorRGB;
    }

    interface AlliedRaceRacialAbility {
      description: string;
      name: string;
      icon: fileID;
    }

    function GetAllRacialAbilitiesFromID(
      this: void,
      raceID: number
    ): AlliedRaceRacialAbility[];
    function GetRaceInfoByID(this: void, raceID: number): AlliedRaceInfo;
  }

  namespace C_AnimaDiversion {
    interface AnimaDiversionCostInfo {
      currencyID: number;
      quantity: number;
    }

    interface AnimaDiversionFrameInfo {
      textureKit: textureKit;
      title: string;
      mapID: number;
    }

    interface AnimaDiversionNodeInfo {
      talentID: number;
      name: string;
      description: string;
      costs: AnimaDiversionCostInfo[];
      currencyID: number;
      icon: number;
      normalizedPosition: vector2;
      state: Enum.AnimaDiversionNodeState;
    }

    function CloseUI(this: void): void;
    function GetAnimaDiversionNodes(this: void): AnimaDiversionNodeInfo[];
    function GetOriginPosition(this: void): vector2 | undefined;
    function GetReinforceProgress(this: void): number;
    function GetTextureKit(this: void): textureKit;
    function OpenAnimaDiversionUI(this: void): void;
    function SelectAnimaNode(
      this: void,
      talentID: number,
      temporary: boolean
    ): void;
  }

  interface AppearanceSourceInfo {
    visualID: number;
    sourceID: number;
    isCollected: boolean;
    itemID: number;
    itemModID: number;
    invType?: number;
    categoryID?: Enum.TransmogCollectionType;
    playerCanCollect: boolean;
    isValidSourceForPlayer: boolean;
    inventorySlot?: number;
    sourceType?: number;
    name?: string;
    quality?: number;
    useError?: string;
    useErrorType?: Enum.TransmogUseErrorType;
    meetsTransmogPlayerCondition?: boolean;
    isHideVisual?: boolean;
  }

  namespace C_ArdenwealdGardening {
    interface ArdenwealdGardenData {
      active: number;
      ready: number;
      remainingSeconds: time_t;
    }

    function GetGardenData(this: void): ArdenwealdGardenData;
    function IsGardenAccessible(this: void): boolean;
  }

  namespace C_AreaPoiInfo {
    interface AreaPOIInfo {
      areaPoiID: number;
      position: vector2;
      name: string;
      description?: string;
      linkedUiMapID?: number;
      textureIndex?: number;
      tooltipWidgetSet?: number;
      iconWidgetSet?: number;
      atlasName?: string;
      uiTextureKit?: textureKit;
      shouldGlow: boolean;
      factionID?: number;
      isPrimaryMapForPOI: boolean;
      isAlwaysOnFlightmap: boolean;
      addPaddingAboveTooltipWidgets?: boolean;
      highlightWorldQuestsOnHover: boolean;
      highlightVignettesOnHover: boolean;
      isCurrentEvent: boolean;
    }

    function GetAreaPOIForMap(this: void, uiMapID: number): number[];
    function GetAreaPOIInfo(
      this: void,
      uiMapID: number,
      areaPoiID: number
    ): AreaPOIInfo;
    function GetAreaPOISecondsLeft(this: void, areaPoiID: number): number;
    function GetDelvesForMap(this: void, uiMapID: number): number[];
    function GetDragonridingRacesForMap(this: void, uiMapID: number): number[];
    function GetEventsForMap(this: void, uiMapID: number): number[];
    function GetQuestHubsForMap(this: void, uiMapID: number): number[];
    function IsAreaPOITimed(
      this: void,
      areaPoiID: number
    ): LuaMultiReturn<[boolean, boolean | undefined]>;
  }

  function AcceptArenaTeam(this: void): void;
  function ArenaTeamDisband(this: void, index: number): void;
  function ArenaTeamInviteByName(
    this: void,
    index: number,
    target: string
  ): void;
  function ArenaTeamLeave(this: void, index: number): void;
  function ArenaTeamSetLeaderByName(
    this: void,
    index: number,
    target: string
  ): void;
  function ArenaTeamUninviteByName(
    this: void,
    index: number,
    target: string
  ): void;
  function DeclineArenaTeam(this: void): void;

  namespace C_ArtifactUI {
    interface ArtifactAppearanceInfo {
      artifactAppearanceID: number;
      appearanceName: string;
      displayIndex: number;
      unlocked: boolean;
      failureDescription?: string;
      uiCameraID: number;
      altHandCameraID?: number;
      swatchColor: colorRGB;
      modelOpacity: number;
      modelSaturation: number;
      obtainable: boolean;
    }

    interface ArtifactAppearanceSetInfo {
      artifactAppearanceSetID: number;
      appearanceSetName: string;
      appearanceSetDescription: string;
      numAppearances: number;
    }

    interface ArtifactArtInfo {
      textureKit: textureKit;
      titleName: string;
      titleColor: colorRGB;
      barConnectedColor: colorRGB;
      barDisconnectedColor: colorRGB;
      uiModelSceneID: number;
      spellVisualKitID: number;
    }

    interface ArtifactInfo {
      itemID: number;
      altItemID?: number;
      name: string;
      icon: fileID;
      xp: number;
      pointsSpent: number;
      quality: number;
      artifactAppearanceID: number;
      appearanceModID: number;
      itemAppearanceID?: number;
      altItemAppearanceID?: number;
      altOnTop: boolean;
      tier: ArtifactTiers;
    }

    interface ArtifactMetaPowerInfo {
      spellID: number;
      powerCost: number;
      currentRank: number;
    }

    interface ArtifactPowerInfo {
      spellID: number;
      cost: number;
      currentRank: number;
      maxRank: number;
      bonusRanks: number;
      numMaxRankBonusFromTier: number;
      prereqsMet: boolean;
      isStart: boolean;
      isGoldMedal: boolean;
      isFinal: boolean;
      tier: number;
      position: vector2;
      offset?: vector2;
      linearIndex?: number;
    }

    interface ArtifactRelicInfo {
      name: string;
      icon: fileID;
      slotTypeName: string;
      link: string;
    }

    function AddPower(this: void, powerID: number): boolean;
    function ApplyCursorRelicToSlot(this: void, relicSlotIndex: number): void;
    function CanApplyArtifactRelic(
      this: void,
      relicItemID: number,
      onlyUnlocked: boolean
    ): boolean;
    function CanApplyCursorRelicToSlot(
      this: void,
      relicSlotIndex: number
    ): boolean;
    function CanApplyRelicItemIDToEquippedArtifactSlot(
      this: void,
      relicItemID: number,
      relicSlotIndex: number
    ): boolean;
    function CanApplyRelicItemIDToSlot(
      this: void,
      relicItemID: number,
      relicSlotIndex: number
    ): boolean;
    function CheckRespecNPC(this: void): boolean;
    function Clear(this: void): void;
    function ClearForgeCamera(this: void): void;
    function ConfirmRespec(this: void): void;
    function DoesEquippedArtifactHaveAnyRelicsSlotted(this: void): boolean;
    function GetAppearanceInfo(
      this: void,
      appearanceSetIndex: number,
      appearanceIndex: number
    ): LuaMultiReturn<
      [
        number,
        string,
        number,
        boolean,
        string | undefined,
        number,
        number | undefined,
        number,
        number,
        number,
        number,
        number,
        boolean,
      ]
    >;
    function GetAppearanceInfoByID(
      this: void,
      artifactAppearanceID: number
    ): LuaMultiReturn<
      [
        number,
        number,
        string,
        number,
        boolean,
        string | undefined,
        number,
        number | undefined,
        number,
        number,
        number,
        number,
        number,
        boolean,
      ]
    >;
    function GetAppearanceSetInfo(
      this: void,
      appearanceSetIndex: number
    ): LuaMultiReturn<[number, string, string, number]>;
    function GetArtifactArtInfo(this: void): ArtifactArtInfo;
    function GetArtifactInfo(
      this: void
    ): LuaMultiReturn<
      [
        number,
        number | undefined,
        string,
        fileID,
        number,
        number,
        number,
        number,
        number,
        number | undefined,
        number | undefined,
        boolean,
        ArtifactTiers,
      ]
    >;
    function GetArtifactItemID(this: void): number;
    function GetArtifactTier(this: void): ArtifactTiers | undefined;
    function GetArtifactXPRewardTargetInfo(
      this: void,
      artifactCategoryID: number
    ): LuaMultiReturn<[string, fileID]>;
    function GetCostForPointAtRank(
      this: void,
      rank: number,
      tier: ArtifactTiers
    ): number;
    function GetEquippedArtifactArtInfo(this: void): ArtifactArtInfo;
    function GetEquippedArtifactInfo(
      this: void
    ): LuaMultiReturn<
      [
        number,
        number | undefined,
        string,
        fileID,
        number,
        number,
        number,
        number,
        number,
        number | undefined,
        number | undefined,
        boolean,
        ArtifactTiers,
      ]
    >;
    function GetEquippedArtifactItemID(this: void): number;
    function GetEquippedArtifactNumRelicSlots(
      this: void,
      onlyUnlocked?: boolean
    ): number;
    function GetEquippedArtifactRelicInfo(
      this: void,
      relicSlotIndex: number
    ): LuaMultiReturn<[string, fileID, string, string]>;
    function GetEquippedRelicLockedReason(
      this: void,
      relicSlotIndex: number
    ): string | undefined;
    function GetForgeRotation(
      this: void
    ): LuaMultiReturn<[number, number, number]>;
    function GetItemLevelIncreaseProvidedByRelic(
      this: void,
      itemLinkOrID: ItemInfo
    ): number;
    function GetMetaPowerInfo(
      this: void
    ): LuaMultiReturn<[number, number, number]>;
    function GetNumAppearanceSets(this: void): number;
    function GetNumObtainedArtifacts(this: void): number;
    function GetNumRelicSlots(this: void, onlyUnlocked?: boolean): number;
    function GetPointsRemaining(this: void): number;
    function GetPowerHyperlink(this: void, powerID: number): string;
    function GetPowerInfo(this: void, powerID: number): ArtifactPowerInfo;
    function GetPowerLinks(this: void, powerID: number): number[];
    function GetPowers(this: void): number[];
    function GetPowersAffectedByRelic(
      this: void,
      relicSlotIndex: number
    ): number;
    function GetPowersAffectedByRelicItemLink(
      this: void,
      relicItemInfo: ItemInfo
    ): number;
    function GetPreviewAppearance(this: void): number | undefined;
    function GetRelicInfo(
      this: void,
      relicSlotIndex: number
    ): LuaMultiReturn<[string, fileID, string, string]>;
    function GetRelicInfoByItemID(
      this: void,
      itemID: number
    ): LuaMultiReturn<[string, fileID, string, string]>;
    function GetRelicLockedReason(
      this: void,
      relicSlotIndex: number
    ): string | undefined;
    function GetRelicSlotType(this: void, relicSlotIndex: number): string;
    function GetRespecArtifactArtInfo(this: void): ArtifactArtInfo;
    function GetRespecArtifactInfo(
      this: void
    ): LuaMultiReturn<
      [
        number,
        number | undefined,
        string,
        fileID,
        number,
        number,
        number,
        number,
        number,
        number | undefined,
        number | undefined,
        boolean,
        ArtifactTiers,
      ]
    >;
    function GetRespecCost(this: void): number;
    function GetTotalPowerCost(
      this: void,
      startingTrait: number,
      numTraits: number,
      artifactTier: ArtifactTiers
    ): number;
    function GetTotalPurchasedRanks(this: void): number;
    function IsArtifactDisabled(this: void): boolean;
    function IsArtifactItem(this: void, itemLocation: ItemLocation): boolean;
    function IsAtForge(this: void): boolean;
    function IsEquippedArtifactDisabled(this: void): boolean;
    function IsEquippedArtifactMaxed(this: void): boolean;
    function IsMaxedByRulesOrEffect(this: void): boolean;
    function IsPowerKnown(this: void, powerID: number): boolean;
    function IsViewedArtifactEquipped(this: void): boolean;
    function SetAppearance(this: void, artifactAppearanceID: number): void;
    function SetForgeCamera(this: void): void;
    function SetForgeRotation(
      this: void,
      forgeRotationX: number,
      forgeRotationY: number,
      forgeRotationZ: number
    ): void;
    function SetPreviewAppearance(
      this: void,
      artifactAppearanceID?: number
    ): void;
    function ShouldSuppressForgeRotation(this: void): boolean;
  }

  namespace C_AuctionHouse {
    interface AuctionHouseBrowseQuery {
      searchString: string;
      sorts: AuctionHouseSortType[];
      minLevel?: number;
      maxLevel?: number;
      filters?: Enum.AuctionHouseFilter[];
      itemClassFilters?: AuctionHouseItemClassFilter[];
    }

    interface AuctionHouseFilterGroup {
      category: Enum.AuctionHouseFilterCategory;
      filters: Enum.AuctionHouseFilter[];
    }

    interface AuctionHouseItemClassFilter {
      classID: number;
      subClassID?: number;
      inventoryType?: Enum.InventoryType;
    }

    interface AuctionHouseSortType {
      sortOrder: Enum.AuctionHouseSortOrder;
      reverseSort: boolean;
    }

    interface AuctionInfo {
      itemKey: ItemKey;
      itemLink?: string;
      minBid?: WOWMONEY;
      bidAmount?: WOWMONEY;
      buyoutAmount?: WOWMONEY;
      bidder?: WOWGUID;
    }

    interface BidInfo {
      auctionID: number;
      itemKey: ItemKey;
      itemLink?: string;
      timeLeft: Enum.AuctionHouseTimeLeftBand;
      minBid?: BigUInteger;
      bidAmount?: BigUInteger;
      buyoutAmount?: BigUInteger;
      bidder?: WOWGUID;
    }

    interface BrowseResultInfo {
      itemKey: ItemKey;
      appearanceLink?: string;
      totalQuantity: number;
      minPrice: BigUInteger;
      containsOwnerItem: boolean;
    }

    interface CommoditySearchResultInfo {
      itemID: number;
      quantity: number;
      unitPrice: BigUInteger;
      auctionID: number;
      owners: string[];
      totalNumberOfOwners: number;
      timeLeftSeconds?: number;
      numOwnerItems: number;
      containsOwnerItem: boolean;
      containsAccountItem: boolean;
    }

    interface ItemKey {
      itemID: number;
      itemLevel?: number;
      itemSuffix?: number;
      battlePetSpeciesID?: number;
    }

    interface ItemKeyInfo {
      itemID: number;
      battlePetSpeciesID: number;
      itemName: string;
      battlePetLink?: string;
      appearanceLink?: string;
      quality: Enum.ItemQuality;
      iconFileID: number;
      isPet: boolean;
      isCommodity: boolean;
      isEquipment: boolean;
    }

    interface ItemSearchResultInfo {
      itemKey: ItemKey;
      owners: string[];
      totalNumberOfOwners: number;
      timeLeft: Enum.AuctionHouseTimeLeftBand;
      auctionID: number;
      quantity: number;
      itemLink?: string;
      containsOwnerItem: boolean;
      containsAccountItem: boolean;
      containsSocketedItem: boolean;
      bidder?: WOWGUID;
      minBid?: BigUInteger;
      bidAmount?: BigUInteger;
      buyoutAmount?: BigUInteger;
      timeLeftSeconds?: number;
    }

    interface OwnedAuctionInfo {
      auctionID: number;
      itemKey: ItemKey;
      itemLink?: string;
      status: Enum.AuctionStatus;
      quantity: number;
      timeLeftSeconds?: number;
      timeLeft?: Enum.AuctionHouseTimeLeftBand;
      bidAmount?: BigUInteger;
      buyoutAmount?: BigUInteger;
      bidder?: string;
    }

    interface ReplicateItemInfo {
      name?: string;
      texture?: fileID;
      count: number;
      qualityID: number;
      usable?: boolean;
      level: number;
      levelType?: string;
      minBid: BigUInteger;
      minIncrement: BigUInteger;
      buyoutPrice: BigUInteger;
      bidAmount: BigUInteger;
      highBidder?: string;
      bidderFullName?: string;
      owner?: string;
      ownerFullName?: string;
      saleStatus: number;
      itemID: number;
      hasAllInfo?: boolean;
    }

    function CalculateCommodityDeposit(
      this: void,
      itemID: number,
      duration: number,
      quantity: number
    ): number | undefined;
    function CalculateItemDeposit(
      this: void,
      item: ItemLocation,
      duration: number,
      quantity: number
    ): number | undefined;
    function CanCancelAuction(this: void, ownedAuctionID: number): boolean;
    function CancelAuction(this: void, ownedAuctionID: number): void;
    function CancelCommoditiesPurchase(this: void): void;
    function CancelSell(this: void): void;
    function CloseAuctionHouse(this: void): void;
    function ConfirmCommoditiesPurchase(
      this: void,
      itemID: number,
      quantity: number
    ): void;
    function ConfirmPostCommodity(
      this: void,
      item: ItemLocation,
      duration: number,
      quantity: number,
      unitPrice: BigUInteger
    ): void;
    function ConfirmPostItem(
      this: void,
      item: ItemLocation,
      duration: number,
      quantity: number,
      bid?: BigUInteger,
      buyout?: BigUInteger
    ): void;
    function FavoritesAreAvailable(this: void): boolean;
    function GetAuctionInfoByID(
      this: void,
      auctionID: number
    ): AuctionInfo | undefined;
    function GetAuctionItemSubClasses(this: void, classID: number): number[];
    function GetAvailablePostCount(this: void, item: ItemLocation): number;
    function GetBidInfo(this: void, bidIndex: number): BidInfo | undefined;
    function GetBidType(this: void, bidTypeIndex: number): ItemKey | undefined;
    function GetBids(this: void): BidInfo[];
    function GetBrowseResults(this: void): BrowseResultInfo[];
    function GetCancelCost(this: void, ownedAuctionID: number): BigUInteger;
    function GetCommoditySearchResultInfo(
      this: void,
      itemID: number,
      commoditySearchResultIndex: number
    ): CommoditySearchResultInfo | undefined;
    function GetCommoditySearchResultsQuantity(
      this: void,
      itemID: number
    ): number;
    function GetExtraBrowseInfo(this: void, itemKey: ItemKey): number;
    function GetFilterGroups(this: void): AuctionHouseFilterGroup[];
    function GetItemCommodityStatus(
      this: void,
      item: ItemLocation
    ): Enum.ItemCommodityStatus;
    function GetItemKeyFromItem(this: void, item: ItemLocation): ItemKey;
    function GetItemKeyInfo(
      this: void,
      itemKey: ItemKey,
      restrictQualityToFilter?: boolean
    ): ItemKeyInfo | undefined;
    function GetItemKeyRequiredLevel(this: void, itemKey: ItemKey): number;
    function GetItemSearchResultInfo(
      this: void,
      itemKey: ItemKey,
      itemSearchResultIndex: number
    ): ItemSearchResultInfo | undefined;
    function GetItemSearchResultsQuantity(this: void, itemKey: ItemKey): number;
    function GetMaxBidItemBid(this: void): BigUInteger | undefined;
    function GetMaxBidItemBuyout(this: void): BigUInteger | undefined;
    function GetMaxCommoditySearchResultPrice(
      this: void,
      itemID: number
    ): BigUInteger | undefined;
    function GetMaxItemSearchResultBid(
      this: void,
      itemKey: ItemKey
    ): BigUInteger | undefined;
    function GetMaxItemSearchResultBuyout(
      this: void,
      itemKey: ItemKey
    ): BigUInteger | undefined;
    function GetMaxOwnedAuctionBid(this: void): BigUInteger | undefined;
    function GetMaxOwnedAuctionBuyout(this: void): BigUInteger | undefined;
    function GetNumBidTypes(this: void): number;
    function GetNumBids(this: void): number;
    function GetNumCommoditySearchResults(this: void, itemID: number): number;
    function GetNumItemSearchResults(this: void, itemKey: ItemKey): number;
    function GetNumOwnedAuctionTypes(this: void): number;
    function GetNumOwnedAuctions(this: void): number;
    function GetNumReplicateItems(this: void): number;
    function GetOwnedAuctionInfo(
      this: void,
      ownedAuctionIndex: number
    ): OwnedAuctionInfo | undefined;
    function GetOwnedAuctionType(
      this: void,
      ownedAuctionTypeIndex: number
    ): ItemKey | undefined;
    function GetOwnedAuctions(this: void): OwnedAuctionInfo[];
    function GetQuoteDurationRemaining(this: void): number;
    function GetReplicateItemBattlePetInfo(
      this: void,
      index: number
    ): LuaMultiReturn<[number, number]>;
    function GetReplicateItemInfo(
      this: void,
      index: number
    ): LuaMultiReturn<
      [
        string | undefined,
        fileID | undefined,
        number,
        number,
        boolean | undefined,
        number,
        string | undefined,
        BigUInteger,
        BigUInteger,
        BigUInteger,
        BigUInteger,
        string | undefined,
        string | undefined,
        string | undefined,
        string | undefined,
        number,
        number,
        boolean | undefined,
      ]
    >;
    function GetReplicateItemLink(
      this: void,
      index: number
    ): string | undefined;
    function GetReplicateItemTimeLeft(this: void, index: number): number;
    function GetTimeLeftBandInfo(
      this: void,
      timeLeftBand: Enum.AuctionHouseTimeLeftBand
    ): LuaMultiReturn<[number, number]>;
    function HasFavorites(this: void): boolean;
    function HasFullBidResults(this: void): boolean;
    function HasFullBrowseResults(this: void): boolean;
    function HasFullCommoditySearchResults(this: void, itemID: number): boolean;
    function HasFullItemSearchResults(this: void, itemKey: ItemKey): boolean;
    function HasFullOwnedAuctionResults(this: void): boolean;
    function HasMaxFavorites(this: void): boolean;
    function HasSearchResults(this: void, itemKey: ItemKey): boolean;
    function IsFavoriteItem(this: void, itemKey: ItemKey): boolean;
    function IsSellItemValid(
      this: void,
      item: ItemLocation,
      displayError?: boolean
    ): boolean;
    function IsThrottledMessageSystemReady(this: void): boolean;
    function MakeItemKey(
      this: void,
      itemID: number,
      itemLevel?: number,
      itemSuffix?: number,
      battlePetSpeciesID?: number
    ): ItemKey;
    function PlaceBid(
      this: void,
      auctionID: number,
      bidAmount: BigUInteger
    ): void;
    function PostCommodity(
      this: void,
      item: ItemLocation,
      duration: number,
      quantity: number,
      unitPrice: BigUInteger
    ): boolean;
    function PostItem(
      this: void,
      item: ItemLocation,
      duration: number,
      quantity: number,
      bid?: BigUInteger,
      buyout?: BigUInteger
    ): boolean;
    function QueryBids(
      this: void,
      sorts: AuctionHouseSortType[],
      auctionIDs: number[]
    ): void;
    function QueryOwnedAuctions(
      this: void,
      sorts: AuctionHouseSortType[]
    ): void;
    function RefreshCommoditySearchResults(this: void, itemID: number): void;
    function RefreshItemSearchResults(
      this: void,
      itemKey: ItemKey,
      minLevelFilter?: number,
      maxLevelFilter?: number
    ): void;
    function ReplicateItems(this: void): void;
    function RequestFavorites(this: void): void;
    function RequestMoreBrowseResults(this: void): void;
    function RequestMoreCommoditySearchResults(
      this: void,
      itemID: number
    ): boolean;
    function RequestMoreItemSearchResults(
      this: void,
      itemKey: ItemKey
    ): boolean;
    function RequestOwnedAuctionBidderInfo(
      this: void,
      auctionID: number
    ): string;
    function SearchForFavorites(
      this: void,
      sorts: AuctionHouseSortType[]
    ): void;
    function SearchForItemKeys(
      this: void,
      itemKeys: ItemKey[],
      sorts: AuctionHouseSortType[]
    ): void;
    function SendBrowseQuery(this: void, query: AuctionHouseBrowseQuery): void;
    function SendSearchQuery(
      this: void,
      itemKey: ItemKey,
      sorts: AuctionHouseSortType[],
      separateOwnerItems: boolean,
      minLevelFilter?: number,
      maxLevelFilter?: number
    ): void;
    function SendSellSearchQuery(
      this: void,
      itemKey: ItemKey,
      sorts: AuctionHouseSortType[],
      separateOwnerItems: boolean
    ): void;
    function SetFavoriteItem(
      this: void,
      itemKey: ItemKey,
      setFavorite: boolean
    ): void;
    function StartCommoditiesPurchase(
      this: void,
      itemID: number,
      quantity: number
    ): void;
  }

  namespace C_AzeriteEmpoweredItem {
    interface AzeriteEmpoweredItemPowerInfo {
      azeritePowerID: number;
      spellID: number;
    }

    interface AzeriteEmpoweredItemPowerText {
      name: string;
      description: string;
    }

    interface AzeriteEmpoweredItemTierInfo {
      azeritePowerIDs: number[];
      unlockLevel: number;
    }

    interface AzeriteSpecInfo {
      classID: number;
      specID: number;
    }

    function CanSelectPower(
      this: void,
      azeriteEmpoweredItemLocation: AzeriteEmpoweredItemLocation,
      powerID: number
    ): boolean;
    function ConfirmAzeriteEmpoweredItemRespec(
      this: void,
      azeriteEmpoweredItemLocation: AzeriteEmpoweredItemLocation
    ): void;
    function GetAllTierInfo(
      this: void,
      azeriteEmpoweredItemLocation: AzeriteEmpoweredItemLocation
    ): AzeriteEmpoweredItemTierInfo[];
    function GetAllTierInfoByItemID(
      this: void,
      itemInfo: ItemInfo,
      classID?: number
    ): AzeriteEmpoweredItemTierInfo[];
    function GetAzeriteEmpoweredItemRespecCost(this: void): number;
    function GetPowerInfo(
      this: void,
      powerID: number
    ): AzeriteEmpoweredItemPowerInfo;
    function GetPowerText(
      this: void,
      azeriteEmpoweredItemLocation: AzeriteEmpoweredItemLocation,
      powerID: number,
      level: Enum.AzeritePowerLevel
    ): AzeriteEmpoweredItemPowerText;
    function GetSpecsForPower(this: void, powerID: number): AzeriteSpecInfo[];
    function HasAnyUnselectedPowers(
      this: void,
      azeriteEmpoweredItemLocation: AzeriteEmpoweredItemLocation
    ): boolean;
    function HasBeenViewed(
      this: void,
      azeriteEmpoweredItemLocation: AzeriteEmpoweredItemLocation
    ): boolean;
    function IsAzeriteEmpoweredItem(
      this: void,
      itemLocation: ItemLocation
    ): boolean;
    function IsAzeriteEmpoweredItemByID(
      this: void,
      itemInfo: ItemInfo
    ): boolean;
    function IsAzeritePreviewSourceDisplayable(
      this: void,
      itemInfo: ItemInfo,
      classID?: number
    ): boolean;
    function IsHeartOfAzerothEquipped(this: void): boolean;
    function IsPowerAvailableForSpec(
      this: void,
      powerID: number,
      specID: number
    ): boolean;
    function IsPowerSelected(
      this: void,
      azeriteEmpoweredItemLocation: AzeriteEmpoweredItemLocation,
      powerID: number
    ): boolean;
    function SelectPower(
      this: void,
      azeriteEmpoweredItemLocation: AzeriteEmpoweredItemLocation,
      powerID: number
    ): boolean;
    function SetHasBeenViewed(
      this: void,
      azeriteEmpoweredItemLocation: AzeriteEmpoweredItemLocation
    ): void;
  }

  namespace C_AzeriteEssence {
    interface AzeriteEssenceInfo {
      ID: number;
      name: string;
      rank: number;
      unlocked: boolean;
      valid: boolean;
      icon: fileID;
    }

    interface AzeriteMilestoneInfo {
      ID: number;
      requiredLevel: number;
      canUnlock: boolean;
      unlocked: boolean;
      rank?: number;
      slot?: Enum.AzeriteEssenceSlot;
    }

    function ActivateEssence(
      this: void,
      essenceID: number,
      milestoneID: number
    ): void;
    function CanActivateEssence(
      this: void,
      essenceID: number,
      milestoneID: number
    ): boolean;
    function CanDeactivateEssence(this: void, milestoneID: number): boolean;
    function CanOpenUI(this: void): boolean;
    function ClearPendingActivationEssence(this: void): void;
    function CloseForge(this: void): void;
    function GetEssenceHyperlink(
      this: void,
      essenceID: number,
      rank: number
    ): string;
    function GetEssenceInfo(this: void, essenceID: number): AzeriteEssenceInfo;
    function GetEssences(this: void): AzeriteEssenceInfo[];
    function GetMilestoneEssence(this: void, milestoneID: number): number;
    function GetMilestoneInfo(
      this: void,
      milestoneID: number
    ): AzeriteMilestoneInfo;
    function GetMilestoneSpell(this: void, milestoneID: number): number;
    function GetMilestones(this: void): AzeriteMilestoneInfo[];
    function GetNumUnlockedEssences(this: void): number;
    function GetNumUsableEssences(this: void): number;
    function GetPendingActivationEssence(this: void): number;
    function HasNeverActivatedAnyEssences(this: void): boolean;
    function HasPendingActivationEssence(this: void): boolean;
    function IsAtForge(this: void): boolean;
    function SetPendingActivationEssence(this: void, essenceID: number): void;
    function UnlockMilestone(this: void, milestoneID: number): void;
  }

  namespace C_AzeriteItem {
    interface UnlockedAzeriteEmpoweredItems {
      unlockedItem: AzeriteEmpoweredItemLocation;
      tierIndex: number;
    }

    function FindActiveAzeriteItem(this: void): AzeriteItemLocation;
    function GetAzeriteItemXPInfo(
      this: void,
      azeriteItemLocation: AzeriteItemLocation
    ): LuaMultiReturn<[number, number]>;
    function GetPowerLevel(
      this: void,
      azeriteItemLocation: AzeriteItemLocation
    ): number;
    function GetUnlimitedPowerLevel(
      this: void,
      azeriteItemLocation: AzeriteItemLocation
    ): number;
    function HasActiveAzeriteItem(this: void): boolean;
    function IsAzeriteItem(this: void, itemLocation: ItemLocation): boolean;
    function IsAzeriteItemAtMaxLevel(this: void): boolean;
    function IsAzeriteItemByID(this: void, itemInfo: ItemInfo): boolean;
    function IsAzeriteItemEnabled(
      this: void,
      azeriteItemLocation: AzeriteItemLocation
    ): boolean;
    function IsUnlimitedLevelingUnlocked(this: void): boolean;
  }

  namespace C_Bank {
    interface BankTabData {
      ID: number;
      bankType: Enum.BankType;
      name: string;
      icon: fileID;
      depositFlags: Enum.BagSlotFlags;
    }

    function AutoDepositItemsIntoBank(
      this: void,
      bankType: Enum.BankType
    ): void;
    function CanDepositMoney(this: void, bankType: Enum.BankType): boolean;
    function CanPurchaseBankTab(this: void, bankType: Enum.BankType): boolean;
    function CanUseBank(this: void, bankType: Enum.BankType): boolean;
    function CanViewBank(this: void, bankType: Enum.BankType): boolean;
    function CanWithdrawMoney(this: void, bankType: Enum.BankType): boolean;
    function CloseBankFrame(this: void): void;
    function DepositMoney(
      this: void,
      bankType: Enum.BankType,
      amount: WOWMONEY
    ): void;
    function FetchDepositedMoney(this: void, bankType: Enum.BankType): WOWMONEY;
    function FetchNextPurchasableBankTabCost(
      this: void,
      bankType: Enum.BankType
    ): BigUInteger | undefined;
    function FetchNumPurchasedBankTabs(
      this: void,
      bankType: Enum.BankType
    ): number;
    function FetchPurchasedBankTabData(
      this: void,
      bankType: Enum.BankType
    ): BankTabData[];
    function FetchPurchasedBankTabIDs(
      this: void,
      bankType: Enum.BankType
    ): Enum.BagIndex[];
    function HasMaxBankTabs(this: void, bankType: Enum.BankType): boolean;
    function IsItemAllowedInBankType(
      this: void,
      bankType: Enum.BankType,
      itemLocation: ItemLocation
    ): boolean;
    function PurchaseBankTab(this: void, bankType: Enum.BankType): void;
    function UpdateBankTabSettings(
      this: void,
      bankType: Enum.BankType,
      tabID: Enum.BagIndex,
      tabName: string,
      tabIcon: string,
      depositFlags: Enum.BagSlotFlags
    ): void;
    function WithdrawMoney(
      this: void,
      bankType: Enum.BankType,
      amount: WOWMONEY
    ): void;
  }

  namespace C_BarberShop {
    function ApplyCustomizationChoices(this: void): boolean;
    function Cancel(this: void): void;
    function ClearPreviewChoices(this: void, clearSavedChoices?: boolean): void;
    function GetAvailableCustomizations(
      this: void
    ): CharCustomizationCategory[];
    function GetCurrentCameraZoom(this: void): number;
    function GetCurrentCharacterData(this: void): PlayerInfoCharacterData;
    function GetCurrentCost(this: void): number;
    function GetCustomizationScope(this: void): number;
    function GetViewingChrModel(this: void): number | undefined;
    function HasAnyChanges(this: void): boolean;
    function IsViewingAlteredForm(this: void): boolean;
    function MarkCustomizationChoiceAsSeen(this: void, choiceID: number): void;
    function MarkCustomizationOptionAsSeen(this: void, optionID: number): void;
    function PreviewCustomizationChoice(
      this: void,
      optionID: number,
      choiceID: number
    ): void;
    function RandomizeCustomizationChoices(this: void): void;
    function ResetCameraRotation(this: void): void;
    function ResetCustomizationChoices(this: void): void;
    function RotateCamera(this: void, diffDegrees: number): void;
    function SaveSeenChoices(this: void): void;
    function SetCameraDistanceOffset(this: void, offset: number): void;
    function SetCameraZoomLevel(
      this: void,
      zoomLevel: number,
      keepCustomZoom?: boolean
    ): void;
    function SetCustomizationChoice(
      this: void,
      optionID: number,
      choiceID: number
    ): void;
    function SetModelDressState(this: void, dressedState: boolean): void;
    function SetSelectedSex(this: void, sex: number): void;
    function SetViewingAlteredForm(
      this: void,
      isViewingAlteredForm: boolean
    ): void;
    function SetViewingChrModel(this: void, chrModelID?: number): void;
    function SetViewingShapeshiftForm(
      this: void,
      shapeshiftFormID?: number
    ): void;
    function ZoomCamera(this: void, zoomAmount: number): void;
  }

  namespace C_BarberShopInternal {
    function SetQAMode(this: void, qaModeEnabled: boolean): void;
  }

  interface ScriptObject {}

  namespace C_BattleNet {
    interface BNetAccountInfo {
      bnetAccountID: number;
      accountName: string;
      battleTag: string;
      isFriend: boolean;
      isBattleTagFriend: boolean;
      lastOnlineTime: number;
      isAFK: boolean;
      isDND: boolean;
      isFavorite: boolean;
      appearOffline: boolean;
      customMessage: string;
      customMessageTime: number;
      note: string;
      rafLinkType: Enum.RafLinkType;
      gameAccountInfo: BNetGameAccountInfo;
    }

    interface BNetGameAccountInfo {
      gameAccountID: number;
      clientProgram: string;
      isOnline: boolean;
      isGameBusy: boolean;
      isGameAFK: boolean;
      wowProjectID?: number;
      characterName?: string;
      realmName?: string;
      realmDisplayName?: string;
      realmID?: number;
      factionName?: string;
      raceName?: string;
      className?: string;
      areaName?: string;
      characterLevel?: number;
      richPresence?: string;
      playerGuid?: WOWGUID;
      isWowMobile: boolean;
      canSummon: boolean;
      hasFocus: boolean;
      regionID: number;
      isInCurrentRegion: boolean;
      timerunningSeasonID?: number;
    }

    function GetAccountInfoByGUID(
      this: void,
      guid: WOWGUID
    ): BNetAccountInfo | undefined;
    function GetAccountInfoByID(
      this: void,
      id: number,
      wowAccountGUID?: WOWGUID
    ): BNetAccountInfo | undefined;
    function GetFriendAccountInfo(
      this: void,
      friendIndex: number,
      wowAccountGUID?: WOWGUID
    ): BNetAccountInfo | undefined;
    function GetFriendGameAccountInfo(
      this: void,
      friendIndex: number,
      accountIndex: number
    ): BNetGameAccountInfo | undefined;
    function GetFriendNumGameAccounts(this: void, friendIndex: number): number;
    function GetGameAccountInfoByGUID(
      this: void,
      guid: WOWGUID
    ): BNetGameAccountInfo | undefined;
    function GetGameAccountInfoByID(
      this: void,
      id: number
    ): BNetGameAccountInfo | undefined;
  }

  namespace C_BattlePet {}

  namespace C_BehavioralMessaging {
    function SendNotificationReceipt(
      this: void,
      dbId: NotificationDbId,
      openTimeSeconds: number,
      readTimeSeconds: number
    ): void;
  }

  namespace C_BlackMarketInfo {}

  interface BountyInfo {
    questID: number;
    factionID: number;
    icon: fileID;
    numObjectives: number;
    turninRequirementText?: string;
  }

  namespace C_Browser {}

  function GetBuildInfo(
    this: void
  ): LuaMultiReturn<[string, string, string, number, string, string]>;
  function Is64BitClient(this: void): boolean;
  function IsBetaBuild(this: void): boolean;
  function IsDebugBuild(this: void): boolean;
  function IsLinuxClient(this: void): boolean;
  function IsMacClient(this: void): boolean;
  function IsPublicBuild(this: void): boolean;
  function IsTestBuild(this: void): boolean;
  function IsWindowsClient(this: void): boolean;
  function SupportsClipCursor(this: void): boolean;

  namespace C_Calendar {
    interface CalendarDayEvent {
      eventID: CalendarEventID;
      title: string;
      isCustomTitle: boolean;
      startTime: CalendarTime;
      endTime: CalendarTime;
      calendarType: string;
      sequenceType: string;
      eventType: Enum.CalendarEventType;
      iconTexture?: fileID;
      modStatus: string;
      inviteStatus: Enum.CalendarStatus;
      invitedBy: string;
      difficulty: number;
      inviteType: Enum.CalendarInviteType;
      sequenceIndex: number;
      numSequenceDays: number;
      difficultyName: string;
      dontDisplayBanner: boolean;
      dontDisplayEnd: boolean;
      clubID: ClubId;
      isLocked: boolean;
    }

    interface CalendarEventIndexInfo {
      offsetMonths: number;
      monthDay: number;
      eventIndex: number;
    }

    interface CalendarEventInfo {
      title: string;
      description: string;
      creator?: string;
      eventType: Enum.CalendarEventType;
      repeatOption: Enum.CalendarEventRepeatOptions;
      maxSize: number;
      textureIndex?: number;
      time: CalendarTime;
      lockoutTime: CalendarTime;
      isLocked: boolean;
      isAutoApprove: boolean;
      hasPendingInvite: boolean;
      inviteStatus?: Enum.CalendarStatus;
      inviteType?: Enum.CalendarInviteType;
      calendarType: string;
      communityName?: string;
    }

    interface CalendarEventInviteInfo {
      name?: string;
      level: number;
      className?: string;
      classFilename?: string;
      inviteStatus?: Enum.CalendarStatus;
      modStatus?: string;
      inviteIsMine: boolean;
      type: Enum.CalendarInviteType;
      notes: string;
      classID?: number;
      guid: WOWGUID;
    }

    interface CalendarEventStatusOption {
      status: Enum.CalendarStatus;
      statusString: string;
    }

    interface CalendarEventTextureInfo {
      title: string;
      iconTexture: fileID;
      expansionLevel: number;
      difficultyId?: number;
      mapId?: number;
      isLfr?: boolean;
    }

    interface CalendarEventTypeDisplayInfo {
      displayString: string;
      eventType: Enum.CalendarEventType;
    }

    interface CalendarGuildEventInfo {
      eventID: CalendarEventID;
      year: number;
      month: number;
      monthDay: number;
      weekday: number;
      hour: number;
      minute: number;
      eventType: Enum.CalendarEventType;
      title: string;
      calendarType: string;
      texture: fileID;
      inviteStatus: Enum.CalendarStatus;
      clubID: ClubId;
    }

    interface CalendarGuildFilterInfo {
      minLevel: number;
      maxLevel: number;
      rank: number;
    }

    interface CalendarHolidayInfo {
      name: string;
      description: string;
      texture: fileID;
      startTime?: CalendarTime;
      endTime?: CalendarTime;
    }

    interface CalendarMonthInfo {
      month: number;
      year: number;
      numDays: number;
      firstWeekday: number;
    }

    interface CalendarRaidInfo {
      name: string;
      calendarType: string;
      raidID: number;
      time: CalendarTime;
      difficulty: number;
      difficultyName?: string;
    }

    function AddEvent(this: void): void;
    function AreNamesReady(this: void): boolean;
    function CanAddEvent(this: void): boolean;
    function CanSendInvite(this: void): boolean;
    function CloseEvent(this: void): void;
    function ContextMenuEventCanComplain(
      this: void,
      offsetMonths: number,
      monthDay: number,
      eventIndex: number
    ): boolean;
    function ContextMenuEventCanEdit(
      this: void,
      offsetMonths: number,
      monthDay: number,
      eventIndex: number
    ): boolean;
    function ContextMenuEventCanRemove(
      this: void,
      offsetMonths: number,
      monthDay: number,
      eventIndex: number
    ): boolean;
    function ContextMenuEventClipboard(this: void): boolean;
    function ContextMenuEventCopy(this: void): void;
    function ContextMenuEventGetCalendarType(this: void): string | undefined;
    function ContextMenuEventPaste(
      this: void,
      offsetMonths: number,
      monthDay: number
    ): void;
    function ContextMenuEventRemove(this: void): void;
    function ContextMenuEventSignUp(this: void): void;
    function ContextMenuGetEventIndex(this: void): CalendarEventIndexInfo;
    function ContextMenuInviteAvailable(this: void): void;
    function ContextMenuInviteDecline(this: void): void;
    function ContextMenuInviteRemove(this: void): void;
    function ContextMenuInviteTentative(this: void): void;
    function ContextMenuSelectEvent(
      this: void,
      offsetMonths: number,
      monthDay: number,
      eventIndex: number
    ): void;
    function CreateCommunitySignUpEvent(this: void): void;
    function CreateGuildAnnouncementEvent(this: void): void;
    function CreateGuildSignUpEvent(this: void): void;
    function CreatePlayerEvent(this: void): void;
    function EventAvailable(this: void): void;
    function EventCanEdit(this: void): boolean;
    function EventClearAutoApprove(this: void): void;
    function EventClearLocked(this: void): void;
    function EventClearModerator(this: void, inviteIndex: number): void;
    function EventDecline(this: void): void;
    function EventGetCalendarType(this: void): string | undefined;
    function EventGetClubId(this: void): ClubId | undefined;
    function EventGetInvite(
      this: void,
      eventIndex: number
    ): CalendarEventInviteInfo;
    function EventGetInviteResponseTime(
      this: void,
      eventIndex: number
    ): CalendarTime;
    function EventGetInviteSortCriterion(
      this: void
    ): LuaMultiReturn<[string, boolean]>;
    function EventGetSelectedInvite(this: void): number | undefined;
    function EventGetStatusOptions(
      this: void,
      eventIndex: number
    ): CalendarEventStatusOption[];
    function EventGetTextures(
      this: void,
      eventType: Enum.CalendarEventType
    ): CalendarEventTextureInfo[];
    function EventGetTypes(this: void): string[];
    function EventGetTypesDisplayOrdered(
      this: void
    ): CalendarEventTypeDisplayInfo[];
    function EventHasPendingInvite(this: void): boolean;
    function EventHaveSettingsChanged(this: void): boolean;
    function EventInvite(this: void, name: string): void;
    function EventRemoveInvite(this: void, inviteIndex: number): void;
    function EventRemoveInviteByGuid(this: void, guid: WOWGUID): void;
    function EventSelectInvite(this: void, inviteIndex: number): void;
    function EventSetAutoApprove(this: void): void;
    function EventSetClubId(this: void, clubId?: ClubId): void;
    function EventSetDate(
      this: void,
      month: number,
      monthDay: number,
      year: number
    ): void;
    function EventSetDescription(this: void, description: string): void;
    function EventSetInviteStatus(
      this: void,
      eventIndex: number,
      status: Enum.CalendarStatus
    ): void;
    function EventSetLocked(this: void): void;
    function EventSetModerator(this: void, inviteIndex: number): void;
    function EventSetTextureID(this: void, textureIndex: number): void;
    function EventSetTime(this: void, hour: number, minute: number): void;
    function EventSetTitle(this: void, title: string): void;
    function EventSetType(this: void, typeIndex: Enum.CalendarEventType): void;
    function EventSignUp(this: void): void;
    function EventSortInvites(
      this: void,
      criterion: string,
      reverse: boolean
    ): void;
    function EventTentative(this: void): void;
    function GetClubCalendarEvents(
      this: void,
      clubId: ClubId,
      startTime: CalendarTime,
      endTime: CalendarTime
    ): CalendarDayEvent[];
    function GetDayEvent(
      this: void,
      monthOffset: number,
      monthDay: number,
      index: number
    ): CalendarDayEvent;
    function GetDefaultGuildFilter(this: void): CalendarGuildFilterInfo;
    function GetEventIndex(this: void): CalendarEventIndexInfo;
    function GetEventIndexInfo(
      this: void,
      eventID: CalendarEventID,
      monthOffset?: number,
      monthDay?: number
    ): CalendarEventIndexInfo | undefined;
    function GetEventInfo(this: void): CalendarEventInfo;
    function GetFirstPendingInvite(
      this: void,
      offsetMonths: number,
      monthDay: number
    ): number | undefined;
    function GetGuildEventInfo(
      this: void,
      index: number
    ): CalendarGuildEventInfo;
    function GetGuildEventSelectionInfo(
      this: void,
      index: number
    ): CalendarEventIndexInfo;
    function GetHolidayInfo(
      this: void,
      monthOffset: number,
      monthDay: number,
      index: number
    ): CalendarHolidayInfo;
    function GetMaxCreateDate(this: void): CalendarTime;
    function GetMinDate(this: void): CalendarTime;
    function GetMonthInfo(this: void, offsetMonths?: number): CalendarMonthInfo;
    function GetNextClubId(this: void): ClubId | undefined;
    function GetNumDayEvents(
      this: void,
      offsetMonths: number,
      monthDay: number
    ): number;
    function GetNumGuildEvents(this: void): number;
    function GetNumInvites(this: void): number;
    function GetNumPendingInvites(this: void): number;
    function GetRaidInfo(
      this: void,
      offsetMonths: number,
      monthDay: number,
      eventIndex: number
    ): CalendarRaidInfo;
    function IsActionPending(this: void): boolean;
    function IsEventOpen(this: void): boolean;
    function MassInviteCommunity(
      this: void,
      clubId: ClubId,
      minLevel: number,
      maxLevel: number,
      maxRankOrder?: number
    ): void;
    function MassInviteGuild(
      this: void,
      minLevel: number,
      maxLevel: number,
      maxRankOrder: number
    ): void;
    function OpenCalendar(this: void): void;
    function OpenEvent(
      this: void,
      offsetMonths: number,
      monthDay: number,
      index: number
    ): boolean;
    function RemoveEvent(this: void): void;
    function SetAbsMonth(this: void, month: number, year: number): void;
    function SetMonth(this: void, offsetMonths: number): void;
    function SetNextClubId(this: void, clubId?: ClubId): void;
    function UpdateEvent(this: void): void;
  }

  function GetCameraFOVDefaults(
    this: void
  ): LuaMultiReturn<[number, number, number]>;
  function GetUICameraInfo(
    this: void,
    uiCameraID: number
  ): LuaMultiReturn<
    [
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      boolean,
    ]
  >;

  namespace C_ChallengeMode {
    interface ChallengeModeCompletionMemberInfo {
      memberGUID: WOWGUID;
      name: string;
    }

    interface ChallengeModeGuildAttemptMember {
      name: string;
      classFileName: string;
    }

    interface ChallengeModeGuildTopAttempt {
      name: string;
      classFileName: string;
      keystoneLevel: number;
      mapChallengeModeID: number;
      isYou: boolean;
      members: ChallengeModeGuildAttemptMember[];
    }

    function CanUseKeystoneInCurrentMap(
      this: void,
      itemLocation: ItemLocation
    ): boolean;
    function ClearKeystone(this: void): void;
    function CloseKeystoneFrame(this: void): void;
    function GetActiveChallengeMapID(this: void): number | undefined;
    function GetActiveKeystoneInfo(
      this: void
    ): LuaMultiReturn<[number, number[], boolean]>;
    function GetAffixInfo(
      this: void,
      affixID: number
    ): LuaMultiReturn<[string, string, number]>;
    function GetCompletionInfo(
      this: void
    ): LuaMultiReturn<
      [
        number,
        number,
        number,
        boolean,
        number,
        boolean,
        number | undefined,
        number | undefined,
        boolean,
        boolean,
        number,
        boolean,
        ChallengeModeCompletionMemberInfo[],
      ]
    >;
    function GetDeathCount(this: void): LuaMultiReturn<[number, number]>;
    function GetDungeonScoreRarityColor(
      this: void,
      dungeonScore: number
    ): colorRGB;
    function GetGuildLeaders(this: void): ChallengeModeGuildTopAttempt[];
    function GetKeystoneLevelRarityColor(this: void, level: number): colorRGB;
    function GetMapScoreInfo(this: void): MythicPlusRatingLinkInfo[];
    function GetMapTable(this: void): number[];
    function GetMapUIInfo(
      this: void,
      mapChallengeModeID: number
    ): LuaMultiReturn<[string, number, number, number | undefined, number]>;
    function GetOverallDungeonScore(this: void): number;
    function GetPowerLevelDamageHealthMod(
      this: void,
      powerLevel: number
    ): LuaMultiReturn<[number, number]>;
    function GetSlottedKeystoneInfo(
      this: void
    ): LuaMultiReturn<[number, number[], number]>;
    function GetSpecificDungeonOverallScoreRarityColor(
      this: void,
      specificDungeonOverallScore: number
    ): colorRGB;
    function GetSpecificDungeonScoreRarityColor(
      this: void,
      specificDungeonScore: number
    ): colorRGB;
    function HasSlottedKeystone(this: void): boolean;
    function IsChallengeModeActive(this: void): boolean;
    function RemoveKeystone(this: void): boolean;
    function RequestLeaders(this: void, mapChallengeModeID: number): void;
    function Reset(this: void): void;
    function SlotKeystone(this: void): void;
    function StartChallengeMode(this: void): boolean;
  }

  interface CharCustomizationCategory {
    id: number;
    orderIndex: number;
    name: string;
    icon: textureAtlas;
    selectedIcon: textureAtlas;
    undressModel: boolean;
    subcategory: boolean;
    cameraZoomLevel: number;
    cameraDistanceOffset: number;
    spellShapeshiftFormID?: number;
    chrModelID?: number;
    options: CharCustomizationOption[];
    hasNewChoices: boolean;
    needsNativeFormCategory: boolean;
  }

  interface CharCustomizationChoice {
    id: number;
    name: string;
    ineligibleChoice: boolean;
    isNew: boolean;
    swatchColor1?: colorRGB;
    swatchColor2?: colorRGB;
    soundKit?: number;
    isLocked: boolean;
    lockedText?: string;
  }

  interface CharCustomizationOption {
    id: number;
    name: string;
    orderIndex: number;
    optionType: Enum.ChrCustomizationOptionType;
    choices: CharCustomizationChoice[];
    currentChoiceIndex?: number;
    hasNewChoices: boolean;
    isSound: boolean;
  }

  namespace C_ChatBubbles {
    function GetAllChatBubbles(
      this: void,
      includeForbidden?: boolean
    ): ChatBubbleFrame[];
  }

  interface ChatChannelInfo {
    name: string;
    shortcut: string;
    localID: number;
    instanceID: number;
    zoneChannelID: number;
    channelType: Enum.PermanentChatChannelType;
  }

  namespace C_ChatInfo {
    interface AddonMessageParams {
      prefix: string;
      message: string;
      chatType?: string;
      target?: string;
    }

    function CanPlayerSpeakLanguage(this: void, languageId: number): boolean;
    function GetChannelInfoFromIdentifier(
      this: void,
      channelIdentifier: string
    ): ChatChannelInfo | undefined;
    function GetChannelRosterInfo(
      this: void,
      channelIndex: number,
      rosterIndex: number
    ): LuaMultiReturn<[string, boolean, boolean, WOWGUID]>;
    function GetChannelRuleset(
      this: void,
      channelIndex: number
    ): Enum.ChatChannelRuleset;
    function GetChannelRulesetForChannelID(
      this: void,
      channelID: number
    ): Enum.ChatChannelRuleset;
    function GetChannelShortcut(this: void, channelIndex: number): string;
    function GetChannelShortcutForChannelID(
      this: void,
      channelID: number
    ): string;
    function GetChatLineSenderGUID(this: void, chatLine: number): WOWGUID;
    function GetChatLineSenderName(this: void, chatLine: number): string;
    function GetChatLineText(this: void, chatLine: number): string;
    function GetChatTypeName(this: void, typeID: number): string | undefined;
    function GetClubStreamIDs(this: void, clubID: ClubId): ClubStreamId[];
    function GetColorForChatType(
      this: void,
      chatType: string
    ): colorRGB | undefined;
    function GetGeneralChannelID(this: void): number;
    function GetGeneralChannelLocalID(this: void): number | undefined;
    function GetMentorChannelID(this: void): number;
    function GetNumActiveChannels(this: void): number;
    function GetNumReservedChatWindows(this: void): number;
    function GetRegisteredAddonMessagePrefixes(this: void): string[];
    function IsAddonMessagePrefixRegistered(
      this: void,
      prefix: string
    ): boolean;
    function IsChannelRegional(this: void, channelIndex: number): boolean;
    function IsChannelRegionalForChannelID(
      this: void,
      channelID: number
    ): boolean;
    function IsChatLineCensored(this: void, chatLine: number): boolean;
    function IsPartyChannelType(
      this: void,
      channelType: Enum.ChatChannelType
    ): boolean;
    function IsRegionalServiceAvailable(this: void): boolean;
    function IsTimerunningPlayer(this: void, playerGUID: WOWGUID): boolean;
    function IsValidChatLine(this: void, chatLine?: number): boolean;
    function IsValidCombatFilterName(this: void, name: string): boolean;
    function RegisterAddonMessagePrefix(
      this: void,
      prefix: string
    ): Enum.RegisterAddonMessagePrefixResult;
    function ReplaceIconAndGroupExpressions(
      this: void,
      input: string,
      noIconReplacement?: boolean,
      noGroupReplacement?: boolean
    ): string;
    function RequestCanLocalWhisperTarget(
      this: void,
      whisperTarget: WOWGUID
    ): void;
    function ResetDefaultZoneChannels(this: void): void;
    function SendAddonMessage(
      this: void,
      prefix: string,
      message: string,
      chatType?: string,
      target?: string
    ): Enum.SendAddonMessageResult;
    function SendAddonMessageLogged(
      this: void,
      prefix: string,
      message: string,
      chatType?: string,
      target?: string
    ): Enum.SendAddonMessageResult | undefined;
    function SwapChatChannelsByChannelIndex(
      this: void,
      firstChannelIndex: number,
      secondChannelIndex: number
    ): void;
    function UncensorChatLine(this: void, chatLine: number): void;
  }

  namespace C_ChromieTime {
    interface ChromieTimeExpansionInfo {
      id: number;
      name: string;
      description: string;
      mapAtlas: textureAtlas;
      previewAtlas: textureAtlas;
      completed: boolean;
      alreadyOn: boolean;
      recommended: boolean;
      sortPriority: number;
    }

    function CloseUI(this: void): void;
    function GetChromieTimeExpansionOption(
      this: void,
      expansionRecID: number
    ): ChromieTimeExpansionInfo | undefined;
    function GetChromieTimeExpansionOptions(
      this: void
    ): ChromieTimeExpansionInfo[];
    function SelectChromieTimeOption(
      this: void,
      chromieTimeExpansionInfoId: number
    ): void;
  }

  function CinematicFinished(
    this: void,
    movieType: Enum.CinematicType,
    userCanceled?: boolean,
    didError?: boolean
  ): void;
  function CinematicStarted(
    this: void,
    movieType: Enum.CinematicType,
    movieID: number,
    canCancel?: boolean
  ): void;
  function InCinematic(this: void): boolean;
  function MouseOverrideCinematicDisable(
    this: void,
    doOverride?: boolean
  ): void;
  function OpeningCinematic(this: void): void;
  function StopCinematic(this: void): void;

  namespace C_ClassColor {
    function GetClassColor(this: void, className: string): colorRGB;
  }

  namespace C_ClassTalents {
    interface ImportLoadoutEntryInfo {
      nodeID: number;
      ranksGranted: number;
      ranksPurchased: number;
      selectionEntryID: number;
    }

    function CanChangeTalents(
      this: void
    ): LuaMultiReturn<[boolean, boolean, string | undefined]>;
    function CanCreateNewConfig(this: void): boolean;
    function CanEditTalents(this: void): LuaMultiReturn<[boolean, string]>;
    function CommitConfig(this: void, savedConfigID?: number): boolean;
    function DeleteConfig(this: void, configID: number): boolean;
    function GetActiveConfigID(this: void): number | undefined;
    function GetActiveHeroTalentSpec(this: void): number | undefined;
    function GetConfigIDsBySpecID(this: void, specID?: number): number[];
    function GetHasStarterBuild(this: void): boolean;
    function GetHeroTalentSpecsForClassSpec(
      this: void,
      configID?: number,
      classSpecID?: number
    ): LuaMultiReturn<[number[] | undefined, number | undefined]>;
    function GetLastSelectedSavedConfigID(
      this: void,
      specID: number
    ): number | undefined;
    function GetNextStarterBuildPurchase(
      this: void
    ): LuaMultiReturn<[number | undefined, number | undefined]>;
    function GetStarterBuildActive(this: void): boolean;
    function GetTraitTreeForSpec(
      this: void,
      specID: number
    ): number | undefined;
    function HasUnspentHeroTalentPoints(
      this: void
    ): LuaMultiReturn<[boolean, number]>;
    function HasUnspentTalentPoints(
      this: void
    ): LuaMultiReturn<[boolean, number, number]>;
    function ImportLoadout(
      this: void,
      configID: number,
      entries: ImportLoadoutEntryInfo[],
      name: string
    ): LuaMultiReturn<[boolean, string]>;
    function InitializeViewLoadout(
      this: void,
      specID: number,
      level: number
    ): void;
    function IsConfigPopulated(this: void, configID: number): boolean;
    function LoadConfig(
      this: void,
      configID: number,
      autoApply: boolean
    ): LuaMultiReturn<[Enum.LoadConfigResult, string | undefined, number[]]>;
    function RenameConfig(this: void, configID: number, name: string): boolean;
    function RequestNewConfig(this: void, name: string): boolean;
    function SaveConfig(this: void, configID: number): boolean;
    function SetStarterBuildActive(
      this: void,
      active: boolean
    ): Enum.LoadConfigResult;
    function SetUsesSharedActionBars(
      this: void,
      configID: number,
      usesShared: boolean
    ): void;
    function UpdateLastSelectedSavedConfigID(
      this: void,
      specID: number,
      configID?: number
    ): void;
    function ViewLoadout(
      this: void,
      entries: ImportLoadoutEntryInfo[]
    ): boolean;
  }

  namespace C_ClassTrial {}

  interface ClickBindingInfo {
    type: Enum.ClickBindingType;
    actionID: number;
    button: string;
    modifiers: number;
  }

  namespace C_ClickBindings {
    function CanSpellBeClickBound(this: void, spellID: number): boolean;
    function ExecuteBinding(
      this: void,
      targetToken: string,
      button: string,
      modifiers: number
    ): void;
    function GetBindingType(
      this: void,
      button: string,
      modifiers: number
    ): Enum.ClickBindingType;
    function GetEffectiveInteractionButton(
      this: void,
      button: string,
      modifiers: number
    ): string;
    function GetProfileInfo(this: void): ClickBindingInfo[];
    function GetStringFromModifiers(this: void, modifiers: number): string;
    function GetTutorialShown(this: void): boolean;
    function MakeModifiers(this: void): number;
    function ResetCurrentProfile(this: void): void;
    function SetProfileByInfo(this: void, infoVec: ClickBindingInfo[]): void;
    function SetTutorialShown(this: void): void;
  }

  function FlashClientIcon(this: void): void;
  function GetBillingTimeRested(this: void): number;
  function GetFileIDFromPath(this: void, filePath: string): fileID;
  function GetFramerate(this: void): number;
  function ReportBug(this: void, description: string): void;
  function ReportSuggestion(this: void, description: string): void;
  function RestartGx(this: void): void;
  function Screenshot(this: void): void;
  function UpdateWindow(this: void): void;

  namespace C_ClientScene {}

  namespace C_Club {
    interface ClubInfo {
      clubId: ClubId;
      name: string;
      shortName?: string;
      description: string;
      broadcast: string;
      clubType: Enum.ClubType;
      avatarId: number;
      memberCount?: number;
      favoriteTimeStamp?: BigUInteger;
      joinTime?: BigUInteger;
      socialQueueingEnabled?: boolean;
      crossFaction?: boolean;
    }

    interface ClubInvitationCandidateInfo {
      memberId: number;
      name: string;
      priority: number;
      status: Enum.ClubInvitationCandidateStatus;
    }

    interface ClubInvitationInfo {
      invitationId: ClubInvitationId;
      isMyInvitation: boolean;
      invitee: ClubMemberInfo;
    }

    interface ClubLimits {
      maximumNumberOfStreams: number;
    }

    interface ClubMemberInfo {
      isSelf: boolean;
      memberId: number;
      name?: string;
      role?: Enum.ClubRoleIdentifier;
      presence: Enum.ClubMemberPresence;
      clubType?: Enum.ClubType;
      guid?: WOWGUID;
      bnetAccountId?: number;
      memberNote?: string;
      officerNote?: string;
      classID?: number;
      race?: number;
      level?: number;
      zone?: string;
      achievementPoints?: number;
      profession1ID?: number;
      profession1Rank?: number;
      profession1Name?: string;
      profession2ID?: number;
      profession2Rank?: number;
      profession2Name?: string;
      lastOnlineYear?: number;
      lastOnlineMonth?: number;
      lastOnlineDay?: number;
      lastOnlineHour?: number;
      guildRank?: string;
      guildRankOrder?: number;
      isRemoteChat?: boolean;
      overallDungeonScore?: number;
      faction?: Enum.PvPFaction;
      timerunningSeasonID?: number;
    }

    interface ClubMessageIdentifier {
      epoch: BigUInteger;
      position: BigUInteger;
    }

    interface ClubMessageInfo {
      messageId: ClubMessageIdentifier;
      content: kstringClubMessage;
      author: ClubMemberInfo;
      destroyer?: ClubMemberInfo;
      destroyed: boolean;
      edited: boolean;
    }

    interface ClubMessageRange {
      oldestMessageId: ClubMessageIdentifier;
      newestMessageId: ClubMessageIdentifier;
    }

    interface ClubPrivilegeInfo {
      canDestroy: boolean;
      canSetAttribute: boolean;
      canSetName: boolean;
      canSetDescription: boolean;
      canSetAvatar: boolean;
      canSetBroadcast: boolean;
      canSetPrivacyLevel: boolean;
      canSetOwnMemberAttribute: boolean;
      canSetOtherMemberAttribute: boolean;
      canSetOwnMemberNote: boolean;
      canSetOtherMemberNote: boolean;
      canSetOwnVoiceState: boolean;
      canSetOwnPresenceLevel: boolean;
      canUseVoice: boolean;
      canVoiceMuteMemberForAll: boolean;
      canGetInvitation: boolean;
      canSendInvitation: boolean;
      canSendGuestInvitation: boolean;
      canRevokeOwnInvitation: boolean;
      canRevokeOtherInvitation: boolean;
      canGetBan: boolean;
      canGetSuggestion: boolean;
      canSuggestMember: boolean;
      canGetTicket: boolean;
      canCreateTicket: boolean;
      canDestroyTicket: boolean;
      canAddBan: boolean;
      canRemoveBan: boolean;
      canCreateStream: boolean;
      canDestroyStream: boolean;
      canSetStreamPosition: boolean;
      canSetStreamAttribute: boolean;
      canSetStreamName: boolean;
      canSetStreamSubject: boolean;
      canSetStreamAccess: boolean;
      canSetStreamVoiceLevel: boolean;
      canCreateMessage: boolean;
      canDestroyOwnMessage: boolean;
      canDestroyOtherMessage: boolean;
      canEditOwnMessage: boolean;
      canPinMessage: boolean;
      kickableRoleIds: number[];
    }

    interface ClubRoleInfo {
      roleId: number;
      name: string;
      required: boolean;
      unique: boolean;
    }

    interface ClubSelfInvitationInfo {
      invitationId: ClubInvitationId;
      club: ClubInfo;
      inviter: ClubMemberInfo;
      leaders: ClubMemberInfo[];
    }

    interface ClubStreamInfo {
      streamId: ClubStreamId;
      name: string;
      subject: string;
      leadersAndModeratorsOnly: boolean;
      streamType: Enum.ClubStreamType;
      creationTime: BigUInteger;
    }

    interface ClubStreamNotificationSetting {
      streamId: ClubStreamId;
      filter: Enum.ClubStreamNotificationFilter;
    }

    interface ClubTicketInfo {
      ticketId: string;
      allowedRedeemCount: number;
      currentRedeemCount: number;
      creationTime: BigUInteger;
      expirationTime: BigUInteger;
      defaultStreamId?: ClubStreamId;
      creator: ClubMemberInfo;
    }

    function AcceptInvitation(this: void, clubId: ClubId): void;
    function AddClubStreamChatChannel(
      this: void,
      clubId: ClubId,
      streamId: ClubStreamId
    ): void;
    function AdvanceStreamViewMarker(
      this: void,
      clubId: ClubId,
      streamId: ClubStreamId
    ): void;
    function AssignMemberRole(
      this: void,
      clubId: ClubId,
      memberId: number,
      roleId: Enum.ClubRoleIdentifier
    ): void;
    function CanResolvePlayerLocationFromClubMessageData(
      this: void,
      clubId: ClubId,
      streamId: ClubStreamId,
      epoch: BigUInteger,
      position: BigUInteger
    ): boolean;
    function ClearAutoAdvanceStreamViewMarker(this: void): void;
    function ClearClubPresenceSubscription(this: void): void;
    function CompareBattleNetDisplayName(
      this: void,
      clubId: ClubId,
      lhsMemberId: number,
      rhsMemberId: number
    ): number;
    function CreateClub(
      this: void,
      name: string,
      shortName: string | undefined,
      description: string,
      clubType: Enum.ClubType,
      avatarId: number,
      isCrossFaction?: boolean
    ): void;
    function CreateStream(
      this: void,
      clubId: ClubId,
      name: string,
      subject: string,
      leadersAndModeratorsOnly: boolean
    ): void;
    function CreateTicket(
      this: void,
      clubId: ClubId,
      allowedRedeemCount?: number,
      duration?: number,
      defaultStreamId?: ClubStreamId,
      isCrossFaction?: boolean
    ): void;
    function DeclineInvitation(this: void, clubId: ClubId): void;
    function DestroyClub(this: void, clubId: ClubId): void;
    function DestroyMessage(
      this: void,
      clubId: ClubId,
      streamId: ClubStreamId,
      messageId: ClubMessageIdentifier
    ): void;
    function DestroyStream(
      this: void,
      clubId: ClubId,
      streamId: ClubStreamId
    ): void;
    function DestroyTicket(this: void, clubId: ClubId, ticketId: string): void;
    function DoesAnyCommunityHaveUnreadMessages(this: void): boolean;
    function DoesCommunityHaveMembersOfTheOppositeFaction(
      this: void,
      clubId: ClubId
    ): boolean;
    function EditClub(
      this: void,
      clubId: ClubId,
      name?: string,
      shortName?: string,
      description?: string,
      avatarId?: number,
      broadcast?: string,
      crossFaction?: boolean
    ): void;
    function EditMessage(
      this: void,
      clubId: ClubId,
      streamId: ClubStreamId,
      messageId: ClubMessageIdentifier,
      message: string
    ): void;
    function EditStream(
      this: void,
      clubId: ClubId,
      streamId: ClubStreamId,
      name?: string,
      subject?: string,
      leadersAndModeratorsOnly?: boolean
    ): void;
    function Flush(this: void): void;
    function FocusCommunityStreams(this: void): void;
    function FocusStream(
      this: void,
      clubId: ClubId,
      streamId: ClubStreamId
    ): boolean;
    function GetAssignableRoles(
      this: void,
      clubId: ClubId,
      memberId: number
    ): Enum.ClubRoleIdentifier[];
    function GetAvatarIdList(
      this: void,
      clubType: Enum.ClubType
    ): number[] | undefined;
    function GetClubCapacity(this: void): number;
    function GetClubInfo(this: void, clubId: ClubId): ClubInfo | undefined;
    function GetClubLimits(this: void, clubType: Enum.ClubType): ClubLimits;
    function GetClubMembers(
      this: void,
      clubId: ClubId,
      streamId?: ClubStreamId
    ): number[];
    function GetClubPrivileges(this: void, clubId: ClubId): ClubPrivilegeInfo;
    function GetClubStreamNotificationSettings(
      this: void,
      clubId: ClubId
    ): ClubStreamNotificationSetting[];
    function GetCommunityNameResultText(
      this: void,
      result: Enum.ValidateNameResult
    ): string | undefined;
    function GetGuildClubId(this: void): ClubId | undefined;
    function GetInfoFromLastCommunityChatLine(
      this: void
    ): LuaMultiReturn<[ClubMessageInfo, ClubId, ClubStreamId, Enum.ClubType]>;
    function GetInvitationCandidates(
      this: void,
      filter: string | undefined,
      maxResults: number | undefined,
      cursorPosition: number | undefined,
      allowFullMatch: boolean | undefined,
      clubId: ClubId
    ): ClubInvitationCandidateInfo[];
    function GetInvitationInfo(
      this: void,
      clubId: ClubId
    ): ClubSelfInvitationInfo | undefined;
    function GetInvitationsForClub(
      this: void,
      clubId: ClubId
    ): ClubInvitationInfo[];
    function GetInvitationsForSelf(this: void): ClubSelfInvitationInfo[];
    function GetLastTicketResponse(
      this: void,
      ticket: string
    ): LuaMultiReturn<[Enum.ClubErrorType, ClubInfo | undefined, boolean]>;
    function GetMemberInfo(
      this: void,
      clubId: ClubId,
      memberId: number
    ): ClubMemberInfo | undefined;
    function GetMemberInfoForSelf(
      this: void,
      clubId: ClubId
    ): ClubMemberInfo | undefined;
    function GetMessageInfo(
      this: void,
      clubId: ClubId,
      streamId: ClubStreamId,
      messageId: ClubMessageIdentifier
    ): ClubMessageInfo | undefined;
    function GetMessageRanges(
      this: void,
      clubId: ClubId,
      streamId: ClubStreamId
    ): ClubMessageRange[];
    function GetMessagesBefore(
      this: void,
      clubId: ClubId,
      streamId: ClubStreamId,
      newest: ClubMessageIdentifier,
      count: number
    ): ClubMessageInfo[];
    function GetMessagesInRange(
      this: void,
      clubId: ClubId,
      streamId: ClubStreamId,
      oldest: ClubMessageIdentifier,
      newest: ClubMessageIdentifier
    ): ClubMessageInfo[];
    function GetStreamInfo(
      this: void,
      clubId: ClubId,
      streamId: ClubStreamId
    ): ClubStreamInfo | undefined;
    function GetStreamViewMarker(
      this: void,
      clubId: ClubId,
      streamId: ClubStreamId
    ): BigUInteger | undefined;
    function GetStreams(this: void, clubId: ClubId): ClubStreamInfo[];
    function GetSubscribedClubs(this: void): ClubInfo[];
    function GetTickets(this: void, clubId: ClubId): ClubTicketInfo[];
    function IsAccountMuted(this: void, clubId: ClubId): boolean;
    function IsBeginningOfStream(
      this: void,
      clubId: ClubId,
      streamId: ClubStreamId,
      messageId: ClubMessageIdentifier
    ): boolean;
    function IsEnabled(this: void): boolean;
    function IsRestricted(this: void): Enum.ClubRestrictionReason;
    function IsSubscribedToStream(
      this: void,
      clubId: ClubId,
      streamId: ClubStreamId
    ): boolean;
    function KickMember(this: void, clubId: ClubId, memberId: number): void;
    function LeaveClub(this: void, clubId: ClubId): void;
    function RedeemTicket(this: void, ticketId: string): void;
    function RequestInvitationsForClub(this: void, clubId: ClubId): void;
    function RequestMoreMessagesBefore(
      this: void,
      clubId: ClubId,
      streamId: ClubStreamId,
      messageId?: ClubMessageIdentifier,
      count?: number
    ): boolean;
    function RequestTicket(this: void, ticketId: string): void;
    function RequestTickets(this: void, clubId: ClubId): void;
    function RevokeInvitation(
      this: void,
      clubId: ClubId,
      memberId: number
    ): void;
    function SendBattleTagFriendRequest(
      this: void,
      guildClubId: ClubId,
      memberId: number
    ): void;
    function SendCharacterInvitation(
      this: void,
      clubId: ClubId,
      character: string
    ): void;
    function SendInvitation(this: void, clubId: ClubId, memberId: number): void;
    function SendMessage(
      this: void,
      clubId: ClubId,
      streamId: ClubStreamId,
      message: string
    ): void;
    function SetAutoAdvanceStreamViewMarker(
      this: void,
      clubId: ClubId,
      streamId: ClubStreamId
    ): void;
    function SetAvatarTexture(
      this: void,
      texture: SimpleTexture,
      avatarId: number,
      clubType: Enum.ClubType
    ): void;
    function SetClubMemberNote(
      this: void,
      clubId: ClubId,
      memberId: number,
      note: string
    ): void;
    function SetClubPresenceSubscription(this: void, clubId: ClubId): void;
    function SetClubStreamNotificationSettings(
      this: void,
      clubId: ClubId,
      settings: ClubStreamNotificationSetting[]
    ): void;
    function SetCommunityID(this: void, communityID: BigUInteger): void;
    function SetFavorite(this: void, clubId: ClubId, isFavorite: boolean): void;
    function SetSocialQueueingEnabled(
      this: void,
      clubId: ClubId,
      enabled: boolean
    ): void;
    function ShouldAllowClubType(this: void, clubType: Enum.ClubType): boolean;
    function UnfocusAllStreams(this: void, unsubscribe: boolean): void;
    function UnfocusStream(
      this: void,
      clubId: ClubId,
      streamId: ClubStreamId
    ): void;
    function ValidateText(
      this: void,
      clubType: Enum.ClubType,
      text: string,
      clubFieldType: Enum.ClubFieldType
    ): Enum.ValidateNameResult;
  }

  namespace C_ClubFinder {
    interface ClubFinderApplicantInfo {
      clubFinderGUID: WOWGUID;
      playerGUID: WOWGUID;
      closed: number;
      name: string;
      message: string;
      level: number;
      classID: number;
      ilvl: number;
      specIds: number[];
      requestStatus: Enum.PlayerClubRequestStatus;
      lookupSuccess: boolean;
      lastUpdatedTime: BigInteger;
      faction: number;
    }

    interface ClubSettingsInfo {
      playStyleDungeon: boolean;
      playStyleRaids: boolean;
      playStylePvp: boolean;
      playStyleRP: boolean;
      playStyleSocial: boolean;
      roleTank: boolean;
      roleHealer: boolean;
      roleDps: boolean;
      sizeSmall: boolean;
      sizeMedium: boolean;
      sizeLarge: boolean;
      maxLevelOnly: boolean;
      enableListing: boolean;
      sortRelevance: boolean;
      sortMembers: boolean;
      sortNewest: boolean;
      autoAccept: boolean;
      crossFaction: boolean;
    }

    interface RecruitingClubInfo {
      clubFinderGUID: WOWGUID;
      numActiveMembers: number;
      name: string;
      comment: string;
      guildLeader: string;
      isGuild: boolean;
      emblemInfo: number;
      tabardInfo?: GuildTabardInfo;
      recruitingSpecIds: number[];
      recruitmentFlags: number;
      localeSet: boolean;
      recruitmentLocale: number;
      minILvl: number;
      cached: number;
      cacheRequested: number;
      lastPosterGUID: WOWGUID;
      clubId: ClubId;
      lastUpdatedTime: BigInteger;
      isCrossFaction: boolean;
      realmName?: string;
    }

    function ApplicantAcceptClubInvite(
      this: void,
      clubFinderGUID: WOWGUID
    ): void;
    function ApplicantDeclineClubInvite(
      this: void,
      clubFinderGUID: WOWGUID
    ): void;
    function CancelMembershipRequest(this: void, clubFinderGUID: WOWGUID): void;
    function CheckAllPlayerApplicantSettings(this: void): void;
    function ClearAllFinderCache(this: void): void;
    function ClearClubApplicantsCache(this: void): void;
    function ClearClubFinderPostingsCache(this: void): void;
    function DoesPlayerBelongToClubFromClubGUID(
      this: void,
      clubFinderGUID: WOWGUID
    ): boolean;
    function GetClubFinderDisableReason(
      this: void
    ): Enum.ClubFinderDisableReason | undefined;
    function GetClubRecruitmentSettings(this: void): ClubSettingsInfo;
    function GetClubTypeFromFinderGUID(
      this: void,
      clubFinderGUID: WOWGUID
    ): Enum.ClubFinderRequestType;
    function GetFocusIndexFromFlag(this: void, flags: number): number;
    function GetPlayerApplicantLocaleFlags(this: void): number;
    function GetPlayerApplicantSettings(this: void): ClubSettingsInfo;
    function GetPlayerClubApplicationStatus(
      this: void,
      clubFinderGUID: WOWGUID
    ): Enum.PlayerClubRequestStatus;
    function GetPlayerSettingsFocusFlagsSelectedCount(this: void): number;
    function GetPostingIDFromClubFinderGUID(
      this: void,
      clubFinderGUID: WOWGUID
    ): number | undefined;
    function GetRecruitingClubInfoFromClubID(
      this: void,
      clubId: ClubId
    ): RecruitingClubInfo | undefined;
    function GetRecruitingClubInfoFromFinderGUID(
      this: void,
      clubFinderGUID: WOWGUID
    ): RecruitingClubInfo;
    function GetStatusOfPostingFromClubId(
      this: void,
      postingID: ClubId
    ): Enum.ClubFinderClubPostingStatusFlags[];
    function GetTotalMatchingCommunityListSize(this: void): number;
    function GetTotalMatchingGuildListSize(this: void): number;
    function HasAlreadyAppliedToLinkedPosting(
      this: void,
      clubFinderGUID: WOWGUID
    ): boolean;
    function HasPostingBeenDelisted(this: void, postingID: ClubId): boolean;
    function IsCommunityFinderEnabled(this: void): boolean;
    function IsEnabled(this: void): boolean;
    function IsListingEnabledFromFlags(this: void, flags: number): boolean;
    function IsPostingBanned(this: void, postingID: ClubId): boolean;
    function IsValidSearchString(this: void, name: string): boolean;
    function LookupClubPostingFromClubFinderGUID(
      this: void,
      clubFinderGUID: WOWGUID,
      isLinkedPosting: boolean
    ): void;
    function PlayerGetClubInvitationList(this: void): RecruitingClubInfo[];
    function PlayerRequestPendingClubsList(
      this: void,
      type: Enum.ClubFinderRequestType
    ): void;
    function PlayerReturnPendingCommunitiesList(
      this: void
    ): RecruitingClubInfo[];
    function PlayerReturnPendingGuildsList(this: void): RecruitingClubInfo[];
    function PostClub(
      this: void,
      clubId: ClubId,
      itemLevelRequirement: number,
      name: string,
      description: string,
      avatarId: number,
      specs: number[],
      type: Enum.ClubFinderRequestType,
      crossFaction?: boolean
    ): boolean;
    function RequestApplicantList(
      this: void,
      type: Enum.ClubFinderRequestType
    ): void;
    function RequestClubsList(
      this: void,
      guildListRequested: boolean,
      searchString: string,
      specIDs: number[]
    ): void;
    function RequestMembershipToClub(
      this: void,
      clubFinderGUID: WOWGUID,
      comment: string,
      specIDs: number[]
    ): void;
    function RequestNextCommunityPage(
      this: void,
      startingIndex: number,
      pageSize: number
    ): void;
    function RequestNextGuildPage(
      this: void,
      startingIndex: number,
      pageSize: number
    ): void;
    function RequestPostingInformationFromClubId(
      this: void,
      clubId: ClubId
    ): boolean;
    function RequestSubscribedClubPostingIDs(this: void): void;
    function ResetClubPostingMapCache(this: void): void;
    function RespondToApplicant(
      this: void,
      clubFinderGUID: WOWGUID,
      playerGUID: WOWGUID,
      shouldAccept: boolean,
      requestType: Enum.ClubFinderRequestType,
      playerName: string,
      forceAccept: boolean,
      reported?: boolean
    ): void;
    function ReturnClubApplicantList(
      this: void,
      clubId: ClubId
    ): ClubFinderApplicantInfo[];
    function ReturnMatchingCommunityList(this: void): RecruitingClubInfo[];
    function ReturnMatchingGuildList(this: void): RecruitingClubInfo[];
    function ReturnPendingClubApplicantList(
      this: void,
      clubId: ClubId
    ): ClubFinderApplicantInfo[];
    function SendChatWhisper(
      this: void,
      clubFinderGUID: WOWGUID,
      playerGUID: WOWGUID,
      applicantType: Enum.ClubFinderRequestType,
      name: string
    ): void;
    function SetAllRecruitmentSettings(this: void, value: number): void;
    function SetPlayerApplicantLocaleFlags(
      this: void,
      localeFlags: number
    ): void;
    function SetPlayerApplicantSettings(
      this: void,
      index: number,
      checked: boolean
    ): void;
    function SetRecruitmentLocale(this: void, locale: number): void;
    function SetRecruitmentSettings(
      this: void,
      index: number,
      checked: boolean
    ): void;
    function ShouldShowClubFinder(this: void): boolean;
  }

  namespace C_CombatLog {}

  namespace C_Commentator {
    interface CommentatorHistory {
      series: CommentatorSeries[];
      teamDirectory: CommentatorTeamDirectoryEntry[];
      overrideNameDirectory: CommentatorOverrideNameEntry[];
    }

    interface CommentatorOverrideNameEntry {
      originalName: string;
      newName: string;
    }

    interface CommentatorPlayerData {
      unitToken: string;
      name: string;
      faction: number;
      specialization: number;
      damageDone: number;
      damageTaken: number;
      healingDone: number;
      healingTaken: number;
      kills: number;
      deaths: number;
      soloShuffleRoundWins: number;
      soloShuffleRoundLosses: number;
    }

    interface CommentatorSeries {
      teams: CommentatorSeriesTeam[];
    }

    interface CommentatorSeriesTeam {
      name: string;
      score: number;
    }

    interface CommentatorTeamDirectoryEntry {
      playerName: string;
      teamName: string;
    }

    interface CommentatorTrackedItemCooldown {
      spellID: number;
      category: Enum.TrackedSpellCategory;
    }

    interface CommentatorUnitData {
      healthMax: number;
      health: number;
      absorbTotal: number;
      isDeadOrGhost: boolean;
      isFeignDeath: boolean;
      powerTypeToken: string;
      power: number;
      powerMax: number;
    }

    interface NameOverrideEntry {
      originalName: string;
      overrideName: string;
    }

    function AddPlayerOverrideName(
      this: void,
      playerName: string,
      overrideName: string
    ): void;
    function AddTrackedDefensiveAuras(this: void, spellIDs: number[]): void;
    function AddTrackedOffensiveAuras(this: void, spellIDs: number[]): void;
    function AreTeamsSwapped(this: void): boolean;
    function AssignPlayerToTeam(
      this: void,
      playerName: string,
      teamName: string
    ): void;
    function AssignPlayersToTeam(
      this: void,
      playerName: string[],
      teamName: string
    ): void;
    function AssignPlayersToTeamInCurrentInstance(
      this: void,
      teamIndex: number,
      teamName: string
    ): void;
    function CanUseCommentatorCheats(this: void): boolean;
    function ClearCameraTarget(this: void): void;
    function ClearFollowTarget(this: void): void;
    function ClearLookAtTarget(this: void, lookAtIndex?: number): void;
    function EnterInstance(this: void): void;
    function ExitInstance(this: void): void;
    function FindSpectatedUnit(
      this: void,
      unitToken: UnitToken
    ): LuaMultiReturn<[number, number, boolean]>;
    function FindTeamNameInCurrentInstance(
      this: void,
      teamIndex: number
    ): string | undefined;
    function FindTeamNameInDirectory(
      this: void,
      playerNames: string[]
    ): string | undefined;
    function FlushCommentatorHistory(this: void): void;
    function FollowPlayer(
      this: void,
      factionIndex: number,
      playerIndex: number,
      forceInstantTransition?: boolean
    ): void;
    function FollowUnit(this: void, token: string): void;
    function ForceFollowTransition(this: void): void;
    function GetAdditionalCameraWeight(
      this: void
    ): LuaMultiReturn<[number, number]>;
    function GetAdditionalCameraWeightByToken(
      this: void,
      unitToken: UnitToken
    ): number;
    function GetAllPlayerOverrideNames(this: void): NameOverrideEntry[];
    function GetCamera(
      this: void
    ): LuaMultiReturn<[number, number, number, number, number, number, number]>;
    function GetCameraCollision(this: void): boolean;
    function GetCameraPosition(
      this: void
    ): LuaMultiReturn<[number, number, number]>;
    function GetCommentatorHistory(this: void): CommentatorHistory;
    function GetCurrentMapID(this: void): number | undefined;
    function GetDampeningPercent(this: void): number;
    function GetDistanceBeforeForcedHorizontalConvergence(this: void): number;
    function GetDurationToForceHorizontalConvergence(this: void): number;
    function GetExcludeDistance(this: void): number;
    function GetHardlockWeight(this: void): number;
    function GetHorizontalAngleThresholdToSmooth(this: void): number;
    function GetIndirectSpellID(this: void, trackedSpellID: number): number;
    function GetInstanceInfo(
      this: void,
      mapIndex: number,
      instanceIndex: number
    ): LuaMultiReturn<[number, string | undefined, number, number, number]>;
    function GetLookAtLerpAmount(this: void): number;
    function GetMapInfo(
      this: void,
      mapIndex: number
    ): LuaMultiReturn<[number, number, number, number]>;
    function GetMatchDuration(this: void): time_t;
    function GetMaxNumPlayersPerTeam(this: void): number;
    function GetMaxNumTeams(this: void): number;
    function GetMode(this: void): number;
    function GetMsToHoldForHorizontalMovement(this: void): number;
    function GetMsToHoldForVerticalMovement(this: void): number;
    function GetMsToSmoothHorizontalChange(this: void): number;
    function GetMsToSmoothVerticalChange(this: void): number;
    function GetNumMaps(this: void): number;
    function GetNumPlayers(this: void, factionIndex: number): number;
    function GetOrCreateSeries(
      this: void,
      teamName1: string,
      teamName2: string
    ): CommentatorSeries;
    function GetPlayerAuraInfo(
      this: void,
      teamIndex: number,
      playerIndex: number,
      spellID: number
    ): LuaMultiReturn<[number, number, boolean]>;
    function GetPlayerAuraInfoByUnit(
      this: void,
      token: UnitToken,
      spellID: number
    ): LuaMultiReturn<[number, number, boolean]>;
    function GetPlayerCooldownInfo(
      this: void,
      teamIndex: number,
      playerIndex: number,
      spellID: number
    ): LuaMultiReturn<[number, number, boolean]>;
    function GetPlayerCooldownInfoByUnit(
      this: void,
      unitToken: UnitToken,
      spellID: number
    ): LuaMultiReturn<[number, number, boolean]>;
    function GetPlayerCrowdControlInfo(
      this: void,
      teamIndex: number,
      playerIndex: number
    ): LuaMultiReturn<[number, number, number]>;
    function GetPlayerCrowdControlInfoByUnit(
      this: void,
      token: UnitToken
    ): LuaMultiReturn<[number, number, number]>;
    function GetPlayerData(
      this: void,
      teamIndex: number,
      playerIndex: number
    ): CommentatorPlayerData | undefined;
    function GetPlayerFlagInfo(
      this: void,
      teamIndex: number,
      playerIndex: number
    ): boolean;
    function GetPlayerFlagInfoByUnit(this: void, unitToken: UnitToken): boolean;
    function GetPlayerItemCooldownInfo(
      this: void,
      teamIndex: number,
      playerIndex: number,
      itemID: number
    ): LuaMultiReturn<[number, number, boolean]>;
    function GetPlayerItemCooldownInfoByUnit(
      this: void,
      unitToken: UnitToken,
      itemID: number
    ): LuaMultiReturn<[number, number, boolean]>;
    function GetPlayerOverrideName(this: void, originalName: string): string;
    function GetPlayerSpellCharges(
      this: void,
      teamIndex: number,
      playerIndex: number,
      spellID: number
    ): LuaMultiReturn<[number, number, number, number]>;
    function GetPlayerSpellChargesByUnit(
      this: void,
      unitToken: UnitToken,
      spellID: number
    ): LuaMultiReturn<[number, number, number, number]>;
    function GetPositionLerpAmount(this: void): number;
    function GetSmoothFollowTransitioning(this: void): boolean;
    function GetSoftlockWeight(this: void): number;
    function GetSpeedFactor(this: void): number;
    function GetStartLocation(this: void, mapID: number): vector3;
    function GetTeamColor(this: void, teamIndex: number): colorRGB;
    function GetTeamColorByUnit(this: void, unitToken: UnitToken): colorRGB;
    function GetTimeLeftInMatch(this: void): number | undefined;
    function GetTrackedSpellID(this: void, indirectSpellID: number): number;
    function GetTrackedSpells(
      this: void,
      teamIndex: number,
      playerIndex: number,
      category: Enum.TrackedSpellCategory
    ): number[] | undefined;
    function GetTrackedSpellsByUnit(
      this: void,
      unitToken: UnitToken,
      category: Enum.TrackedSpellCategory
    ): number[] | undefined;
    function GetUnitData(this: void, unitToken: UnitToken): CommentatorUnitData;
    function GetWargameInfo(
      this: void,
      listID: number
    ): LuaMultiReturn<[string, number, number, boolean]>;
    function HasTrackedAuras(
      this: void,
      token: UnitToken
    ): LuaMultiReturn<[boolean, boolean]>;
    function IsSmartCameraLocked(this: void): boolean;
    function IsSpectating(this: void): boolean;
    function IsTrackedDefensiveAura(this: void, spellID: number): boolean;
    function IsTrackedOffensiveAura(this: void, spellID: number): boolean;
    function IsTrackedSpell(
      this: void,
      teamIndex: number,
      playerIndex: number,
      spellID: number,
      category: Enum.TrackedSpellCategory
    ): boolean;
    function IsTrackedSpellByUnit(
      this: void,
      unitToken: UnitToken,
      spellID: number,
      category: Enum.TrackedSpellCategory
    ): boolean;
    function IsUsingSmartCamera(this: void): boolean;
    function LookAtPlayer(
      this: void,
      factionIndex: number,
      playerIndex: number,
      lookAtIndex?: number
    ): void;
    function RemoveAllOverrideNames(this: void): void;
    function RemovePlayerOverrideName(
      this: void,
      originalPlayerName: string
    ): void;
    function RequestPlayerCooldownInfo(
      this: void,
      teamIndex: number,
      playerIndex: number
    ): void;
    function ResetFoVTarget(this: void): void;
    function ResetSeriesScores(
      this: void,
      teamName1: string,
      teamName2: string
    ): void;
    function ResetSettings(this: void): void;
    function ResetTrackedAuras(this: void): void;
    function SetAdditionalCameraWeight(
      this: void,
      teamIndex: number,
      playerIndex: number,
      weight: number
    ): void;
    function SetAdditionalCameraWeightByToken(
      this: void,
      unitToken: UnitToken,
      weight: number
    ): void;
    function SetBlocklistedAuras(this: void, spellIDs: number[]): void;
    function SetBlocklistedCooldowns(
      this: void,
      specID: number,
      spellIDs: number[]
    ): void;
    function SetBlocklistedItemCooldowns(this: void, itemIDs: number[]): void;
    function SetCamera(
      this: void,
      xPos: number,
      yPos: number,
      zPos: number,
      yaw: number,
      pitch: number,
      roll: number,
      fov: number
    ): void;
    function SetCameraCollision(this: void, collide: boolean): void;
    function SetCameraPosition(
      this: void,
      xPos: number,
      yPos: number,
      zPos: number,
      snapToLocation: boolean
    ): void;
    function SetCheatsEnabled(this: void, enableCheats: boolean): void;
    function SetCommentatorHistory(
      this: void,
      history: CommentatorHistory
    ): void;
    function SetDistanceBeforeForcedHorizontalConvergence(
      this: void,
      distance: number
    ): void;
    function SetDurationToForceHorizontalConvergence(
      this: void,
      ms: number
    ): void;
    function SetExcludeDistance(this: void, excludeDistance: number): void;
    function SetFollowCameraSpeeds(
      this: void,
      elasticSpeed: number,
      minSpeed: number
    ): void;
    function SetHardlockWeight(this: void, weight: number): void;
    function SetHorizontalAngleThresholdToSmooth(
      this: void,
      angle: number
    ): void;
    function SetLookAtLerpAmount(this: void, amount: number): void;
    function SetMapAndInstanceIndex(
      this: void,
      mapIndex: number,
      instanceIndex: number
    ): void;
    function SetMouseDisabled(this: void, disabled: boolean): void;
    function SetMoveSpeed(this: void, newSpeed: number): void;
    function SetMsToHoldForHorizontalMovement(this: void, ms: number): void;
    function SetMsToHoldForVerticalMovement(this: void, ms: number): void;
    function SetMsToSmoothHorizontalChange(this: void, ms: number): void;
    function SetMsToSmoothVerticalChange(this: void, ms: number): void;
    function SetPositionLerpAmount(this: void, amount: number): void;
    function SetRequestedDebuffCooldowns(
      this: void,
      specID: number,
      spellIDs: number[]
    ): void;
    function SetRequestedDefensiveCooldowns(
      this: void,
      specID: number,
      spellIDs: number[]
    ): void;
    function SetRequestedItemCooldowns(this: void, itemIDs: number[]): void;
    function SetRequestedOffensiveCooldowns(
      this: void,
      specID: number,
      spellIDs: number[]
    ): void;
    function SetSeriesScore(
      this: void,
      teamName1: string,
      teamName2: string,
      scoringTeamName: string,
      score: number
    ): void;
    function SetSeriesScores(
      this: void,
      teamName1: string,
      teamName2: string,
      score1: number,
      score2: number
    ): void;
    function SetSmartCameraLocked(this: void, locked: boolean): void;
    function SetSmoothFollowTransitioning(this: void, enabled: boolean): void;
    function SetSoftlockWeight(this: void, weight: number): void;
    function SetSpeedFactor(this: void, factor: number): void;
    function SetTargetHeightOffset(this: void, offset: number): void;
    function SetUseSmartCamera(this: void, useSmartCamera: boolean): void;
    function SnapCameraLookAtPoint(this: void): void;
    function StartWargame(
      this: void,
      listID: number,
      teamSize: number,
      tournamentRules: boolean,
      teamOneCaptain: string,
      teamTwoCaptain: string
    ): void;
    function SwapTeamSides(this: void): void;
    function ToggleCheats(this: void): void;
    function UpdateMapInfo(this: void, targetPlayer?: string): void;
    function UpdatePlayerInfo(this: void): void;
    function ZoomIn(this: void): void;
    function ZoomIn_Position(this: void, zoomAmount?: number): void;
    function ZoomOut(this: void): void;
    function ZoomOut_Position(this: void, zoomAmount?: number): void;
  }

  namespace C_CompactUnitFrames {}

  namespace C_ConfigurationWarnings {
    function GetConfigurationWarningSeen(
      this: void,
      configurationWarning: Enum.ConfigurationWarning
    ): boolean;
    function GetConfigurationWarningString(
      this: void,
      configurationWarning: Enum.ConfigurationWarning
    ): string;
    function GetConfigurationWarnings(
      this: void,
      includeSeenWarnings?: boolean
    ): Enum.ConfigurationWarning[];
    function SetConfigurationWarningSeen(
      this: void,
      configurationWarning: Enum.ConfigurationWarning
    ): void;
  }

  function CancelLogout(this: void): void;
  function ForceLogout(this: void): void;
  function ForceQuit(this: void): void;
  function GetNetIpTypes(this: void): ConnectionIptype;
  function GetNetStats(this: void): LuaMultiReturn<[number, number, number]>;
  function GetRealmID(this: void): number;
  function GetRealmName(this: void): string;
  function IsOnTournamentRealm(this: void): boolean;
  function Logout(this: void): void;
  function Quit(this: void): void;
  function SelectedRealmName(this: void): string;

  interface ConsoleCommandInfo {
    command: string;
    help: string;
    category: Enum.ConsoleCategory;
    commandType: Enum.ConsoleCommandType;
    scriptContents: string;
    scriptParameters: string;
  }

  function CalculateStringEditDistance(
    this: void,
    firstString: stringView,
    secondString: stringView
  ): number;
  function ConsoleAddMessage(this: void, message: string): void;
  function ConsoleExec(
    this: void,
    command: string,
    addToHistory?: boolean
  ): boolean;
  function ConsoleGetAllCommands(this: void): ConsoleCommandInfo[];
  function ConsoleGetColorFromType(
    this: void,
    colorType: Enum.ConsoleColorType
  ): colorRGB;
  function ConsoleGetFontHeight(this: void): number;
  function ConsoleIsActive(this: void): boolean;
  function ConsolePrintAllMatchingCommands(
    this: void,
    partialCommandText: string
  ): void;
  function ConsoleSetFontHeight(this: void, fontHeightInPixels: number): void;
  function SetConsoleKey(this: void, keystring: string): void;

  namespace C_ConsoleScriptCollection {
    interface ConsoleScriptCollectionData {
      ID: number;
      name: string;
    }

    interface ConsoleScriptCollectionElementData {
      collectionID?: number;
      consoleScriptID?: number;
    }

    interface ConsoleScriptData {
      ID: number;
      name: string;
      help: string;
      script: string;
      params: string;
      isLuaScript: boolean;
    }

    interface ConsoleScriptParameter {
      name: string;
      description: string;
    }

    function GetCollectionDataByID(
      this: void,
      collectionID: number
    ): ConsoleScriptCollectionData | undefined;
    function GetCollectionDataByTag(
      this: void,
      collectionTag: string
    ): ConsoleScriptCollectionData | undefined;
    function GetElements(
      this: void,
      collectionID: number
    ): ConsoleScriptCollectionElementData[];
    function GetScriptData(
      this: void,
      consoleScriptID: number
    ): ConsoleScriptData;
  }

  namespace C_Container {
    interface ContainerItemInfo {
      iconFileID: fileID;
      stackCount: number;
      isLocked: boolean;
      quality?: Enum.ItemQuality;
      isReadable: boolean;
      hasLoot: boolean;
      hyperlink: string;
      isFiltered: boolean;
      hasNoValue: boolean;
      itemID: number;
      isBound: boolean;
      itemName: string;
    }

    interface ItemPurchaseCurrency {
      iconFileID?: number;
      currencyCount: number;
      name: string;
    }

    interface ItemPurchaseInfo {
      money: WOWMONEY;
      itemCount: number;
      refundSeconds: time_t;
      currencyCount: number;
      hasEnchants: boolean;
    }

    interface ItemPurchaseItem {
      iconFileID?: number;
      itemCount: number;
      hyperlink: string;
    }

    interface ItemQuestInfo {
      isQuestItem: boolean;
      questID?: number;
      isActive: boolean;
    }

    function ContainerIDToInventoryID(
      this: void,
      containerID: Enum.BagIndex
    ): number;
    function ContainerRefundItemPurchase(
      this: void,
      containerIndex: Enum.BagIndex,
      slotIndex: number,
      isEquipped?: boolean
    ): void;
    function GetBackpackAutosortDisabled(this: void): boolean;
    function GetBackpackSellJunkDisabled(this: void): boolean;
    function GetBagName(this: void, bagIndex: Enum.BagIndex): string;
    function GetBagSlotFlag(
      this: void,
      bagIndex: Enum.BagIndex,
      flag: Enum.BagSlotFlags
    ): boolean;
    function GetBankAutosortDisabled(this: void): boolean;
    function GetContainerFreeSlots(
      this: void,
      containerIndex: Enum.BagIndex
    ): number[];
    function GetContainerItemCooldown(
      this: void,
      containerIndex: Enum.BagIndex,
      slotIndex: number
    ): LuaMultiReturn<[number, number, number]>;
    function GetContainerItemDurability(
      this: void,
      containerIndex: Enum.BagIndex,
      slotIndex: number
    ): LuaMultiReturn<[number, number]>;
    function GetContainerItemEquipmentSetInfo(
      this: void,
      containerIndex: Enum.BagIndex,
      slotIndex: number
    ): LuaMultiReturn<[boolean, string]>;
    function GetContainerItemID(
      this: void,
      containerIndex: Enum.BagIndex,
      slotIndex: number
    ): number;
    function GetContainerItemInfo(
      this: void,
      containerIndex: Enum.BagIndex,
      slotIndex: number
    ): ContainerItemInfo;
    function GetContainerItemLink(
      this: void,
      containerIndex: Enum.BagIndex,
      slotIndex: number
    ): string;
    function GetContainerItemPurchaseCurrency(
      this: void,
      containerIndex: Enum.BagIndex,
      slotIndex: number,
      itemIndex: number,
      isEquipped: boolean
    ): ItemPurchaseCurrency;
    function GetContainerItemPurchaseInfo(
      this: void,
      containerIndex: Enum.BagIndex,
      slotIndex: number,
      isEquipped: boolean
    ): ItemPurchaseInfo;
    function GetContainerItemPurchaseItem(
      this: void,
      containerIndex: Enum.BagIndex,
      slotIndex: number,
      itemIndex: number,
      isEquipped: boolean
    ): ItemPurchaseItem;
    function GetContainerItemQuestInfo(
      this: void,
      containerIndex: Enum.BagIndex,
      slotIndex: number
    ): ItemQuestInfo;
    function GetContainerNumFreeSlots(
      this: void,
      bagIndex: Enum.BagIndex
    ): LuaMultiReturn<[number, number | undefined]>;
    function GetContainerNumSlots(
      this: void,
      containerIndex: Enum.BagIndex
    ): number;
    function GetInsertItemsLeftToRight(this: void): boolean;
    function GetItemCooldown(
      this: void,
      itemID: number
    ): LuaMultiReturn<[number, number, number]>;
    function GetMaxArenaCurrency(this: void): number;
    function GetSortBagsRightToLeft(this: void): boolean;
    function IsBattlePayItem(
      this: void,
      containerIndex: Enum.BagIndex,
      slotIndex: number
    ): boolean;
    function IsContainerFiltered(
      this: void,
      containerIndex: Enum.BagIndex
    ): boolean;
    function PickupContainerItem(
      this: void,
      containerIndex: Enum.BagIndex,
      slotIndex: number
    ): void;
    function PlayerHasHearthstone(this: void): number | undefined;
    function SetBackpackAutosortDisabled(this: void, disable: boolean): void;
    function SetBackpackSellJunkDisabled(this: void, disable: boolean): void;
    function SetBagPortraitTexture(
      this: void,
      texture: SimpleTexture,
      bagIndex: Enum.BagIndex
    ): void;
    function SetBagSlotFlag(
      this: void,
      bagIndex: Enum.BagIndex,
      flag: Enum.BagSlotFlags,
      isSet: boolean
    ): void;
    function SetBankAutosortDisabled(this: void, disable: boolean): void;
    function SetInsertItemsLeftToRight(this: void, enable: boolean): void;
    function SetItemSearch(this: void, searchString: string): void;
    function SetSortBagsRightToLeft(this: void, enable: boolean): void;
    function ShowContainerSellCursor(
      this: void,
      containerIndex: Enum.BagIndex,
      slotIndex: number
    ): void;
    function SocketContainerItem(
      this: void,
      containerIndex: Enum.BagIndex,
      slotIndex: number
    ): boolean;
    function SortAccountBankBags(this: void): void;
    function SortBags(this: void): void;
    function SortBankBags(this: void): void;
    function SortReagentBankBags(this: void): void;
    function SplitContainerItem(
      this: void,
      containerIndex: Enum.BagIndex,
      slotIndex: number,
      amount: number
    ): void;
    function UseContainerItem(
      this: void,
      containerIndex: Enum.BagIndex,
      slotIndex: number,
      unitToken?: UnitToken,
      bankType?: Enum.BankType,
      reagentBankOpen?: boolean
    ): void;
    function UseHearthstone(this: void): boolean;
  }

  namespace C_ContentTracking {
    function GetBestMapForTrackable(
      this: void,
      trackableType: Enum.ContentTrackingType,
      trackableID: number,
      ignoreWaypoint?: boolean
    ): LuaMultiReturn<[Enum.ContentTrackingResult, number | undefined]>;
    function GetCollectableSourceTrackingEnabled(this: void): boolean;
    function GetCollectableSourceTypes(this: void): Enum.ContentTrackingType[];
    function GetCurrentTrackingTarget(
      this: void,
      type: Enum.ContentTrackingType,
      id: number
    ): LuaMultiReturn<[Enum.ContentTrackingTargetType, number]>;
    function GetEncounterTrackingInfo(
      this: void,
      journalEncounterID: number
    ): EncounterTrackingInfo;
    function GetNextWaypointForTrackable(
      this: void,
      trackableType: Enum.ContentTrackingType,
      trackableID: number,
      uiMapID: number
    ): LuaMultiReturn<
      [Enum.ContentTrackingResult, ContentTrackingMapInfo | undefined]
    >;
    function GetObjectiveText(
      this: void,
      targetType: Enum.ContentTrackingTargetType,
      targetID: number,
      includeHyperlinks?: boolean
    ): string;
    function GetTitle(
      this: void,
      trackableType: Enum.ContentTrackingType,
      trackableID: number
    ): string;
    function GetTrackablesOnMap(
      this: void,
      trackableType: Enum.ContentTrackingType,
      uiMapID: number
    ): LuaMultiReturn<[Enum.ContentTrackingResult, ContentTrackingMapInfo[]]>;
    function GetTrackedIDs(
      this: void,
      trackableType: Enum.ContentTrackingType
    ): number[];
    function GetVendorTrackingInfo(
      this: void,
      collectableEntryID: number
    ): VendorTrackingInfo;
    function GetWaypointText(
      this: void,
      trackableType: Enum.ContentTrackingType,
      trackableID: number
    ): string;
    function IsNavigable(
      this: void,
      trackableType: Enum.ContentTrackingType,
      trackableID: number
    ): LuaMultiReturn<[Enum.ContentTrackingResult, boolean]>;
    function IsTrackable(
      this: void,
      type: Enum.ContentTrackingType,
      id: number
    ): boolean;
    function IsTracking(
      this: void,
      type: Enum.ContentTrackingType,
      id: number
    ): boolean;
    function StartTracking(
      this: void,
      type: Enum.ContentTrackingType,
      id: number
    ): Enum.ContentTrackingError | undefined;
    function StopTracking(
      this: void,
      type: Enum.ContentTrackingType,
      id: number,
      stopType: Enum.ContentTrackingStopType
    ): void;
    function ToggleTracking(
      this: void,
      type: Enum.ContentTrackingType,
      id: number,
      stopType: Enum.ContentTrackingStopType
    ): Enum.ContentTrackingError | undefined;
  }

  interface ContentTrackingMapInfo {
    x: number;
    y: number;
    trackableType: Enum.ContentTrackingType;
    trackableID: number;
    targetType: Enum.ContentTrackingTargetType;
    targetID: number;
    waypointText: string;
  }

  interface EncounterTrackingInfo {
    encounterName: string;
    journalEncounterID?: number;
    journalInstanceID?: number;
    instanceName: string;
    subText?: string;
    difficultyID?: number;
    lfgDungeonID?: number;
    groupFinderActivityID?: number;
  }

  interface VendorTrackingInfo {
    creatureName: string;
    zoneName?: string;
    currencyType?: number;
    cost?: BigUInteger;
  }

  namespace C_ContributionCollector {
    interface ContributionAppearance {
      stateName: string;
      stateColor: colorRGB;
      tooltipLine: string;
      tooltipUseTimeRemaining: boolean;
      statusBarAtlas: textureAtlas;
      borderAtlas: textureAtlas;
      bannerAtlas: textureAtlas;
    }

    interface ContributionMapInfo {
      areaPoiID: number;
      position: vector2;
      name: string;
      atlasName: string;
      collectorCreatureID: number;
    }

    function Close(this: void): void;
    function Contribute(this: void, contributionID: number): void;
    function GetActive(this: void): number;
    function GetAtlases(this: void, contributionID: number): textureAtlas[];
    function GetBuffs(this: void, contributionID: number): number;
    function GetContributionAppearance(
      this: void,
      contributionID: number,
      contributionState: Enum.ContributionState
    ): ContributionAppearance | undefined;
    function GetContributionCollectorsForMap(
      this: void,
      uiMapID: number
    ): ContributionMapInfo[];
    function GetContributionResult(
      this: void,
      contributionID: number
    ): Enum.ContributionResult;
    function GetDescription(this: void, contributionID: number): string;
    function GetManagedContributionsForCreatureID(
      this: void,
      creatureID: number
    ): number;
    function GetName(this: void, contributionID: number): string;
    function GetOrderIndex(this: void, contributionID: number): number;
    function GetRequiredContributionCurrency(
      this: void,
      contributionID: number
    ): LuaMultiReturn<[number, number]>;
    function GetRequiredContributionItem(
      this: void,
      contributionID: number
    ): LuaMultiReturn<[number, number]>;
    function GetRewardQuestID(this: void, contributionID: number): number;
    function GetState(
      this: void,
      contributionID: number
    ): LuaMultiReturn<
      [Enum.ContributionState, number, time_t | undefined, time_t]
    >;
    function HasPendingContribution(
      this: void,
      contributionID: number
    ): boolean;
    function IsAwaitingRewardQuestData(
      this: void,
      contributionID: number
    ): boolean;
  }

  interface CooldownFrame {
    Clear(): void;
    GetCooldownDisplayDuration(): number;
    GetCooldownDuration(): number;
    GetCooldownTimes(): LuaMultiReturn<[number, number]>;
    GetDrawBling(): boolean;
    GetDrawEdge(): boolean;
    GetDrawSwipe(): boolean;
    GetEdgeScale(): number;
    GetReverse(): boolean;
    GetRotation(): number;
    IsPaused(): boolean;
    Pause(): void;
    Resume(): void;
    SetBlingTexture(
      texture: FileAsset,
      colorR: number,
      colorG: number,
      colorB: number,
      colorA: number
    ): void;
    SetCooldown(start: number, duration: number, modRate?: number): void;
    SetCooldownDuration(duration: number, modRate?: number): void;
    SetCooldownUNIX(start: number, duration: number, modRate?: number): void;
    SetCountdownAbbrevThreshold(seconds: number): void;
    SetCountdownFont(fontName: string): void;
    SetDrawBling(drawBling?: boolean): void;
    SetDrawEdge(drawEdge?: boolean): void;
    SetDrawSwipe(drawSwipe?: boolean): void;
    SetEdgeScale(scale: number): void;
    SetEdgeTexture(
      texture: FileAsset,
      colorR: number,
      colorG: number,
      colorB: number,
      colorA: number
    ): void;
    SetHideCountdownNumbers(hideNumbers?: boolean): void;
    SetReverse(reverse?: boolean): void;
    SetRotation(rotationRadians: number): void;
    SetSwipeColor(
      colorR: number,
      colorG: number,
      colorB: number,
      a?: SingleColorValue
    ): void;
    SetSwipeTexture(
      texture: FileAsset,
      colorR: number,
      colorG: number,
      colorB: number,
      colorA: number
    ): void;
    SetTexCoordRange(low: vector2, high: vector2): void;
    SetUseCircularEdge(useCircularEdge?: boolean): void;
  }

  namespace C_CovenantCallings {
    function AreCallingsUnlocked(this: void): boolean;
    function RequestCallings(this: void): void;
  }

  namespace C_CovenantPreview {
    interface CovenantAbilityInfo {
      spellID: number;
      type: Enum.CovenantAbilityType;
    }

    interface CovenantFeatureInfo {
      name: string;
      description: string;
      texture: number;
    }

    interface CovenantPreviewInfo {
      textureKit: textureKit;
      transmogSetID: number;
      mountID: number;
      covenantName: string;
      covenantZone: string;
      description: string;
      covenantCrest: textureAtlas;
      covenantAbilities: CovenantAbilityInfo[];
      fromPlayerChoice: boolean;
      covenantSoulbinds: CovenantSoulbindInfo[];
      featureInfo: CovenantFeatureInfo;
    }

    interface CovenantSoulbindInfo {
      spellID: number;
      uiTextureKit: textureKit;
      name: string;
      description: string;
      sortOrder: number;
    }

    function CloseFromUI(this: void): void;
    function GetCovenantInfoForPlayerChoiceResponseID(
      this: void,
      playerChoiceResponseID: number
    ): CovenantPreviewInfo;
  }

  namespace C_CovenantSanctumUI {
    interface CovenantSanctumFeatureInfo {
      garrTalentTreeID: number;
      featureType: number;
      uiOrder: number;
    }

    interface CovenantSanctumRenownLevelInfo {
      level: number;
      locked: boolean;
      isMilestone: boolean;
      isCapstone: boolean;
    }

    interface CovenantSanctumRenownRewardInfo {
      uiOrder: number;
      itemID?: number;
      spellID?: number;
      mountID?: number;
      transmogID?: number;
      transmogSetID?: number;
      titleMaskID?: number;
      garrFollowerID?: number;
      transmogIllusionSourceID?: number;
      icon?: fileID;
      name?: string;
      description?: string;
      toastDescription?: string;
    }

    function CanAccessReservoir(this: void): boolean;
    function CanDepositAnima(this: void): boolean;
    function DepositAnima(this: void): void;
    function EndInteraction(this: void): void;
    function GetAnimaInfo(this: void): LuaMultiReturn<[number, number]>;
    function GetCurrentTalentTreeID(this: void): number | undefined;
    function GetFeatures(this: void): CovenantSanctumFeatureInfo[];
    function GetRenownLevel(this: void): number;
    function GetRenownLevels(
      this: void,
      covenantID: number
    ): CovenantSanctumRenownLevelInfo[];
    function GetRenownRewardsForLevel(
      this: void,
      covenantID: number,
      renownLevel: number
    ): CovenantSanctumRenownRewardInfo[];
    function GetSanctumType(
      this: void
    ): Enum.GarrTalentFeatureSubtype | undefined;
    function GetSoulCurrencies(this: void): number[];
    function HasMaximumRenown(this: void): boolean;
    function IsPlayerInRenownCatchUpMode(this: void): boolean;
    function IsWeeklyRenownCapped(this: void): boolean;
    function RequestCatchUpState(this: void): void;
  }

  namespace C_Covenants {
    interface CovenantData {
      ID: number;
      textureKit: textureKit;
      celebrationSoundKit: number;
      animaChannelSelectSoundKit: number;
      animaChannelActiveSoundKit: number;
      animaGemsFullSoundKit: number;
      animaNewGemSoundKit: number;
      animaReinforceSelectSoundKit: number;
      upgradeTabSelectSoundKitID: number;
      reservoirFullSoundKitID: number;
      beginResearchSoundKitID: number;
      renownFanfareSoundKitID: number;
      name: string;
      soulbindIDs: number[];
    }

    function GetActiveCovenantID(this: void): number;
    function GetCovenantData(
      this: void,
      covenantID: number
    ): CovenantData | undefined;
    function GetCovenantIDs(this: void): number[];
  }

  namespace C_CraftingOrders {
    interface CraftingOrderRequestInfo {
      orderType: Enum.CraftingOrderType;
      selectedSkillLineAbility?: number;
      searchFavorites: boolean;
      initialNonPublicSearch: boolean;
      primarySort: CraftingOrderSortInfo;
      secondarySort: CraftingOrderSortInfo;
      forCrafter: boolean;
      offset: number;
      callback: CraftingOrderRequestCallback;
      profession?: Enum.Profession;
    }

    interface CraftingOrderRequestMyOrdersInfo {
      primarySort: CraftingOrderSortInfo;
      secondarySort: CraftingOrderSortInfo;
      offset: number;
      callback: CraftingOrderRequestMyOrdersCallback;
    }

    function AreOrderNotesDisabled(this: void): boolean;
    function CalculateCraftingOrderPostingFee(
      this: void,
      skillLineAbilityID: number,
      orderType: Enum.CraftingOrderType,
      orderDuration: Enum.CraftingOrderDuration
    ): WOWMONEY;
    function CanOrderSkillAbility(
      this: void,
      skillLineAbilityID: number
    ): boolean;
    function CancelOrder(this: void, orderID: BigUInteger): void;
    function ClaimOrder(
      this: void,
      orderID: BigUInteger,
      profession: Enum.Profession
    ): void;
    function CloseCrafterCraftingOrders(this: void): void;
    function CloseCustomerCraftingOrders(this: void): void;
    function FulfillOrder(
      this: void,
      orderID: BigUInteger,
      crafterNote: string,
      profession: Enum.Profession
    ): void;
    function GetClaimedOrder(this: void): CraftingOrderInfo | undefined;
    function GetCrafterBuckets(this: void): CraftingOrderBucketInfo[];
    function GetCrafterOrders(this: void): CraftingOrderInfo[];
    function GetCraftingOrderTime(this: void): BigUInteger;
    function GetCustomerCategories(this: void): CraftingOrderCustomerCategory[];
    function GetCustomerOptions(
      this: void,
      params: CraftingOrderCustomerSearchParams
    ): CraftingOrderCustomerSearchResults;
    function GetCustomerOrders(this: void): CraftingOrderInfo[];
    function GetDefaultOrdersSkillLine(this: void): number | undefined;
    function GetMyOrders(this: void): CraftingOrderInfo[];
    function GetNumFavoriteCustomerOptions(this: void): BigUInteger;
    function GetOrderClaimInfo(
      this: void,
      profession: Enum.Profession
    ): CraftingOrderClaimsRemainingInfo;
    function GetPersonalOrdersInfo(
      this: void
    ): CraftingOrderPersonalOrdersInfo[];
    function HasFavoriteCustomerOptions(this: void): boolean;
    function IsCustomerOptionFavorited(this: void, recipeID: number): boolean;
    function ListMyOrders(
      this: void,
      request: CraftingOrderRequestMyOrdersInfo
    ): void;
    function OpenCrafterCraftingOrders(this: void): void;
    function OpenCustomerCraftingOrders(this: void): void;
    function OrderCanBeRecrafted(this: void, orderID: BigUInteger): boolean;
    function ParseCustomerOptions(this: void): void;
    function PlaceNewOrder(this: void, orderInfo: NewCraftingOrderInfo): void;
    function RejectOrder(
      this: void,
      orderID: BigUInteger,
      crafterNote: string,
      profession: Enum.Profession
    ): void;
    function ReleaseOrder(
      this: void,
      orderID: BigUInteger,
      profession: Enum.Profession
    ): void;
    function RequestCrafterOrders(
      this: void,
      request: CraftingOrderRequestInfo
    ): void;
    function RequestCustomerOrders(
      this: void,
      request: CraftingOrderRequestInfo
    ): void;
    function SetCustomerOptionFavorited(
      this: void,
      recipeID: number,
      favorited: boolean
    ): void;
    function ShouldShowCraftingOrderTab(this: void): boolean;
    function SkillLineHasOrders(this: void, skillLineID: number): boolean;
    function UpdateIgnoreList(this: void): void;
  }

  interface CraftingOrderBucketInfo {
    itemID: number;
    spellID: number;
    skillLineAbilityID: number;
    tipAmountAvg: WOWMONEY;
    tipAmountMax: WOWMONEY;
    numAvailable: number;
  }

  interface CraftingOrderClaimsRemainingInfo {
    claimsRemaining?: number;
    secondsToRecharge?: number;
  }

  interface CraftingOrderCustomerCategory {
    categoryName: string;
    categoryID: number;
    uiSortOrder: number;
    primaryCategorySortOrder?: number;
    secondaryCategorySortOrder?: number;
    type: Enum.CraftingOrderCustomerCategoryType;
  }

  interface CraftingOrderCustomerCategoryFilters {
    primaryCategoryID?: number;
    secondaryCategoryID?: number;
    tertiaryCategoryID?: number;
  }

  interface CraftingOrderCustomerOptionInfo {
    skillLineAbilityID: number;
    professionID: number;
    skillUpSkillLineID: number;
    spellID: number;
    itemID: number;
    itemName: string;
    primaryCategoryID: number;
    iLvlMin: number;
    iLvlMax?: number;
    canUse: boolean;
    bindOnPickup: boolean;
    qualityIlvlBonuses?: number[];
    craftingQualityIDs?: number[];
    quality?: Enum.ItemQuality;
    slots?: number;
    level?: number;
    skill?: number;
    secondaryCategoryID?: number;
    tertiaryCategoryID?: number;
    expansionID?: number;
  }

  interface CraftingOrderCustomerSearchParams {
    categoryFilters: CraftingOrderCustomerCategoryFilters;
    searchText?: string;
    minLevel: number;
    maxLevel: number;
    uncollectedOnly: boolean;
    usableOnly: boolean;
    upgradesOnly: boolean;
    currentExpansionOnly: boolean;
    includePoor: boolean;
    includeCommon: boolean;
    includeUncommon: boolean;
    includeRare: boolean;
    includeEpic: boolean;
    includeLegendary: boolean;
    includeArtifact: boolean;
    isFavoritesSearch: boolean;
  }

  interface CraftingOrderCustomerSearchResults {
    options: CraftingOrderCustomerOptionInfo[];
    extraColumnType?: Enum.AuctionHouseExtraColumn;
  }

  interface CraftingOrderInfo {
    orderID: BigUInteger;
    itemID: number;
    spellID: number;
    skillLineAbilityID: number;
    orderType: Enum.CraftingOrderType;
    orderState: Enum.CraftingOrderState;
    expirationTime: time_t;
    claimEndTime: time_t;
    minQuality: number;
    tipAmount: WOWMONEY;
    consortiumCut: WOWMONEY;
    isRecraft: boolean;
    isFulfillable: boolean;
    reagentState: Enum.CraftingOrderReagentsType;
    customerGuid?: WOWGUID;
    customerName?: string;
    crafterGuid?: WOWGUID;
    crafterName?: string;
    npcCustomerCreatureID?: number;
    customerNotes: string;
    reagents: CraftingOrderReagentInfo[];
    outputItemHyperlink?: string;
    outputItemGUID?: WOWGUID;
    recraftItemHyperlink?: string;
    npcOrderRewards: CraftingOrderRewardInfo[];
    npcCraftingOrderSetID: number;
    npcTreasureID: number;
  }

  interface CraftingOrderMailInfo {
    reason: Enum.RcoCloseReason;
    recipeName: string;
    commissionPaid?: WOWMONEY;
    crafterNote?: string;
    crafterGUID?: WOWGUID;
    crafterName?: string;
    customerGUID?: WOWGUID;
    customerName?: string;
  }

  interface CraftingOrderPersonalOrdersInfo {
    profession: Enum.Profession;
    numPersonalOrders: number;
    professionName: string;
  }

  interface CraftingOrderReagentInfo {
    reagent: CraftingReagentInfo;
    slotIndex: number;
    source: Enum.CraftingOrderReagentSource;
    isBasicReagent: boolean;
  }

  interface CraftingOrderRewardInfo {
    itemLink?: string;
    currencyType?: number;
    count: number;
  }

  interface CraftingOrderSortInfo {
    sortType: Enum.CraftingOrderSortType;
    reversed: boolean;
  }

  interface NewCraftingOrderInfo {
    skillLineAbilityID: number;
    orderType: Enum.CraftingOrderType;
    orderDuration: Enum.CraftingOrderDuration;
    tipAmount: WOWMONEY;
    customerNotes: string;
    reagentItems: RegularReagentInfo[];
    craftingReagentItems: CraftingReagentInfo[];
    minCraftingQualityID?: number;
    orderTarget?: string;
    recraftItem?: WOWGUID;
  }
  type CraftingOrderRequestCallback = (
    this: void,
    result: Enum.CraftingOrderResult,
    orderType: Enum.CraftingOrderType,
    displayBuckets: boolean,
    expectMoreRows: boolean,
    offset: number,
    isSorted: boolean
  ) => void;
  type CraftingOrderRequestMyOrdersCallback = (
    this: void,
    result: Enum.CraftingOrderResult,
    expectMoreRows: boolean,
    offset: number,
    isSorted: boolean
  ) => void;

  namespace C_CreatureInfo {
    interface ClassInfo {
      className: string;
      classFile: string;
      classID: number;
    }

    interface FactionInfo {
      name: string;
      groupTag: string;
    }

    interface RaceInfo {
      raceName: string;
      clientFileString: string;
      raceID: number;
    }

    function GetClassInfo(this: void, classID: number): ClassInfo | undefined;
    function GetFactionInfo(
      this: void,
      raceID: number
    ): FactionInfo | undefined;
    function GetRaceInfo(this: void, raceID: number): RaceInfo | undefined;
  }

  namespace C_CurrencyInfo {
    interface BackpackCurrencyInfo {
      name: string;
      quantity: number;
      iconFileID: fileID;
      currencyTypesID: number;
    }

    interface CharacterCurrencyData {
      characterGUID: WOWGUID;
      characterName: string;
      currencyID: number;
      quantity: number;
    }

    interface CurrencyDisplayInfo {
      name: string;
      description: string;
      icon: number;
      quality: number;
      displayAmount: number;
      actualAmount: number;
    }

    interface CurrencyInfo {
      name: string;
      description: string;
      currencyID: number;
      isHeader: boolean;
      isHeaderExpanded: boolean;
      currencyListDepth: number;
      isTypeUnused: boolean;
      isShowInBackpack: boolean;
      quantity: number;
      trackedQuantity: number;
      iconFileID: fileID;
      maxQuantity: number;
      canEarnPerWeek: boolean;
      quantityEarnedThisWeek: number;
      isTradeable: boolean;
      quality: Enum.ItemQuality;
      maxWeeklyQuantity: number;
      totalEarned: number;
      discovered: boolean;
      useTotalEarnedForMaxQty: boolean;
      isAccountWide: boolean;
      isAccountTransferable: boolean;
      transferPercentage?: number;
      rechargingCycleDurationMS: number;
      rechargingAmountPerCycle: number;
    }

    interface CurrencyTransferTransaction {
      sourceCharacterGUID: WOWGUID;
      sourceCharacterName?: string;
      destinationCharacterGUID: WOWGUID;
      destinationCharacterName?: string;
      currencyType: number;
      quantityTransferred: number;
      totalQuantityConsumed: number;
      timestamp: time_t;
    }

    function CanTransferCurrency(
      this: void,
      currencyID: number
    ): LuaMultiReturn<
      [boolean, Enum.AccountCurrencyTransferResult | undefined]
    >;
    function DoesWarModeBonusApply(
      this: void,
      currencyID: number
    ): LuaMultiReturn<[boolean | undefined, boolean | undefined]>;
    function ExpandCurrencyList(
      this: void,
      index: number,
      expand: boolean
    ): void;
    function FetchCurrencyDataFromAccountCharacters(
      this: void,
      currencyID: number
    ): CharacterCurrencyData[];
    function FetchCurrencyTransferTransactions(
      this: void
    ): CurrencyTransferTransaction[];
    function GetAzeriteCurrencyID(this: void): number;
    function GetBackpackCurrencyInfo(
      this: void,
      index: number
    ): BackpackCurrencyInfo;
    function GetBasicCurrencyInfo(
      this: void,
      currencyType: number,
      quantity?: number
    ): CurrencyDisplayInfo;
    function GetCoinIcon(this: void, amount: WOWMONEY): fileID;
    function GetCoinText(
      this: void,
      amount: WOWMONEY,
      separator?: string
    ): string;
    function GetCoinTextureString(
      this: void,
      amount: WOWMONEY,
      fontHeight?: number
    ): string;
    function GetCostToTransferCurrency(
      this: void,
      currencyID: number,
      quantity: number
    ): number | undefined;
    function GetCurrencyContainerInfo(
      this: void,
      currencyType: number,
      quantity: number
    ): CurrencyDisplayInfo;
    function GetCurrencyDescription(this: void, type: number): string;
    function GetCurrencyIDFromLink(this: void, currencyLink: string): number;
    function GetCurrencyInfo(this: void, type: number): CurrencyInfo;
    function GetCurrencyInfoFromLink(this: void, link: string): CurrencyInfo;
    function GetCurrencyLink(this: void, type: number, amount?: number): string;
    function GetCurrencyListInfo(this: void, index: number): CurrencyInfo;
    function GetCurrencyListLink(this: void, index: number): string;
    function GetCurrencyListSize(this: void): number;
    function GetDragonIslesSuppliesCurrencyID(this: void): number;
    function GetFactionGrantedByCurrency(
      this: void,
      currencyID: number
    ): number | undefined;
    function GetMaxTransferableAmountFromQuantity(
      this: void,
      currencyID: number,
      requestedQuantity: number
    ): number | undefined;
    function GetWarResourcesCurrencyID(this: void): number;
    function IsAccountCharacterCurrencyDataReady(this: void): boolean;
    function IsAccountTransferableCurrency(
      this: void,
      currencyID: number
    ): boolean;
    function IsAccountWideCurrency(this: void, currencyID: number): boolean;
    function IsCurrencyContainer(
      this: void,
      currencyID: number,
      quantity: number
    ): boolean;
    function IsCurrencyTransferTransactionDataReady(this: void): boolean;
    function PickupCurrency(this: void, type: number): void;
    function PlayerHasMaxQuantity(this: void, currencyID: number): boolean;
    function PlayerHasMaxWeeklyQuantity(
      this: void,
      currencyID: number
    ): boolean;
    function RequestCurrencyDataForAccountCharacters(this: void): void;
    function RequestCurrencyFromAccountCharacter(
      this: void,
      sourceCharacterGUID: WOWGUID,
      currencyID: number,
      quantity: number
    ): void;
    function SetCurrencyBackpack(
      this: void,
      index: number,
      backpack: boolean
    ): void;
    function SetCurrencyUnused(
      this: void,
      index: number,
      unused: boolean
    ): void;
  }

  namespace C_Cursor {
    function GetCursorItem(this: void): ItemLocation;
  }

  namespace C_CursorUtil {}

  namespace C_CVar {
    interface CVarInfo {
      value: string;
      defaultValue: string;
      isStoredServerAccount: boolean;
      isStoredServerCharacter: boolean;
      isLockedFromUser: boolean;
      isSecure: boolean;
      isReadOnly: boolean;
    }

    function GetCVar(this: void, name: string): string | undefined;
    function GetCVarBitfield(
      this: void,
      name: string,
      index: number
    ): boolean | undefined;
    function GetCVarBool(this: void, name: string): boolean | undefined;
    function GetCVarDefault(this: void, name: string): string | undefined;
    function GetCVarInfo(
      this: void,
      name: string
    ): LuaMultiReturn<
      [string, string, boolean, boolean, boolean, boolean, boolean]
    >;
    function RegisterCVar(this: void, name: string, value?: string): void;
    function ResetTestCVars(this: void): void;
    function SetCVar(this: void, name: string, value?: string): boolean;
    function SetCVarBitfield(
      this: void,
      name: string,
      index: number,
      value: boolean
    ): boolean;
  }

  namespace C_DateAndTime {
    function AdjustTimeByDays(
      this: void,
      date: CalendarTime,
      days: number
    ): CalendarTime;
    function AdjustTimeByMinutes(
      this: void,
      date: CalendarTime,
      minutes: number
    ): CalendarTime;
    function AdjustTimeByMonths(
      this: void,
      date: CalendarTime,
      months: number
    ): CalendarTime;
    function CompareCalendarTime(
      this: void,
      lhsCalendarTime: CalendarTime,
      rhsCalendarTime: CalendarTime
    ): number;
    function GetCalendarTimeFromEpoch(
      this: void,
      epoch: BigUInteger
    ): CalendarTime;
    function GetCurrentCalendarTime(this: void): CalendarTime;
    function GetSecondsUntilDailyReset(this: void): time_t;
    function GetSecondsUntilWeeklyReset(this: void): time_t;
    function GetServerTimeLocal(this: void): time_t;
    function GetWeeklyResetStartTime(this: void): time_t;
  }

  namespace C_DeathAlert {}

  namespace C_DeathInfo {
    interface GraveyardMapInfo {
      areaPoiID: number;
      position: vector2;
      name: string;
      textureIndex: number;
      graveyardID: number;
      isGraveyardSelectable: boolean;
    }

    interface SelfResurrectOption {
      name: string;
      optionType: Enum.SelfResurrectOptionType;
      id: number;
      canUse: boolean;
      isLimited: boolean;
      priority: number;
    }

    function GetCorpseMapPosition(
      this: void,
      uiMapID: number
    ): vector2 | undefined;
    function GetDeathReleasePosition(
      this: void,
      uiMapID: number
    ): vector2 | undefined;
    function GetGraveyardsForMap(
      this: void,
      uiMapID: number
    ): GraveyardMapInfo[];
    function GetSelfResurrectOptions(this: void): SelfResurrectOption[];
    function UseSelfResurrectOption(
      this: void,
      optionType: Enum.SelfResurrectOptionType,
      id: number
    ): void;
  }

  function GetDebugAnimationStats(
    this: void,
    unitGUID?: UnitToken
  ): LuaMultiReturn<
    [
      string,
      string,
      string,
      string,
      number,
      string,
      number,
      string,
      number,
      string,
      number,
      number | undefined,
      number | undefined,
    ]
  >;
  function GetDebugPerf(this: void): string;
  function GetDebugSpellEffects(this: void): string;
  function GetDebugStats(this: void): string;
  function GetDebugTargetCustomizationInfo(this: void): string;
  function GetDebugUnitInfo(this: void, unitGUID: WOWGUID): void;

  function ToggleAnimKitDisplay(this: void): void;
  function ToggleCollision(this: void): void;
  function ToggleCollisionDisplay(this: void): void;
  function ToggleDebugAIDisplay(this: void): void;
  function ToggleGravity(this: void): void;
  function TogglePlayerBounds(this: void): void;
  function TogglePortals(this: void): void;
  function ToggleTris(this: void): void;

  namespace C_DelvesUI {
    function GetCreatureDisplayInfoForCompanion(
      this: void,
      companionID?: number
    ): number;
    function GetCurioNodeForCompanion(
      this: void,
      companionID: number | undefined,
      curioType: Enum.CurioType
    ): number;
    function GetCurioRarityByTraitCondAccountElementID(
      this: void,
      traitCondAccountElementID: number
    ): Enum.CurioRarity;
    function GetCurrentDelvesSeasonNumber(this: void): number;
    function GetDelvesAffixSpellsForSeason(this: void): number[];
    function GetDelvesFactionForSeason(this: void): number;
    function GetDelvesMinRequiredLevel(this: void): number | undefined;
    function GetFactionForCompanion(this: void, companionID?: number): number;
    function GetModelSceneForCompanion(
      this: void,
      companionID?: number
    ): number;
    function GetRoleNodeForCompanion(this: void, companionID?: number): number;
    function GetRoleSubtreeForCompanion(
      this: void,
      companionID: number | undefined,
      roleType: Enum.CompanionRoleType
    ): number;
    function GetTraitTreeForCompanion(this: void, companionID?: number): number;
    function GetUnseenCuriosBySlotType(
      this: void,
      slotType: Enum.CompanionConfigSlotTypes,
      ownedCurioNodeIDs: number[]
    ): number[];
    function HasActiveDelve(this: void, mapID?: number): boolean;
    function IsEligibleForActiveDelveRewards(
      this: void,
      unit: UnitToken
    ): boolean;
    function SaveSeenCuriosBySlotType(
      this: void,
      slotType: Enum.CompanionConfigSlotTypes,
      ownedCurioNodeIDs: number[]
    ): void;
  }

  namespace C_Deprecated {}

  namespace C_DuelInfo {}

  namespace C_EditMode {
    interface EditModeAnchorInfo {
      point: FramePoint;
      relativeTo: string;
      relativePoint: FramePoint;
      offsetX: number;
      offsetY: number;
    }

    interface EditModeLayoutInfo {
      layoutName: string;
      layoutType: Enum.EditModeLayoutType;
      systems: EditModeSystemInfo[];
    }

    interface EditModeLayouts {
      layouts: EditModeLayoutInfo[];
      activeLayout: number;
    }

    interface EditModeSettingInfo {
      setting: number;
      value: number;
    }

    interface EditModeSystemInfo {
      system: Enum.EditModeSystem;
      systemIndex?: number;
      anchorInfo: EditModeAnchorInfo;
      anchorInfo2?: EditModeAnchorInfo;
      settings: EditModeSettingInfo[];
      isInDefaultPosition: boolean;
    }

    function ConvertLayoutInfoToString(
      this: void,
      layoutInfo: EditModeLayoutInfo
    ): string;
    function ConvertStringToLayoutInfo(
      this: void,
      layoutInfoAsString: string
    ): EditModeLayoutInfo;
    function GetAccountSettings(this: void): EditModeSettingInfo[];
    function GetLayouts(this: void): EditModeLayouts;
    function IsValidLayoutName(this: void, name: string): boolean;
    function OnEditModeExit(this: void): void;
    function OnLayoutAdded(
      this: void,
      addedLayoutIndex: number,
      activateNewLayout: boolean,
      isLayoutImported: boolean
    ): void;
    function OnLayoutDeleted(this: void, deletedLayoutIndex: number): void;
    function SaveLayouts(this: void, saveInfo: EditModeLayouts): void;
    function SetAccountSetting(
      this: void,
      setting: Enum.EditModeAccountSetting,
      value: number
    ): void;
    function SetActiveLayout(this: void, activeLayout: number): void;
  }

  namespace C_EncounterInfo {}

  namespace C_EncounterJournal {
    interface DungeonEntranceMapInfo {
      areaPoiID: number;
      position: vector2;
      name: string;
      description: string;
      atlasName: string;
      journalInstanceID: number;
    }

    interface EncounterJournalItemInfo {
      itemID: number;
      encounterID?: number;
      name?: string;
      itemQuality?: string;
      filterType?: Enum.ItemSlotFilterType;
      icon?: fileID;
      slot?: string;
      armorType?: string;
      link?: string;
      handError?: boolean;
      weaponTypeError?: boolean;
      displayAsPerPlayerLoot?: boolean;
      displayAsVeryRare?: boolean;
      displayAsExtremelyRare?: boolean;
      displaySeasonID?: number;
    }

    interface EncounterJournalMapEncounterInfo {
      encounterID: number;
      mapX: number;
      mapY: number;
    }

    interface EncounterJournalSectionInfo {
      spellID: number;
      title: string;
      description?: string;
      headerType: number;
      abilityIcon: fileID;
      creatureDisplayID: number;
      uiModelSceneID: number;
      siblingSectionID?: number;
      firstChildSectionID?: number;
      filteredByDifficulty: boolean;
      link: string;
      startsOpen: boolean;
    }

    function GetDungeonEntrancesForMap(
      this: void,
      uiMapID: number
    ): DungeonEntranceMapInfo[];
    function GetEncounterJournalLink(
      this: void,
      linkType: Enum.JournalLinkTypes,
      ID: number,
      displayText: string,
      difficultyID: number
    ): string;
    function GetEncountersOnMap(
      this: void,
      uiMapID: number
    ): EncounterJournalMapEncounterInfo[];
    function GetInstanceForGameMap(
      this: void,
      mapID: number
    ): number | undefined;
    function GetLootInfo(this: void, id: number): EncounterJournalItemInfo;
    function GetLootInfoByIndex(
      this: void,
      index: number,
      encounterIndex?: number
    ): EncounterJournalItemInfo;
    function GetSectionIconFlags(
      this: void,
      sectionID: number
    ): number[] | undefined;
    function GetSectionInfo(
      this: void,
      sectionID: number
    ): EncounterJournalSectionInfo;
    function GetSlotFilter(this: void): Enum.ItemSlotFilterType;
    function InitalizeSelectedTier(this: void): void;
    function InstanceHasLoot(this: void, instanceID?: number): boolean;
    function IsEncounterComplete(
      this: void,
      journalEncounterID: number
    ): boolean;
    function OnClose(this: void): void;
    function OnOpen(this: void): void;
    function ResetSlotFilter(this: void): void;
    function SetPreviewMythicPlusLevel(this: void, level: number): void;
    function SetPreviewPvpTier(this: void, tier: number): void;
    function SetSlotFilter(
      this: void,
      filterSlot: Enum.ItemSlotFilterType
    ): void;
    function SetTab(this: void, tabIdx: number): void;
  }

  namespace C_EquipmentSet {
    function AssignSpecToEquipmentSet(
      this: void,
      equipmentSetID: number,
      specIndex: number
    ): void;
    function CanUseEquipmentSets(this: void): boolean;
    function ClearIgnoredSlotsForSave(this: void): void;
    function CreateEquipmentSet(
      this: void,
      equipmentSetName: string,
      icon?: string
    ): void;
    function DeleteEquipmentSet(this: void, equipmentSetID: number): void;
    function EquipmentSetContainsLockedItems(
      this: void,
      equipmentSetID: number
    ): boolean;
    function GetEquipmentSetAssignedSpec(
      this: void,
      equipmentSetID: number
    ): number;
    function GetEquipmentSetForSpec(this: void, specIndex: number): number;
    function GetEquipmentSetID(this: void, equipmentSetName: string): number;
    function GetEquipmentSetIDs(this: void): number[];
    function GetEquipmentSetInfo(
      this: void,
      equipmentSetID: number
    ): LuaMultiReturn<
      [string, number, number, boolean, number, number, number, number, number]
    >;
    function GetIgnoredSlots(this: void, equipmentSetID: number): boolean[];
    function GetItemIDs(this: void, equipmentSetID: number): number[];
    function GetItemLocations(this: void, equipmentSetID: number): number[];
    function GetNumEquipmentSets(this: void): number;
    function IgnoreSlotForSave(this: void, slot: number): void;
    function IsSlotIgnoredForSave(this: void, slot: number): boolean;
    function ModifyEquipmentSet(
      this: void,
      equipmentSetID: number,
      newName: string,
      newIcon?: string
    ): void;
    function PickupEquipmentSet(this: void, equipmentSetID: number): void;
    function SaveEquipmentSet(
      this: void,
      equipmentSetID: number,
      icon?: string
    ): void;
    function UnassignEquipmentSetSpec(this: void, equipmentSetID: number): void;
    function UnignoreSlotForSave(this: void, slot: number): void;
    function UseEquipmentSet(this: void, equipmentSetID: number): boolean;
  }

  namespace C_EventUtils {
    function IsEventValid(this: void, eventName: string): boolean;
    function NotifySettingsLoaded(this: void): void;
  }

  interface ExpansionDisplayInfo {
    logo: fileID;
    banner: textureAtlas;
    features: ExpansionDisplayInfoFeature[];
    highResBackgroundID: fileID;
    lowResBackgroundID: fileID;
  }

  interface ExpansionDisplayInfoFeature {
    icon: fileID;
    text: string;
  }

  function CanUpgradeExpansion(this: void): boolean;
  function DoesCurrentLocaleSellExpansionLevels(this: void): boolean;
  function GetAccountExpansionLevel(this: void): number;
  function GetClientDisplayExpansionLevel(this: void): number;
  function GetCurrentRegionName(this: void): string;
  function GetExpansionDisplayInfo(
    this: void,
    expansionLevel: number
  ): ExpansionDisplayInfo | undefined;
  function GetExpansionForLevel(this: void, playerLevel: number): number;
  function GetExpansionLevel(this: void): number;
  function GetExpansionTrialInfo(
    this: void
  ): LuaMultiReturn<[boolean, time_t | undefined]>;
  function GetMaxLevelForExpansionLevel(
    this: void,
    expansionLevel: number
  ): number;
  function GetMaxLevelForLatestExpansion(this: void): number;
  function GetMaxLevelForPlayerExpansion(this: void): number;
  function GetMaximumExpansionLevel(this: void): number;
  function GetMinimumExpansionLevel(this: void): number;
  function GetNumExpansions(this: void): number;
  function GetServerExpansionLevel(this: void): number;
  function IsDemonHunterAvailable(this: void): boolean;
  function IsExpansionTrial(this: void): boolean;
  function IsTrialAccount(this: void): boolean;
  function IsVeteranTrialAccount(this: void): boolean;
  function SendSubscriptionInterstitialResponse(
    this: void,
    response: Enum.SubscriptionInterstitialResponseType
  ): void;

  function ClassicExpansionAtLeast(this: void, expansionLevel: number): boolean;
  function GetClassicExpansionLevel(this: void): number;

  namespace C_ExpansionTrial {
    function OnTrialLevelUpDialogClicked(this: void): void;
    function OnTrialLevelUpDialogShown(this: void): void;
  }

  namespace C_FogOfWar {
    interface FogOfWarInfo {
      fogOfWarID: number;
      backgroundAtlas: textureAtlas;
      maskAtlas: textureAtlas;
      maskScalar: number;
    }

    function GetFogOfWarForMap(this: void, uiMapID: number): number | undefined;
    function GetFogOfWarInfo(
      this: void,
      fogOfWarID: number
    ): FogOfWarInfo | undefined;
  }

  interface FontScriptInfo {
    color: colorRGBA;
    height: number;
    outline: string;
    shadow?: FontScriptShadowInfo;
  }

  interface FontScriptShadowInfo {
    color: colorRGBA;
    x: number;
    y: number;
  }

  function GetFontInfo(
    this: void,
    fontObject: SimpleFont
  ): FontScriptInfo | undefined;
  function GetFonts(this: void): string[];

  interface FrameAPIArchaeologyDigSiteFrame {}

  interface FrameAPIBlob {
    DrawAll(): void;
    DrawBlob(questID: number, draw?: boolean): void;
    DrawNone(): void;
    EnableMerging(enable?: boolean): void;
    EnableSmoothing(enable?: boolean): void;
    GetMapID(): number;
    SetBorderAlpha(alpha: number): void;
    SetBorderScalar(scalar: number): void;
    SetBorderTexture(asset: FileAsset): void;
    SetFillAlpha(alpha: number): void;
    SetFillTexture(asset: FileAsset): void;
    SetMapID(uiMapID: number): void;
    SetMergeThreshold(threshold: number): void;
    SetNumSplinePoints(numSplinePoints: number): void;
  }

  interface FrameAPICharacterModelBase {
    ApplySpellVisualKit(spellVisualKitID: number, oneShot?: boolean): void;
    CanSetUnit(unit: UnitToken): void;
    FreezeAnimation(
      anim: AnimationDataEnum,
      variation: number,
      frame: number
    ): void;
    GetDisplayInfo(): number;
    GetDoBlend(): boolean;
    GetKeepModelOnHide(): boolean;
    HasAnimation(anim: AnimationDataEnum): boolean;
    PlayAnimKit(animKit: number, loop?: boolean): void;
    RefreshCamera(): void;
    RefreshUnit(): void;
    SetAnimation(anim: AnimationDataEnum, variation?: number): void;
    SetBarberShopAlternateForm(): void;
    SetCamDistanceScale(scale: number): void;
    SetCreature(creatureID: number, displayID?: number): void;
    SetDisplayInfo(displayID: number, mountDisplayID?: number): void;
    SetDoBlend(doBlend?: boolean): void;
    SetItem(
      itemID: number,
      appearanceModID?: number,
      itemVisualID?: number
    ): void;
    SetItemAppearance(
      itemAppearanceID: number,
      itemVisualID?: number,
      itemSubclass?: Enum.ItemWeaponSubclass
    ): void;
    SetKeepModelOnHide(keepModelOnHide: boolean): void;
    SetPortraitZoom(zoom: number): void;
    SetRotation(radians: number, animate?: boolean): void;
    SetUnit(unit: UnitToken, blend?: boolean, useNativeForm?: boolean): boolean;
    StopAnimKit(): void;
    ZeroCachedCenterXY(): void;
  }

  interface FrameAPICinematicModel {
    EquipItem(itemID: number): void;
    InitializeCamera(scaleFactor?: number): void;
    InitializePanCamera(scaleFactor?: number): void;
    RefreshCamera(): void;
    SetAnimOffset(offset: number): void;
    SetCameraPosition(
      positionX: number,
      positionY: number,
      positionZ: number
    ): void;
    SetCameraTarget(
      positionX: number,
      positionY: number,
      positionZ: number
    ): void;
    SetCreatureData(creatureID: number): void;
    SetFacingLeft(isFacingLeft?: boolean): void;
    SetFadeTimes(fadeInSeconds: number, fadeOutSeconds: number): void;
    SetHeightFactor(factor: number): void;
    SetJumpInfo(jumpLength: number, jumpHeight: number): void;
    SetPanDistance(scale: number): void;
    SetSpellVisualKit(visualKitID: number): void;
    SetTargetDistance(scale: number): void;
    StartPan(
      panType: number,
      durationSeconds: number,
      doFade?: boolean,
      visKitID?: number,
      startPositionScale?: number,
      speedMultiplier?: number
    ): void;
    StopPan(): void;
    UnequipItems(): void;
  }

  interface FrameAPICooldown {
    Clear(): void;
    GetCooldownDisplayDuration(): number;
    GetCooldownDuration(): number;
    GetCooldownTimes(): LuaMultiReturn<[number, number]>;
    GetDrawBling(): boolean;
    GetDrawEdge(): boolean;
    GetDrawSwipe(): boolean;
    GetEdgeScale(): number;
    GetReverse(): boolean;
    GetRotation(): number;
    IsPaused(): boolean;
    Pause(): void;
    Resume(): void;
    SetBlingTexture(
      texture: FileAsset,
      colorR: number,
      colorG: number,
      colorB: number,
      colorA: number
    ): void;
    SetCooldown(start: number, duration: number, modRate?: number): void;
    SetCooldownDuration(duration: number, modRate?: number): void;
    SetCooldownUNIX(start: number, duration: number, modRate?: number): void;
    SetCountdownAbbrevThreshold(seconds: number): void;
    SetCountdownFont(fontName: string): void;
    SetDrawBling(drawBling?: boolean): void;
    SetDrawEdge(drawEdge?: boolean): void;
    SetDrawSwipe(drawSwipe?: boolean): void;
    SetEdgeScale(scale: number): void;
    SetEdgeTexture(
      texture: FileAsset,
      colorR: number,
      colorG: number,
      colorB: number,
      colorA: number
    ): void;
    SetHideCountdownNumbers(hideNumbers?: boolean): void;
    SetReverse(reverse?: boolean): void;
    SetRotation(rotationRadians: number): void;
    SetSwipeColor(
      colorR: number,
      colorG: number,
      colorB: number,
      a?: SingleColorValue
    ): void;
    SetSwipeTexture(
      texture: FileAsset,
      colorR: number,
      colorG: number,
      colorB: number,
      colorA: number
    ): void;
    SetTexCoordRange(low: vector2, high: vector2): void;
    SetUseCircularEdge(useCircularEdge?: boolean): void;
  }

  interface FrameAPIDressUpModel {
    Dress(): void;
    GetAutoDress(): boolean;
    GetItemTransmogInfo(inventorySlot: number): ItemTransmogInfo;
    GetItemTransmogInfoList(): ItemTransmogInfo[];
    GetObeyHideInTransmogFlag(): boolean;
    GetSheathed(): boolean;
    GetUseTransmogChoices(): boolean;
    GetUseTransmogSkin(): boolean;
    IsGeoReady(): boolean;
    IsSlotAllowed(slot: number): boolean;
    IsSlotVisible(slot: number): boolean;
    SetAutoDress(enabled?: boolean): void;
    SetItemTransmogInfo(
      itemTransmogInfo: ItemTransmogInfo,
      inventorySlot?: number,
      ignoreChildItems?: boolean
    ): Enum.ItemTryOnReason;
    SetObeyHideInTransmogFlag(enabled?: boolean): void;
    SetSheathed(sheathed?: boolean, hideWeapons?: boolean): void;
    SetUseTransmogChoices(enabled?: boolean): void;
    SetUseTransmogSkin(enabled?: boolean): void;
    TryOn(
      linkOrItemModifiedAppearanceID: IDOrLink,
      handSlotName?: string,
      spellEnchantID?: number
    ): Enum.ItemTryOnReason | undefined;
    Undress(): void;
    UndressSlot(inventorySlot: number): void;
  }

  interface FrameAPIFogOfWarFrame {
    GetFogOfWarBackgroundAtlas(): textureAtlas;
    GetFogOfWarBackgroundTexture(): FileAsset | undefined;
    GetFogOfWarMaskAtlas(): textureAtlas;
    GetFogOfWarMaskTexture(): FileAsset | undefined;
    GetMaskScalar(): number;
    GetUiMapID(): number;
    SetFogOfWarBackgroundAtlas(atlas: textureAtlas): void;
    SetFogOfWarBackgroundTexture(
      asset: FileAsset,
      horizontalTile: boolean,
      verticalTile: boolean
    ): void;
    SetFogOfWarMaskAtlas(atlas: textureAtlas): void;
    SetFogOfWarMaskTexture(asset: FileAsset): void;
    SetMaskScalar(scalar: number): void;
    SetUiMapID(uiMapID: number): void;
  }

  interface FrameAPIModelSceneFrameActorBase {
    ClearModel(): void;
    GetActiveBoundingBox(): LuaMultiReturn<[vector3, vector3]>;
    GetAlpha(): number;
    GetAnimation(): AnimationDataEnum;
    GetAnimationBlendOperation(): Enum.ModelBlendOperation;
    GetAnimationVariation(): number;
    GetDesaturation(): number;
    GetMaxBoundingBox(): LuaMultiReturn<[vector3, vector3]>;
    GetModelFileID(): fileID;
    GetModelPath(): string;
    GetModelUnitGUID(): WOWGUID;
    GetParticleOverrideScale(): number | undefined;
    GetPitch(): number;
    GetPosition(): LuaMultiReturn<[number, number, number]>;
    GetRoll(): number;
    GetScale(): number;
    GetSpellVisualKit(): number;
    GetYaw(): number;
    Hide(): void;
    IsLoaded(): boolean;
    IsShown(): boolean;
    IsUsingCenterForOrigin(): LuaMultiReturn<[boolean, boolean, boolean]>;
    IsVisible(): boolean;
    PlayAnimationKit(animationKit: number, isLooping?: boolean): void;
    SetAlpha(alpha: number): void;
    SetAnimation(
      animation: AnimationDataEnum,
      variation?: number,
      animSpeed?: number,
      animOffsetSeconds?: number
    ): void;
    SetAnimationBlendOperation(blendOp: Enum.ModelBlendOperation): void;
    SetDesaturation(strength: number): void;
    SetModelByCreatureDisplayID(
      creatureDisplayID: number,
      useActivePlayerCustomizations?: boolean
    ): boolean;
    SetModelByFileID(asset: FileAsset, useMips?: boolean): boolean;
    SetModelByPath(asset: FileAsset, useMips?: boolean): boolean;
    SetModelByUnit(
      unit: UnitToken,
      sheatheWeapons?: boolean,
      autoDress?: boolean,
      hideWeapons?: boolean,
      usePlayerNativeForm?: boolean,
      holdBowString?: boolean
    ): boolean;
    SetParticleOverrideScale(scale?: number): void;
    SetPitch(pitch: number): void;
    SetPosition(positionX: number, positionY: number, positionZ: number): void;
    SetRoll(roll: number): void;
    SetScale(scale: number): void;
    SetShown(show?: boolean): void;
    SetSpellVisualKit(spellVisualKitID?: number, oneShot?: boolean): void;
    SetUseCenterForOrigin(x?: boolean, y?: boolean, z?: boolean): void;
    SetYaw(yaw: number): void;
    Show(): void;
    StopAnimationKit(): void;
  }

  interface FrameAPIModelSceneFrameActor {
    AttachToMount(
      rider: ModelSceneFrameActor,
      animation: AnimationDataEnum,
      spellKitVisualID?: number
    ): boolean;
    CalculateMountScale(rider: ModelSceneFrameActor): number;
    Dress(): void;
    DressPlayerSlot(invSlot: number): void;
    GetAutoDress(): boolean;
    GetItemTransmogInfo(inventorySlots: number): ItemTransmogInfo | undefined;
    GetItemTransmogInfoList(): ItemTransmogInfo[];
    GetObeyHideInTransmogFlag(): boolean;
    GetPaused(): LuaMultiReturn<[boolean, boolean]>;
    GetSheathed(): boolean;
    GetUseTransmogChoices(): boolean;
    GetUseTransmogSkin(): boolean;
    IsGeoReady(): boolean;
    IsSlotAllowed(inventorySlots: number): boolean;
    IsSlotVisible(inventorySlots: number): boolean;
    ReleaseFrontEndCharacterDisplays(): boolean;
    ResetNextHandSlot(): void;
    SetAutoDress(autoDress: boolean): void;
    SetFrontEndLobbyModelFromDefaultCharacterDisplay(
      characterIndex: number
    ): boolean;
    SetItemTransmogInfo(
      transmogInfo: ItemTransmogInfo,
      inventorySlots?: number,
      ignoreChildItems?: boolean
    ): Enum.ItemTryOnReason;
    SetModelByHyperlink(link: string): boolean;
    SetObeyHideInTransmogFlag(obey: boolean): void;
    SetPaused(paused: boolean, affectsGlobalPause?: boolean): void;
    SetPlayerModelFromGlues(
      characterIndex?: number,
      sheatheWeapons?: boolean,
      autoDress?: boolean,
      hideWeapons?: boolean,
      usePlayerNativeForm?: boolean
    ): boolean;
    SetSheathed(sheathed: boolean, hidden?: boolean): void;
    SetUseTransmogChoices(use: boolean): void;
    SetUseTransmogSkin(use: boolean): void;
    TryOn(
      itemLinkOrItemModifiedAppearanceID: string,
      handSlotName?: string,
      spellEnchantmentID?: number
    ): Enum.ItemTryOnReason | undefined;
    Undress(includeWeapons?: boolean): void;
    UndressSlot(inventorySlots: number): void;
  }

  interface FrameAPIModelSceneFrame {
    ClearFog(): void;
    CreateActor(name: string, template: string): void;
    GetActorAtIndex(index: number): void;
    GetCameraFarClip(): number;
    GetCameraFieldOfView(): number;
    GetCameraForward(): LuaMultiReturn<[number, number, number]>;
    GetCameraNearClip(): number;
    GetCameraPosition(): LuaMultiReturn<[number, number, number]>;
    GetCameraRight(): LuaMultiReturn<[number, number, number]>;
    GetCameraUp(): LuaMultiReturn<[number, number, number]>;
    GetDrawLayer(): LuaMultiReturn<[DrawLayer, number]>;
    GetFogColor(): LuaMultiReturn<[number, number, number]>;
    GetFogFar(): number;
    GetFogNear(): number;
    GetLightAmbientColor(): LuaMultiReturn<[number, number, number]>;
    GetLightDiffuseColor(): LuaMultiReturn<[number, number, number]>;
    GetLightDirection(): LuaMultiReturn<[number, number, number]>;
    GetLightPosition(): LuaMultiReturn<[number, number, number]>;
    GetLightType(): Enum.ModelLightType | undefined;
    GetNumActors(): number;
    GetViewInsets(): uiRect;
    GetViewTranslation(): LuaMultiReturn<[number, number]>;
    IsLightVisible(): boolean;
    Project3DPointTo2D(
      pointX: number,
      pointY: number,
      pointZ: number
    ): LuaMultiReturn<[number, number, number]>;
    SetCameraFarClip(farClip: number): void;
    SetCameraFieldOfView(fov: number): void;
    SetCameraNearClip(nearClip: number): void;
    SetCameraOrientationByAxisVectors(
      forwardX: number,
      forwardY: number,
      forwardZ: number,
      rightX: number,
      rightY: number,
      rightZ: number,
      upX: number,
      upY: number,
      upZ: number
    ): void;
    SetCameraOrientationByYawPitchRoll(
      yaw: number,
      pitch: number,
      roll: number
    ): void;
    SetCameraPosition(
      positionX: number,
      positionY: number,
      positionZ: number
    ): void;
    SetDesaturation(strength: number): void;
    SetDrawLayer(layer: DrawLayer): void;
    SetFogColor(colorR: number, colorG: number, colorB: number): void;
    SetFogFar(far: number): void;
    SetFogNear(near: number): void;
    SetLightAmbientColor(colorR: number, colorG: number, colorB: number): void;
    SetLightDiffuseColor(colorR: number, colorG: number, colorB: number): void;
    SetLightDirection(
      directionX: number,
      directionY: number,
      directionZ: number
    ): void;
    SetLightPosition(
      positionX: number,
      positionY: number,
      positionZ: number
    ): void;
    SetLightType(lightType: Enum.ModelLightType): void;
    SetLightVisible(visible?: boolean): void;
    SetPaused(paused: boolean, affectsGlobalPause?: boolean): void;
    SetViewInsets(insets: uiRect): void;
    SetViewTranslation(translationX: number, translationY: number): void;
    TakeActor(): void;
  }

  interface FrameAPIQuestPOI {
    GetNumTooltips(): number;
    GetTooltipIndex(index: number): number;
    UpdateMouseOverTooltip(
      x: number,
      y: number
    ): LuaMultiReturn<[number | undefined, number | undefined]>;
  }

  interface FrameAPIScenarioPOI {
    GetScenarioTooltipText(): string | undefined;
    UpdateMouseOverTooltip(x: number, y: number): boolean;
  }

  interface FrameAPISimpleCheckout {
    CancelOpenCheckout(): void;
    ClearFocus(): void;
    CloseCheckout(): void;
    CopyExternalLink(): void;
    OpenCheckout(checkoutID: number): boolean;
    OpenExternalLink(): void;
    SetFocus(): void;
    SetZoom(zoomLevel: number): void;
  }

  interface FrameAPITabardModelBase {
    CanSaveTabardNow(): boolean;
    CycleVariation(variationIndex: number, delta: number): void;
    GetLowerEmblemTexture(texture: SimpleTexture): void;
    GetUpperEmblemTexture(texture: SimpleTexture): void;
    InitializeTabardColors(): void;
    IsGuildTabard(): boolean;
    Save(): void;
  }

  interface FrameAPITabardModel {
    GetLowerBackgroundFileName(): fileID;
    GetLowerEmblemFile(): fileID;
    GetUpperBackgroundFileName(): fileID;
    GetUpperEmblemFile(): fileID;
  }

  interface FrameAPIUnitPositionFrame {
    AddUnit(
      unitTokenString: string,
      asset: TextureAssetDisk,
      width?: uiUnit,
      height?: uiUnit,
      r?: number,
      g?: number,
      b?: number,
      a?: number,
      sublayer?: number,
      showFacing?: boolean
    ): void;
    ClearUnits(): void;
    FinalizeUnits(): void;
    GetMouseOverUnits(): string;
    GetPlayerPingScale(): number;
    GetUiMapID(): number;
    SetPlayerPingScale(scale: number): void;
    SetPlayerPingTexture(
      textureType: Enum.PingTextureType,
      asset: FileAsset,
      width?: uiUnit,
      height?: uiUnit
    ): void;
    SetUiMapID(mapID: number): void;
    SetUnitColor(
      unit: string,
      colorR: number,
      colorG: number,
      colorB: number,
      colorA: number
    ): void;
    StartPlayerPing(duration?: number, fadeDuration?: number): void;
    StopPlayerPing(): void;
  }

  function CreateWindow(
    this: void,
    popupStyle?: boolean
  ): SimpleWindow | undefined;
  function GetCallstackHeight(this: void): number;
  function GetCurrentEventID(this: void): number | undefined;
  function GetErrorCallstackHeight(this: void): number | undefined;
  function GetEventTime(
    this: void,
    eventProfileIndex: number
  ): LuaMultiReturn<[number, number, string, number]>;
  function RunScript(this: void, text: string): void;
  function SetErrorCallstackHeight(this: void, height?: number): void;

  namespace C_FriendList {
    interface FriendInfo {
      connected: boolean;
      name: string;
      className?: string;
      area?: string;
      notes?: string;
      guid: WOWGUID;
      level: number;
      dnd: boolean;
      afk: boolean;
      rafLinkType: Enum.RafLinkType;
      mobile: boolean;
    }

    interface WhoInfo {
      fullName: string;
      fullGuildName: string;
      level: number;
      raceStr: string;
      classStr: string;
      area: string;
      filename?: string;
      gender: number;
      timerunningSeasonID?: number;
    }

    function AddFriend(this: void, name: string, notes?: string): void;
    function AddIgnore(this: void, name: string): boolean;
    function AddOrDelIgnore(this: void, name: string): void;
    function AddOrRemoveFriend(this: void, name: string, notes: string): void;
    function DelIgnore(this: void, name: string): boolean;
    function DelIgnoreByIndex(this: void, index: number): void;
    function GetFriendInfo(this: void, name: string): FriendInfo;
    function GetFriendInfoByIndex(this: void, index: number): FriendInfo;
    function GetIgnoreName(this: void, index: number): string | undefined;
    function GetNumFriends(this: void): number;
    function GetNumIgnores(this: void): number;
    function GetNumOnlineFriends(this: void): number;
    function GetNumWhoResults(this: void): LuaMultiReturn<[number, number]>;
    function GetSelectedFriend(this: void): number | undefined;
    function GetSelectedIgnore(this: void): number | undefined;
    function GetWhoInfo(this: void, index: number): WhoInfo;
    function IsFriend(this: void, guid: WOWGUID): boolean;
    function IsIgnored(this: void, token: string): boolean;
    function IsIgnoredByGuid(this: void, guid: WOWGUID): boolean;
    function IsOnIgnoredList(this: void, token: string): boolean;
    function RemoveFriend(this: void, name: string): boolean;
    function RemoveFriendByIndex(this: void, index: number): void;
    function SendWho(this: void, filter: string, origin?: number): void;
    function SetFriendNotes(this: void, name: string, notes: string): boolean;
    function SetFriendNotesByIndex(
      this: void,
      index: number,
      notes: string
    ): void;
    function SetSelectedFriend(this: void, index: number): void;
    function SetSelectedIgnore(this: void, index: number): void;
    function SetWhoToUi(this: void, whoToUi: boolean): void;
    function ShowFriends(this: void): void;
    function SortWho(this: void, sorting: string): void;
  }

  function ClearCursor(this: void): void;
  function ClearCursorHoveredItem(this: void): void;
  function CursorHasItem(this: void): boolean;
  function CursorHasMacro(this: void): boolean;
  function CursorHasMoney(this: void): boolean;
  function CursorHasSpell(this: void): boolean;
  function DeleteCursorItem(this: void): void;
  function DropCursorMoney(this: void): void;
  function EquipCursorItem(this: void, slot: number): void;
  function GetCursorInfo(this: void): void;
  function GetCursorMoney(this: void): number;
  function PickupPlayerMoney(this: void, amount: WOWMONEY): void;
  function ResetCursor(this: void): void;
  function SellCursorItem(this: void): void;
  function SetCursor(this: void, name?: string): boolean;
  function SetCursorHoveredItem(this: void, item: ItemLocation): void;
  function SetCursorHoveredItemTradeItem(this: void, enabled: boolean): void;
  function SetCursorVirtualItem(
    this: void,
    itemInfo: ItemInfo,
    cursorType: Enum.UICursorType
  ): void;

  namespace C_GameEnvironmentManager {
    function GetCurrentEventRealmQueues(this: void): Enum.EventRealmQueues;
    function GetCurrentGameEnvironment(this: void): Enum.GameEnvironment;
    function RequestGameEnvironment(
      this: void,
      gameEnvironment: Enum.GameEnvironment
    ): void;
  }

  function GetGameMessageInfo(
    this: void,
    gameErrorIndex: number
  ): LuaMultiReturn<[string, number | undefined, number | undefined]>;
  function NotWhileDeadError(this: void): void;

  namespace C_GameModeManager {
    function GetCurrentGameMode(this: void): GameMode;
  }

  namespace C_GamePad {
    interface GamePadAxisConfig {
      axis: string;
      shift?: number;
      scale?: number;
      deadzone?: number;
      buttonThreshold?: number;
      buttonPos?: string;
      buttonNeg?: string;
      comment?: string;
    }

    interface GamePadConfig {
      comment?: string;
      name?: string;
      configID: GamePadConfigID;
      labelStyle?: string;
      rawButtonMappings: GamePadRawButtonMapping[];
      rawAxisMappings: GamePadRawAxisMapping[];
      axisConfigs: GamePadAxisConfig[];
      stickConfigs: GamePadStickConfig[];
    }

    interface GamePadConfigID {
      vendorID?: number;
      productID?: number;
    }

    interface GamePadMappedState {
      name: string;
      labelStyle: string;
      buttonCount: number;
      axisCount: number;
      stickCount: number;
      buttons: boolean[];
      axes: number[];
      sticks: GamePadStick[];
    }

    interface GamePadRawAxisMapping {
      rawIndex: number;
      axis?: string;
      comment?: string;
    }

    interface GamePadRawButtonMapping {
      rawIndex: number;
      button?: string;
      axis?: string;
      axisValue?: number;
      comment?: string;
    }

    interface GamePadRawState {
      name: string;
      vendorID: number;
      productID: number;
      rawButtonCount: number;
      rawAxisCount: number;
      rawButtons: boolean[];
      rawAxes: number[];
    }

    interface GamePadStick {
      x: number;
      y: number;
      len: number;
    }

    interface GamePadStickConfig {
      stick: string;
      axisX?: string;
      axisY?: string;
      deadzone?: number;
      deadzoneX?: number;
      deadzoneY?: number;
      comment?: string;
    }

    function AddSDLMapping(
      this: void,
      platform: Enum.ClientPlatformType,
      mapping: string
    ): boolean;
    function ApplyConfigs(this: void): void;
    function AxisIndexToConfigName(
      this: void,
      axisIndex: number
    ): string | undefined;
    function ButtonBindingToIndex(
      this: void,
      bindingName: string
    ): number | undefined;
    function ButtonIndexToBinding(
      this: void,
      buttonIndex: number
    ): string | undefined;
    function ButtonIndexToConfigName(
      this: void,
      buttonIndex: number
    ): string | undefined;
    function ClearLedColor(this: void): void;
    function DeleteConfig(this: void, configID: GamePadConfigID): void;
    function GetActiveDeviceID(this: void): number;
    function GetAllConfigIDs(this: void): GamePadConfigID[];
    function GetAllDeviceIDs(this: void): number[];
    function GetCombinedDeviceID(this: void): number;
    function GetConfig(
      this: void,
      configID: GamePadConfigID
    ): GamePadConfig | undefined;
    function GetDeviceMappedState(
      this: void,
      deviceID?: number
    ): GamePadMappedState | undefined;
    function GetDeviceRawState(
      this: void,
      deviceID: number
    ): GamePadRawState | undefined;
    function GetLedColor(this: void): colorRGB;
    function GetPowerLevel(
      this: void,
      deviceID?: number
    ): Enum.GamePadPowerLevel;
    function IsEnabled(this: void): boolean;
    function SetConfig(this: void, config: GamePadConfig): void;
    function SetLedColor(this: void, color: colorRGB): void;
    function SetVibration(
      this: void,
      vibrationType: string,
      intensity: number
    ): void;
    function StickIndexToConfigName(
      this: void,
      stickIndex: number
    ): string | undefined;
    function StopVibration(this: void): void;
  }

  namespace C_GameRules {
    function GetGameRuleAsFloat(
      this: void,
      gameRule: GameRule,
      decimalPlaces?: number
    ): number;
    function IsGameRuleActive(this: void, gameRule: GameRule): boolean;
  }

  function SetInWorldUIVisibility(this: void, visible: boolean): void;
  function SetUIVisibility(this: void, visible: boolean): void;

  namespace C_Garrison {
    interface AutoCombatDamageClassString {
      damageClassValue: number;
      locString: string;
    }

    interface AutoCombatResult {
      winner: boolean;
      combatLog: AutoMissionRound[];
    }

    interface AutoCombatSpellInfo {
      autoCombatSpellID: number;
      name: string;
      description: string;
      cooldown: number;
      duration: number;
      schoolMask: number;
      previewMask: number;
      icon: fileID;
      spellTutorialFlag: number;
      hasThornsEffect: boolean;
    }

    interface AutoCombatTroopInfo {
      name: string;
      followerID: GarrisonFollower;
      garrFollowerID: GarrisonFollower;
      followerTypeID: number;
      displayIDs: FollowerDisplayID[];
      level: number;
      quality: number;
      levelXP: number;
      maxXP: number;
      height: number;
      scale: number;
      displayScale?: number;
      displayHeight?: number;
      classSpec?: number;
      className?: string;
      flavorText?: string;
      classAtlas: textureAtlas;
      portraitIconID: fileID;
      textureKit: textureKit;
      isTroop: boolean;
      raceID: number;
      health: number;
      maxHealth: number;
      role: number;
      isAutoTroop: boolean;
      isSoulbind: boolean;
      isCollected: boolean;
      autoCombatStats: FollowerAutoCombatStatsInfo;
    }

    interface AutoMissionCombatEventInfo {
      boardIndex: number;
      oldHealth: number;
      newHealth: number;
      maxHealth: number;
      points?: number;
    }

    interface AutoMissionEnvironmentEffect {
      name: string;
      autoCombatSpellInfo: AutoCombatSpellInfo;
    }

    interface AutoMissionEvent {
      type: number;
      spellID: number;
      schoolMask: number;
      effectIndex: number;
      casterBoardIndex: number;
      auraType: number;
      targetInfo: AutoMissionCombatEventInfo[];
    }

    interface AutoMissionRound {
      events: AutoMissionEvent[];
    }

    interface AutoMissionTargetingInfo {
      targetIndex: number;
      previewType: number;
      spellID: number;
      effectIndex: number;
    }

    interface FollowerAutoCombatStatsInfo {
      currentHealth: number;
      maxHealth: number;
      attack: number;
      healingTimestamp: time_t;
      healCost: number;
      minutesHealingRemaining: number;
    }

    interface FollowerDisplayID {
      id: number;
      followerPageScale: number;
      showWeapon: boolean;
    }

    interface FollowerMissionCompleteInfo {
      name: string;
      displayIDs: FollowerDisplayID[];
      level: number;
      quality: number;
      currentXP: number;
      maxXP: number;
      height: number;
      scale: number;
      movementType?: number;
      impactDelay?: number;
      castID?: number;
      castSoundID?: number;
      impactID?: number;
      impactSoundID?: number;
      targetImpactID?: number;
      targetImpactSoundID?: number;
      className?: string;
      classAtlas: textureAtlas;
      portraitIconID: fileID;
      textureKit: textureKit;
      isTroop: boolean;
      boardIndex: number;
      health: number;
      maxHealth: number;
      role: number;
    }

    interface GarrisonAbilityCounterInfo {
      id: number;
      icon: fileID;
      name: string;
      factor: number;
      description: string;
    }

    interface GarrisonAbilityInfo {
      id: number;
      name: string;
      description: string;
      icon: fileID;
      isTrait: boolean;
      isSpecialization: boolean;
      temporary: boolean;
      category?: string;
      counters: GarrisonAbilityCounterInfo[];
      isEmptySlot: boolean;
    }

    interface GarrisonEnemyEncounterInfo {
      name: string;
      displayID: fileID;
      portraitFileDataID: fileID;
      textureKit: textureKit;
      scale: number;
      height: number;
      mechanics: GarrisonMechanicInfo[];
      autoCombatSpells: AutoCombatSpellInfo[];
      autoCombatAutoAttack?: AutoCombatSpellInfo;
      role: number;
      health: number;
      maxHealth: number;
      attack: number;
      boardIndex: number;
      isElite: boolean;
    }

    interface GarrisonFollowerDeathInfo {
      followerID: GarrisonFollower;
      state: number;
    }

    interface GarrisonMechanicInfo {
      mechanicTypeID: number;
      icon: fileID;
      name: string;
      factor: number;
      description: string;
      ability?: GarrisonAbilityInfo;
    }

    interface GarrisonPlotInstanceMapInfo {
      buildingPlotInstanceID: number;
      position: vector2;
      name: string;
      atlasName: textureAtlas;
    }

    interface MissionDeploymentInfo {
      location: string;
      xp: number;
      environment?: string;
      environmentDesc?: string;
      environmentTexture: fileID;
      locTextureKit: textureKit;
      isExhausting: boolean;
      enemies: GarrisonEnemyEncounterInfo[];
    }

    interface MissionEncounterIconInfo {
      portraitFileDataID: fileID;
      missionScalar: number;
      isElite: boolean;
      isRare: boolean;
    }

    function AddFollowerToMission(
      this: void,
      missionID: number,
      followerID: GarrisonFollower,
      boardIndex?: number
    ): boolean;
    function GetAutoCombatDamageClassValues(
      this: void
    ): AutoCombatDamageClassString[];
    function GetAutoMissionBoardState(
      this: void,
      missionID: number
    ): AutoMissionTargetingInfo[];
    function GetAutoMissionEnvironmentEffect(
      this: void,
      missionID: number
    ): AutoMissionEnvironmentEffect | undefined;
    function GetAutoMissionTargetingInfo(
      this: void,
      missionID: number,
      followerID: GarrisonFollower,
      casterBoardIndex: number
    ): AutoMissionTargetingInfo[];
    function GetAutoMissionTargetingInfoForSpell(
      this: void,
      missionID: number,
      autoCombatSpellID: number,
      casterBoardIndex: number
    ): AutoMissionTargetingInfo[];
    function GetAutoTroops(
      this: void,
      followerType: number
    ): AutoCombatTroopInfo[];
    function GetCombatLogSpellInfo(
      this: void,
      autoCombatSpellID: number
    ): AutoCombatSpellInfo | undefined;
    function GetCurrentCypherEquipmentLevel(this: void): number;
    function GetCurrentGarrTalentTreeFriendshipFactionID(
      this: void
    ): number | undefined;
    function GetCurrentGarrTalentTreeID(this: void): number | undefined;
    function GetCyphersToNextEquipmentLevel(this: void): number | undefined;
    function GetFollowerAutoCombatSpells(
      this: void,
      garrFollowerID: GarrisonFollower,
      followerLevel: number
    ): LuaMultiReturn<[AutoCombatSpellInfo[], AutoCombatSpellInfo | undefined]>;
    function GetFollowerAutoCombatStats(
      this: void,
      garrFollowerID: GarrisonFollower
    ): FollowerAutoCombatStatsInfo | undefined;
    function GetFollowerMissionCompleteInfo(
      this: void,
      followerID: GarrisonFollower
    ): FollowerMissionCompleteInfo;
    function GetGarrisonPlotsInstancesForMap(
      this: void,
      uiMapID: number
    ): GarrisonPlotInstanceMapInfo[];
    function GetGarrisonTalentTreeCurrencyTypes(
      this: void,
      garrTalentTreeID: number
    ): number | undefined;
    function GetGarrisonTalentTreeType(
      this: void,
      garrTalentTreeID: number
    ): number;
    function GetMaxCypherEquipmentLevel(this: void): number;
    function GetMissionCompleteEncounters(
      this: void,
      missionID: number
    ): GarrisonEnemyEncounterInfo[];
    function GetMissionDeploymentInfo(
      this: void,
      missionID: number
    ): MissionDeploymentInfo;
    function GetMissionEncounterIconInfo(
      this: void,
      missionID: number
    ): MissionEncounterIconInfo;
    function GetTalentInfo(this: void, talentID: number): GarrisonTalentInfo;
    function GetTalentPointsSpentInTalentTree(
      this: void,
      garrTalentTreeID: number
    ): number;
    function GetTalentTreeIDsByClassID(
      this: void,
      garrType: number,
      classID: number
    ): number[];
    function GetTalentTreeInfo(
      this: void,
      treeID: number
    ): GarrisonTalentTreeInfo;
    function GetTalentTreeResetInfo(
      this: void,
      garrTalentTreeID: number
    ): LuaMultiReturn<[number, GarrisonTalentCurrencyCostInfo[]]>;
    function GetTalentTreeTalentPointResearchInfo(
      this: void,
      garrTalentID: number,
      researchRank: number,
      garrTalentTreeID: number,
      talentPointIndex: number,
      isRespec: number
    ): LuaMultiReturn<[number, GarrisonTalentCurrencyCostInfo[], number]>;
    function GetTalentUnlockWorldQuest(this: void, talentID: number): number;
    function HasAdventures(this: void): boolean;
    function IsAtGarrisonMissionNPC(this: void): boolean;
    function IsEnvironmentCountered(this: void, missionID: number): boolean;
    function IsFollowerOnCompletedMission(
      this: void,
      followerID: GarrisonFollower
    ): boolean;
    function IsTalentConditionMet(
      this: void,
      talentID: number
    ): LuaMultiReturn<[boolean, string | undefined]>;
    function RegenerateCombatLog(this: void, missionID: number): boolean;
    function RemoveFollowerFromMission(
      this: void,
      missionID: number,
      followerID: GarrisonFollower,
      boardIndex?: number
    ): void;
    function RushHealAllFollowers(this: void, followerType: number): void;
    function RushHealFollower(
      this: void,
      garrFollowerID: GarrisonFollower
    ): void;
    function SetAutoCombatSpellFastForward(this: void, state: boolean): void;
  }

  interface GarrisonAbilityEffect {
    name: string;
    description: string;
    icon: number;
    factor: number;
  }

  interface GarrisonFollowerAbilityInfo {
    id: number;
    name: string;
    description: string;
    icon: number;
    isTrait: boolean;
    isSpecialization: boolean;
    temporary: boolean;
    category?: string;
    counters: GarrisonAbilityEffect[];
    isEmptySlot: boolean;
  }

  interface GarrisonTalentCurrencyCostInfo {
    currencyType: number;
    currencyQuantity: number;
  }

  interface GarrisonTalentInfo {
    id: number;
    ability: GarrisonFollowerAbilityInfo;
    name: string;
    icon: number;
    tier: number;
    uiOrder: number;
    type: number;
    prerequisiteTalentID?: number;
    selected: boolean;
    researched: boolean;
    ignoreTalent: boolean;
    researchDuration: time_t;
    startTime: time_t;
    timeRemaining: time_t;
    researchGoldCost: number;
    researchCurrencyCosts: GarrisonTalentCurrencyCostInfo[];
    talentAvailability: Enum.GarrisonTalentAvailability;
    talentRank: number;
    talentMaxRank: number;
    isBeingResearched: boolean;
    description: string;
    perkSpellID: number;
    researchDescription?: string;
    playerConditionReason?: string;
    socketInfo: GarrisonTalentSocketInfo;
    treeID: number;
  }

  interface GarrisonTalentSocketInfo {
    socketType: number;
    socketSubtype: number;
    misc0: number;
    misc1: number;
  }

  interface GarrisonTalentTreeInfo {
    treeID: number;
    title: string;
    textureKit: textureKit;
    talents: GarrisonTalentInfo[];
    isClassAgnostic: boolean;
    isThemed: boolean;
    featureType: number;
    featureSubtype: number;
  }

  function IsOnGlueScreen(this: void): boolean;

  namespace C_GlyphInfo {}

  namespace C_GMTicketInfo {}

  namespace C_GossipInfo {
    interface FriendshipReputationInfo {
      friendshipFactionID: number;
      standing: number;
      maxRep: number;
      name?: string;
      text: string;
      texture: number;
      reaction: string;
      reactionThreshold: number;
      nextThreshold?: number;
      reversedColor: boolean;
      overrideColor?: number;
    }

    interface FriendshipReputationRankInfo {
      currentLevel: number;
      maxLevel: number;
    }

    interface GossipOptionRewardInfo {
      id: number;
      quantity: number;
      rewardType: Enum.GossipOptionRewardType;
      context: ItemCreationContext;
    }

    interface GossipOptionUIInfo {
      gossipOptionID?: number;
      name: string;
      icon: fileID;
      rewards: GossipOptionRewardInfo[];
      status: Enum.GossipOptionStatus;
      spellID?: number;
      flags: number;
      overrideIconID?: fileID;
      selectOptionWhenOnlyOption: boolean;
      orderIndex: number;
      failureDescription?: string;
    }

    interface GossipOptionUIWidgetSetAndType {
      widgetType: number;
      uiWidgetSetID: number;
    }

    interface GossipPoiInfo {
      name: string;
      textureIndex: number;
      position: vector2;
      inBattleMap: boolean;
    }

    interface GossipQuestUIInfo {
      title: string;
      questLevel: number;
      isTrivial: boolean;
      frequency?: number;
      repeatable?: boolean;
      isComplete?: boolean;
      isLegendary: boolean;
      isIgnored: boolean;
      questID: number;
      isImportant: boolean;
      isMeta: boolean;
    }

    function CloseGossip(this: void): void;
    function ForceGossip(this: void): boolean;
    function GetActiveDelveGossip(this: void): GossipOptionUIInfo;
    function GetActiveQuests(this: void): GossipQuestUIInfo[];
    function GetAvailableQuests(this: void): GossipQuestUIInfo[];
    function GetCompletedOptionDescriptionString(
      this: void
    ): string | undefined;
    function GetCustomGossipDescriptionString(this: void): string | undefined;
    function GetFriendshipReputation(
      this: void,
      friendshipFactionID: number
    ): FriendshipReputationInfo;
    function GetFriendshipReputationRanks(
      this: void,
      friendshipFactionID: number
    ): FriendshipReputationRankInfo;
    function GetGossipDelveMapID(this: void): number;
    function GetNumActiveQuests(this: void): number;
    function GetNumAvailableQuests(this: void): number;
    function GetOptionUIWidgetSetsAndTypesByOptionID(
      this: void,
      gossipOptionID: number
    ): GossipOptionUIWidgetSetAndType[] | undefined;
    function GetOptions(this: void): GossipOptionUIInfo[];
    function GetPoiForUiMapID(this: void, uiMapID: number): number | undefined;
    function GetPoiInfo(
      this: void,
      uiMapID: number,
      gossipPoiID: number
    ): GossipPoiInfo | undefined;
    function GetText(this: void): string;
    function RefreshOptions(this: void): void;
    function SelectActiveQuest(this: void, optionID: number): void;
    function SelectAvailableQuest(this: void, optionID: number): void;
    function SelectOption(
      this: void,
      optionID: number,
      text?: string,
      confirmed?: boolean
    ): void;
    function SelectOptionByIndex(
      this: void,
      optionID: number,
      text?: string,
      confirmed?: boolean
    ): void;
  }

  namespace C_GuildBank {
    function IsGuildBankEnabled(this: void): boolean;
  }

  namespace C_GuildInfo {
    interface GuildNewsInfo {
      isSticky: boolean;
      isHeader: boolean;
      newsType: number;
      whoText?: string;
      whatText?: string;
      newsDataID: number;
      data: number[];
      weekday: number;
      day: number;
      month: number;
      year: number;
      guildMembersPresent: number;
    }

    function AreGuildEventsEnabled(this: void): boolean;
    function CanEditOfficerNote(this: void): boolean;
    function CanSpeakInGuildChat(this: void): boolean;
    function CanViewOfficerNote(this: void): boolean;
    function Demote(this: void, name: string): void;
    function Disband(this: void): void;
    function GetGuildNewsInfo(this: void, index: number): GuildNewsInfo;
    function GetGuildRankOrder(this: void, guid: WOWGUID): number;
    function GetGuildTabardInfo(
      this: void,
      unit?: UnitToken
    ): GuildTabardInfo | undefined;
    function GuildControlGetRankFlags(this: void, rankOrder: number): boolean[];
    function GuildRoster(this: void): void;
    function Invite(this: void, name: string): void;
    function IsEncounterGuildNewsEnabled(this: void): boolean;
    function IsGuildOfficer(this: void): boolean;
    function IsGuildRankAssignmentAllowed(
      this: void,
      guid: WOWGUID,
      rankOrder: number
    ): boolean;
    function IsGuildReputationEnabled(this: void): boolean;
    function Leave(this: void): void;
    function MemberExistsByName(this: void, name: string): boolean;
    function Promote(this: void, name: string): void;
    function QueryGuildMemberRecipes(
      this: void,
      guildMemberGUID: WOWGUID,
      skillLineID: number
    ): void;
    function QueryGuildMembersForRecipe(
      this: void,
      skillLineID: number,
      recipeSpellID: number,
      recipeLevel?: number
    ): number;
    function RemoveFromGuild(this: void, guid: WOWGUID): void;
    function SetGuildRankOrder(
      this: void,
      guid: WOWGUID,
      rankOrder: number
    ): void;
    function SetLeader(this: void, name: string): void;
    function SetMOTD(this: void, motd: string): void;
    function SetNote(
      this: void,
      guid: WOWGUID,
      note: string,
      isPublic: boolean
    ): void;
    function Uninvite(this: void, name: string): void;
  }

  interface GuildTabardInfo {
    backgroundColor: colorRGB;
    borderColor: colorRGB;
    emblemColor: colorRGB;
    emblemFileID: number;
    emblemStyle: number;
  }

  namespace C_HeirloomInfo {
    function AreAllCollectionFiltersChecked(this: void): boolean;
    function AreAllSourceFiltersChecked(this: void): boolean;
    function IsHeirloomSourceValid(this: void, source: number): boolean;
    function IsUsingDefaultFilters(this: void): boolean;
    function SetAllCollectionFilters(this: void, checked: boolean): void;
    function SetAllSourceFilters(this: void, checked: boolean): void;
    function SetDefaultFilters(this: void): void;
  }

  namespace C_ImmersiveInteraction {
    function HasImmersiveInteraction(this: void): boolean;
  }

  namespace C_IncomingSummon {
    function HasIncomingSummon(this: void, unit: UnitToken): boolean;
    function IncomingSummonStatus(
      this: void,
      unit: UnitToken
    ): Enum.SummonStatus;
  }

  namespace C_Navigation {
    function GetDistance(this: void): number;
    function GetFrame(this: void): ScriptRegion | undefined;
    function GetNearestPartyMemberToken(this: void): string;
    function GetTargetState(this: void): Enum.NavigationState;
    function HasValidScreenPosition(this: void): boolean;
    function WasClampedToScreen(this: void): boolean;
  }

  function GetCursorDelta(this: void): LuaMultiReturn<[number, number]>;
  function GetCursorPosition(this: void): LuaMultiReturn<[number, number]>;
  function GetMouseButtonClicked(this: void): string;
  function GetMouseButtonName(this: void, button: mouseButton): string;
  function GetMouseFoci(this: void): ScriptRegion[];
  function IsAltKeyDown(this: void): boolean;
  function IsControlKeyDown(this: void): boolean;
  function IsKeyDown(
    this: void,
    keyOrMouseName: string,
    excludeBindingState?: boolean
  ): boolean | undefined;
  function IsLeftAltKeyDown(this: void): boolean;
  function IsLeftControlKeyDown(this: void): boolean;
  function IsLeftMetaKeyDown(this: void): boolean;
  function IsLeftShiftKeyDown(this: void): boolean;
  function IsMetaKeyDown(this: void): boolean;
  function IsModifierKeyDown(this: void): boolean;
  function IsMouseButtonDown(this: void, button?: mouseButton): boolean;
  function IsRightAltKeyDown(this: void): boolean;
  function IsRightControlKeyDown(this: void): boolean;
  function IsRightMetaKeyDown(this: void): boolean;
  function IsRightShiftKeyDown(this: void): boolean;
  function IsShiftKeyDown(this: void): boolean;
  function IsUsingGamepad(this: void): boolean;
  function IsUsingMouse(this: void): boolean;

  interface DifficultyInfo {
    name: string;
    instanceType: string;
    isHeroic: boolean;
    isChallengeMode: boolean;
    displayHeroic: boolean;
    displayMythic: boolean;
    toggleDifficultyID?: number;
    isLFR: boolean;
    minPlayers?: number;
    maxPlayers?: number;
  }

  interface DungeonEncounterInfo {
    encounterName: string;
    texture: string;
    isKilled: boolean;
    ineligible: boolean;
  }

  interface InstanceInfo {
    name: string;
    instanceType: string;
    difficultyID: number;
    difficultyName: string;
    maxPlayers: number;
    dynamicDifficulty: number;
    isDynamic?: boolean;
    instanceID: number;
    instanceGroupSize: number;
    lfgDungeonID?: number;
  }

  function CanChangePlayerDifficulty(
    this: void
  ): LuaMultiReturn<[boolean, boolean]>;
  function CanMapChangeDifficulty(this: void, mapID?: number): boolean;
  function CanShowResetInstances(this: void): boolean;
  function GetDifficultyInfo(
    this: void,
    difficultyID: number
  ): LuaMultiReturn<
    [
      string,
      string,
      boolean,
      boolean,
      boolean,
      boolean,
      number | undefined,
      boolean,
      number | undefined,
      number | undefined,
    ]
  >;
  function GetDungeonDifficultyID(this: void): number;
  function GetInstanceBootTimeRemaining(this: void): number;
  function GetInstanceInfo(
    this: void
  ): LuaMultiReturn<
    [
      string,
      string,
      number,
      string,
      number,
      number,
      boolean | undefined,
      number,
      number,
      number | undefined,
    ]
  >;
  function GetInstanceLockTimeRemaining(
    this: void
  ): LuaMultiReturn<[number, boolean, number, number]>;
  function GetInstanceLockTimeRemainingEncounter(
    this: void,
    encounterIndex: number
  ): LuaMultiReturn<[string, string, boolean, boolean]>;
  function GetLegacyRaidDifficultyID(this: void): number | undefined;
  function GetRaidDifficultyID(this: void): number | undefined;
  function IsInInstance(this: void): LuaMultiReturn<[boolean, string]>;
  function IsLegacyDifficulty(
    this: void,
    difficultyID: number
  ): boolean | undefined;
  function ResetInstances(this: void): void;
  function SetDungeonDifficultyID(this: void, difficultyID: number): void;
  function SetLegacyRaidDifficultyID(
    this: void,
    difficultyID: number,
    force?: boolean
  ): void;
  function SetRaidDifficultyID(
    this: void,
    difficultyID: number,
    force?: boolean
  ): void;

  namespace C_InstanceEncounter {}

  namespace C_InterfaceFileManifest {
    function GetInterfaceArtFiles(this: void): string[];
  }

  namespace C_InvasionInfo {
    interface InvasionMapInfo {
      invasionID: number;
      name: string;
      position: vector2;
      atlasName: textureAtlas;
      rewardQuestID?: number;
    }

    function AreInvasionsAvailable(this: void): boolean;
    function GetInvasionForUiMapID(
      this: void,
      uiMapID: number
    ): number | undefined;
    function GetInvasionInfo(this: void, invasionID: number): InvasionMapInfo;
    function GetInvasionTimeLeft(
      this: void,
      invasionID: number
    ): number | undefined;
  }

  namespace C_IslandsInfo {}

  namespace C_IslandsQueue {
    interface IslandsQueueDifficultyInfo {
      difficultyId: number;
      previewRewardQuestId: number;
    }

    function CloseIslandsQueueScreen(this: void): void;
    function GetIslandDifficultyInfo(this: void): IslandsQueueDifficultyInfo[];
    function GetIslandsMaxGroupSize(this: void): number;
    function GetIslandsWeeklyQuestID(this: void): number | undefined;
    function QueueForIsland(this: void, difficultyID: number): void;
    function RequestPreloadRewardData(this: void, questId: number): void;
  }

  namespace C_Item {
    interface ItemInfoResult {
      itemName: string;
      itemLink: string;
      itemQuality: Enum.ItemQuality;
      itemLevel: number;
      itemMinLevel: number;
      itemType: string;
      itemSubType: string;
      itemStackCount: number;
      itemEquipLoc: string;
      itemTexture: fileID;
      sellPrice: number;
      classID: number;
      subclassID: number;
      bindType: number;
      expansionID: number;
      setID?: number;
      isCraftingReagent: boolean;
    }

    function ActionBindsItem(this: void): void;
    function BindEnchant(this: void): void;
    function CanItemTransmogAppearance(
      this: void,
      itemLoc: ItemLocation
    ): LuaMultiReturn<[boolean, number]>;
    function CanScrapItem(this: void, itemLoc: ItemLocation): boolean;
    function CanViewItemPowers(this: void, itemLoc: ItemLocation): boolean;
    function ConfirmBindOnUse(this: void): void;
    function ConfirmNoRefundOnUse(this: void): void;
    function ConfirmOnUse(this: void): void;
    function DoesItemContainSpec(
      this: void,
      itemInfo: ItemInfo,
      classID: number,
      specID?: number
    ): boolean;
    function DoesItemExist(
      this: void,
      emptiableItemLocation: EmptiableItemLocation
    ): boolean;
    function DoesItemExistByID(this: void, itemInfo: ItemInfo): boolean;
    function DoesItemMatchBonusTreeReplacement(
      this: void,
      itemLoc: ItemLocation
    ): boolean;
    function DoesItemMatchTargetEnchantingSpell(
      this: void,
      itemLoc: ItemLocation
    ): boolean;
    function DoesItemMatchTrackJump(this: void, itemLoc: ItemLocation): boolean;
    function DropItemOnUnit(this: void, unitGUID: UnitToken): void;
    function EndBoundTradeable(this: void, type: string): void;
    function EndRefund(this: void, type: number): void;
    function EquipItemByName(
      this: void,
      itemInfo: ItemInfo,
      dstSlot?: number
    ): void;
    function GetAppliedItemTransmogInfo(
      this: void,
      itemLoc: ItemLocation
    ): ItemTransmogInfo | undefined;
    function GetBaseItemTransmogInfo(
      this: void,
      itemLoc: ItemLocation
    ): ItemTransmogInfo | undefined;
    function GetCurrentItemLevel(
      this: void,
      itemLocation: ItemLocation
    ): number | undefined;
    function GetCurrentItemTransmogInfo(
      this: void,
      itemLoc: ItemLocation
    ): ItemTransmogInfo | undefined;
    function GetDelvePreviewItemLink(
      this: void,
      itemID: number,
      context: ItemCreationContext
    ): string | undefined;
    function GetDetailedItemLevelInfo(
      this: void,
      itemInfo: ItemInfo
    ): LuaMultiReturn<[number, boolean, number]>;
    function GetFirstTriggeredSpellForItem(
      this: void,
      itemID: number,
      itemQuality: number
    ): number | undefined;
    function GetItemChildInfo(
      this: void,
      itemInfo: ItemInfo,
      slotID?: number
    ): number[];
    function GetItemClassInfo(this: void, itemClassID: number): string;
    function GetItemConversionOutputIcon(
      this: void,
      itemLoc: ItemLocation
    ): fileID | undefined;
    function GetItemCooldown(
      this: void,
      itemInfo: ItemInfo
    ): LuaMultiReturn<[number, number, boolean]>;
    function GetItemCount(
      this: void,
      itemInfo: ItemInfo,
      includeBank?: boolean,
      includeUses?: boolean,
      includeReagentBank?: boolean,
      includeAccountBank?: boolean
    ): number;
    function GetItemCreationContext(
      this: void,
      itemInfo: ItemInfo
    ): LuaMultiReturn<[number, string]>;
    function GetItemFamily(this: void, itemInfo: ItemInfo): number | undefined;
    function GetItemGUID(this: void, itemLocation: ItemLocation): WOWGUID;
    function GetItemGem(
      this: void,
      hyperlink: string,
      index: number
    ): LuaMultiReturn<[string, string]>;
    function GetItemGemID(
      this: void,
      itemInfo: ItemInfo,
      index: number
    ): number;
    function GetItemID(this: void, itemLocation: ItemLocation): number;
    function GetItemIDByGUID(this: void, itemGUID: WOWGUID): number | undefined;
    function GetItemIDForItemInfo(this: void, itemInfo: ItemInfo): number;
    function GetItemIcon(
      this: void,
      itemLocation: ItemLocation
    ): fileID | undefined;
    function GetItemIconByID(
      this: void,
      itemInfo: ItemInfo
    ): fileID | undefined;
    function GetItemInfo(
      this: void,
      itemInfo: ItemInfo
    ): LuaMultiReturn<
      [
        string,
        string,
        Enum.ItemQuality,
        number,
        number,
        string,
        string,
        number,
        string,
        fileID,
        number,
        number,
        number,
        number,
        number,
        number | undefined,
        boolean,
      ]
    >;
    function GetItemInfoInstant(
      this: void,
      itemInfo: ItemInfo
    ): LuaMultiReturn<[number, string, string, string, fileID, number, number]>;
    function GetItemInventorySlotInfo(
      this: void,
      inventorySlot: Enum.InventoryType
    ): string;
    function GetItemInventorySlotKey(
      this: void,
      inventorySlot: Enum.InventoryType
    ): string;
    function GetItemInventoryType(
      this: void,
      itemLocation: ItemLocation
    ): Enum.InventoryType | undefined;
    function GetItemInventoryTypeByID(
      this: void,
      itemInfo: ItemInfo
    ): Enum.InventoryType | undefined;
    function GetItemLearnTransmogSet(
      this: void,
      itemInfo: ItemInfo
    ): number | undefined;
    function GetItemLink(
      this: void,
      itemLocation: ItemLocation
    ): string | undefined;
    function GetItemLinkByGUID(
      this: void,
      itemGUID: WOWGUID
    ): string | undefined;
    function GetItemLocation(
      this: void,
      itemGUID: WOWGUID
    ): ItemLocation | undefined;
    function GetItemMaxStackSize(
      this: void,
      itemLocation: ItemLocation
    ): number | undefined;
    function GetItemMaxStackSizeByID(
      this: void,
      itemInfo: ItemInfo
    ): number | undefined;
    function GetItemName(
      this: void,
      itemLocation: ItemLocation
    ): string | undefined;
    function GetItemNameByID(
      this: void,
      itemInfo: ItemInfo
    ): string | undefined;
    function GetItemNumAddedSockets(this: void, itemInfo: ItemInfo): number;
    function GetItemNumSockets(this: void, itemInfo: ItemInfo): number;
    function GetItemQuality(
      this: void,
      itemLocation: ItemLocation
    ): Enum.ItemQuality | undefined;
    function GetItemQualityByID(
      this: void,
      itemInfo: ItemInfo
    ): Enum.ItemQuality | undefined;
    function GetItemQualityColor(
      this: void,
      quality: number
    ): LuaMultiReturn<[number, number, number, string]>;
    function GetItemSetInfo(this: void, setID: number): string;
    function GetItemSpecInfo(this: void, itemInfo: ItemInfo): number[];
    function GetItemSpell(
      this: void,
      itemInfo: ItemInfo
    ): LuaMultiReturn<[string, number]>;
    function GetItemStatDelta(
      this: void,
      itemLink1: string,
      itemLink2: string
    ): LuaValueVariant;
    function GetItemStats(this: void, itemLink: string): LuaValueVariant;
    function GetItemSubClassInfo(
      this: void,
      itemClassID: number,
      itemSubClassID: number
    ): LuaMultiReturn<[string, boolean]>;
    function GetItemUniqueness(
      this: void,
      itemInfo: ItemInfo
    ): LuaMultiReturn<[number, number]>;
    function GetItemUniquenessByID(
      this: void,
      itemInfo: ItemInfo
    ): LuaMultiReturn<
      [boolean, string | undefined, number | undefined, number | undefined]
    >;
    function GetLimitedCurrencyItemInfo(
      this: void,
      itemInfo: ItemInfo
    ): LuaMultiReturn<[string, fileID, number, number, number]>;
    function GetSetBonusesForSpecializationByItemID(
      this: void,
      specID: number,
      itemID: number
    ): number[];
    function GetStackCount(this: void, itemLocation: ItemLocation): number;
    function IsAnimaItemByID(this: void, itemInfo: ItemInfo): boolean;
    function IsArtifactPowerItem(this: void, itemInfo: ItemInfo): boolean;
    function IsBound(this: void, itemLocation: ItemLocation): boolean;
    function IsBoundToAccountUntilEquip(
      this: void,
      itemLocation: ItemLocation
    ): boolean;
    function IsConsumableItem(this: void, itemInfo: ItemInfo): boolean;
    function IsCorruptedItem(
      this: void,
      itemInfo: ItemInfo
    ): boolean | undefined;
    function IsCosmeticItem(
      this: void,
      itemInfo: ItemInfo
    ): boolean | undefined;
    function IsCurioItem(this: void, itemInfo: ItemInfo): boolean | undefined;
    function IsCurrentItem(this: void, itemInfo: ItemInfo): boolean;
    function IsDressableItemByID(this: void, itemInfo: ItemInfo): boolean;
    function IsEquippableItem(this: void, itemInfo: ItemInfo): boolean;
    function IsEquippedItem(this: void, itemInfo: ItemInfo): boolean;
    function IsEquippedItemType(this: void, type: string): boolean;
    function IsHarmfulItem(this: void, itemInfo: ItemInfo): boolean;
    function IsHelpfulItem(this: void, itemInfo: ItemInfo): boolean;
    function IsItemConduit(this: void, itemLoc: ItemLocation): boolean;
    function IsItemConvertibleAndValidForPlayer(
      this: void,
      itemLoc: ItemLocation
    ): boolean;
    function IsItemCorrupted(this: void, itemLoc: ItemLocation): boolean;
    function IsItemCorruptionRelated(
      this: void,
      itemLoc: ItemLocation
    ): boolean;
    function IsItemCorruptionResistant(
      this: void,
      itemLoc: ItemLocation
    ): boolean;
    function IsItemDataCached(this: void, itemLocation: ItemLocation): boolean;
    function IsItemDataCachedByID(this: void, itemInfo: ItemInfo): boolean;
    function IsItemGUIDInInventory(this: void, itemGUID: WOWGUID): boolean;
    function IsItemInRange(
      this: void,
      itemInfo: ItemInfo,
      targetToken: string
    ): boolean | undefined;
    function IsItemKeystoneByID(this: void, itemInfo: ItemInfo): boolean;
    function IsItemSpecificToPlayerClass(
      this: void,
      itemInfo: ItemInfo
    ): boolean;
    function IsLocked(this: void, itemLocation: ItemLocation): boolean;
    function IsUsableItem(
      this: void,
      itemInfo: ItemInfo
    ): LuaMultiReturn<[boolean, boolean]>;
    function ItemHasRange(this: void, itemInfo: ItemInfo): boolean;
    function LockItem(this: void, itemLocation: ItemLocation): void;
    function LockItemByGUID(this: void, itemGUID: WOWGUID): void;
    function PickupItem(this: void, itemInfo: ItemInfo): void;
    function ReplaceEnchant(this: void): void;
    function ReplaceTradeEnchant(this: void): void;
    function ReplaceTradeskillEnchant(this: void): void;
    function RequestLoadItemData(this: void, itemLocation: ItemLocation): void;
    function RequestLoadItemDataByID(this: void, itemInfo: ItemInfo): void;
    function UnlockItem(this: void, itemLocation: ItemLocation): void;
    function UnlockItemByGUID(this: void, itemGUID: WOWGUID): void;
    function UseItemByName(
      this: void,
      itemInfo: ItemInfo,
      target?: string
    ): void;
  }

  namespace C_ItemInteraction {
    interface ConversionCurrencyCost {
      currencyID: number;
      amount: number;
    }

    interface ItemInteractionChargeInfo {
      newChargeAmount: number;
      rechargeRate: number;
      timeToNextCharge: number;
    }

    interface ItemInteractionFrameInfo {
      textureKit: textureKit;
      openSoundKitID: number;
      closeSoundKitID: number;
      titleText: string;
      tutorialText: string;
      buttonText: string;
      interactionType: Enum.UIItemInteractionType;
      flags: number;
      description?: string;
      buttonTooltip?: string;
      confirmationDescription?: string;
      slotTooltip?: string;
      cost?: number;
      currencyTypeId?: number;
      dropInSlotSoundKitId?: number;
    }

    function ClearPendingItem(this: void): void;
    function CloseUI(this: void): void;
    function GetChargeInfo(this: void): ItemInteractionChargeInfo;
    function GetItemConversionCurrencyCost(
      this: void,
      item: ItemLocation
    ): ConversionCurrencyCost;
    function GetItemInteractionInfo(
      this: void
    ): ItemInteractionFrameInfo | undefined;
    function GetItemInteractionSpellId(this: void): number;
    function InitializeFrame(this: void): void;
    function PerformItemInteraction(this: void): void;
    function Reset(this: void): void;
    function SetPendingItem(this: void, item?: ItemLocation): boolean;
  }

  namespace C_ItemSocketInfo {
    function CompleteSocketing(this: void): void;
  }

  namespace C_ItemText {}

  namespace C_ItemUpgrade {
    interface ItemUpgradeCostDiscountInfo {
      isDiscounted: boolean;
      discountHighWatermark: number;
      isPartialTwoHandDiscount: boolean;
      isAccountWideDiscount: boolean;
      doesCurrentCharacterMeetHighWatermark: boolean;
    }

    interface ItemUpgradeCurrencyCost {
      cost: number;
      currencyID: number;
      discountInfo: ItemUpgradeCostDiscountInfo;
    }

    interface ItemUpgradeItemCost {
      cost: number;
      itemID: number;
      discountInfo: ItemUpgradeCostDiscountInfo;
    }

    interface ItemUpgradeItemInfo {
      iconID: number;
      name: string;
      itemUpgradeable: boolean;
      displayQuality: number;
      highWatermarkSlot: number;
      currUpgrade: number;
      maxUpgrade: number;
      minItemLevel: number;
      maxItemLevel: number;
      upgradeLevelInfos: ItemUpgradeLevelInfo[];
      customUpgradeString?: string;
      upgradeCostTypesForSeason: ItemUpgradeSeasonalCostType[];
    }

    interface ItemUpgradeLevelInfo {
      upgradeLevel: number;
      displayQuality: number;
      itemLevelIncrement: number;
      levelStats: ItemUpgradeStat[];
      currencyCostsToUpgrade: ItemUpgradeCurrencyCost[];
      itemCostsToUpgrade: ItemUpgradeItemCost[];
      failureMessage?: string;
    }

    interface ItemUpgradeSeasonalCostType {
      itemID?: number;
      currencyID?: number;
      orderIndex: number;
      sourceString?: string;
    }

    interface ItemUpgradeStat {
      displayString: string;
      statValue: number;
      active: boolean;
    }

    function CanUpgradeItem(this: void, baseItem: ItemLocation): boolean;
    function ClearItemUpgrade(this: void): void;
    function CloseItemUpgrade(this: void): void;
    function GetHighWatermarkForItem(
      this: void,
      itemInfo: ItemInfo
    ): LuaMultiReturn<[number, number]>;
    function GetHighWatermarkForSlot(
      this: void,
      itemRedundancySlot: number
    ): LuaMultiReturn<[number, number]>;
    function GetHighWatermarkSlotForItem(
      this: void,
      itemInfo: ItemInfo
    ): number;
    function GetItemHyperlink(this: void): string;
    function GetItemUpgradeCurrentLevel(
      this: void
    ): LuaMultiReturn<[number, boolean]>;
    function GetItemUpgradeEffect(
      this: void,
      effectIndex: number,
      numUpgradeLevels?: number
    ): LuaMultiReturn<[string, string]>;
    function GetItemUpgradeItemInfo(this: void): ItemUpgradeItemInfo;
    function GetItemUpgradePvpItemLevelDeltaValues(
      this: void,
      numUpgradeLevels: number
    ): LuaMultiReturn<[number, number]>;
    function GetNumItemUpgradeEffects(this: void): number;
    function IsItemBound(this: void): boolean;
    function SetItemUpgradeFromCursorItem(this: void): void;
    function SetItemUpgradeFromLocation(
      this: void,
      itemToSet: ItemLocation
    ): void;
    function UpgradeItem(this: void, numUpgrades?: number): void;
  }

  namespace C_KeyBindings {
    function GetBindingIndex(this: void, action: string): number | undefined;
    function GetCustomBindingType(
      this: void,
      bindingIndex: number
    ): Enum.CustomBindingType | undefined;
  }

  namespace C_KnowledgeBase {}

  namespace C_LegendaryCrafting {
    function CloseRuneforgeInteraction(this: void): void;
    function CraftRuneforgeLegendary(
      this: void,
      description: RuneforgeLegendaryCraftDescription
    ): void;
    function GetRuneforgeItemPreviewInfo(
      this: void,
      baseItem: ItemLocation,
      runeforgePowerID?: number,
      modifiers?: number[]
    ): RuneforgeItemPreviewInfo | undefined;
    function GetRuneforgeLegendaryComponentInfo(
      this: void,
      runeforgeLegendary: ItemLocation
    ): RuneforgeLegendaryComponentInfo;
    function GetRuneforgeLegendaryCost(
      this: void,
      baseItem: ItemLocation
    ): CurrencyCost[];
    function GetRuneforgeLegendaryCraftSpellID(this: void): number;
    function GetRuneforgeLegendaryCurrencies(this: void): number[];
    function GetRuneforgeLegendaryUpgradeCost(
      this: void,
      runeforgeLegendary: ItemLocation,
      upgradeItem: ItemLocation
    ): CurrencyCost[];
    function GetRuneforgeModifierInfo(
      this: void,
      baseItem: ItemLocation,
      powerID: number | undefined,
      addedModifierIndex: number,
      modifiers: number[]
    ): LuaMultiReturn<[string, string[]]>;
    function GetRuneforgeModifiers(this: void): number[];
    function GetRuneforgePowerInfo(
      this: void,
      runeforgePowerID: number
    ): RuneforgePower;
    function GetRuneforgePowerSlots(
      this: void,
      runeforgePowerID: number
    ): string[];
    function GetRuneforgePowers(
      this: void,
      baseItem?: ItemLocation,
      filter?: Enum.RuneforgePowerFilter
    ): LuaMultiReturn<[number[], number[]]>;
    function GetRuneforgePowersByClassSpecAndCovenant(
      this: void,
      classID?: number,
      specID?: number,
      covenantID?: number,
      filter?: Enum.RuneforgePowerFilter
    ): number[];
    function IsRuneforgeLegendary(this: void, item: ItemLocation): boolean;
    function IsRuneforgeLegendaryMaxLevel(
      this: void,
      runeforgeLegendary: ItemLocation
    ): boolean;
    function IsUpgradeItemValidForRuneforgeLegendary(
      this: void,
      runeforgeLegendary: ItemLocation,
      upgradeItem: ItemLocation
    ): boolean;
    function IsValidRuneforgeBaseItem(
      this: void,
      baseItem: ItemLocation
    ): boolean;
    function MakeRuneforgeCraftDescription(
      this: void,
      baseItem: ItemLocation,
      runeforgePowerID: number,
      modifiers: number[]
    ): RuneforgeLegendaryCraftDescription;
    function UpgradeRuneforgeLegendary(
      this: void,
      runeforgeLegendary: ItemLocation,
      upgradeItem: ItemLocation
    ): void;
  }

  interface CurrencyCost {
    currencyID: number;
    amount: number;
  }

  interface RuneforgeItemPreviewInfo {
    itemGUID: WOWGUID;
    itemLevel: number;
    itemName: string;
  }

  interface RuneforgeLegendaryComponentInfo {
    powerID: number;
    modifiers: number[];
  }

  interface RuneforgeLegendaryCraftDescription {
    baseItem: ItemLocation;
    runeforgePowerID: number;
    modifiers: number[];
  }

  interface RuneforgePower {
    runeforgePowerID: number;
    state: Enum.RuneforgePowerState;
    name: string;
    descriptionSpellID: number;
    description: string;
    source?: string;
    iconFileID: fileID;
    specName?: string;
    matchesSpec: boolean;
    matchesCovenant: boolean;
    covenantID?: number;
    slots: string[];
  }

  namespace C_LevelLink {
    function IsActionLocked(this: void, actionID: number): boolean;
    function IsSpellLocked(this: void, spellID: number): boolean;
  }

  namespace C_LevelSquish {
    function ConvertFollowerLevel(
      this: void,
      level: number,
      maxFollowerLevel: number
    ): number;
    function ConvertPlayerLevel(this: void, level: number): number;
  }

  namespace C_LFGInfo {
    interface LFGDungeonInfo {
      name: string;
      iconID: fileID;
      link?: string;
    }

    interface LFGLockInfo {
      lfgID: number;
      reason: number;
      hideEntry: boolean;
    }

    function CanPlayerUseGroupFinder(
      this: void
    ): LuaMultiReturn<[boolean, string]>;
    function CanPlayerUseLFD(this: void): LuaMultiReturn<[boolean, string]>;
    function CanPlayerUseLFR(this: void): LuaMultiReturn<[boolean, string]>;
    function CanPlayerUsePVP(this: void): LuaMultiReturn<[boolean, string]>;
    function CanPlayerUsePremadeGroup(
      this: void
    ): LuaMultiReturn<[boolean, string]>;
    function CanPlayerUseScenarioFinder(
      this: void
    ): LuaMultiReturn<[boolean, string]>;
    function ConfirmLfgExpandSearch(this: void): void;
    function GetAllEntriesForCategory(this: void, category: number): number[];
    function GetDungeonInfo(this: void, lfgDungeonID: number): LFGDungeonInfo;
    function GetLFDLockStates(this: void): LFGLockInfo[];
    function GetRoleCheckDifficultyDetails(
      this: void
    ): LuaMultiReturn<[number | undefined, boolean]>;
    function HideNameFromUI(this: void, dungeonID: number): boolean;
    function IsGroupFinderEnabled(this: void): boolean;
    function IsInLFGFollowerDungeon(this: void): boolean;
    function IsLFDEnabled(this: void): boolean;
    function IsLFGFollowerDungeon(this: void, dungeonID: number): boolean;
    function IsLFREnabled(this: void): boolean;
    function IsPremadeGroupEnabled(this: void): boolean;
  }

  namespace C_LFGList {
    interface AdvancedFilterOptions {
      needsTank?: boolean;
      needsHealer?: boolean;
      needsDamage?: boolean;
      needsMyClass?: boolean;
      hasTank?: boolean;
      hasHealer?: boolean;
      activities: number[];
      minimumRating?: number;
      difficultyNormal?: boolean;
      difficultyHeroic?: boolean;
      difficultyMythic?: boolean;
      difficultyMythicPlus?: boolean;
    }

    interface BestDungeonScoreMapInfo {
      mapScore: number;
      mapName: string;
      bestRunLevel: number;
      finishedSuccess: boolean;
      bestRunDurationMs: number;
      bestLevelIncrement: number;
    }

    interface GroupFinderActivityInfo {
      fullName: string;
      shortName: string;
      categoryID: number;
      groupFinderActivityGroupID: number;
      ilvlSuggestion: number;
      filters: number;
      minLevel: number;
      maxNumPlayers: number;
      displayType: Enum.LFGListDisplayType;
      orderIndex: number;
      useHonorLevel: boolean;
      showQuickJoinToast: boolean;
      isMythicPlusActivity: boolean;
      isRatedPvpActivity: boolean;
      isCurrentRaidActivity: boolean;
      isPvpActivity: boolean;
      isMythicActivity: boolean;
      allowCrossFaction: boolean;
      isHeroicActivity: boolean;
      isNormalActivity: boolean;
      useDungeonRoleExpectations: boolean;
    }

    interface LfgApplicantData {
      applicantID: number;
      applicationStatus: string;
      pendingApplicationStatus?: string;
      numMembers: number;
      isNew: boolean;
      comment: kstringLfgListApplicant;
      displayOrderID: number;
    }

    interface LfgCategoryData {
      name: string;
      searchPromptOverride?: string;
      separateRecommended: boolean;
      autoChooseActivity: boolean;
      preferCurrentArea: boolean;
      showPlaystyleDropdown: boolean;
      allowCrossFaction: boolean;
    }

    interface LfgEntryData {
      activityID: number;
      requiredItemLevel: number;
      requiredHonorLevel: number;
      name: kstringLfgListApplicant;
      comment: kstringLfgListApplicant;
      voiceChat: kstringLfgListApplicant;
      duration: time_t;
      autoAccept: boolean;
      privateGroup: boolean;
      questID?: number;
      requiredDungeonScore?: number;
      requiredPvpRating?: number;
      playstyle?: Enum.LFGEntryPlaystyle;
      isCrossFactionListing: boolean;
    }

    interface LfgSearchResultData {
      searchResultID: number;
      activityID: number;
      leaderName?: string;
      name: kstringLfgListSearch;
      comment: kstringLfgListSearch;
      voiceChat: kstringLfgListSearch;
      requiredItemLevel: number;
      requiredHonorLevel: number;
      hasSelf: boolean;
      numMembers: number;
      numBNetFriends: number;
      numCharFriends: number;
      numGuildMates: number;
      isDelisted: boolean;
      autoAccept: boolean;
      isWarMode: boolean;
      age: time_t;
      questID?: number;
      leaderOverallDungeonScore?: number;
      leaderDungeonScoreInfo?: BestDungeonScoreMapInfo;
      leaderBestDungeonScoreInfo?: BestDungeonScoreMapInfo;
      leaderPvpRatingInfo?: PvpRatingInfo;
      requiredDungeonScore?: number;
      requiredPvpRating?: number;
      playstyle?: Enum.LFGEntryPlaystyle;
      crossFactionListing?: boolean;
      leaderFactionGroup: number;
      partyGUID: WOWGUID;
    }

    interface PvpRatingInfo {
      bracket: number;
      rating: number;
      activityName: string;
      tier: number;
    }

    interface WowLocale {
      enUS?: boolean;
      koKR?: boolean;
      frFR?: boolean;
      deDE?: boolean;
      zhCN?: boolean;
      zhTW?: boolean;
      esES?: boolean;
      esMX?: boolean;
      ruRU?: boolean;
      ptBR?: boolean;
      itIT?: boolean;
    }

    function CanActiveEntryUseAutoAccept(this: void): boolean;
    function CanCreateQuestGroup(this: void, questID: number): boolean;
    function CanCreateScenarioGroup(this: void, scenarioID: number): boolean;
    function ClearApplicationTextFields(this: void): void;
    function ClearCreationTextFields(this: void): void;
    function ClearSearchTextFields(this: void): void;
    function CopyActiveEntryInfoToCreationFields(this: void): void;
    function CreateScenarioListing(
      this: void,
      activityID: number,
      itemLevel: number,
      autoAccept: boolean,
      privateGroup: boolean,
      scenarioID: number
    ): boolean;
    function DoesEntryTitleMatchPrebuiltTitle(
      this: void,
      activityID: number,
      groupID: number,
      playstyle?: Enum.LFGEntryPlaystyle
    ): boolean;
    function GetActiveEntryInfo(this: void): LfgEntryData;
    function GetActivityFullName(
      this: void,
      activityID: number,
      questID?: number,
      showWarmode?: boolean
    ): string;
    function GetActivityGroupInfo(
      this: void,
      groupID: number
    ): LuaMultiReturn<[string, number]>;
    function GetActivityInfoTable(
      this: void,
      activityID: number,
      questID?: number,
      showWarmode?: boolean
    ): GroupFinderActivityInfo;
    function GetAdvancedFilter(this: void): AdvancedFilterOptions;
    function GetApplicantBestDungeonScore(
      this: void,
      localID: number,
      applicantIndex: number
    ): BestDungeonScoreMapInfo;
    function GetApplicantDungeonScoreForListing(
      this: void,
      localID: number,
      applicantIndex: number,
      activityID: number
    ): BestDungeonScoreMapInfo;
    function GetApplicantInfo(
      this: void,
      applicantID: number
    ): LfgApplicantData;
    function GetApplicantPvpRatingInfoForListing(
      this: void,
      localID: number,
      applicantIndex: number,
      activityID: number
    ): PvpRatingInfo;
    function GetFilteredSearchResults(
      this: void
    ): LuaMultiReturn<[number, number[]]>;
    function GetKeystoneForActivity(this: void, activityID: number): number;
    function GetLfgCategoryInfo(
      this: void,
      categoryID: number
    ): LfgCategoryData;
    function GetOwnedKeystoneActivityAndGroupAndLevel(
      this: void,
      getTimewalking?: boolean
    ): LuaMultiReturn<[number, number, number]>;
    function GetPlaystyleString(
      this: void,
      playstyle: Enum.LFGEntryPlaystyle,
      activityInfo: GroupFinderActivityInfo
    ): string;
    function GetSearchResultInfo(
      this: void,
      searchResultID: number
    ): LfgSearchResultData;
    function GetSearchResults(this: void): LuaMultiReturn<[number, number[]]>;
    function HasActiveEntryInfo(this: void): boolean;
    function HasSearchResultInfo(this: void, searchResultID: number): boolean;
    function IsPlayerAuthenticatedForLFG(
      this: void,
      activityID?: number
    ): boolean;
    function SaveAdvancedFilter(
      this: void,
      options: AdvancedFilterOptions
    ): void;
    function Search(
      this: void,
      categoryID: number,
      filter?: number,
      preferredFilters?: number,
      languageFilter?: WowLocale,
      searchCrossFactionListings?: boolean,
      advancedFilter?: AdvancedFilterOptions
    ): void;
    function SetEntryTitle(
      this: void,
      activityID: number,
      groupID: number,
      playstyle?: Enum.LFGEntryPlaystyle
    ): void;
    function SetSearchToActivity(this: void, activityID: number): void;
    function SetSearchToQuestID(this: void, questID: number): void;
    function SetSearchToScenarioID(this: void, scenarioID: number): void;
    function ValidateRequiredDungeonScore(
      this: void,
      dungeonScore: number
    ): boolean;
    function ValidateRequiredPvpRatingForActivity(
      this: void,
      activityID: number,
      rating: number
    ): boolean;
  }

  namespace C_LiveEvent {
    function OnLiveEventBannerClicked(
      this: void,
      timerunningSeasonID: number
    ): void;
    function OnLiveEventPopupClicked(
      this: void,
      timerunningSeasonID: number
    ): void;
  }

  namespace C_LoadingScreen {}

  interface LocaleInfo {
    localeId: number;
    localeName: string;
  }

  function GetAvailableLocaleInfo(
    this: void,
    ignoreLocaleRestrictions?: boolean
  ): LocaleInfo[];
  function GetAvailableLocales(
    this: void,
    ignoreLocaleRestrictions?: boolean
  ): string;
  function GetCurrentRegion(this: void): number;
  function GetLocale(this: void): string;
  function GetOSLocale(this: void): string;

  function BreakUpLargeNumbers(
    this: void,
    largeNumber: number,
    natural?: boolean
  ): string;
  function CaseAccentInsensitiveParse(this: void, name: string): string;
  function DeclineName(
    this: void,
    name: string,
    gender: number | undefined,
    declensionSet: number
  ): string;
  function GetNumDeclensionSets(
    this: void,
    name: string,
    gender?: number
  ): number;
  function IsEuropeanNumbers(this: void): boolean;
  function LocalizedClassList(this: void, isFemale?: boolean): LuaValueVariant;
  function SetEuropeanNumbers(this: void, enabled: boolean): void;

  namespace C_Loot {
    function GetLootRollDuration(
      this: void,
      rollID: number
    ): number | undefined;
    function IsLegacyLootModeEnabled(this: void): boolean;
  }

  namespace C_LootHistory {
    interface EncounterLootDropInfo {
      lootListID: number;
      itemHyperlink: string;
      playerRollState: Enum.EncounterLootDropRollState;
      currentLeader?: EncounterLootDropRollInfo;
      isTied?: boolean;
      winner?: EncounterLootDropRollInfo;
      allPassed?: boolean;
      rollInfos: EncounterLootDropRollInfo[];
      startTime: number;
      duration: number;
    }

    interface EncounterLootDropRollInfo {
      playerName: string;
      playerGUID: WOWGUID;
      playerClass: string;
      isSelf: boolean;
      state: Enum.EncounterLootDropRollState;
      isWinner?: boolean;
      roll?: number;
    }

    interface EncounterLootDrops {
      encounterID: number;
      drops: EncounterLootDropInfo[];
    }

    interface EncounterLootInfo {
      encounterName: string;
      encounterID: number;
      startTime: number;
      duration: number;
    }

    function GetAllEncounterInfos(this: void): EncounterLootInfo[];
    function GetInfoForEncounter(
      this: void,
      encounterID: number
    ): EncounterLootInfo | undefined;
    function GetLootHistoryTime(this: void): number;
    function GetSortedDropsForEncounter(
      this: void,
      encounterID: number
    ): EncounterLootDropInfo[] | undefined;
    function GetSortedInfoForDrop(
      this: void,
      encounterID: number,
      lootListID: number
    ): EncounterLootDropInfo | undefined;
  }

  namespace C_LootJournal {
    interface LootJournalItemInfo {
      itemID: number;
      icon: fileID;
      invType: number;
    }

    interface LootJournalItemSetInfo {
      setID: number;
      itemLevel: number;
      name: string;
    }

    function GetItemSetItems(this: void, setID: number): LootJournalItemInfo[];
    function GetItemSets(
      this: void,
      classID?: number,
      specID?: number
    ): LootJournalItemSetInfo[];
  }

  namespace C_LoreText {
    interface LoreTextEntry {
      text: string;
      isHeader: boolean;
    }

    function RequestLoreTextForCampaignID(this: void, campaignID: number): void;
  }

  namespace C_LossOfControl {
    interface LossOfControlData {
      locType: string;
      spellID: number;
      displayText: string;
      iconTexture: number;
      startTime?: number;
      timeRemaining?: number;
      duration?: number;
      lockoutSchool: number;
      priority: number;
      displayType: number;
      auraInstanceID?: number;
    }

    function GetActiveLossOfControlData(
      this: void,
      index: number
    ): LossOfControlData | undefined;
    function GetActiveLossOfControlDataByUnit(
      this: void,
      unitToken: UnitToken,
      index: number
    ): LossOfControlData | undefined;
    function GetActiveLossOfControlDataCount(this: void): number;
    function GetActiveLossOfControlDataCountByUnit(
      this: void,
      unitToken: UnitToken
    ): number;
  }

  namespace C_MacOptions {
    function AreOSShortcutsDisabled(
      this: void
    ): LuaMultiReturn<[boolean | undefined, boolean]>;
    function GetGameBundleName(this: void): string;
    function HasNewStyleInputMonitoring(this: void): boolean;
    function IsInputMonitoringEnabled(this: void): boolean;
    function IsMicrophoneEnabled(this: void): boolean;
    function IsUniversalAccessEnabled(this: void): boolean;
    function OpenInputMonitoring(this: void): void;
    function OpenMicrophoneRequestDialogue(this: void): void;
    function OpenUniversalAccess(this: void): void;
    function SetOSShortcutsDisabled(this: void, disable: boolean): void;
  }

  namespace C_Mail {
    function CanCheckInbox(this: void): LuaMultiReturn<[boolean, number]>;
    function GetCraftingOrderMailInfo(
      this: void,
      inboxIndex: number
    ): CraftingOrderMailInfo | undefined;
    function HasInboxMoney(this: void, inboxIndex: number): boolean;
    function IsCommandPending(this: void): boolean;
    function SetOpeningAll(this: void, openingAll: boolean): void;
  }

  namespace C_MajorFactions {
    interface MajorFactionData {
      name: string;
      factionID: number;
      expansionID: number;
      bountySetID: number;
      isUnlocked: boolean;
      unlockDescription?: string;
      uiPriority: number;
      renownLevel: number;
      renownReputationEarned: number;
      renownLevelThreshold: number;
      textureKit: textureKit;
      celebrationSoundKit: number;
      renownFanfareSoundKitID: number;
    }

    interface MajorFactionRenownInfo {
      renownLevel: number;
      renownReputationEarned: number;
      renownLevelThreshold: number;
    }

    interface MajorFactionRenownLevelInfo {
      factionID: number;
      level: number;
      locked: boolean;
      isMilestone: boolean;
      isCapstone: boolean;
    }

    interface MajorFactionRenownRewardInfo {
      renownRewardID: number;
      uiOrder: number;
      isAccountUnlock: boolean;
      itemID?: number;
      spellID?: number;
      mountID?: number;
      transmogID?: number;
      transmogSetID?: number;
      titleMaskID?: number;
      transmogIllusionSourceID?: number;
      icon?: fileID;
      name?: string;
      description?: string;
      toastDescription?: string;
    }

    function GetCovenantIDForMajorFaction(
      this: void,
      majorFactionID: number
    ): number;
    function GetCurrentRenownLevel(this: void, majorFactionID: number): number;
    function GetMajorFactionData(
      this: void,
      majorFactionID: number
    ): MajorFactionData | undefined;
    function GetMajorFactionIDs(this: void, expansionID?: number): number[];
    function GetMajorFactionRenownInfo(
      this: void,
      majorFactionID: number
    ): MajorFactionRenownInfo | undefined;
    function GetRenownLevels(
      this: void,
      majorFactionID: number
    ): MajorFactionRenownLevelInfo[];
    function GetRenownNPCFactionID(this: void): number;
    function GetRenownRewardsForLevel(
      this: void,
      majorFactionID: number,
      renownLevel: number
    ): MajorFactionRenownRewardInfo[];
    function HasMaximumRenown(this: void, majorFactionID: number): boolean;
    function IsWeeklyRenownCapped(this: void, majorFactionID: number): boolean;
  }

  namespace C_Map {
    interface MapBannerInfo {
      areaPoiID: number;
      name: string;
      atlasName: string;
      uiTextureKit?: textureKit;
    }

    interface MapLinkInfo {
      areaPoiID: number;
      position: vector2;
      name: string;
      atlasName: string;
      linkedUiMapID: number;
    }

    interface UiMapDetails {
      mapID: number;
      name: string;
      mapType: Enum.UIMapType;
      parentMapID: number;
      flags: Enum.UIMapFlag;
    }

    interface UiMapGroupMemberInfo {
      mapID: number;
      relativeHeightIndex: number;
      name: string;
    }

    interface UiMapHighlightInfo {
      fileDataID: fileID;
      atlasID: textureAtlas;
      texturePercentageX: number;
      texturePercentageY: number;
      textureX: number;
      textureY: number;
      scrollChildX: number;
      scrollChildY: number;
    }

    interface UiMapLayerInfo {
      layerWidth: number;
      layerHeight: number;
      tileWidth: number;
      tileHeight: number;
      minScale: number;
      maxScale: number;
      additionalZoomSteps: number;
    }

    function CanSetUserWaypointOnMap(this: void, uiMapID: number): boolean;
    function ClearUserWaypoint(this: void): void;
    function CloseWorldMapInteraction(this: void): void;
    function GetAreaInfo(this: void, areaID: number): string;
    function GetBestMapForUnit(
      this: void,
      unitToken: UnitToken
    ): number | undefined;
    function GetBountySetMaps(this: void, bountySetID: number): number[];
    function GetFallbackWorldMapID(this: void): number;
    function GetMapArtBackgroundAtlas(
      this: void,
      uiMapID: number
    ): textureAtlas;
    function GetMapArtHelpTextPosition(
      this: void,
      uiMapID: number
    ): Enum.MapCanvasPosition;
    function GetMapArtID(this: void, uiMapID: number): number;
    function GetMapArtLayerTextures(
      this: void,
      uiMapID: number,
      layerIndex: number
    ): fileID[];
    function GetMapArtLayers(this: void, uiMapID: number): UiMapLayerInfo[];
    function GetMapArtZoneTextPosition(
      this: void,
      uiMapID: number
    ): Enum.MapCanvasPosition;
    function GetMapBannersForMap(this: void, uiMapID: number): MapBannerInfo[];
    function GetMapChildrenInfo(
      this: void,
      uiMapID: number,
      mapType?: Enum.UIMapType,
      allDescendants?: boolean
    ): UiMapDetails[];
    function GetMapDisplayInfo(this: void, uiMapID: number): boolean;
    function GetMapGroupID(this: void, uiMapID: number): number;
    function GetMapGroupMembersInfo(
      this: void,
      uiMapGroupID: number
    ): UiMapGroupMemberInfo[];
    function GetMapHighlightInfoAtPosition(
      this: void,
      uiMapID: number,
      x: number,
      y: number
    ): LuaMultiReturn<
      [fileID, textureAtlas, number, number, number, number, number, number]
    >;
    function GetMapHighlightPulseInfo(
      this: void,
      uiMapID: number
    ): LuaMultiReturn<
      [fileID, textureAtlas, number, number, number, number, number, number]
    >;
    function GetMapInfo(this: void, uiMapID: number): UiMapDetails;
    function GetMapInfoAtPosition(
      this: void,
      uiMapID: number,
      x: number,
      y: number,
      ignoreZoneMapPositionData?: boolean
    ): UiMapDetails;
    function GetMapLevels(
      this: void,
      uiMapID: number
    ): LuaMultiReturn<[number, number, number, number]>;
    function GetMapLinksForMap(this: void, uiMapID: number): MapLinkInfo[];
    function GetMapPosFromWorldPos(
      this: void,
      continentID: number,
      worldPosition: vector2,
      overrideUiMapID?: number
    ): LuaMultiReturn<[number, vector2]>;
    function GetMapRectOnMap(
      this: void,
      uiMapID: number,
      topUiMapID: number
    ): LuaMultiReturn<[number, number, number, number]>;
    function GetMapWorldSize(
      this: void,
      uiMapID: number
    ): LuaMultiReturn<[number, number]>;
    function GetPlayerMapPosition(
      this: void,
      uiMapID: number,
      unitToken: UnitToken
    ): vector2 | undefined;
    function GetUserWaypoint(this: void): UiMapPoint;
    function GetUserWaypointFromHyperlink(
      this: void,
      hyperlink: string
    ): UiMapPoint;
    function GetUserWaypointHyperlink(this: void): string;
    function GetUserWaypointPositionForMap(
      this: void,
      uiMapID: number
    ): vector2;
    function GetWorldPosFromMapPos(
      this: void,
      uiMapID: number,
      mapPosition: vector2
    ): LuaMultiReturn<[number, vector2]>;
    function HasUserWaypoint(this: void): boolean;
    function IsCityMap(this: void, uiMapID: number): boolean;
    function IsMapValidForNavBarDropdown(this: void, uiMapID: number): boolean;
    function MapHasArt(this: void, uiMapID: number): boolean;
    function RequestPreloadMap(this: void, uiMapID: number): void;
    function SetUserWaypoint(this: void, point: UiMapPoint): void;
  }

  namespace C_MapExplorationInfo {
    interface UiMapExplorationHitRect {
      top: number;
      bottom: number;
      left: number;
      right: number;
    }

    interface UiMapExplorationInfo {
      textureWidth: number;
      textureHeight: number;
      offsetX: number;
      offsetY: number;
      isShownByMouseOver: boolean;
      isDrawOnTopLayer: boolean;
      fileDataIDs: number[];
      hitRect: UiMapExplorationHitRect;
    }

    function GetExploredAreaIDsAtPosition(
      this: void,
      uiMapID: number,
      normalizedPosition: vector2
    ): number[] | undefined;
    function GetExploredMapTextures(
      this: void,
      uiMapID: number
    ): UiMapExplorationInfo[];
  }

  namespace C_MerchantFrame {
    function GetBuybackItemID(this: void, buybackSlotIndex: number): number;
    function GetNumJunkItems(this: void): number;
    function IsMerchantItemRefundable(this: void, index: number): boolean;
    function IsSellAllJunkEnabled(this: void): boolean;
    function SellAllJunkItems(this: void): void;
  }

  namespace C_Minimap {
    interface MinimapScriptTrackingFilter {
      spellID?: number;
      filterID?: Enum.MinimapTrackingFilter;
    }

    interface MinimapScriptTrackingInfo {
      name: string;
      texture: fileID;
      active: boolean;
      type: string;
      subType: number;
      spellID?: number;
    }

    function CanTrackBattlePets(this: void): boolean;
    function ClearAllTracking(this: void): void;
    function GetDefaultTrackingValue(
      this: void,
      filterType: Enum.MinimapTrackingFilter
    ): boolean;
    function GetDrawGroundTextures(this: void): boolean;
    function GetNumQuestPOIWorldEffects(this: void): number;
    function GetNumTrackingTypes(this: void): number;
    function GetObjectIconTextureCoords(
      this: void,
      index?: number
    ): LuaMultiReturn<[number, number, number, number]>;
    function GetPOITextureCoords(
      this: void,
      index?: number
    ): LuaMultiReturn<[number, number, number, number]>;
    function GetTrackingFilter(
      this: void,
      spellIndex: number
    ): MinimapScriptTrackingFilter;
    function GetTrackingInfo(
      this: void,
      spellIndex: number
    ): MinimapScriptTrackingInfo | undefined;
    function GetUiMapID(this: void): number | undefined;
    function GetViewRadius(this: void): number;
    function IsFilteredOut(
      this: void,
      filterType: Enum.MinimapTrackingFilter
    ): boolean;
    function IsRotateMinimapIgnored(this: void): boolean;
    function IsTrackingAccountCompletedQuests(this: void): boolean;
    function IsTrackingBattlePets(this: void): boolean;
    function IsTrackingHiddenQuests(this: void): boolean;
    function SetDrawGroundTextures(this: void, draw: boolean): void;
    function SetIgnoreRotateMinimap(this: void, ignore: boolean): void;
    function SetTracking(this: void, index: number, on: boolean): void;
    function ShouldUseHybridMinimap(this: void): boolean;
  }

  interface MinimapFrame {
    GetPingPosition(): LuaMultiReturn<[number, number]>;
    GetZoom(): number;
    GetZoomLevels(): number;
    PingLocation(locationX: number, locationY: number): void;
    SetArchBlobInsideAlpha(alpha: number): void;
    SetArchBlobInsideTexture(asset: TextureAsset): void;
    SetArchBlobOutsideAlpha(alpha: number): void;
    SetArchBlobOutsideTexture(asset: TextureAsset): void;
    SetArchBlobRingAlpha(alpha: number): void;
    SetArchBlobRingScalar(scalar: number): void;
    SetArchBlobRingTexture(asset: TextureAsset): void;
    SetBlipTexture(asset: TextureAsset): void;
    SetCorpsePOIArrowTexture(asset: TextureAsset): void;
    SetIconTexture(asset: TextureAsset): void;
    SetMaskTexture(asset: TextureAsset): void;
    SetPOIArrowTexture(asset: TextureAsset): void;
    SetPlayerTexture(asset: TextureAsset): void;
    SetQuestBlobInsideAlpha(alpha: number): void;
    SetQuestBlobInsideTexture(asset: TextureAsset): void;
    SetQuestBlobOutsideAlpha(alpha: number): void;
    SetQuestBlobOutsideTexture(asset: TextureAsset): void;
    SetQuestBlobRingAlpha(alpha: number): void;
    SetQuestBlobRingScalar(scalar: number): void;
    SetQuestBlobRingTexture(asset: TextureAsset): void;
    SetStaticPOIArrowTexture(asset: TextureAsset): void;
    SetTaskBlobInsideAlpha(alpha: number): void;
    SetTaskBlobInsideTexture(asset: TextureAsset): void;
    SetTaskBlobOutsideAlpha(alpha: number): void;
    SetTaskBlobOutsideTexture(asset: TextureAsset): void;
    SetTaskBlobRingAlpha(alpha: number): void;
    SetTaskBlobRingScalar(scalar: number): void;
    SetTaskBlobRingTexture(asset: TextureAsset): void;
    SetZoom(zoomFactor: number): void;
    UpdateBlips(): void;
  }

  interface MirrorTimerInfo {
    name: string;
    startValue: number;
    maxValue: number;
    scale: number;
    paused: number;
    label: string;
    spellID: number;
  }

  function GetMirrorTimerInfo(
    this: void,
    timerIndex: number
  ): LuaMultiReturn<[string, number, number, number, number, string, number]>;
  function GetMirrorTimerProgress(
    this: void,
    timerName: string
  ): number | undefined;

  namespace C_MountJournal {
    interface MountCreatureDisplayInfo {
      creatureDisplayID: number;
      isVisible: boolean;
    }

    interface MountInfo {
      name: string;
      spellID: number;
      icon: fileID;
      isActive: boolean;
      isUsable: boolean;
      sourceType: number;
      isFavorite: boolean;
      isFactionSpecific: boolean;
      faction?: number;
      shouldHideOnChar: boolean;
      isCollected: boolean;
      mountID: number;
      isSteadyFlight: boolean;
    }

    interface MountInfoExtra {
      creatureDisplayInfoID?: number;
      description: string;
      source: string;
      isSelfMount: boolean;
      mountTypeID: number;
      uiModelSceneID: number;
      animID: number;
      spellVisualKitID: number;
      disablePlayerMountPreview: boolean;
    }

    function ApplyMountEquipment(
      this: void,
      itemLocation: ItemLocation
    ): boolean;
    function AreMountEquipmentEffectsSuppressed(this: void): boolean;
    function ClearFanfare(this: void, mountID: number): void;
    function ClearRecentFanfares(this: void): void;
    function Dismiss(this: void): void;
    function GetAllCreatureDisplayIDsForMountID(
      this: void,
      mountID: number
    ): number[];
    function GetAppliedMountEquipmentID(this: void): number | undefined;
    function GetCollectedDragonridingMounts(this: void): number[];
    function GetCollectedFilterSetting(
      this: void,
      filterIndex: number
    ): boolean;
    function GetDisplayedMountAllCreatureDisplayInfo(
      this: void,
      mountIndex: number
    ): MountCreatureDisplayInfo[];
    function GetDisplayedMountID(this: void, displayIndex: number): number;
    function GetDisplayedMountInfo(
      this: void,
      displayIndex: number
    ): LuaMultiReturn<
      [
        string,
        number,
        fileID,
        boolean,
        boolean,
        number,
        boolean,
        boolean,
        number | undefined,
        boolean,
        boolean,
        number,
        boolean,
      ]
    >;
    function GetDisplayedMountInfoExtra(
      this: void,
      mountIndex: number
    ): LuaMultiReturn<
      [
        number | undefined,
        string,
        string,
        boolean,
        number,
        number,
        number,
        number,
        boolean,
      ]
    >;
    function GetDynamicFlightModeSpellID(this: void): number;
    function GetIsFavorite(
      this: void,
      mountIndex: number
    ): LuaMultiReturn<[boolean, boolean]>;
    function GetMountAllCreatureDisplayInfoByID(
      this: void,
      mountID: number
    ): MountCreatureDisplayInfo[];
    function GetMountEquipmentUnlockLevel(this: void): number;
    function GetMountFromItem(this: void, itemID: number): number | undefined;
    function GetMountFromSpell(this: void, spellID: number): number | undefined;
    function GetMountIDs(this: void): number[];
    function GetMountInfoByID(
      this: void,
      mountID: number
    ): LuaMultiReturn<
      [
        string,
        number,
        fileID,
        boolean,
        boolean,
        number,
        boolean,
        boolean,
        number | undefined,
        boolean,
        boolean,
        number,
        boolean,
      ]
    >;
    function GetMountInfoExtraByID(
      this: void,
      mountID: number
    ): LuaMultiReturn<
      [
        number | undefined,
        string,
        string,
        boolean,
        number,
        number,
        number,
        number,
        boolean,
      ]
    >;
    function GetMountLink(this: void, spellID: number): string | undefined;
    function GetMountUsabilityByID(
      this: void,
      mountID: number,
      checkIndoors: boolean
    ): LuaMultiReturn<[boolean, string | undefined]>;
    function GetNumDisplayedMounts(this: void): number;
    function GetNumMounts(this: void): number;
    function GetNumMountsNeedingFanfare(this: void): number;
    function IsDragonridingUnlocked(this: void): boolean;
    function IsItemMountEquipment(
      this: void,
      itemLocation: ItemLocation
    ): boolean;
    function IsMountEquipmentApplied(this: void): boolean;
    function IsSourceChecked(this: void, filterIndex: number): boolean;
    function IsTypeChecked(this: void, filterIndex: number): boolean;
    function IsUsingDefaultFilters(this: void): boolean;
    function IsValidSourceFilter(this: void, filterIndex: number): boolean;
    function IsValidTypeFilter(this: void, filterIndex: number): boolean;
    function NeedsFanfare(this: void, mountID: number): boolean;
    function Pickup(this: void, displayIndex: number): void;
    function PickupDynamicFlightMode(this: void): void;
    function SetAllSourceFilters(this: void, isChecked: boolean): void;
    function SetAllTypeFilters(this: void, isChecked: boolean): void;
    function SetCollectedFilterSetting(
      this: void,
      filterIndex: number,
      isChecked: boolean
    ): void;
    function SetDefaultFilters(this: void): void;
    function SetIsFavorite(
      this: void,
      mountIndex: number,
      isFavorite: boolean
    ): void;
    function SetSearch(this: void, searchValue: string): void;
    function SetSourceFilter(
      this: void,
      filterIndex: number,
      isChecked: boolean
    ): void;
    function SetTypeFilter(
      this: void,
      filterIndex: number,
      isChecked: boolean
    ): void;
    function SummonByID(this: void, mountID: number): void;
    function SwapDynamicFlightMode(this: void): void;
  }

  function CancelPreloadingMovie(this: void, movieId: number): void;
  function GetMovieDownloadProgress(
    this: void,
    movieId: number
  ): LuaMultiReturn<[boolean, BigUInteger, BigUInteger]>;
  function IsMovieLocal(this: void, movieId: number): boolean;
  function IsMoviePlayable(this: void, movieId: number): boolean;
  function IsMovieReadable(this: void, movieId: number): boolean;
  function PreloadMovie(this: void, movieId: number): void;

  namespace C_MythicPlus {
    interface MapSeasonBestInfo {
      durationSec: number;
      level: number;
      completionDate: MythicPlusDate;
      affixIDs: number[];
      members: MythicPlusMember[];
      dungeonScore: number;
    }

    interface MythicPlusDate {
      year: number;
      month: number;
      day: number;
      hour: number;
      minute: number;
    }

    interface MythicPlusKeystoneAffix {
      id: number;
      seasonID: number;
    }

    interface MythicPlusMember {
      name?: string;
      specID: number;
      classID: number;
    }

    interface MythicPlusRunInfo {
      mapChallengeModeID: number;
      level: number;
      thisWeek: boolean;
      completed: boolean;
      runScore: number;
    }

    function GetCurrentAffixes(this: void): MythicPlusKeystoneAffix[];
    function GetCurrentSeason(this: void): number;
    function GetCurrentSeasonValues(
      this: void
    ): LuaMultiReturn<[number, number, number]>;
    function GetCurrentUIDisplaySeason(this: void): number | undefined;
    function GetEndOfRunGearSequenceLevel(
      this: void,
      keystoneLevel: number
    ): number | undefined;
    function GetLastWeeklyBestInformation(
      this: void
    ): LuaMultiReturn<[number, number]>;
    function GetOwnedKeystoneChallengeMapID(this: void): number;
    function GetOwnedKeystoneLevel(this: void): number;
    function GetOwnedKeystoneMapID(this: void): number;
    function GetRewardLevelForDifficultyLevel(
      this: void,
      difficultyLevel: number
    ): LuaMultiReturn<[number, number]>;
    function GetRewardLevelFromKeystoneLevel(
      this: void,
      keystoneLevel: number
    ): number | undefined;
    function GetRunHistory(
      this: void,
      includePreviousWeeks?: boolean,
      includeIncompleteRuns?: boolean
    ): MythicPlusRunInfo[];
    function GetSeasonBestAffixScoreInfoForMap(
      this: void,
      mapChallengeModeID: number
    ): LuaMultiReturn<[MythicPlusAffixScoreInfo[], number]>;
    function GetSeasonBestForMap(
      this: void,
      mapChallengeModeID: number
    ): LuaMultiReturn<
      [MapSeasonBestInfo | undefined, MapSeasonBestInfo | undefined]
    >;
    function GetSeasonBestMythicRatingFromThisExpansion(
      this: void
    ): LuaMultiReturn<[number, number]>;
    function GetWeeklyBestForMap(
      this: void,
      mapChallengeModeID: number
    ): LuaMultiReturn<
      [number, number, MythicPlusDate, number[], MythicPlusMember[], number]
    >;
    function GetWeeklyChestRewardLevel(
      this: void
    ): LuaMultiReturn<[number, number, number, number]>;
    function IsMythicPlusActive(this: void): boolean;
    function IsWeeklyRewardAvailable(this: void): boolean;
    function RequestCurrentAffixes(this: void): void;
    function RequestMapInfo(this: void): void;
    function RequestRewards(this: void): void;
  }

  interface MythicPlusAffixScoreInfo {
    name: string;
    score: number;
    level: number;
    durationSec: number;
    overTime: boolean;
  }

  interface MythicPlusRatingLinkInfo {
    mapChallengeModeID: number;
    level: number;
    completedInTime: number;
    dungeonScore: number;
    name: string;
  }

  namespace C_NamePlateManager {}

  namespace C_NewItems {
    function ClearAll(this: void): void;
    function IsNewItem(
      this: void,
      containerIndex: Enum.BagIndex,
      slotIndex: number
    ): boolean;
    function RemoveNewItem(
      this: void,
      containerIndex: Enum.BagIndex,
      slotIndex: number
    ): void;
  }

  function CopyToClipboard(
    this: void,
    text: string,
    removeMarkup?: boolean
  ): number;
  function GetTimePreciseSec(this: void): number;

  namespace C_PaperDollInfo {
    interface InspectGuildInfo {
      achievementPoints: number;
      numMembers: number;
      guildName: string;
      realmName: string;
    }

    interface InspectPVPData {
      rating: number;
      gamesWon: number;
      gamesPlayed: number;
      roundsWon: number;
      roundsPlayed: number;
    }

    function CanAutoEquipCursorItem(this: void): boolean;
    function CanCursorCanGoInSlot(this: void, slotIndex: number): boolean;
    function GetArmorEffectiveness(
      this: void,
      armor: number,
      attackerLevel: number
    ): number;
    function GetArmorEffectivenessAgainstTarget(
      this: void,
      armor: number
    ): number | undefined;
    function GetInspectAzeriteItemEmpoweredChoices(
      this: void,
      unit: UnitToken,
      equipmentSlotIndex: number
    ): number[];
    function GetInspectGuildInfo(
      this: void,
      unitString: string
    ): LuaMultiReturn<[number, number, string, string]>;
    function GetInspectItemLevel(this: void, unit: UnitToken): number;
    function GetInspectRatedBGBlitzData(this: void): InspectPVPData;
    function GetInspectRatedSoloShuffleData(this: void): InspectPVPData;
    function GetMinItemLevel(this: void): number | undefined;
    function GetStaggerPercentage(
      this: void,
      unit: UnitToken
    ): LuaMultiReturn<[number, number | undefined]>;
    function OffhandHasShield(this: void): boolean;
    function OffhandHasWeapon(this: void): boolean;
  }

  function GetSecondsUntilParentalControlsKick(this: void): number | undefined;

  namespace C_PartyInfo {
    function AllowedToDoPartyConversion(this: void, toRaid: boolean): boolean;
    function CanFormCrossFactionParties(this: void): boolean;
    function CanInvite(this: void): boolean;
    function ConfirmConvertToRaid(this: void): void;
    function ConfirmInviteTravelPass(
      this: void,
      targetName: string,
      targetGUID: WOWGUID
    ): void;
    function ConfirmInviteUnit(this: void, targetName: string): void;
    function ConfirmLeaveParty(this: void, category?: number): void;
    function ConfirmRequestInviteFromUnit(
      this: void,
      targetName: string,
      tank?: boolean,
      healer?: boolean,
      dps?: boolean
    ): void;
    function ConvertToParty(this: void): void;
    function ConvertToRaid(this: void): void;
    function DelveTeleportOut(this: void): void;
    function DoCountdown(this: void, seconds: number): boolean;
    function GetActiveCategories(this: void): number[];
    function GetInviteConfirmationInvalidQueues(
      this: void,
      inviteGUID: WOWGUID
    ): QueueSpecificInfo[];
    function GetInviteReferralInfo(
      this: void,
      inviteGUID: WOWGUID
    ): LuaMultiReturn<
      [WOWGUID, string, Enum.PartyRequestJoinRelation, boolean, ClubId]
    >;
    function GetMinItemLevel(
      this: void,
      avgItemLevelCategory: Enum.AvgItemLevelCategories
    ): LuaMultiReturn<[number, string]>;
    function GetMinLevel(this: void, category?: number): number;
    function GetRestrictPings(this: void): Enum.RestrictPingsTo;
    function InviteUnit(this: void, targetName: string): void;
    function IsCrossFactionParty(this: void, category?: number): boolean;
    function IsDelveComplete(this: void): boolean;
    function IsDelveInProgress(this: void): boolean;
    function IsPartyFull(this: void, category?: number): boolean;
    function IsPartyInJailersTower(this: void): boolean;
    function IsPartyWalkIn(this: void): boolean;
    function LeaveParty(this: void, category?: number): void;
    function RequestInviteFromUnit(
      this: void,
      targetName: string,
      tank?: boolean,
      healer?: boolean,
      dps?: boolean
    ): void;
    function SetRestrictPings(
      this: void,
      restrictTo: Enum.RestrictPingsTo
    ): void;
  }

  namespace C_PartyPose {
    interface PartyPoseInfo {
      partyPoseID: number;
      mapID: number;
      widgetSetID?: number;
      victoryModelSceneID: number;
      defeatModelSceneID: number;
      victorySoundKitID: number;
      defeatSoundKitID: number;
      uiTextureKit?: textureKit;
      titleText?: string;
      extraButtonText?: string;
      flags: Enum.PartyPoseFlags;
    }

    function ExtraAction(this: void, partyPoseID: number): void;
    function GetPartyPoseInfoByID(this: void, mapID: number): PartyPoseInfo;
    function GetPartyPoseInfoByMapID(this: void, mapID: number): PartyPoseInfo;
    function HasExtraAction(this: void, partyPoseID: number): boolean;
  }

  function GetAddOnCPUUsage(this: void, name: uiAddon): number;
  function GetAddOnMemoryUsage(this: void, name: uiAddon): number;
  function GetFrameCPUUsage(
    this: void,
    frame: SimpleFrame,
    includeChildren?: boolean
  ): LuaMultiReturn<[number, number]>;
  function ResetCPUUsage(this: void): void;
  function UpdateAddOnCPUUsage(this: void): void;
  function UpdateAddOnMemoryUsage(this: void): void;

  namespace C_PerksActivities {
    interface PerksActivitiesInfo {
      activePerksMonth: number;
      displayMonthName: string;
      secondsRemaining: time_t;
      activities: PerksActivityInfo[];
      thresholds: PerksActivityThresholdInfo[];
    }

    interface PerksActivitiesPending {
      pendingIDs: number[];
    }

    interface PerksActivitiesTracked {
      trackedIDs: number[];
    }

    interface PerksActivityCondition {
      isMet: boolean;
      text: string;
      uiPriority: number;
    }

    interface PerksActivityCriteria {
      criteriaID: number;
      requiredValue: number;
    }

    interface PerksActivityInfo {
      ID: number;
      activityName: string;
      description: string;
      thresholdContributionAmount: number;
      completed: boolean;
      inProgress: boolean;
      tracked: boolean;
      supersedes: number;
      uiPriority: number;
      areAllConditionsMet: boolean;
      conditions: PerksActivityCondition[];
      eventName?: string;
      eventStartTime?: time_t;
      eventEndTime?: time_t;
      requirementsList: PerksActivityRequirement[];
      criteriaList: PerksActivityCriteria[];
      tagNames: string[];
    }

    interface PerksActivityRequirement {
      completed: boolean;
      requirementText: string;
    }

    interface PerksActivityTags {
      tagName: string[];
    }

    interface PerksActivityThresholdInfo {
      thresholdOrderIndex: number;
      currencyAwardAmount: number;
      requiredContributionAmount: number;
      pendingReward: boolean;
      itemReward?: number;
    }

    function AddTrackedPerksActivity(this: void, perksActivityID: number): void;
    function ClearPerksActivitiesPendingCompletion(this: void): void;
    function GetAllPerksActivityTags(this: void): PerksActivityTags;
    function GetPerksActivitiesInfo(this: void): PerksActivitiesInfo;
    function GetPerksActivitiesPendingCompletion(
      this: void
    ): PerksActivitiesPending;
    function GetPerksActivityChatLink(
      this: void,
      perksActivityID: number
    ): string;
    function GetPerksActivityInfo(
      this: void,
      perksActivityID: number
    ): PerksActivityInfo | undefined;
    function GetPerksUIThemePrefix(this: void): string;
    function GetTrackedPerksActivities(this: void): PerksActivitiesTracked;
    function RemoveTrackedPerksActivity(
      this: void,
      perksActivityID: number
    ): void;
  }

  namespace C_PerksProgram {
    interface ModelSceneActorData {
      actorID?: number;
      scriptTag?: string;
      posX?: number;
      posY?: number;
      posZ?: number;
      yaw?: number;
      pitch?: number;
      roll?: number;
      normalizedScale?: number;
    }

    interface ModelSceneCameraData {
      cameraID?: number;
      scriptTag?: string;
      targetX?: number;
      targetY?: number;
      targetZ?: number;
      yaw?: number;
      pitch?: number;
      roll?: number;
      defaultZoom?: number;
      zoomMin?: number;
      zoomMax?: number;
    }

    interface PerksProgramItemDisplayInfo {
      overrideModelSceneID?: number;
      creatureDisplayInfoID?: number;
      mainHandItemModifiedAppearanceID?: number;
      offHandItemModifiedAppearanceID?: number;
    }

    interface PerksProgramPendingChestRewards {
      rewardTypeID: number;
      perksVendorItemID?: number;
      rewardAmount: number;
      monthRewarded?: string;
      activityMonthID: number;
      thresholdOrderIndex: number;
    }

    interface PerksVendorCategoryInfo {
      ID: number;
      displayName: string;
      defaultUIModelSceneID: number;
    }

    interface PerksVendorItemInfo {
      name: string;
      perksVendorCategoryID: number;
      description: string;
      timeRemaining: time_t;
      purchased: boolean;
      refundable: boolean;
      subItemsLoaded: boolean;
      isPurchasePending: boolean;
      doesNotExpire: boolean;
      price: number;
      perksVendorItemID: number;
      itemID: number;
      iconTexture: string;
      mountID: number;
      mountTypeName: string;
      speciesID: number;
      transmogSetID: number;
      itemModifiedAppearanceID: number;
      subItems: PerksVendorSubItemInfo[];
      uiGroupInfo?: PerksVendorItemUIGroupInfo;
    }

    interface PerksVendorItemUIGroupInfo {
      ID: number;
      name: string;
      priority: number;
    }

    interface PerksVendorSubItemInfo {
      name: string;
      itemID: number;
      itemAppearanceID: number;
      invType: string;
      quality: Enum.ItemQuality;
    }

    function ClearFrozenPerksVendorItem(this: void): void;
    function CloseInteraction(this: void): void;
    function GetAvailableCategoryIDs(this: void): number[];
    function GetAvailableVendorItemIDs(this: void): number[];
    function GetCategoryInfo(
      this: void,
      categoryID: number
    ): PerksVendorCategoryInfo;
    function GetCurrencyAmount(this: void): number;
    function GetDraggedPerksVendorItem(this: void): number;
    function GetFrozenPerksVendorItemInfo(this: void): PerksVendorItemInfo;
    function GetPendingChestRewards(
      this: void
    ): PerksProgramPendingChestRewards[];
    function GetPerksProgramItemDisplayInfo(
      this: void,
      id: number
    ): PerksProgramItemDisplayInfo;
    function GetTimeRemaining(this: void, vendorItemID: number): time_t;
    function GetVendorItemInfo(
      this: void,
      vendorItemID: number
    ): PerksVendorItemInfo;
    function GetVendorItemInfoRefundTimeLeft(
      this: void,
      vendorItemID: number
    ): time_t;
    function IsAttackAnimToggleEnabled(this: void): boolean;
    function IsFrozenPerksVendorItem(
      this: void,
      perksVendorItemID: number
    ): boolean;
    function IsMountSpecialAnimToggleEnabled(this: void): boolean;
    function ItemSelectedTelemetry(this: void, perksVendorItemID: number): void;
    function PickupPerksVendorItem(this: void, perksVendorItemID: number): void;
    function RequestPendingChestRewards(this: void): void;
    function RequestPurchase(this: void, perksVendorItemID: number): void;
    function RequestRefund(this: void, perksVendorItemID: number): void;
    function ResetHeldItemDragAndDrop(this: void): void;
    function SetFrozenPerksVendorItem(this: void): void;
  }

  namespace C_PetBattles {
    function GetBreedQuality(
      this: void,
      petOwner: Enum.BattlePetOwner,
      slot: number
    ): Enum.BattlePetBreedQuality;
    function GetIcon(
      this: void,
      petOwner: Enum.BattlePetOwner,
      slot: number
    ): fileID;
    function GetName(
      this: void,
      petOwner: Enum.BattlePetOwner,
      slot: number
    ): LuaMultiReturn<[string, string]>;
    function IsPlayerNPC(this: void): boolean;
    function IsWildBattle(this: void): boolean;
  }

  namespace C_PetInfo {
    interface PetTamerMapInfo {
      areaPoiID: number;
      position: vector2;
      name: string;
      atlasName?: string;
      textureIndex?: number;
    }

    function GetPetTamersForMap(this: void, uiMapID: number): PetTamerMapInfo[];
    function GetSpellForPetAction(
      this: void,
      actionID: number
    ): number | undefined;
    function IsPetActionPassive(this: void, actionID: number): boolean;
    function PetAbandon(this: void, petNumber?: number): void;
    function PetRename(
      this: void,
      name: string,
      petNumber?: number,
      declensions?: string[]
    ): void;
  }

  namespace C_PetJournal {
    interface PetAbilityLevelInfo {
      abilityID: number;
      level: number;
    }

    interface PetJournalPetInfo {
      speciesID: number;
      customName?: string;
      petLevel: number;
      xp: number;
      maxXP: number;
      displayID: number;
      isFavorite: boolean;
      icon: fileID;
      petType: number;
      creatureID: number;
      name?: string;
      sourceText: string;
      description: string;
      isWild: boolean;
      canBattle: boolean;
      tradable: boolean;
      unique: boolean;
      obtainable: boolean;
    }

    function ClearHoveredBattlePet(this: void): void;
    function GetDisplayIDByIndex(
      this: void,
      speciesID: number,
      index: number
    ): number | undefined;
    function GetDisplayProbabilityByIndex(
      this: void,
      speciesID: number,
      index: number
    ): number | undefined;
    function GetNumDisplays(this: void, speciesID: number): number | undefined;
    function GetNumPetsInJournal(
      this: void,
      creatureID: number
    ): LuaMultiReturn<[number, number]>;
    function GetPetAbilityInfo(
      this: void,
      abilityID: number
    ): LuaMultiReturn<[string, fileID, number]>;
    function GetPetAbilityListTable(
      this: void,
      speciesID: number
    ): PetAbilityLevelInfo[];
    function GetPetInfoTableByPetID(
      this: void,
      petID: WOWGUID
    ): PetJournalPetInfo;
    function GetPetLoadOutInfo(
      this: void,
      slot: number
    ): LuaMultiReturn<[WOWGUID | undefined, number, number, number, boolean]>;
    function GetPetSummonInfo(
      this: void,
      battlePetGUID: WOWGUID
    ): LuaMultiReturn<[boolean, Enum.PetJournalError, string]>;
    function HasFavoritePets(this: void): boolean;
    function IsUsingDefaultFilters(this: void): boolean;
    function PetIsSummonable(this: void, battlePetGUID: WOWGUID): boolean;
    function PetUsesRandomDisplay(
      this: void,
      speciesID: number
    ): boolean | undefined;
    function SetDefaultFilters(this: void): void;
    function SetHoveredBattlePet(this: void, battlePetGUID: WOWGUID): void;
    function SpellTargetBattlePet(this: void, battlePetGUID: WOWGUID): void;
  }

  interface ContextualWorldPingResult {
    contextualPingType?: Enum.PingSubjectType;
    result: Enum.PingResult;
  }

  interface PingCooldownInfo {
    startTimeMs: number;
    endTimeMs: number;
  }

  interface PingTypeInfo {
    orderIndex: number;
    type: Enum.PingSubjectType;
    uiTextureKitID: textureKit;
  }

  namespace C_Ping {
    function GetContextualPingTypeForUnit(
      this: void,
      targetUnit?: WOWGUID
    ): Enum.PingSubjectType;
    function GetCooldownInfo(this: void): PingCooldownInfo;
    function GetDefaultPingOptions(this: void): PingTypeInfo[];
    function GetTextureKitForType(
      this: void,
      type: Enum.PingSubjectType
    ): textureKit;
    function SendMacroPing(
      this: void,
      type?: Enum.PingSubjectType,
      targetToken?: string
    ): void;
    function TogglePingListener(this: void, down: boolean): void;
  }

  namespace C_PingSecure {
    type PendingPingOffScreenCallback = (this: void) => void;
    type PingCooldownStartedCallback = (
      this: void,
      info: PingCooldownInfo
    ) => void;
    type PingPinFrameAddedCallback = (
      this: void,
      region: ScriptRegion,
      uiTextureKit: textureKit,
      isWorldPoint: boolean
    ) => void;
    type PingPinFrameRemovedCallback = (
      this: void,
      region: ScriptRegion
    ) => void;
    type PingPinFrameScreenClampStateUpdatedCallback = (
      this: void,
      region: ScriptRegion,
      state: boolean
    ) => void;
    type PingRadialWheelCreatedCallback = (
      this: void,
      region: ScriptRegion
    ) => void;
    type SendMacroPingCallback = (
      this: void,
      type?: Enum.PingSubjectType,
      targetToken?: string
    ) => void;
    type TogglePingListenerCallback = (this: void, down: boolean) => void;

    function ClearPendingPingInfo(this: void): void;
    function CreateFrame(this: void): void;
    function DisplayError(this: void, error: string): void;
    function GetTargetPingReceiver(
      this: void,
      mousePosX: number,
      mousePosY: number
    ): ScriptRegion;
    function GetTargetWorldPing(
      this: void,
      mousePosX: number,
      mousePosY: number
    ): boolean;
    function GetTargetWorldPingAndSend(this: void): ContextualWorldPingResult;
    function SendPing(
      this: void,
      type: Enum.PingSubjectType,
      target?: WOWGUID
    ): Enum.PingResult;
    function SetPendingPingOffScreenCallback(
      this: void,
      cb: PendingPingOffScreenCallback
    ): void;
    function SetPingCooldownStartedCallback(
      this: void,
      cb: PingCooldownStartedCallback
    ): void;
    function SetPingPinFrameAddedCallback(
      this: void,
      cb: PingPinFrameAddedCallback
    ): void;
    function SetPingPinFrameRemovedCallback(
      this: void,
      cb: PingPinFrameRemovedCallback
    ): void;
    function SetPingPinFrameScreenClampStateUpdatedCallback(
      this: void,
      cb: PingPinFrameScreenClampStateUpdatedCallback
    ): void;
    function SetPingRadialWheelCreatedCallback(
      this: void,
      cb: PingRadialWheelCreatedCallback
    ): void;
    function SetSendMacroPingCallback(
      this: void,
      cb: SendMacroPingCallback
    ): void;
    function SetTogglePingListenerCallback(
      this: void,
      cb: TogglePingListenerCallback
    ): void;
  }

  interface PingPinFrame {}

  namespace C_Platform {}

  namespace C_PlayerChoice {
    interface PlayerChoiceInfo {
      objectGUID: WOWGUID;
      choiceID: number;
      questionText: string;
      pendingChoiceText: string;
      uiTextureKit: textureKit;
      hideWarboardHeader: boolean;
      keepOpenAfterChoice: boolean;
      options: PlayerChoiceOptionInfo[];
      soundKitID?: number;
      closeUISoundKitID?: number;
    }

    interface PlayerChoiceOptionButtonInfo {
      id: number;
      text: string;
      disabled: boolean;
      confirmation?: string;
      tooltip?: string;
      rewardQuestID?: number;
      soundKitID?: number;
    }

    interface PlayerChoiceOptionInfo {
      id: number;
      description: string;
      header: string;
      choiceArtID: number;
      desaturatedArt: boolean;
      disabledOption: boolean;
      hasRewards: boolean;
      rewardInfo: PlayerChoiceOptionRewardInfo;
      uiTextureKit: textureKit;
      maxStacks: number;
      buttons: PlayerChoiceOptionButtonInfo[];
      widgetSetID?: number;
      spellID?: number;
      rarity?: Enum.PlayerChoiceRarity;
      rarityColor?: colorRGBA;
      typeArtID?: number;
      headerIconAtlasElement?: string;
      subHeader?: string;
      consolidateWidgets: boolean;
    }

    interface PlayerChoiceOptionRewardInfo {
      currencyRewards: PlayerChoiceRewardCurrencyInfo[];
      itemRewards: PlayerChoiceRewardItemInfo[];
      repRewards: PlayerChoiceRewardReputationInfo[];
    }

    interface PlayerChoiceRewardCurrencyInfo {
      currencyId: number;
      name: string;
      currencyTexture: number;
      quantity: number;
      isCurrencyContainer: boolean;
    }

    interface PlayerChoiceRewardItemInfo {
      itemId: number;
      name: string;
      quantity: number;
    }

    interface PlayerChoiceRewardReputationInfo {
      factionId: number;
      quantity: number;
    }

    function GetCurrentPlayerChoiceInfo(this: void): PlayerChoiceInfo;
    function GetNumRerolls(this: void): number;
    function GetRemainingTime(this: void): number | undefined;
    function IsWaitingForPlayerChoiceResponse(this: void): boolean;
    function OnUIClosed(this: void): void;
    function RequestRerollPlayerChoice(this: void): void;
    function SendPlayerChoiceResponse(this: void, responseID: number): void;
  }

  namespace C_PlayerInfo {
    interface MythicPlusRatingMapSummary {
      challengeModeID: number;
      mapScore: number;
      bestRunLevel: number;
      bestRunDurationMS: number;
      finishedSuccess: boolean;
    }

    interface MythicPlusRatingSummary {
      currentSeasonScore: number;
      runs: MythicPlusRatingMapSummary[];
    }

    function CanPlayerEnterChromieTime(this: void): boolean;
    function CanPlayerUseAreaLoot(this: void): boolean;
    function CanPlayerUseMountEquipment(
      this: void
    ): LuaMultiReturn<[boolean, string]>;
    function CanUseItem(this: void, itemID: number): boolean;
    function GetAlternateFormInfo(
      this: void
    ): LuaMultiReturn<[boolean, boolean]>;
    function GetContentDifficultyCreatureForPlayer(
      this: void,
      unitToken: UnitToken
    ): Enum.RelativeContentDifficulty;
    function GetContentDifficultyQuestForPlayer(
      this: void,
      questID: number
    ): Enum.RelativeContentDifficulty;
    function GetDisplayID(this: void): number;
    function GetGlidingInfo(
      this: void
    ): LuaMultiReturn<[boolean, boolean, number]>;
    function GetInstancesUnlockedAtLevel(
      this: void,
      level: number,
      isRaid: boolean
    ): number[];
    function GetNativeDisplayID(this: void): number;
    function GetPetStableCreatureDisplayInfoID(
      this: void,
      index: number
    ): number;
    function GetPlayerCharacterData(this: void): PlayerInfoCharacterData;
    function GetPlayerMythicPlusRatingSummary(
      this: void,
      playerToken: UnitToken
    ): MythicPlusRatingSummary;
    function HasAccountInventoryLock(this: void): boolean;
    function HasVisibleInvSlot(this: void, slot: number): boolean;
    function IsDisplayRaceNative(this: void): boolean;
    function IsExpansionLandingPageUnlockedForPlayer(
      this: void,
      expansionID: number
    ): boolean;
    function IsMirrorImage(this: void): boolean;
    function IsPlayerEligibleForNPE(
      this: void
    ): LuaMultiReturn<[boolean, string]>;
    function IsPlayerEligibleForNPEv2(
      this: void
    ): LuaMultiReturn<[boolean, string]>;
    function IsPlayerInChromieTime(this: void): boolean;
    function IsPlayerNPERestricted(this: void): boolean;
    function IsSelfFoundActive(this: void): boolean;
    function IsTradingPostAvailable(this: void): boolean;
    function IsTravelersLogAvailable(this: void): boolean;
  }

  interface CharacterAlternateFormData {
    raceID: number;
    name: string;
    fileName: string;
    createScreenIconAtlas: textureAtlas;
  }

  interface PlayerInfoCharacterData {
    name: string;
    fileName: string;
    alternateFormRaceData?: CharacterAlternateFormData;
    createScreenIconAtlas: textureAtlas;
    sex: Enum.UnitSex;
  }

  namespace C_PlayerInteractionManager {
    function ClearInteraction(
      this: void,
      type?: Enum.PlayerInteractionType
    ): void;
    function ConfirmationInteraction(
      this: void,
      type?: Enum.PlayerInteractionType
    ): void;
    function InteractUnit(
      this: void,
      unit: string,
      exactMatch?: boolean,
      looseTargeting?: boolean
    ): boolean;
    function IsInteractingWithNpcOfType(
      this: void,
      type: Enum.PlayerInteractionType
    ): boolean;
    function IsReplacingUnit(this: void): boolean;
    function IsValidNPCInteraction(
      this: void,
      type: Enum.PlayerInteractionType
    ): boolean;
    function ReopenInteraction(this: void): void;
  }

  namespace C_PlayerInfo {
    function GUIDIsPlayer(this: void, guid: WOWGUID): boolean;
    function GetClass(
      this: void,
      playerLocation: PlayerLocation
    ): LuaMultiReturn<
      [string | undefined, string | undefined, number | undefined]
    >;
    function GetName(
      this: void,
      playerLocation: PlayerLocation
    ): string | undefined;
    function GetRace(
      this: void,
      playerLocation: PlayerLocation
    ): number | undefined;
    function GetSex(
      this: void,
      playerLocation: PlayerLocation
    ): number | undefined;
    function IsConnected(
      this: void,
      playerLocation?: PlayerLocation
    ): boolean | undefined;
    function UnitIsSameServer(
      this: void,
      playerLocation: PlayerLocation
    ): boolean;
  }

  namespace C_PlayerMentorship {
    function GetMentorLevelRequirement(this: void): number | undefined;
    function GetMentorRequirements(
      this: void
    ): LuaMultiReturn<[number[], number[], number]>;
    function GetMentorshipStatus(
      this: void,
      playerLocation: PlayerLocation
    ): Enum.PlayerMentorshipStatus;
    function IsActivePlayerConsideredNewcomer(this: void): boolean;
    function IsMentorRestricted(this: void): boolean;
  }

  function AcceptAreaSpiritHeal(this: void): void;
  function AcceptGuild(this: void): void;
  function AcceptResurrect(this: void): void;
  function Ambiguate(this: void, fullName: string, context: string): string;
  function AreAccountAchievementsHidden(this: void): boolean;
  function AutoEquipCursorItem(this: void): void;
  function BeginTrade(this: void): void;
  function CanDualWield(this: void): boolean;
  function CanInspect(this: void, targetGUID: UnitToken): boolean;
  function CanLootUnit(
    this: void,
    targetUnit: WOWGUID
  ): LuaMultiReturn<[boolean, boolean]>;
  function CancelAreaSpiritHeal(this: void): void;
  function CancelPendingEquip(this: void, index: number): void;
  function CancelTrade(this: void): void;
  function CheckInteractDistance(
    this: void,
    unitGUID: UnitToken,
    distIndex: number
  ): boolean;
  function CheckTalentMasterDist(this: void): boolean;
  function ClearPendingBindConversionItem(this: void): void;
  function ConfirmTalentWipe(this: void): void;
  function ConvertItemToBindToAccount(this: void): void;
  function DeclineGuild(this: void): void;
  function DeclineResurrect(this: void): void;
  function Dismount(this: void): void;
  function EquipPendingItem(this: void, index: number): void;
  function FollowUnit(this: void, name?: string, exactMatch?: boolean): void;
  function GetAllowLowLevelRaid(this: void): boolean;
  function GetAreaSpiritHealerTime(this: void): number;
  function GetAttackPowerForStat(
    this: void,
    stat: number,
    value: number
  ): number;
  function GetAutoDeclineGuildInvites(this: void): boolean;
  function GetAvoidance(this: void): number;
  function GetBindLocation(this: void): string;
  function GetBlockChance(this: void): number;
  function GetCemeteryPreference(this: void): number;
  function GetCombatRating(this: void, ratingIndex: number): number | undefined;
  function GetCombatRatingBonus(
    this: void,
    ratingIndex: number
  ): number | undefined;
  function GetCombatRatingBonusForCombatRatingValue(
    this: void,
    ratingIndex: number,
    value: number
  ): number | undefined;
  function GetCorpseRecoveryDelay(this: void): number;
  function GetCorruption(this: void): number;
  function GetCorruptionResistance(this: void): number;
  function GetCritChance(this: void): number;
  function GetCritChanceProvidesParryEffect(this: void): boolean;
  function GetDodgeChance(this: void): number;
  function GetDodgeChanceFromAttribute(this: void): number;
  function GetExpertise(this: void): LuaMultiReturn<[number, number, number]>;
  function GetHaste(this: void): number;
  function GetHitModifier(this: void): number;
  function GetJailersTowerLevel(this: void): number;
  function GetLifesteal(this: void): number;
  function GetLootSpecialization(this: void): number;
  function GetManaRegen(this: void): LuaMultiReturn<[number, number]>;
  function GetMastery(this: void): number;
  function GetMasteryEffect(this: void): LuaMultiReturn<[number, number]>;
  function GetMaxCombatRatingBonus(
    this: void,
    ratingIndex: number
  ): number | undefined;
  function GetMaxPlayerLevel(this: void): number;
  function GetMeleeHaste(this: void): number;
  function GetModResilienceDamageReduction(this: void): number;
  function GetMoney(this: void): number;
  function GetNormalizedRealmName(this: void): string;
  function GetOverrideAPBySpellPower(this: void): number;
  function GetOverrideSpellPowerByAP(this: void): number;
  function GetPVPDesired(this: void): boolean;
  function GetPVPGearStatRules(this: void): boolean;
  function GetPVPLifetimeStats(this: void): LuaMultiReturn<[number, number]>;
  function GetPVPSessionStats(this: void): LuaMultiReturn<[number, number]>;
  function GetPVPTimer(this: void): number;
  function GetPVPYesterdayStats(this: void): LuaMultiReturn<[number, number]>;
  function GetParryChance(this: void): number;
  function GetParryChanceFromAttribute(this: void): number;
  function GetPetMeleeHaste(this: void): number;
  function GetPetSpellBonusDamage(this: void): number;
  function GetPlayerFacing(this: void): number | undefined;
  function GetPlayerInfoByGUID(
    this: void,
    guid: WOWGUID
  ): LuaMultiReturn<[string, string, string, string, number, string, string]>;
  function GetPowerRegen(this: void): LuaMultiReturn<[number, number]>;
  function GetPowerRegenForPowerType(
    this: void,
    powerType: number
  ): LuaMultiReturn<[number, number]>;
  function GetPvpPowerDamage(this: void): number;
  function GetPvpPowerHealing(this: void): number;
  function GetRangedCritChance(this: void): number;
  function GetRangedHaste(this: void): number;
  function GetReleaseTimeRemaining(this: void): number;
  function GetResSicknessDuration(this: void): string | undefined;
  function GetRestState(this: void): LuaMultiReturn<[number, string, number]>;
  function GetRestrictedAccountData(
    this: void
  ): LuaMultiReturn<[number, WOWMONEY, number]>;
  function GetRuneCooldown(
    this: void,
    runeIndex: number
  ): LuaMultiReturn<[number, number, boolean]>;
  function GetRuneCount(this: void, runeIndex: number): number;
  function GetSheathState(this: void): number | undefined;
  function GetShieldBlock(this: void): number;
  function GetSpeed(this: void): number;
  function GetSpellBonusDamage(this: void, school: number): number | undefined;
  function GetSpellBonusHealing(this: void): number;
  function GetSpellCritChance(this: void): number;
  function GetSpellHitModifier(this: void): number;
  function GetSpellPenetration(this: void): number;
  function GetSturdiness(this: void): number;
  function GetTaxiBenchmarkMode(this: void): boolean;
  function GetVersatilityBonus(this: void, combatRating: number): number;
  function GetXPExhaustion(this: void): number | undefined;
  function HasAPEffectsSpellPower(this: void): boolean;
  function HasDualWieldPenalty(this: void): boolean;
  function HasFullControl(this: void): boolean;
  function HasIgnoreDualWieldWeapon(this: void): boolean;
  function HasKey(this: void): boolean;
  function HasNoReleaseAura(
    this: void
  ): LuaMultiReturn<[boolean, number, boolean]>;
  function HasSPEffectsAttackPower(this: void): boolean;
  function InitiateTrade(this: void, guid: UnitToken): void;
  function IsAccountSecured(this: void): boolean;
  function IsAdvancedFlyableArea(this: void): boolean;
  function IsCemeterySelectionAvailable(this: void): boolean;
  function IsCharacterNewlyBoosted(this: void): boolean;
  function IsDualWielding(this: void): boolean;
  function IsFlyableArea(this: void): boolean;
  function IsGuildLeader(this: void): boolean;
  function IsInGuild(this: void): boolean;
  function IsInJailersTower(this: void): boolean;
  function IsIndoors(this: void): boolean;
  function IsInsane(this: void): boolean;
  function IsItemPreferredArmorType(
    this: void,
    itemLocation: ItemLocation
  ): boolean;
  function IsJailersTowerLayerTimeLocked(
    this: void,
    layerLevel: number
  ): string;
  function IsLoggedIn(this: void): boolean;
  function IsMounted(this: void): boolean;
  function IsOnGroundFloorInJailersTower(this: void): boolean;
  function IsOutOfBounds(this: void): boolean;
  function IsOutdoors(this: void): boolean;
  function IsPVPTimerRunning(this: void): boolean;
  function IsPlayerInWorld(this: void): boolean;
  function IsPlayerMoving(this: void): boolean;
  function IsRangedWeapon(this: void): boolean;
  function IsResting(this: void): boolean;
  function IsRestrictedAccount(this: void): boolean;
  function IsStealthed(this: void): boolean;
  function IsXPUserDisabled(this: void): boolean;
  function NoPlayTime(this: void): boolean | undefined;
  function NotifyInspect(this: void, targetGUID: UnitToken): void;
  function PartialPlayTime(this: void): boolean | undefined;
  function PlayerCanTeleport(this: void): boolean;
  function PlayerEffectiveAttackPower(
    this: void
  ): LuaMultiReturn<[number, number, number]>;
  function PlayerGetTimerunningSeasonID(this: void): number | undefined;
  function PortGraveyard(this: void): void;
  function RandomRoll(this: void, min: number, max: number): void;
  function RepopMe(this: void): void;
  function RequestTimePlayed(this: void): void;
  function RespondInstanceLock(this: void, acceptLock: boolean): void;
  function ResurrectGetOfferer(this: void): string;
  function ResurrectHasSickness(this: void): boolean;
  function ResurrectHasTimer(this: void): boolean;
  function RetrieveCorpse(this: void): void;
  function SetAllowLowLevelRaid(this: void, allow?: boolean): void;
  function SetAutoDeclineGuildInvites(this: void, allow?: boolean): void;
  function SetCemeteryPreference(this: void, cemetaryID: number): void;
  function SetLootSpecialization(this: void, specializationID: number): void;
  function SetTaxiBenchmarkMode(this: void, enable?: boolean): void;
  function ShouldShowIslandsWeeklyPOI(this: void): boolean;
  function ShouldShowSpecialSplashScreen(this: void): boolean;
  function ShowAccountAchievements(this: void, hide?: boolean): void;
  function ShowCloak(this: void, show: boolean): void;
  function ShowHelm(this: void, show: boolean): void;
  function ShowingCloak(this: void): boolean;
  function ShowingHelm(this: void): boolean;
  function SitStandOrDescendStart(this: void): void;
  function SplashFrameCanBeShown(this: void): boolean;
  function StartAttack(this: void, name?: string, exactMatch?: boolean): void;
  function StopAttack(this: void): void;
  function Stuck(this: void): void;
  function TimeoutResurrect(this: void): void;
  function ToggleSelfHighlight(this: void): boolean;
  function ToggleSheath(this: void): void;

  namespace C_Pony {}

  function SetPortraitToTexture(
    this: void,
    texture: SimpleTexture,
    asset: TextureAssetDisk
  ): void;

  interface ProfTabHighlight {
    description: string;
  }

  interface ProfTabInfo {
    rootNodeID: number;
    name: string;
    description: string;
    rootIconID: number;
    highlights: ProfTabHighlight[];
  }

  interface SpecPerkInfo {
    perkID: number;
    isMajorPerk: boolean;
  }

  interface SpecializationCurrencyInfo {
    numAvailable: number;
    currencyName: string;
  }

  interface SpecializationTabInfo {
    enabled?: boolean;
    errorReason: string;
  }

  namespace C_ProfSpecs {
    function CanRefundPath(
      this: void,
      pathID: number,
      configID: number
    ): boolean;
    function CanUnlockTab(
      this: void,
      tabTreeID: number,
      configID: number
    ): boolean;
    function GetChildrenForPath(this: void, pathID: number): number[];
    function GetConfigIDForSkillLine(this: void, skillLineID: number): number;
    function GetCurrencyInfoForSkillLine(
      this: void,
      skillLineID: number
    ): SpecializationCurrencyInfo;
    function GetDefaultSpecSkillLine(this: void): number | undefined;
    function GetDescriptionForPath(this: void, pathID: number): string;
    function GetDescriptionForPerk(this: void, perkID: number): string;
    function GetEntryIDForPerk(this: void, perkID: number): number;
    function GetNewSpecReminderProfName(this: void): string | undefined;
    function GetPerksForPath(this: void, pathID: number): SpecPerkInfo[];
    function GetRootPathForTab(
      this: void,
      tabTreeID: number
    ): number | undefined;
    function GetSourceTextForPath(
      this: void,
      pathID: number,
      configID: number
    ): string;
    function GetSpecTabIDsForSkillLine(
      this: void,
      skillLineID: number
    ): number[];
    function GetSpecTabInfo(this: void): SpecializationTabInfo;
    function GetSpendCurrencyForPath(
      this: void,
      pathID: number
    ): number | undefined;
    function GetSpendEntryForPath(this: void, pathID: number): number;
    function GetStateForPath(
      this: void,
      pathID: number,
      configID: number
    ): Enum.ProfessionsSpecPathState;
    function GetStateForPerk(
      this: void,
      perkID: number,
      configID: number
    ): Enum.ProfessionsSpecPerkState;
    function GetStateForTab(
      this: void,
      tabTreeID: number,
      configID: number
    ): Enum.ProfessionsSpecTabState;
    function GetTabInfo(this: void, tabTreeID: number): ProfTabInfo | undefined;
    function GetUnlockEntryForPath(this: void, pathID: number): number;
    function GetUnlockRankForPerk(
      this: void,
      perkID: number
    ): number | undefined;
    function ShouldShowPointsReminder(this: void): boolean;
    function ShouldShowPointsReminderForSkillLine(
      this: void,
      skillLineID: number
    ): boolean;
    function ShouldShowSpecTab(this: void): boolean;
    function SkillLineHasSpecialization(
      this: void,
      skillLineID: number
    ): boolean;
  }

  namespace C_PvP {
    interface BattlefieldCurrencyReward {
      id: number;
      quantity: number;
    }

    interface BattlefieldItemReward {
      id: number;
      name: string;
      texture: fileID;
      quantity: number;
    }

    interface BattlefieldRewards {
      honor: number;
      experience: number;
      itemRewards?: BattlefieldItemReward[];
      currencyRewards?: BattlefieldCurrencyReward[];
      roleShortageBonus?: RoleShortageReward;
    }

    interface BattlefieldVehicleInfo {
      x: number;
      y: number;
      name: string;
      isOccupied: boolean;
      atlas: textureAtlas;
      textureWidth: number;
      textureHeight: number;
      facing: number;
      isPlayer: boolean;
      isAlive: boolean;
      shouldDrawBelowPlayerBlips: boolean;
    }

    interface BattlemasterListInfo {
      name: string;
      instanceType: number;
      minPlayers: number;
      maxPlayers: number;
      icon: fileID;
      longDescription: string;
      shortDescription: string;
    }

    interface HonorRewardInfo {
      honorLevelName: string;
      badgeFileDataID: fileID;
      achievementRewardedID: number;
    }

    interface LevelUpBattlegroundInfo {
      id: number;
      icon: fileID;
      name: string;
      isEpic: boolean;
    }

    interface MatchPVPStatColumn {
      pvpStatID: number;
      columnHeaderID: number;
      orderIndex: number;
      name: string;
      tooltipTitle: string;
      tooltip: string;
    }

    interface PvpBrawlInfo {
      brawlID: number;
      name: string;
      shortDescription: string;
      longDescription: string;
      canQueue: boolean;
      minLevel: number;
      maxLevel: number;
      groupsAllowed: boolean;
      timeLeftUntilNextChange?: number;
      brawlType: Enum.BrawlType;
      mapNames: string[];
      includesAllArenas?: boolean;
      minItemLevel?: number;
    }

    interface PVPPersonalRatedInfo {
      personalRating: number;
      bestSeasonRating: number;
      bestWeeklyRating: number;
      seasonPlayed: number;
      seasonWon: number;
      weeklyPlayed: number;
      weeklyWon: number;
      lastWeeksBestRating: number;
      hasWonBracketToday: boolean;
      tier: number;
      ranking?: number;
      roundsSeasonPlayed: number;
      roundsSeasonWon: number;
      roundsWeeklyPlayed: number;
      roundsWeeklyWon: number;
    }

    interface PVPPostMatchCurrencyReward {
      currencyType: number;
      quantityChanged: number;
    }

    interface PVPPostMatchItemReward {
      type: string;
      link: string;
      quantity: number;
      specID: number;
      sex: number;
      isUpgraded: boolean;
    }

    interface PvpReadyCheckInfo {
      roles: PvpRoleQueueInfo[];
      numPlayersAccepted: number;
      numPlayersDeclined: number;
      totalNumPlayers: number;
    }

    interface PvpRoleQueueInfo {
      role: string;
      totalRole: number;
      totalAccepted: number;
      totalDeclined: number;
    }

    interface PvpScalingData {
      scalingDataID: number;
      specializationID: number;
      name: string;
      value: number;
    }

    interface PVPScoreInfo {
      name: string;
      guid: WOWGUID;
      killingBlows: number;
      honorableKills: number;
      deaths: number;
      honorGained: number;
      faction: number;
      raceName: string;
      className: string;
      classToken: string;
      damageDone: number;
      healingDone: number;
      rating: number;
      ratingChange: number;
      prematchMMR: number;
      mmrChange: number;
      postmatchMMR: number;
      talentSpec: string;
      honorLevel: number;
      roleAssigned: number;
      stats: PVPStatInfo[];
    }

    interface PVPStatInfo {
      pvpStatID: number;
      pvpStatValue: number;
      orderIndex: number;
      name: string;
      tooltip: string;
      iconName: string;
    }

    interface PVPTeamInfo {
      name: string;
      size: number;
      rating: number;
      ratingNew: number;
      ratingMMR: number;
    }

    interface PvpTierInfo {
      name: string;
      descendRating: number;
      ascendRating: number;
      descendTier: number;
      ascendTier: number;
      pvpTierEnum: number;
      tierIconID: fileID;
    }

    interface RandomBGInfo {
      canQueue: boolean;
      bgID: number;
      hasRandomWinToday: boolean;
      minLevel: number;
      maxLevel: number;
    }

    interface RatedBGBlitzSpecStats {
      weeklyMostPlayedSpecID: number;
      weeklyMostPlayedSpecGames: number;
      seasonMostPlayedSpecID: number;
      seasonMostPlayedSpecGames: number;
    }

    interface RatedMatchDeserterPenalty {
      personalRatingChange: number;
      queuePenaltySpellID: number;
      queuePenaltyDuration: number;
    }

    interface RatedSoloShuffleSpecStats {
      weeklyMostPlayedSpecID: number;
      weeklyMostPlayedSpecRounds: number;
      seasonMostPlayedSpecID: number;
      seasonMostPlayedSpecRounds: number;
    }

    interface RoleShortageReward {
      validRoles: string[];
      rewardSpellID: number;
      rewardItemID: number;
    }

    function ArePvpTalentsUnlocked(this: void): boolean;
    function CanDisplayDamage(this: void): boolean;
    function CanDisplayDeaths(this: void): boolean;
    function CanDisplayHealing(this: void): boolean;
    function CanDisplayHonorableKills(this: void): boolean;
    function CanDisplayKillingBlows(this: void): boolean;
    function CanPlayerUseRatedPVPUI(
      this: void
    ): LuaMultiReturn<[boolean, string]>;
    function CanToggleWarMode(this: void, toggle: boolean): boolean;
    function CanToggleWarModeInArea(this: void): boolean;
    function DoesMatchOutcomeAffectRating(this: void): boolean;
    function GetActiveBrawlInfo(this: void): PvpBrawlInfo | undefined;
    function GetActiveMatchBracket(this: void): number;
    function GetActiveMatchDuration(this: void): time_t;
    function GetActiveMatchState(this: void): Enum.PvPMatchState;
    function GetActiveMatchWinner(this: void): number;
    function GetArenaCrowdControlInfo(
      this: void,
      playerToken: UnitToken
    ): LuaMultiReturn<[number, number, number]>;
    function GetArenaRewards(
      this: void,
      teamSize: number
    ): LuaMultiReturn<
      [
        number,
        number,
        BattlefieldItemReward[] | undefined,
        BattlefieldCurrencyReward[] | undefined,
        RoleShortageReward | undefined,
      ]
    >;
    function GetArenaSkirmishRewards(
      this: void
    ): LuaMultiReturn<
      [
        number,
        number,
        BattlefieldItemReward[] | undefined,
        BattlefieldCurrencyReward[] | undefined,
        RoleShortageReward | undefined,
      ]
    >;
    function GetAssignedSpecForBattlefieldQueue(
      this: void,
      queueID: number
    ): number | undefined;
    function GetAvailableBrawlInfo(this: void): PvpBrawlInfo | undefined;
    function GetBattlefieldFlagPosition(
      this: void,
      flagIndex: number,
      uiMapId: number
    ): LuaMultiReturn<[number | undefined, number | undefined, number]>;
    function GetBattlefieldVehicleInfo(
      this: void,
      vehicleIndex: number,
      uiMapID: number
    ): BattlefieldVehicleInfo;
    function GetBattlefieldVehicles(
      this: void,
      uiMapID: number
    ): BattlefieldVehicleInfo[];
    function GetBrawlRewards(
      this: void,
      brawlType: Enum.BrawlType
    ): LuaMultiReturn<
      [
        number,
        number,
        BattlefieldItemReward[] | undefined,
        BattlefieldCurrencyReward[] | undefined,
        RoleShortageReward | undefined,
        boolean,
      ]
    >;
    function GetBrawlSoloRBGMinItemLevel(this: void): number;
    function GetCustomVictoryStatID(this: void): number;
    function GetGlobalPvpScalingInfoForSpecID(
      this: void,
      specializationID: number
    ): PvpScalingData[];
    function GetHonorRewardInfo(
      this: void,
      honorLevel: number
    ): HonorRewardInfo | undefined;
    function GetLevelUpBattlegrounds(
      this: void,
      level: number
    ): LevelUpBattlegroundInfo[];
    function GetMatchPVPStatColumn(
      this: void,
      pvpStatID: number
    ): MatchPVPStatColumn | undefined;
    function GetMatchPVPStatColumns(this: void): MatchPVPStatColumn[];
    function GetNextHonorLevelForReward(
      this: void,
      honorLevel: number
    ): number | undefined;
    function GetOutdoorPvPWaitTime(this: void, uiMapID: number): time_t;
    function GetPVPActiveMatchPersonalRatedInfo(
      this: void
    ): PVPPersonalRatedInfo | undefined;
    function GetPVPActiveRatedMatchDeserterPenalty(
      this: void
    ): RatedMatchDeserterPenalty | undefined;
    function GetPVPSeasonRewardAchievementID(this: void): number;
    function GetPersonalRatedBGBlitzSpecStats(
      this: void
    ): RatedBGBlitzSpecStats | undefined;
    function GetPersonalRatedSoloShuffleSpecStats(
      this: void
    ): RatedSoloShuffleSpecStats | undefined;
    function GetPostMatchCurrencyRewards(
      this: void
    ): PVPPostMatchCurrencyReward[];
    function GetPostMatchItemRewards(this: void): PVPPostMatchItemReward[];
    function GetPvpTalentsUnlockedLevel(this: void): number;
    function GetPvpTierID(
      this: void,
      tierEnum: number,
      bracketEnum: number
    ): number | undefined;
    function GetPvpTierInfo(
      this: void,
      tierID: number
    ): PvpTierInfo | undefined;
    function GetRandomBGInfo(this: void): RandomBGInfo;
    function GetRandomBGRewards(
      this: void
    ): LuaMultiReturn<
      [
        number,
        number,
        BattlefieldItemReward[] | undefined,
        BattlefieldCurrencyReward[] | undefined,
        RoleShortageReward | undefined,
      ]
    >;
    function GetRandomEpicBGInfo(this: void): RandomBGInfo;
    function GetRandomEpicBGRewards(
      this: void
    ): LuaMultiReturn<
      [
        number,
        number,
        BattlefieldItemReward[] | undefined,
        BattlefieldCurrencyReward[] | undefined,
        RoleShortageReward | undefined,
      ]
    >;
    function GetRatedBGRewards(
      this: void
    ): LuaMultiReturn<
      [
        number,
        number,
        BattlefieldItemReward[] | undefined,
        BattlefieldCurrencyReward[] | undefined,
        RoleShortageReward | undefined,
      ]
    >;
    function GetRatedSoloRBGMinItemLevel(this: void): number;
    function GetRatedSoloRBGRewards(
      this: void
    ): LuaMultiReturn<
      [
        number,
        number,
        BattlefieldItemReward[] | undefined,
        BattlefieldCurrencyReward[] | undefined,
        RoleShortageReward | undefined,
      ]
    >;
    function GetRatedSoloShuffleMinItemLevel(this: void): number;
    function GetRatedSoloShuffleRewards(
      this: void
    ): LuaMultiReturn<
      [
        number,
        number,
        BattlefieldItemReward[] | undefined,
        BattlefieldCurrencyReward[] | undefined,
        RoleShortageReward | undefined,
      ]
    >;
    function GetRewardItemLevelsByTierEnum(
      this: void,
      pvpTierEnum: number
    ): LuaMultiReturn<[number, number]>;
    function GetScoreInfo(
      this: void,
      offsetIndex: number
    ): PVPScoreInfo | undefined;
    function GetScoreInfoByPlayerGuid(
      this: void,
      guid: WOWGUID
    ): PVPScoreInfo | undefined;
    function GetSeasonBestInfo(
      this: void
    ): LuaMultiReturn<[number, number | undefined]>;
    function GetSkirmishInfo(
      this: void,
      pvpBracket: number
    ): BattlemasterListInfo;
    function GetSpecialEventBrawlInfo(this: void): PvpBrawlInfo | undefined;
    function GetTeamInfo(
      this: void,
      factionIndex: number
    ): PVPTeamInfo | undefined;
    function GetUIDisplaySeason(this: void): number;
    function GetWarModeRewardBonus(this: void): number;
    function GetWarModeRewardBonusDefault(this: void): number;
    function GetWeeklyChestInfo(
      this: void
    ): LuaMultiReturn<[boolean, boolean, boolean, number]>;
    function GetZonePVPInfo(
      this: void
    ): LuaMultiReturn<[string, boolean, string | undefined]>;
    function HasArenaSkirmishWinToday(this: void): boolean;
    function IsActiveBattlefield(this: void): boolean;
    function IsActiveMatchRegistered(this: void): boolean;
    function IsArena(this: void): boolean;
    function IsBattleground(this: void): boolean;
    function IsBattlegroundEnlistmentBonusActive(
      this: void
    ): LuaMultiReturn<[boolean, boolean]>;
    function IsBrawlSoloRBG(this: void): boolean;
    function IsBrawlSoloShuffle(this: void): boolean;
    function IsInBrawl(this: void): boolean;
    function IsInRatedMatchWithDeserterPenalty(this: void): boolean;
    function IsMatchActive(this: void): boolean;
    function IsMatchComplete(this: void): boolean;
    function IsMatchConsideredArena(this: void): boolean;
    function IsMatchFactional(this: void): boolean;
    function IsPVPMap(this: void): boolean;
    function IsRatedArena(this: void): boolean;
    function IsRatedBattleground(this: void): boolean;
    function IsRatedMap(this: void): boolean;
    function IsRatedSoloRBG(this: void): boolean;
    function IsRatedSoloShuffle(this: void): boolean;
    function IsSoloRBG(this: void): boolean;
    function IsSoloShuffle(this: void): boolean;
    function IsSubZonePVPPOI(this: void): boolean;
    function IsWarModeActive(this: void): boolean;
    function IsWarModeDesired(this: void): boolean;
    function IsWarModeFeatureEnabled(this: void): boolean;
    function JoinBrawl(this: void, isSpecialBrawl?: boolean): void;
    function JoinRatedBGBlitz(this: void): void;
    function RequestCrowdControlSpell(this: void, playerToken: UnitToken): void;
    function SetPVP(this: void, enablePVP?: boolean): void;
    function SetWarModeDesired(this: void, warModeDesired: boolean): void;
    function StartSoloRBGWarGameByName(this: void, args: string): number;
    function StartSpectatorSoloRBGWarGame(
      this: void,
      opaqueID1: number,
      opaqueID2: number,
      specifiedMap: string,
      tournamentRules: boolean
    ): number;
    function TogglePVP(this: void): void;
    function ToggleWarMode(this: void): void;
  }

  namespace C_QuestHub {
    function IsQuestCurrentlyRelatedToHub(
      this: void,
      questID: number,
      areaPoiID: number
    ): boolean;
  }

  namespace C_QuestInfoSystem {
    function GetQuestClassification(
      this: void,
      questID?: number
    ): Enum.QuestClassification | undefined;
    function GetQuestRewardCurrencies(
      this: void,
      questID?: number
    ): QuestRewardCurrencyInfo[];
    function GetQuestRewardSpellInfo(
      this: void,
      questID: number | undefined,
      spellID: number
    ): QuestRewardSpellInfo | undefined;
    function GetQuestRewardSpells(this: void, questID?: number): number[];
    function GetQuestShouldToastCompletion(
      this: void,
      questID?: number
    ): boolean;
    function HasQuestRewardCurrencies(this: void, questID?: number): boolean;
    function HasQuestRewardSpells(this: void, questID?: number): boolean;
  }

  namespace C_QuestItemUse {
    function CanUseQuestItemOnObject(
      this: void,
      item: ItemLocation,
      unit: UnitToken,
      checkRange?: boolean
    ): boolean;
  }

  namespace C_QuestLine {
    interface QuestLineInfo {
      questLineName: string;
      questName: string;
      questLineID: number;
      questID: number;
      x: number;
      y: number;
      isHidden: boolean;
      isLegendary: boolean;
      isLocalStory: boolean;
      isDaily: boolean;
      isCampaign: boolean;
      isImportant: boolean;
      isAccountCompleted: boolean;
      isCombatAllyQuest: boolean;
      isMeta: boolean;
      inProgress: boolean;
      isQuestStart: boolean;
      floorLocation: Enum.QuestLineFloorLocation;
    }

    function GetAvailableQuestLines(
      this: void,
      uiMapID: number
    ): QuestLineInfo[];
    function GetForceVisibleQuests(this: void, uiMapID: number): number[];
    function GetQuestLineInfo(
      this: void,
      questID: number,
      uiMapID?: number,
      displayableOnly?: boolean
    ): QuestLineInfo | undefined;
    function GetQuestLineQuests(this: void, questLineID: number): number[];
    function IsComplete(this: void, questLineID: number): boolean;
    function QuestLineIgnoresAccountCompletedFiltering(
      this: void,
      uiMapID: number,
      questLineID: number
    ): boolean;
    function RequestQuestLinesForMap(this: void, uiMapID: number): void;
  }

  namespace C_QuestLog {
    interface QuestInfo {
      title: string;
      questLogIndex: number;
      questID: number;
      campaignID?: number;
      level: number;
      difficultyLevel: number;
      suggestedGroup: number;
      frequency?: Enum.QuestFrequency;
      isHeader: boolean;
      useMinimalHeader: boolean;
      sortAsNormalQuest: boolean;
      isCollapsed: boolean;
      startEvent: boolean;
      isTask: boolean;
      isBounty: boolean;
      isStory: boolean;
      isScaling: boolean;
      isOnMap: boolean;
      hasLocalPOI: boolean;
      isHidden: boolean;
      isAutoComplete: boolean;
      overridesSortOrder: boolean;
      readyForTranslation?: boolean;
      isInternalOnly: boolean;
      isAbandonOnDisable: boolean;
      headerSortKey?: number;
      questClassification: Enum.QuestClassification;
    }

    interface QuestObjectiveInfo {
      text: string;
      type: string;
      finished: boolean;
      numFulfilled: number;
      numRequired: number;
    }

    interface QuestOnMapInfo {
      questID: number;
      x: number;
      y: number;
      type: number;
      isMapIndicatorQuest: boolean;
    }

    interface QuestTagInfo {
      tagName: string;
      tagID: number;
      worldQuestType?: number;
      quality?: Enum.WorldQuestQuality;
      tradeskillLineID?: number;
      isElite?: boolean;
      displayExpiration?: boolean;
    }

    interface QuestTheme {
      background: textureAtlas;
      seal: textureAtlas;
      signature: string;
      poiIcon: textureAtlas;
    }

    function AbandonQuest(this: void): void;
    function AddQuestWatch(this: void, questID: number): boolean;
    function AddWorldQuestWatch(
      this: void,
      questID: number,
      watchType?: Enum.QuestWatchType
    ): boolean;
    function CanAbandonQuest(this: void, questID: number): boolean;
    function DoesQuestAwardReputationWithFaction(
      this: void,
      questID: number,
      factionID: number
    ): boolean;
    function GetAbandonQuest(this: void): number;
    function GetAbandonQuestItems(this: void): number[];
    function GetActiveThreatMaps(this: void): number[];
    function GetAllCompletedQuestIDs(this: void): number[];
    function GetBountiesForMapID(
      this: void,
      uiMapID: number
    ): BountyInfo[] | undefined;
    function GetBountySetInfoForMapID(
      this: void,
      uiMapID: number
    ): LuaMultiReturn<
      [Enum.MapOverlayDisplayLocation, number, number, boolean]
    >;
    function GetDistanceSqToQuest(
      this: void,
      questID: number
    ): LuaMultiReturn<[number, boolean]>;
    function GetHeaderIndexForQuest(
      this: void,
      questID: number
    ): number | undefined;
    function GetInfo(this: void, questLogIndex: number): QuestInfo | undefined;
    function GetLogIndexForQuestID(
      this: void,
      questID: number
    ): number | undefined;
    function GetMapForQuestPOIs(this: void): number;
    function GetMaxNumQuests(this: void): number;
    function GetMaxNumQuestsCanAccept(this: void): number;
    function GetNextWaypoint(
      this: void,
      questID: number
    ): LuaMultiReturn<[number, number, number]>;
    function GetNextWaypointForMap(
      this: void,
      questID: number,
      uiMapID: number
    ): LuaMultiReturn<[number, number]>;
    function GetNextWaypointText(this: void, questID: number): string;
    function GetNumQuestLogEntries(
      this: void
    ): LuaMultiReturn<[number, number]>;
    function GetNumQuestObjectives(this: void, questID: number): number;
    function GetNumQuestWatches(this: void): number;
    function GetNumWorldQuestWatches(this: void): number;
    function GetQuestAdditionalHighlights(
      this: void,
      questID: number
    ): LuaMultiReturn<[number, boolean, boolean, boolean, boolean]>;
    function GetQuestDetailsTheme(
      this: void,
      questID: number
    ): QuestTheme | undefined;
    function GetQuestDifficultyLevel(this: void, questID: number): number;
    function GetQuestIDForLogIndex(
      this: void,
      questLogIndex: number
    ): number | undefined;
    function GetQuestIDForQuestWatchIndex(
      this: void,
      questWatchIndex: number
    ): number | undefined;
    function GetQuestIDForWorldQuestWatchIndex(
      this: void,
      questWatchIndex: number
    ): number | undefined;
    function GetQuestLogMajorFactionReputationRewards(
      this: void,
      questID: number
    ): QuestRewardReputationInfo[];
    function GetQuestLogPortraitGiver(
      this: void,
      questLogIndex?: number
    ): LuaMultiReturn<[number, string, string, number, number | undefined]>;
    function GetQuestObjectives(
      this: void,
      questID: number
    ): QuestObjectiveInfo[];
    function GetQuestRewardCurrencies(
      this: void,
      questID: number
    ): QuestRewardCurrencyInfo[];
    function GetQuestRewardCurrencyInfo(
      this: void,
      questID: number,
      currencyIndex: number,
      isChoice: boolean
    ): QuestRewardCurrencyInfo | undefined;
    function GetQuestTagInfo(
      this: void,
      questID: number
    ): QuestTagInfo | undefined;
    function GetQuestType(this: void, questID: number): number | undefined;
    function GetQuestWatchType(
      this: void,
      questID: number
    ): Enum.QuestWatchType | undefined;
    function GetQuestsOnMap(this: void, uiMapID: number): QuestOnMapInfo[];
    function GetRequiredMoney(this: void, questID?: number): number;
    function GetSelectedQuest(this: void): number;
    function GetSuggestedGroupSize(this: void, questID: number): number;
    function GetTimeAllowed(
      this: void,
      questID: number
    ): LuaMultiReturn<[number, number]>;
    function GetTitleForLogIndex(
      this: void,
      questLogIndex: number
    ): string | undefined;
    function GetTitleForQuestID(
      this: void,
      questID: number
    ): string | undefined;
    function GetZoneStoryInfo(
      this: void,
      uiMapID: number
    ): LuaMultiReturn<[number, number]>;
    function HasActiveThreats(this: void): boolean;
    function IsAccountQuest(this: void, questID: number): boolean;
    function IsComplete(this: void, questID: number): boolean;
    function IsFailed(this: void, questID: number): boolean;
    function IsImportantQuest(this: void, questID: number): boolean;
    function IsLegendaryQuest(this: void, questID: number): boolean;
    function IsMetaQuest(this: void, questID: number): boolean;
    function IsOnMap(
      this: void,
      questID: number
    ): LuaMultiReturn<[boolean, boolean]>;
    function IsOnQuest(this: void, questID: number): boolean;
    function IsPushableQuest(this: void, questID: number): boolean;
    function IsQuestBounty(this: void, questID: number): boolean;
    function IsQuestCalling(this: void, questID: number): boolean;
    function IsQuestCriteriaForBounty(
      this: void,
      questID: number,
      bountyQuestID: number
    ): boolean;
    function IsQuestDisabledForSession(this: void, questID: number): boolean;
    function IsQuestFlaggedCompleted(this: void, questID: number): boolean;
    function IsQuestFlaggedCompletedOnAccount(
      this: void,
      questID: number
    ): boolean;
    function IsQuestFromContentPush(this: void, questID: number): boolean;
    function IsQuestInvasion(this: void, questID: number): boolean;
    function IsQuestRepeatableType(this: void, questID: number): boolean;
    function IsQuestReplayable(this: void, questID: number): boolean;
    function IsQuestReplayedRecently(this: void, questID: number): boolean;
    function IsQuestTask(this: void, questID: number): boolean;
    function IsQuestTrivial(this: void, questID: number): boolean;
    function IsRepeatableQuest(this: void, questID: number): boolean;
    function IsThreatQuest(this: void, questID: number): boolean;
    function IsUnitOnQuest(
      this: void,
      unit: UnitToken,
      questID: number
    ): boolean;
    function IsWorldQuest(this: void, questID: number): boolean;
    function QuestCanHaveWarModeBonus(this: void, questID: number): boolean;
    function QuestContainsFirstTimeRepBonusForPlayer(
      this: void,
      questID: number
    ): boolean;
    function QuestHasQuestSessionBonus(this: void, questID: number): boolean;
    function QuestHasWarModeBonus(this: void, questID: number): boolean;
    function QuestIgnoresAccountCompletedFiltering(
      this: void,
      questID: number
    ): boolean;
    function ReadyForTurnIn(this: void, questID: number): boolean | undefined;
    function RemoveQuestWatch(this: void, questID: number): boolean;
    function RemoveWorldQuestWatch(this: void, questID: number): boolean;
    function RequestLoadQuestByID(this: void, questID: number): void;
    function SetAbandonQuest(this: void): void;
    function SetMapForQuestPOIs(this: void, uiMapID: number): void;
    function SetSelectedQuest(this: void, questID: number): void;
    function ShouldDisplayTimeRemaining(this: void, questID: number): boolean;
    function ShouldShowQuestRewards(this: void, questID: number): boolean;
    function SortQuestWatches(this: void): void;
    function UnitIsRelatedToActiveQuest(this: void, unit: UnitToken): boolean;
    function UpdateCampaignHeaders(this: void): void;
  }

  namespace C_QuestOffer {
    interface QuestRequiredCurrencyInfo {
      texture: fileID;
      name: string;
      currencyID: number;
      quality: number;
      requiredAmount: number;
    }

    function GetHideRequiredItems(this: void): boolean;
    function GetQuestOfferMajorFactionReputationRewards(
      this: void
    ): QuestRewardReputationInfo[];
    function GetQuestRequiredCurrencyInfo(
      this: void,
      questRewardIndex: number
    ): QuestRequiredCurrencyInfo | undefined;
    function GetQuestRewardCurrencyInfo(
      this: void,
      questInfoType: string,
      questRewardIndex: number
    ): QuestRewardCurrencyInfo | undefined;
  }

  interface QuestRewardCurrencyInfo {
    texture: fileID;
    name: string;
    currencyID: number;
    quality: number;
    baseRewardAmount: number;
    bonusRewardAmount: number;
    totalRewardAmount: number;
    questRewardContextFlags?: Enum.QuestRewardContextFlags;
  }

  interface QuestRewardReputationInfo {
    factionID: number;
    rewardAmount: number;
  }

  interface QuestRewardSpellInfo {
    texture: fileID;
    name: string;
    garrFollowerID?: number;
    isTradeskill: boolean;
    isSpellLearned: boolean;
    hideSpellLearnText: boolean;
    isBoostSpell: boolean;
    genericUnlock: boolean;
    type: Enum.QuestCompleteSpellType;
  }

  namespace C_QuestSession {
    interface QuestSessionPlayerDetails {
      name: string;
      guid: WOWGUID;
    }

    function CanStart(this: void): boolean;
    function CanStop(this: void): boolean;
    function Exists(this: void): boolean;
    function GetAvailableSessionCommand(this: void): Enum.QuestSessionCommand;
    function GetPendingCommand(this: void): Enum.QuestSessionCommand;
    function GetProposedMaxLevelForSession(this: void): number;
    function GetSessionBeginDetails(
      this: void
    ): QuestSessionPlayerDetails | undefined;
    function GetSuperTrackedQuest(this: void): number | undefined;
    function HasJoined(this: void): boolean;
    function HasPendingCommand(this: void): boolean;
    function RequestSessionStart(this: void): void;
    function RequestSessionStop(this: void): void;
    function SendSessionBeginResponse(this: void, beginSession: boolean): void;
    function SetQuestIsSuperTracked(
      this: void,
      questID: number,
      superTrack: boolean
    ): void;
  }

  namespace C_TaskQuest {
    interface TaskPOIData {
      questId: number;
      x: number;
      y: number;
      inProgress: boolean;
      numObjectives: number;
      mapID: number;
      isQuestStart: boolean;
      isDaily: boolean;
      isCombatAllyQuest: boolean;
      isMeta: boolean;
      childDepth?: number;
    }

    function DoesMapShowTaskQuestObjectives(
      this: void,
      uiMapID: number
    ): boolean;
    function GetQuestIconUIWidgetSet(this: void, questID: number): number;
    function GetQuestInfoByQuestID(
      this: void,
      questID: number
    ): LuaMultiReturn<
      [string, number | undefined, boolean | undefined, boolean | undefined]
    >;
    function GetQuestLocation(
      this: void,
      questID: number,
      uiMapID: number
    ): LuaMultiReturn<[number, number]>;
    function GetQuestProgressBarInfo(this: void, questID: number): number;
    function GetQuestTimeLeftMinutes(this: void, questID: number): number;
    function GetQuestTimeLeftSeconds(this: void, questID: number): number;
    function GetQuestTooltipUIWidgetSet(this: void, questID: number): number;
    function GetQuestZoneID(this: void, questID: number): number;
    function GetQuestsForPlayerByMapID(
      this: void,
      uiMapID: number
    ): TaskPOIData[];
    function GetThreatQuests(this: void): number[];
    function IsActive(this: void, questID: number): boolean;
    function RequestPreloadRewardData(this: void, questID: number): void;
  }

  interface QueueSpecificInfo {
    queueType: string;
    lfgIDs?: number[];
    lfgListID?: number;
    activityID?: number;
    battlefieldType?: string;
    listID?: number;
    mapName?: string;
    rated?: boolean;
    isBrawl?: boolean;
    teamSize?: number;
  }

  namespace C_RaidLocks {
    function IsEncounterComplete(
      this: void,
      mapID: number,
      encounterID: number,
      difficultyID?: number
    ): boolean;
  }

  namespace C_RecruitAFriend {
    interface RafAppearanceInfo {
      appearanceID: number;
    }

    interface RafAppearanceSetInfo {
      setID: number;
      setName: string;
      appearanceIDs: number[];
    }

    interface RafIllusionInfo {
      spellItemEnchantmentID: number;
    }

    interface RafInfo {
      versions: RafVersionInfo[];
      recruitmentInfo?: RafRecruitmentinfo;
      recruits: RafRecruit[];
      claimInProgress: boolean;
    }

    interface RafMonthCount {
      lifetimeMonths: number;
      spentMonths: number;
      availableMonths: number;
    }

    interface RafMountInfo {
      spellID: number;
      mountID: number;
    }

    interface RafPetInfo {
      creatureID: number;
      speciesID: number;
      displayID: number;
      speciesName: string;
      description: string;
    }

    interface RafRecruit {
      bnetAccountID: number;
      wowAccountGUID: WOWGUID;
      battleTag: string;
      monthsRemaining: number;
      subStatus: Enum.RafRecruitSubStatus;
      acceptanceID: RecruitAcceptanceID;
      versionRecruited: Enum.RecruitAFriendRewardsVersion;
      activities: RafRecruitActivity[];
    }

    interface RafRecruitActivity {
      activityID: number;
      rewardQuestID: number;
      state: Enum.RafRecruitActivityState;
    }

    interface RafRecruitmentinfo {
      recruitmentCode: string;
      recruitmentURL: string;
      expireTime: number;
      remainingTimeSeconds: number;
      totalUses: number;
      remainingUses: number;
      sourceRealm: string;
      sourceFaction: string;
    }

    interface RafReward {
      rewardID: number;
      rafVersion: Enum.RecruitAFriendRewardsVersion;
      itemID: number;
      rewardType: Enum.RafRewardType;
      petInfo?: RafPetInfo;
      mountInfo?: RafMountInfo;
      appearanceInfo?: RafAppearanceInfo;
      titleInfo?: RafTitleInfo;
      appearanceSetInfo?: RafAppearanceSetInfo;
      illusionInfo?: RafIllusionInfo;
      canClaim: boolean;
      claimed: boolean;
      canAfford: boolean;
      repeatable: boolean;
      repeatableClaimCount: number;
      monthsRequired: number;
      monthCost: number;
      availableInMonths: number;
      iconID: fileID;
    }

    interface RafSystemInfo {
      maxRecruits: number;
      maxRecruitMonths: number;
      maxRecruitmentUses: number;
      daysInCycle: number;
    }

    interface RafTitleInfo {
      titleMaskID: number;
    }

    interface RafVersionInfo {
      rafVersion: Enum.RecruitAFriendRewardsVersion;
      monthCount: RafMonthCount;
      rewards: RafReward[];
      nextReward?: RafReward;
      numAffordableRewards: number;
      numRecruits: number;
    }

    function CanSummonFriend(this: void, guid: WOWGUID): boolean;
    function ClaimActivityReward(
      this: void,
      activityID: number,
      acceptanceID: RecruitAcceptanceID
    ): boolean;
    function ClaimNextReward(
      this: void,
      rafVersion?: Enum.RecruitAFriendRewardsVersion
    ): boolean;
    function GenerateRecruitmentLink(this: void): boolean;
    function GetRAFInfo(this: void): RafInfo;
    function GetRAFSystemInfo(this: void): RafSystemInfo;
    function GetRecruitActivityRequirementsText(
      this: void,
      activityID: number,
      acceptanceID: RecruitAcceptanceID
    ): string[];
    function GetRecruitInfo(this: void): LuaMultiReturn<[boolean, number]>;
    function GetSummonFriendCooldown(
      this: void
    ): LuaMultiReturn<[number, number, boolean]>;
    function IsEnabled(this: void): boolean;
    function IsRecruitAFriendLinked(this: void, guid: WOWGUID): boolean;
    function IsRecruitingEnabled(this: void): boolean;
    function RemoveRAFRecruit(this: void, wowAccountGUID: WOWGUID): boolean;
    function RequestUpdatedRecruitmentInfo(this: void): boolean;
    function SummonFriend(this: void, target: WOWGUID, name: string): void;
  }

  namespace C_ReportSystem {
    function CanReportPlayer(
      this: void,
      playerLocation: PlayerLocation
    ): boolean;
    function CanReportPlayerForLanguage(
      this: void,
      playerLocation: PlayerLocation
    ): boolean;
    function GetMajorCategoriesForReportType(
      this: void,
      reportType: Enum.ReportType
    ): Enum.ReportMajorCategory[];
    function GetMajorCategoryString(
      this: void,
      majorCategory: Enum.ReportMajorCategory
    ): string;
    function GetMinorCategoriesForReportTypeAndMajorCategory(
      this: void,
      reportType: Enum.ReportType,
      majorCategory: Enum.ReportMajorCategory
    ): Enum.ReportMinorCategory[];
    function GetMinorCategoryString(
      this: void,
      minorCategory: Enum.ReportMinorCategory
    ): string;
    function ReportServerLag(this: void): void;
    function ReportStuckInCombat(this: void): void;
    function SendReport(
      this: void,
      reportInfo: ReportInfo,
      playerLocation?: PlayerLocation
    ): void;
  }

  namespace C_Reputation {
    interface FactionData {
      factionID: number;
      name: string;
      description: string;
      reaction: number;
      currentReactionThreshold: number;
      nextReactionThreshold: number;
      currentStanding: number;
      atWarWith: boolean;
      canToggleAtWar: boolean;
      isChild: boolean;
      isHeader: boolean;
      isHeaderWithRep: boolean;
      isCollapsed: boolean;
      isWatched: boolean;
      hasBonusRepGain: boolean;
      canSetInactive: boolean;
      isAccountWide: boolean;
    }

    function AreLegacyReputationsShown(this: void): boolean;
    function CollapseAllFactionHeaders(this: void): void;
    function CollapseFactionHeader(this: void, factionSortIndex: number): void;
    function ExpandAllFactionHeaders(this: void): void;
    function ExpandFactionHeader(this: void, factionSortIndex: number): void;
    function GetFactionDataByID(
      this: void,
      factionID: number
    ): FactionData | undefined;
    function GetFactionDataByIndex(
      this: void,
      factionSortIndex: number
    ): FactionData | undefined;
    function GetFactionParagonInfo(
      this: void,
      factionID: number
    ): LuaMultiReturn<[number, number, number, boolean, boolean]>;
    function GetGuildFactionData(this: void): FactionData | undefined;
    function GetGuildRepExpirationTime(this: void): number | undefined;
    function GetNumFactions(this: void): number;
    function GetReputationSortType(this: void): Enum.ReputationSortType;
    function GetSelectedFaction(this: void): number;
    function GetWatchedFactionData(this: void): FactionData | undefined;
    function IsAccountWideReputation(this: void, factionID: number): boolean;
    function IsFactionActive(this: void, factionSortIndex: number): boolean;
    function IsFactionParagon(this: void, factionID: number): boolean;
    function IsMajorFaction(this: void, factionID: number): boolean;
    function RequestFactionParagonPreloadRewardData(
      this: void,
      factionID: number
    ): void;
    function SetFactionActive(
      this: void,
      factionSortIndex: number,
      setActive: boolean
    ): void;
    function SetLegacyReputationsShown(
      this: void,
      showLegacyReputations: boolean
    ): void;
    function SetReputationSortType(
      this: void,
      sortType: Enum.ReputationSortType
    ): void;
    function SetSelectedFaction(this: void, factionSortIndex: number): void;
    function SetWatchedFactionByID(this: void, factionID: number): void;
    function SetWatchedFactionByIndex(
      this: void,
      factionSortIndex: number
    ): void;
    function ToggleFactionAtWar(this: void, factionSortIndex: number): void;
  }

  namespace C_ResearchInfo {
    interface DigSiteMapInfo {
      researchSiteID: number;
      position: vector2;
      name: string;
      poiBlobID: number;
      textureIndex: number;
    }

    function GetDigSitesForMap(this: void, uiMapID: number): DigSiteMapInfo[];
  }

  function InCombatLockdown(this: void): boolean;

  namespace C_ReturningPlayerUI {
    function AcceptPrompt(this: void): void;
    function DeclinePrompt(this: void): void;
  }

  namespace C_ScenarioInfo {
    interface ScenarioCriteriaInfo {
      description: string;
      criteriaType?: number;
      completed?: boolean;
      quantity?: number;
      totalQuantity?: number;
      flags?: number;
      assetID?: number;
      criteriaID: number;
      duration?: number;
      elapsed?: number;
      failed?: boolean;
      isWeightedProgress?: boolean;
      isFormatted?: boolean;
    }

    interface ScenarioInformation {
      name: string;
      currentStage: number;
      numStages: number;
      flags: number;
      isComplete: boolean;
      xp: number;
      money: number;
      type: number;
      area: string;
      uiTextureKit: textureKit;
      scenarioID: number;
    }

    interface ScenarioStepInfo {
      title: string;
      description: string;
      numCriteria: number;
      stepFailed: boolean;
      isBonusStep: boolean;
      isForCurrentStepOnly: boolean;
      shouldShowBonusObjective: boolean;
      spells: ScenarioStepSpellInfo[];
      weightedProgress?: number;
      rewardQuestID: number;
      widgetSetID?: number;
      stepID: number;
    }

    interface ScenarioStepSpellInfo {
      spellID: number;
      name: string;
      icon: number;
    }

    function GetCriteriaInfo(
      this: void,
      criteriaIndex: number
    ): ScenarioCriteriaInfo;
    function GetCriteriaInfoByStep(
      this: void,
      stepID: number,
      criteriaIndex: number
    ): ScenarioCriteriaInfo;
    function GetJailersTowerTypeString(
      this: void,
      runType: Enum.JailersTowerType
    ): string | undefined;
    function GetScenarioInfo(this: void): ScenarioInformation;
    function GetScenarioStepInfo(
      this: void,
      scenarioStepID?: number
    ): ScenarioStepInfo;
  }

  namespace C_ScrappingMachineUI {
    function CloseScrappingMachine(this: void): void;
    function DropPendingScrapItemFromCursor(this: void, index: number): void;
    function GetCurrentPendingScrapItemLocationByIndex(
      this: void,
      index: number
    ): ItemLocation;
    function GetScrapSpellID(this: void): number;
    function GetScrappingMachineName(this: void): string;
    function HasScrappableItems(this: void): boolean;
    function RemoveAllScrapItems(this: void): void;
    function RemoveCurrentScrappingItem(this: void): void;
    function RemoveItemToScrap(this: void, index: number): void;
    function ScrapItems(this: void): void;
    function ValidateScrappingList(this: void): void;
  }

  function GetDefaultScale(this: void): number;
  function GetPhysicalScreenSize(this: void): LuaMultiReturn<[number, number]>;
  function GetScreenDPIScale(this: void): number;
  function GetScreenHeight(this: void): number;
  function GetScreenWidth(this: void): number;

  namespace C_ScriptedAnimations {
    interface ScriptedAnimationEffect {
      id: number;
      visual: fileID;
      visualScale: number;
      duration: number;
      trajectory: Enum.ScriptedAnimationTrajectory;
      yawRadians: number;
      pitchRadians: number;
      rollRadians: number;
      offsetX: number;
      offsetY: number;
      offsetZ: number;
      animation: number;
      animationSpeed: number;
      alpha: number;
      useTargetAsSource: boolean;
      startBehavior?: Enum.ScriptedAnimationBehavior;
      startSoundKitID?: number;
      finishEffectID?: number;
      finishBehavior?: Enum.ScriptedAnimationBehavior;
      finishSoundKitID?: number;
      startAlphaFade?: number;
      startAlphaFadeDuration?: number;
      endAlphaFade?: number;
      endAlphaFadeDuration?: number;
      animationStartOffset?: number;
      loopingSoundKitID?: number;
      particleOverrideScale?: number;
    }

    function GetAllScriptedAnimationEffects(
      this: void
    ): ScriptedAnimationEffect[];
  }

  namespace C_ScriptWarnings {}

  namespace C_SeasonInfo {
    function GetCurrentDisplaySeasonExpansion(this: void): number | undefined;
    function GetCurrentDisplaySeasonID(this: void): number;
  }

  namespace C_SecureTransfer {}

  interface ModelLight {
    omnidirectional?: boolean;
    point: vector3;
    ambientIntensity?: number;
    ambientColor?: colorRGB;
    diffuseIntensity?: number;
    diffuseColor?: colorRGB;
  }

  namespace C_Traits {
    interface TraitCondInfo {
      condID: number;
      ranksGranted?: number;
      isAlwaysMet: boolean;
      isMet: boolean;
      isGate: boolean;
      isSufficient: boolean;
      type: number;
      questID?: number;
      achievementID?: number;
      specSetID?: number;
      playerLevel?: number;
      traitCurrencyID?: number;
      spentAmountRequired?: number;
      tooltipFormat?: string;
      traitCondAccountElementID?: number;
    }

    interface TraitConfigInfo {
      ID: number;
      type: Enum.TraitConfigType;
      name: string;
      treeIDs: number[];
      usesSharedActionBars: boolean;
    }

    interface TraitCurrencyCost {
      ID: number;
      amount: number;
    }

    interface TraitDefinitionInfo {
      spellID?: number;
      overrideName?: string;
      overrideSubtext?: string;
      overrideDescription?: string;
      overrideIcon?: number;
      overriddenSpellID?: number;
      subType?: Enum.TraitDefinitionSubType;
    }

    interface TraitEntryInfo {
      definitionID?: number;
      subTreeID?: number;
      type: Enum.TraitNodeEntryType;
      maxRanks: number;
      isAvailable: boolean;
      conditionIDs: number[];
    }

    interface TraitEntryRankInfo {
      entryID: number;
      rank: number;
    }

    interface TraitGateInfo {
      topLeftNodeID: number;
      conditionID: number;
    }

    interface TraitNodeInfo {
      ID: number;
      posX: number;
      posY: number;
      flags: number;
      entryIDs: number[];
      entryIDsWithCommittedRanks: number[];
      canPurchaseRank: boolean;
      canRefundRank: boolean;
      isAvailable: boolean;
      isVisible: boolean;
      isDisplayError: boolean;
      ranksPurchased: number;
      activeRank: number;
      currentRank: number;
      activeEntry?: TraitEntryRankInfo;
      nextEntry?: TraitEntryRankInfo;
      maxRanks: number;
      type: Enum.TraitNodeType;
      visibleEdges: TraitOutEdgeInfo[];
      meetsEdgeRequirements: boolean;
      groupIDs: number[];
      conditionIDs: number[];
      isCascadeRepurchasable: boolean;
      cascadeRepurchaseEntryID?: number;
      subTreeID?: number;
      subTreeActive?: boolean;
    }

    interface TraitNodeInfoPartial {
      canPurchaseRank?: boolean;
      canRefundRank?: boolean;
      isAvailable?: boolean;
      isVisible?: boolean;
      ranksPurchased?: number;
      activeRank?: number;
      currentRank?: number;
      meetsEdgeRequirements?: boolean;
      isCascadeRepurchasable?: boolean;
      activeEntryID?: number;
      subTreeActive?: boolean;
    }

    interface TraitOutEdgeInfo {
      targetNode: number;
      type: number;
      visualStyle: number;
      isActive: boolean;
    }

    interface TraitSubTreeInfo {
      ID: number;
      name?: string;
      description?: string;
      iconElementID?: textureAtlas;
      traitCurrencyID?: number;
      isActive: boolean;
      subTreeSelectionNodeIDs: number[];
      posX: number;
      posY: number;
    }

    interface TraitTreeInfo {
      ID: number;
      gates: TraitGateInfo[];
      hideSingleRankNumbers: boolean;
    }

    interface TreeCurrencyInfo {
      traitCurrencyID: number;
      quantity: number;
      maxQuantity?: number;
      spent: number;
    }

    function CanPurchaseRank(
      this: void,
      configID: number,
      nodeID: number,
      nodeEntryID: number
    ): boolean;
    function CanRefundRank(
      this: void,
      configID: number,
      nodeID: number
    ): boolean;
    function CascadeRepurchaseRanks(
      this: void,
      configID: number,
      nodeID: number,
      entryID?: number
    ): boolean;
    function ClearCascadeRepurchaseHistory(this: void, configID: number): void;
    function CloseTraitSystemInteraction(this: void): void;
    function CommitConfig(this: void, configID: number): boolean;
    function ConfigHasStagedChanges(this: void, configID: number): boolean;
    function GenerateImportString(this: void, configID: number): string;
    function GenerateInspectImportString(this: void, target: string): string;
    function GetConditionInfo(
      this: void,
      configID: number,
      condID: number
    ): TraitCondInfo;
    function GetConfigIDBySystemID(this: void, systemID: number): number;
    function GetConfigIDByTreeID(this: void, treeID: number): number;
    function GetConfigInfo(this: void, configID: number): TraitConfigInfo;
    function GetConfigsByType(
      this: void,
      configType: Enum.TraitConfigType
    ): number[];
    function GetDefinitionInfo(
      this: void,
      definitionID: number
    ): TraitDefinitionInfo;
    function GetEntryInfo(
      this: void,
      configID: number,
      entryID: number
    ): TraitEntryInfo;
    function GetLoadoutSerializationVersion(this: void): number;
    function GetNodeCost(
      this: void,
      configID: number,
      nodeID: number
    ): TraitCurrencyCost[];
    function GetNodeInfo(
      this: void,
      configID: number,
      nodeID: number
    ): TraitNodeInfo;
    function GetStagedChanges(
      this: void,
      configID: number
    ): LuaMultiReturn<[number[], number[], number[]]>;
    function GetStagedChangesCost(
      this: void,
      configID: number
    ): TraitCurrencyCost[];
    function GetSubTreeInfo(
      this: void,
      configID: number,
      subTreeID: number
    ): TraitSubTreeInfo;
    function GetSystemIDByTreeID(this: void, treeID: number): number;
    function GetTraitCurrencyInfo(
      this: void,
      traitCurrencyID: number
    ): LuaMultiReturn<[number, number, number | undefined, number | undefined]>;
    function GetTraitDescription(
      this: void,
      entryID: number,
      rank: number
    ): string;
    function GetTraitSystemFlags(this: void, configID: number): number;
    function GetTraitSystemWidgetSetID(this: void, configID: number): number;
    function GetTreeCurrencyInfo(
      this: void,
      configID: number,
      treeID: number,
      excludeStagedChanges: boolean
    ): TreeCurrencyInfo[];
    function GetTreeHash(this: void, treeID: number): number[];
    function GetTreeInfo(
      this: void,
      configID: number,
      treeID: number
    ): TraitTreeInfo;
    function GetTreeNodes(this: void, treeID: number): number[];
    function HasValidInspectData(this: void): boolean;
    function IsReadyForCommit(this: void): boolean;
    function PurchaseRank(
      this: void,
      configID: number,
      nodeID: number
    ): boolean;
    function RefundAllRanks(
      this: void,
      configID: number,
      nodeID: number
    ): boolean;
    function RefundRank(
      this: void,
      configID: number,
      nodeID: number,
      clearEdges?: boolean
    ): boolean;
    function ResetTree(this: void, configID: number, treeID: number): boolean;
    function ResetTreeByCurrency(
      this: void,
      configID: number,
      treeID: number,
      traitCurrencyID: number
    ): boolean;
    function RollbackConfig(this: void, configID: number): boolean;
    function SetSelection(
      this: void,
      configID: number,
      nodeID: number,
      nodeEntryID?: number,
      clearEdges?: boolean
    ): boolean;
    function StageConfig(this: void, configID: number): boolean;
    function TalentTestUnlearnSpells(this: void): void;
  }

  interface SimpleAnimAlpha {
    GetFromAlpha(): number;
    GetToAlpha(): number;
    SetFromAlpha(normalizedAlpha: number): void;
    SetToAlpha(normalizedAlpha: number): void;
  }

  interface SimpleAnim {
    GetDuration(): number;
    GetElapsed(): number;
    GetEndDelay(): number;
    GetOrder(): number;
    GetProgress(): number;
    GetRegionParent(): CScriptObject;
    GetScript(scriptTypeName: string, bindingType?: number): luaFunction;
    GetSmoothProgress(): number;
    GetSmoothing(): SmoothingType;
    GetStartDelay(): number;
    GetTarget(): CScriptObject;
    HasScript(scriptName: string): boolean;
    HookScript(
      scriptTypeName: string,
      script: luaFunction,
      bindingType?: number
    ): void;
    IsDelaying(): boolean;
    IsDone(): boolean;
    IsPaused(): boolean;
    IsPlaying(): boolean;
    IsStopped(): boolean;
    Pause(): void;
    Play(): void;
    Restart(): void;
    SetChildKey(childKey: string): boolean;
    SetDuration(durationSec: number, recomputeGroupDuration?: boolean): void;
    SetEndDelay(delaySec: number, recomputeGroupDuration?: boolean): void;
    SetOrder(newOrder: number): void;
    SetParent(parent: SimpleAnimGroup, order?: number): void;
    SetPlaying(play: boolean): void;
    SetScript(scriptTypeName: string, script?: luaFunction): void;
    SetSmoothProgress(durationSec: number): void;
    SetSmoothing(weights: SmoothingType): void;
    SetStartDelay(delaySec: number, recomputeGroupDuration?: boolean): void;
    SetTarget(target: CScriptObject): boolean;
    SetTargetKey(key: string): boolean;
    SetTargetName(name: string): boolean;
    SetTargetParent(): boolean;
    Stop(): void;
  }

  interface SimpleAnimatableObject {
    CreateAnimationGroup(name?: string, templateName?: string): SimpleAnimGroup;
    GetAnimationGroups(): ScriptObject;
    StopAnimating(): void;
  }

  interface SimpleAnimFlipBook {
    GetFlipBookColumns(): number;
    GetFlipBookFrameHeight(): number;
    GetFlipBookFrameWidth(): number;
    GetFlipBookFrames(): number;
    GetFlipBookRows(): number;
    SetFlipBookColumns(columns: number): void;
    SetFlipBookFrameHeight(height: number): void;
    SetFlipBookFrameWidth(width: number): void;
    SetFlipBookFrames(frames: number): void;
    SetFlipBookRows(rows: number): void;
  }

  interface SimpleAnimGroup {
    CreateAnimation(
      animationType?: string,
      name?: string,
      templateName?: string
    ): SimpleAnim;
    Finish(): void;
    GetAnimationSpeedMultiplier(): number;
    GetAnimations(): ScriptObject;
    GetDuration(): number;
    GetElapsed(): number;
    GetLoopState(): string;
    GetLooping(): LoopType;
    GetProgress(): number;
    GetScript(scriptTypeName: string, bindingType?: number): luaFunction;
    HasScript(scriptName: string): boolean;
    HookScript(
      scriptTypeName: string,
      script: luaFunction,
      bindingType?: number
    ): void;
    IsDone(): boolean;
    IsPaused(): boolean;
    IsPendingFinish(): boolean;
    IsPlaying(): boolean;
    IsReverse(): boolean;
    IsSetToFinalAlpha(): boolean;
    Pause(): void;
    Play(reverse?: boolean, offset?: number): void;
    RemoveAnimations(): void;
    Restart(reverse?: boolean, offset?: number): void;
    SetAnimationSpeedMultiplier(animationSpeedMultiplier: number): void;
    SetLooping(loopType: LoopType): void;
    SetPlaying(play: boolean): void;
    SetScript(scriptTypeName: string, script?: luaFunction): void;
    SetToFinalAlpha(setToFinalAlpha: boolean): void;
    Stop(): void;
  }

  interface SimpleAnimPath {
    CreateControlPoint(
      name?: string,
      templateName?: string,
      order?: number
    ): SimpleControlPoint;
    GetControlPoints(): ScriptObject;
    GetCurveType(): CurveType;
    GetMaxControlPointOrder(): number;
    SetCurveType(curveType: CurveType): void;
  }

  interface SimpleAnimRotation {
    GetDegrees(): number;
    GetOrigin(): LuaMultiReturn<[FramePoint, number, number]>;
    GetRadians(): number;
    SetDegrees(angle: number): void;
    SetOrigin(point: FramePoint, originX: number, originY: number): void;
    SetRadians(angle: number): void;
  }

  interface SimpleAnimScale {
    GetOrigin(): LuaMultiReturn<[FramePoint, number, number]>;
    GetScale(): LuaMultiReturn<[number, number]>;
    GetScaleFrom(): LuaMultiReturn<[number, number]>;
    GetScaleTo(): LuaMultiReturn<[number, number]>;
    SetOrigin(point: FramePoint, originX: number, originY: number): void;
    SetScale(scaleX: number, scaleY: number): void;
    SetScaleFrom(scaleX: number, scaleY: number): void;
    SetScaleTo(scaleX: number, scaleY: number): void;
  }

  interface SimpleAnimScaleLine {}

  interface SimpleAnimTextureCoordTranslation {
    GetOffset(): LuaMultiReturn<[number, number]>;
    SetOffset(offsetU: number, offsetV: number): void;
  }

  interface SimpleAnimTranslation {
    GetOffset(): LuaMultiReturn<[uiUnit, uiUnit]>;
    SetOffset(offsetX: uiUnit, offsetY: uiUnit): void;
  }

  interface SimpleAnimTranslationLine {}

  interface SimpleAnimVertexColor {
    GetEndColor(): colorRGBA;
    GetStartColor(): colorRGBA;
    SetEndColor(color: colorRGBA): void;
    SetStartColor(color: colorRGBA): void;
  }

  interface SimpleBrowser {
    ClearFocus(): void;
    CopyExternalLink(): void;
    DeleteCookies(): void;
    NavigateBack(): void;
    NavigateForward(): void;
    NavigateHome(urlType: string): void;
    NavigateReload(): void;
    NavigateStop(): void;
    NavigateTo(url: string): void;
    OpenExternalLink(): void;
    OpenTicket(index: number): void;
    SetFocus(): void;
    SetZoom(zoom: number): void;
  }

  interface SimpleButton extends SimpleFrame {
    ClearDisabledTexture(): void;
    ClearHighlightTexture(): void;
    ClearNormalTexture(): void;
    ClearPushedTexture(): void;
    Click(button?: string, isDown?: boolean): void;
    Disable(): void;
    Enable(): void;
    GetButtonState(): SimpleButtonStateToken;
    GetDisabledFontObject(): SimpleFont;
    GetDisabledTexture(): SimpleTexture;
    GetFontString(): SimpleFontString;
    GetHighlightFontObject(): SimpleFont;
    GetHighlightTexture(): SimpleTexture;
    GetMotionScriptsWhileDisabled(): boolean;
    GetNormalFontObject(): SimpleFont;
    GetNormalTexture(): SimpleTexture;
    GetPushedTextOffset(): LuaMultiReturn<[uiUnit, uiUnit]>;
    GetPushedTexture(): SimpleTexture;
    GetText(): string;
    GetTextHeight(): uiUnit;
    GetTextWidth(): uiUnit;
    IsEnabled(): boolean;
    RegisterForClicks(unpackedPrimitiveType: number): void;
    RegisterForMouse(unpackedPrimitiveType: number): void;
    SetButtonState(buttonState: SimpleButtonStateToken, lock?: boolean): void;
    SetDisabledAtlas(atlas: textureAtlas): void;
    SetDisabledFontObject(font: SimpleFont): void;
    SetDisabledTexture(asset: TextureAsset): void;
    SetEnabled(enabled?: boolean): void;
    SetFontString(fontString: SimpleFontString): void;
    SetFormattedText(text: string): void;
    SetHighlightAtlas(atlas: textureAtlas, blendMode?: BlendMode): void;
    SetHighlightFontObject(font: SimpleFont): void;
    SetHighlightTexture(asset: TextureAsset, blendMode?: BlendMode): void;
    SetMotionScriptsWhileDisabled(motionScriptsWhileDisabled: boolean): void;
    SetNormalAtlas(atlas: textureAtlas): void;
    SetNormalFontObject(font: SimpleFont): void;
    SetNormalTexture(asset: TextureAsset): void;
    SetPushedAtlas(atlas: textureAtlas): void;
    SetPushedTextOffset(offsetX: uiUnit, offsetY: uiUnit): void;
    SetPushedTexture(asset: TextureAsset): void;
    SetText(text?: string): void;
  }

  interface SimpleCheckbox extends SimpleButton {
    GetChecked(): boolean;
    GetCheckedTexture(): SimpleTexture;
    GetDisabledCheckedTexture(): SimpleTexture;
    SetChecked(checked?: boolean): void;
    SetCheckedTexture(asset: TextureAsset): void;
    SetDisabledCheckedTexture(asset: TextureAsset): void;
  }

  interface SimpleColorSelect {
    ClearColorWheelTexture(): void;
    GetColorAlpha(): number;
    GetColorAlphaTexture(): SimpleTexture;
    GetColorAlphaThumbTexture(): SimpleTexture;
    GetColorHSV(): LuaMultiReturn<[number, number, number]>;
    GetColorRGB(): LuaMultiReturn<[number, number, number]>;
    GetColorValueTexture(): SimpleTexture;
    GetColorValueThumbTexture(): SimpleTexture;
    GetColorWheelTexture(): SimpleTexture;
    GetColorWheelThumbTexture(): SimpleTexture;
    SetColorAlpha(alpha: number): void;
    SetColorAlphaTexture(texture: SimpleTexture): void;
    SetColorAlphaThumbTexture(texture: TextureAsset): void;
    SetColorHSV(hsvX: number, hsvY: number, hsvZ: number): void;
    SetColorRGB(rgbR: number, rgbG: number, rgbB: number): void;
    SetColorValueTexture(texture: SimpleTexture): void;
    SetColorValueThumbTexture(texture: TextureAsset): void;
    SetColorWheelTexture(texture: SimpleTexture): void;
    SetColorWheelThumbTexture(texture: TextureAsset): void;
  }

  interface SimpleControlPoint {
    GetOffset(): LuaMultiReturn<[uiUnit, uiUnit]>;
    GetOrder(): number;
    SetOffset(offsetX: uiUnit, offsetY: uiUnit): void;
    SetOrder(order: number): void;
    SetParent(parent: SimplePathAnim, order?: number): void;
  }

  interface SimpleEditBox {
    AddHistoryLine(text: string): void;
    ClearFocus(): void;
    ClearHighlightText(): void;
    ClearHistory(): void;
    Disable(): void;
    Enable(): void;
    GetAltArrowKeyMode(): boolean;
    GetBlinkSpeed(): number;
    GetCursorPosition(): number;
    GetDisplayText(): string;
    GetFont(): LuaMultiReturn<[string, uiUnit, TBFFlags]>;
    GetFontObject(): SimpleFont;
    GetHighlightColor(): LuaMultiReturn<[number, number, number, number]>;
    GetHistoryLines(): number;
    GetIndentedWordWrap(): boolean;
    GetInputLanguage(): string;
    GetJustifyH(): JustifyHorizontal;
    GetJustifyV(): JustifyVertical;
    GetMaxBytes(): number;
    GetMaxLetters(): number;
    GetNumLetters(): number;
    GetNumber(): number | undefined;
    GetShadowColor(): LuaMultiReturn<[number, number, number, number]>;
    GetShadowOffset(): LuaMultiReturn<[number, number]>;
    GetSpacing(): uiUnit;
    GetText(): string;
    GetTextColor(): LuaMultiReturn<[number, number, number, number]>;
    GetTextInsets(): LuaMultiReturn<[uiUnit, uiUnit, uiUnit, uiUnit]>;
    GetUTF8CursorPosition(): number;
    GetVisibleTextByteLimit(): number;
    HasFocus(): boolean;
    HasText(): boolean;
    HighlightText(start?: number, stop?: number): void;
    Insert(text: string): void;
    IsAlphabeticOnly(): boolean;
    IsAutoFocus(): boolean;
    IsCountInvisibleLetters(): boolean;
    IsEnabled(): boolean;
    IsInIMECompositionMode(): boolean;
    IsMultiLine(): boolean;
    IsNumeric(): boolean;
    IsNumericFullRange(): boolean;
    IsPassword(): boolean;
    IsSecureText(): boolean;
    ResetInputMode(): void;
    SetAlphabeticOnly(enabled?: boolean): void;
    SetAltArrowKeyMode(altMode?: boolean): void;
    SetAutoFocus(autoFocus?: boolean): void;
    SetBlinkSpeed(cursorBlinkSpeedSec: number): void;
    SetCountInvisibleLetters(countInvisibleLetters?: boolean): void;
    SetCursorPosition(cursorPosition: number): void;
    SetEnabled(enabled?: boolean): void;
    SetFocus(): void;
    SetFont(fontFile: string, height: uiFontHeight, flags: TBFFlags): boolean;
    SetFontObject(font: SimpleFont): void;
    SetHighlightColor(
      colorR: number,
      colorG: number,
      colorB: number,
      a?: SingleColorValue
    ): void;
    SetHistoryLines(numHistoryLines: number): void;
    SetIndentedWordWrap(isIndented?: boolean): void;
    SetJustifyH(justifyH: JustifyHorizontal): void;
    SetJustifyV(justifyV: JustifyVertical): void;
    SetMaxBytes(maxBytes: number): void;
    SetMaxLetters(maxLetters: number): void;
    SetMultiLine(multiline?: boolean): void;
    SetNumber(number: number): void;
    SetNumeric(isNumeric?: boolean): void;
    SetNumericFullRange(isNumeric?: boolean): void;
    SetPassword(isPassword?: boolean): void;
    SetSecureText(isSecure?: boolean): void;
    SetSecurityDisablePaste(): void;
    SetSecurityDisableSetText(): void;
    SetShadowColor(
      colorR: number,
      colorG: number,
      colorB: number,
      a?: SingleColorValue
    ): void;
    SetShadowOffset(offsetX: number, offsetY: number): void;
    SetSpacing(fontHeight: uiUnit): void;
    SetText(text: string): void;
    SetTextColor(
      colorR: number,
      colorG: number,
      colorB: number,
      a?: SingleColorValue
    ): void;
    SetTextInsets(
      left: uiUnit,
      right: uiUnit,
      top: uiUnit,
      bottom: uiUnit
    ): void;
    SetVisibleTextByteLimit(maxVisibleBytes: number): void;
    ToggleInputLanguage(): void;
  }

  interface SimpleFont extends SimpleFrameScriptObject {
    CopyFontObject(sourceFont: SimpleFont): void;
    GetAlpha(): SingleColorValue;
    GetFont(): LuaMultiReturn<[string, uiFontHeight, TBFFlags]>;
    GetFontObject(): SimpleFont;
    GetIndentedWordWrap(): boolean;
    GetJustifyH(): JustifyHorizontal;
    GetJustifyV(): JustifyVertical;
    GetShadowColor(): LuaMultiReturn<[number, number, number, number]>;
    GetShadowOffset(): LuaMultiReturn<[number, number]>;
    GetSpacing(): uiUnit;
    GetTextColor(): LuaMultiReturn<[number, number, number, number]>;
    SetAlpha(alpha: SingleColorValue): void;
    SetFont(fontFile: string, height: uiFontHeight, flags: TBFFlags): void;
    SetFontObject(font: SimpleFont): void;
    SetIndentedWordWrap(wordWrap: boolean): void;
    SetJustifyH(justifyH: JustifyHorizontal): void;
    SetJustifyV(justifyV: JustifyVertical): void;
    SetShadowColor(
      colorR: number,
      colorG: number,
      colorB: number,
      a?: SingleColorValue
    ): void;
    SetShadowOffset(offsetX: number, offsetY: number): void;
    SetSpacing(spacing: uiUnit): void;
    SetTextColor(
      colorR: number,
      colorG: number,
      colorB: number,
      a?: SingleColorValue
    ): void;
  }

  interface SimpleFontString extends SimpleRegion {
    CalculateScreenAreaFromCharacterSpan(
      leftIndex: number,
      rightIndex: number
    ): uiBoundsRect[] | undefined;
    CanNonSpaceWrap(): boolean;
    CanWordWrap(): boolean;
    FindCharacterIndexAtCoordinate(
      x: uiUnit,
      y: uiUnit
    ): LuaMultiReturn<[number, boolean]>;
    GetFieldSize(): number;
    GetFont(): LuaMultiReturn<[string | undefined, uiUnit, TBFFlags]>;
    GetFontObject(): SimpleFont;
    GetIndentedWordWrap(): boolean;
    GetJustifyH(): JustifyHorizontal;
    GetJustifyV(): JustifyVertical;
    GetLineHeight(): uiUnit;
    GetMaxLines(): number;
    GetNumLines(): number;
    GetRotation(): number;
    GetShadowColor(): LuaMultiReturn<[number, number, number, number]>;
    GetShadowOffset(): LuaMultiReturn<[number, number]>;
    GetSpacing(): uiUnit;
    GetStringHeight(): uiUnit;
    GetStringWidth(): uiUnit;
    GetText(): string;
    GetTextColor(): LuaMultiReturn<[number, number, number, number]>;
    GetTextScale(): number;
    GetUnboundedStringWidth(): uiUnit;
    GetWrappedWidth(): uiUnit;
    IsTruncated(): boolean;
    SetAlphaGradient(start: number, length: number): boolean;
    SetFixedColor(fixedColor: boolean): void;
    SetFont(fontFile: string, fontHeight: uiUnit, flags: TBFFlags): void;
    SetFontObject(font: SimpleFont): void;
    SetFormattedText(text: string): void;
    SetIndentedWordWrap(wrap: boolean): void;
    SetJustifyH(justifyH: JustifyHorizontal): void;
    SetJustifyV(justifyV: JustifyVertical): void;
    SetMaxLines(maxLines: number): void;
    SetNonSpaceWrap(wrap: boolean): void;
    SetRotation(radians: number): void;
    SetShadowColor(
      colorR: number,
      colorG: number,
      colorB: number,
      a?: SingleColorValue
    ): void;
    SetShadowOffset(offsetX: number, offsetY: number): void;
    SetSpacing(spacing: uiUnit): void;
    SetText(text?: string): void;
    SetTextColor(
      colorR: number,
      colorG: number,
      colorB: number,
      a?: SingleColorValue
    ): void;
    SetTextHeight(height: uiUnit): void;
    SetTextScale(textScale: number): void;
    SetTextToFit(text?: string): void;
    SetWordWrap(wrap: boolean): void;
  }

  interface SimpleFrame extends SimpleScriptRegionResizing {
    AbortDrag(): void;
    CanChangeAttribute(): boolean;
    CreateFontString(
      name?: string,
      drawLayer?: DrawLayer,
      templateName?: string
    ): SimpleFontString;
    CreateLine(
      name?: string,
      drawLayer?: DrawLayer,
      templateName?: string,
      subLevel?: number
    ): SimpleLine;
    CreateMaskTexture(
      name?: string,
      drawLayer?: DrawLayer,
      templateName?: string,
      subLevel?: number
    ): SimpleMaskTexture;
    CreateTexture(
      name?: string,
      drawLayer?: DrawLayer,
      templateName?: string,
      subLevel?: number
    ): SimpleTexture;
    DesaturateHierarchy(desaturation: number, excludeRoot?: boolean): void;
    DisableDrawLayer(layer: DrawLayer): void;
    DoesClipChildren(): boolean;
    EnableDrawLayer(layer: DrawLayer): void;
    EnableGamePadButton(enable?: boolean): void;
    EnableGamePadStick(enable?: boolean): void;
    EnableKeyboard(enable?: boolean): void;
    ExecuteAttribute(
      attributeName: string,
      unpackedPrimitiveType: string
    ): LuaMultiReturn<[boolean, string]>;
    GetAlpha(): SingleColorValue;
    GetAttribute(attributeName: string): string;
    GetBoundsRect(): LuaMultiReturn<[uiUnit, uiUnit, uiUnit, uiUnit]>;
    GetChildren(): ScriptObject;
    GetClampRectInsets(): LuaMultiReturn<[uiUnit, uiUnit, uiUnit, uiUnit]>;
    GetDontSavePosition(): boolean;
    GetEffectiveAlpha(): SingleColorValue;
    GetEffectiveScale(): number;
    GetEffectivelyFlattensRenderLayers(): boolean;
    GetFlattensRenderLayers(): boolean;
    GetFrameLevel(): number;
    GetFrameStrata(): FrameStrata;
    GetHitRectInsets(): LuaMultiReturn<[uiUnit, uiUnit, uiUnit, uiUnit]>;
    GetHyperlinksEnabled(): boolean;
    GetID(): number;
    GetNumChildren(): number;
    GetNumRegions(): number;
    GetPropagateKeyboardInput(): boolean;
    GetRaisedFrameLevel(): number;
    GetRegions(): ScriptObject;
    GetResizeBounds(): LuaMultiReturn<[uiUnit, uiUnit, uiUnit, uiUnit]>;
    GetScale(): number;
    GetWindow(): SimpleWindow;
    HasFixedFrameLevel(): boolean;
    HasFixedFrameStrata(): boolean;
    Hide(): void;
    InterceptStartDrag(delegate: SimpleFrame): boolean;
    IsClampedToScreen(): boolean;
    IsEventRegistered(
      eventName: string
    ): LuaMultiReturn<[boolean, string | undefined]>;
    IsGamePadButtonEnabled(): boolean;
    IsGamePadStickEnabled(): boolean;
    IsIgnoringParentAlpha(): boolean;
    IsIgnoringParentScale(): boolean;
    IsKeyboardEnabled(): boolean;
    IsMovable(): boolean;
    IsObjectLoaded(): boolean;
    IsResizable(): boolean;
    IsShown(): boolean;
    IsToplevel(): boolean;
    IsUserPlaced(): boolean;
    IsUsingParentLevel(): boolean;
    IsVisible(): boolean;
    LockHighlight(): void;
    Lower(): void;
    Raise(): void;
    RegisterAllEvents(): void;
    RegisterEvent(eventName: string): boolean;
    RegisterForDrag(unpackedPrimitiveType: number): void;
    RegisterUnitEvent(eventName: string, units: string): boolean;
    RotateTextures(radians: number, x?: number, y?: number): void;
    SetAlpha(alpha: SingleColorValue): void;
    SetAttribute(attributeName: string, value: string): void;
    SetAttributeNoHandler(attributeName: string, value: string): void;
    SetClampRectInsets(
      left: uiUnit,
      right: uiUnit,
      top: uiUnit,
      bottom: uiUnit
    ): void;
    SetClampedToScreen(clampedToScreen: boolean): void;
    SetClipsChildren(clipsChildren: boolean): void;
    SetDontSavePosition(dontSave: boolean): void;
    SetDrawLayerEnabled(layer: DrawLayer, isEnabled?: boolean): void;
    SetFixedFrameLevel(isFixed: boolean): void;
    SetFixedFrameStrata(isFixed: boolean): void;
    SetFlattensRenderLayers(flatten: boolean): void;
    SetFrameLevel(frameLevel: number): void;
    SetFrameStrata(strata: FrameStrata): void;
    SetHighlightLocked(locked: boolean): void;
    SetHitRectInsets(
      left: uiUnit,
      right: uiUnit,
      top: uiUnit,
      bottom: uiUnit
    ): void;
    SetHyperlinksEnabled(enabled?: boolean): void;
    SetID(id: number): void;
    SetIgnoreParentAlpha(ignore: boolean): void;
    SetIgnoreParentScale(ignore: boolean): void;
    SetIsFrameBuffer(isFrameBuffer: boolean): void;
    SetMovable(movable: boolean): void;
    SetPropagateKeyboardInput(propagate: boolean): void;
    SetResizable(resizable: boolean): void;
    SetResizeBounds(
      minWidth: uiUnit,
      minHeight: uiUnit,
      maxWidth?: uiUnit,
      maxHeight?: uiUnit
    ): void;
    SetScale(scale: number): void;
    SetShown(shown?: boolean): void;
    SetToplevel(topLevel: boolean): void;
    SetUserPlaced(userPlaced: boolean): void;
    SetUsingParentLevel(usingParentLevel: boolean): void;
    SetWindow(window?: SimpleWindow): void;
    Show(): void;
    StartMoving(alwaysStartFromMouse?: boolean): void;
    StartSizing(resizePoint?: FramePoint, alwaysStartFromMouse?: boolean): void;
    StopMovingOrSizing(): void;
    UnlockHighlight(): void;
    UnregisterAllEvents(): void;
    UnregisterEvent(eventName: string): boolean;
  }

  interface SimpleFrameScriptObject {
    GetName(): string;
    GetObjectType(): string;
    IsForbidden(): boolean;
    IsObjectType(objectType: string): boolean;
    SetForbidden(): void;
  }

  interface SimpleHTML {
    GetContentHeight(): uiUnit;
    GetFont(
      textType: HTMLTextType
    ): LuaMultiReturn<[string, uiFontHeight, TBFFlags]>;
    GetFontObject(textType: HTMLTextType): SimpleFont;
    GetHyperlinkFormat(): string;
    GetIndentedWordWrap(textType: HTMLTextType): boolean;
    GetJustifyH(textType: HTMLTextType): JustifyHorizontal;
    GetJustifyV(textType: HTMLTextType): JustifyVertical;
    GetShadowColor(
      textType: HTMLTextType
    ): LuaMultiReturn<[number, number, number, number]>;
    GetShadowOffset(textType: HTMLTextType): LuaMultiReturn<[number, number]>;
    GetSpacing(textType: HTMLTextType): uiUnit;
    GetTextColor(
      textType: HTMLTextType
    ): LuaMultiReturn<[number, number, number, number]>;
    GetTextData(): HTMLContentNode[];
    SetFont(
      textType: HTMLTextType,
      fontFile: string,
      height: uiFontHeight,
      flags: TBFFlags
    ): void;
    SetFontObject(textType: HTMLTextType, font: SimpleFont): void;
    SetHyperlinkFormat(format: string): void;
    SetIndentedWordWrap(textType: HTMLTextType, wordWrap: boolean): void;
    SetJustifyH(textType: HTMLTextType, justifyH: JustifyHorizontal): void;
    SetJustifyV(textType: HTMLTextType, justifyV: JustifyVertical): void;
    SetShadowColor(
      textType: HTMLTextType,
      colorR: number,
      colorG: number,
      colorB: number,
      a?: SingleColorValue
    ): void;
    SetShadowOffset(
      textType: HTMLTextType,
      offsetX: number,
      offsetY: number
    ): void;
    SetSpacing(textType: HTMLTextType, spacing: uiUnit): void;
    SetText(text: string, ignoreMarkup?: boolean): void;
    SetTextColor(
      textType: HTMLTextType,
      colorR: number,
      colorG: number,
      colorB: number,
      a?: SingleColorValue
    ): void;
  }

  interface HTMLContentNode {
    text: string;
    type: HTMLTextType;
    align: JustifyHorizontal;
  }

  interface SimpleLine {
    ClearAllPoints(): void;
    GetEndPoint(): LuaMultiReturn<[FramePoint, ScriptRegion, uiUnit, uiUnit]>;
    GetHitRectThickness(): uiUnit;
    GetStartPoint(): LuaMultiReturn<[FramePoint, ScriptRegion, uiUnit, uiUnit]>;
    GetThickness(): uiUnit;
    SetEndPoint(
      relativePoint: FramePoint,
      relativeTo: ScriptRegion,
      offsetX?: uiUnit,
      offsetY?: uiUnit
    ): void;
    SetHitRectThickness(thickness: uiUnit): void;
    SetStartPoint(
      relativePoint: FramePoint,
      relativeTo: ScriptRegion,
      offsetX?: uiUnit,
      offsetY?: uiUnit
    ): void;
    SetThickness(thickness: uiUnit): void;
  }

  interface SimpleMapScene {
    GetMaxCharacterSlotCount(): number;
    GetModelDrawLayer(): LuaMultiReturn<[DrawLayer, number]>;
    GetViewInsets(): LuaMultiReturn<[uiUnit, uiUnit, uiUnit, uiUnit]>;
    SetModelDrawLayer(layer: DrawLayer): void;
    SetViewInsets(
      left: uiUnit,
      right: uiUnit,
      top: uiUnit,
      bottom: uiUnit
    ): void;
  }

  interface SimpleMaskTexture {}

  interface SimpleMessageFrame {
    AddMessage(
      text: string,
      colorR: number,
      colorG: number,
      colorB: number,
      a?: SingleColorValue,
      messageID?: number
    ): void;
    Clear(): void;
    GetFadeDuration(): number;
    GetFadePower(): number;
    GetFading(): boolean;
    GetFont(): LuaMultiReturn<[string, uiFontHeight, TBFFlags]>;
    GetFontObject(): SimpleFont;
    GetFontStringByID(messageID: number): SimpleFontString;
    GetIndentedWordWrap(): boolean;
    GetInsertMode(): InsertMode;
    GetJustifyH(): JustifyHorizontal;
    GetJustifyV(): JustifyVertical;
    GetShadowColor(): LuaMultiReturn<[number, number, number, number]>;
    GetShadowOffset(): LuaMultiReturn<[number, number]>;
    GetSpacing(): uiUnit;
    GetTextColor(): LuaMultiReturn<[number, number, number, number]>;
    GetTimeVisible(): number;
    HasMessageByID(messageID: number): boolean;
    ResetMessageFadeByID(messageID: number): void;
    SetFadeDuration(fadeDurationSeconds: number): void;
    SetFadePower(fadePower: number): void;
    SetFading(fading: boolean): void;
    SetFont(fontFile: string, height: uiFontHeight, flags: TBFFlags): void;
    SetFontObject(font: SimpleFont): void;
    SetIndentedWordWrap(wordWrap: boolean): void;
    SetInsertMode(mode: InsertMode): void;
    SetJustifyH(justifyH: JustifyHorizontal): void;
    SetJustifyV(justifyV: JustifyVertical): void;
    SetShadowColor(
      colorR: number,
      colorG: number,
      colorB: number,
      a?: SingleColorValue
    ): void;
    SetShadowOffset(offsetX: number, offsetY: number): void;
    SetSpacing(spacing: uiUnit): void;
    SetTextColor(
      colorR: number,
      colorG: number,
      colorB: number,
      a?: SingleColorValue
    ): void;
    SetTimeVisible(timeVisibleSeconds: number): void;
  }

  interface SimpleModel {
    AdvanceTime(): void;
    ClearFog(): void;
    ClearModel(): void;
    ClearTransform(): void;
    GetCameraDistance(): number;
    GetCameraFacing(): number;
    GetCameraPosition(): LuaMultiReturn<[number, number, number]>;
    GetCameraRoll(): number;
    GetCameraTarget(): LuaMultiReturn<[number, number, number]>;
    GetDesaturation(): number;
    GetFacing(): number;
    GetFogColor(): LuaMultiReturn<[number, number, number, number]>;
    GetFogFar(): number;
    GetFogNear(): number;
    GetLight(): LuaMultiReturn<[boolean, ModelLight]>;
    GetModelAlpha(): number;
    GetModelDrawLayer(): LuaMultiReturn<[DrawLayer, number]>;
    GetModelFileID(): fileID;
    GetModelScale(): number;
    GetPaused(): boolean;
    GetPitch(): number;
    GetPosition(): LuaMultiReturn<[number, number, number]>;
    GetRoll(): number;
    GetShadowEffect(): number;
    GetViewInsets(): LuaMultiReturn<[uiUnit, uiUnit, uiUnit, uiUnit]>;
    GetViewTranslation(): LuaMultiReturn<[uiUnit, uiUnit]>;
    GetWorldScale(): number;
    HasAttachmentPoints(): boolean;
    HasCustomCamera(): boolean;
    IsUsingModelCenterToTransform(): boolean;
    MakeCurrentCameraCustom(): void;
    ReplaceIconTexture(asset: FileAsset): void;
    SetCamera(cameraIndex: number): void;
    SetCameraDistance(distance: number): void;
    SetCameraFacing(radians: number): void;
    SetCameraPosition(
      positionX: number,
      positionY: number,
      positionZ: number
    ): void;
    SetCameraRoll(radians: number): void;
    SetCameraTarget(targetX: number, targetY: number, targetZ: number): void;
    SetCustomCamera(cameraIndex: number): void;
    SetDesaturation(strength: number): void;
    SetFacing(facing: number): void;
    SetFogColor(
      colorR: number,
      colorG: number,
      colorB: number,
      a?: SingleColorValue
    ): void;
    SetFogFar(fogFar: number): void;
    SetFogNear(fogNear: number): void;
    SetGlow(glow: number): void;
    SetLight(enabled: boolean, light: ModelLight): void;
    SetModel(asset: ModelAsset, noMip?: boolean): void;
    SetModelAlpha(alpha: number): void;
    SetModelDrawLayer(layer: DrawLayer): void;
    SetModelScale(scale: number): void;
    SetParticlesEnabled(enabled: boolean): void;
    SetPaused(paused: boolean): void;
    SetPitch(pitch: number): void;
    SetPosition(positionX: number, positionY: number, positionZ: number): void;
    SetRoll(roll: number): void;
    SetSequence(sequence: number): void;
    SetSequenceTime(sequence: number, timeOffset: number): void;
    SetShadowEffect(strength: number): void;
    SetTransform(
      translation?: vector3,
      rotation?: vector3,
      scale?: number
    ): void;
    SetViewInsets(
      left: uiUnit,
      right: uiUnit,
      top: uiUnit,
      bottom: uiUnit
    ): void;
    SetViewTranslation(x: uiUnit, y: uiUnit): void;
    TransformCameraSpaceToModelSpace(cameraPosition: vector3): vector3;
    UseModelCenterToTransform(useCenter: boolean): void;
  }

  interface SimpleModelFFX {
    AddCharacterLight(index: number | undefined, light: ModelLight): void;
    AddLight(index: number | undefined, light: ModelLight): void;
    AddPetLight(index: number | undefined, light: ModelLight): void;
    ResetLights(): void;
  }

  interface SimpleMovie {
    EnableSubtitles(enable: boolean): void;
    StartMovie(
      movieID: number,
      looping?: boolean
    ): LuaMultiReturn<[boolean, number]>;
    StartMovieByName(
      movieName: string,
      looping?: boolean,
      resolution?: number
    ): LuaMultiReturn<[boolean, number]>;
    StopMovie(): void;
  }

  interface SimpleObject extends SimpleFrameScriptObject {
    ClearParentKey(): void;
    GetDebugName(preferParentKey?: boolean): string;
    GetParent(): CScriptObject;
    GetParentKey(): string;
    SetParentKey(parentKey: string, clearOtherKeys?: boolean): void;
  }

  interface SimpleOffScreenFrame {
    ApplySnapshot(texture: SimpleTexture, snapshotID: number): boolean;
    Flush(): void;
    GetMaxSnapshots(): number;
    IsSnapshotValid(snapshotID: number): boolean;
    SetMaxSnapshots(maxSnapshots: number): void;
    TakeSnapshot(): number | undefined;
    TestPrintToFile(snapshotID: number, filename: string): boolean;
    UsesNPOT(): boolean | undefined;
  }

  interface SimpleRegion extends SimpleScriptRegionResizing {
    GetAlpha(): SingleColorValue;
    GetDrawLayer(): LuaMultiReturn<[DrawLayer, number]>;
    GetEffectiveScale(): number;
    GetScale(): number;
    GetVertexColor(): LuaMultiReturn<[number, number, number, number]>;
    IsIgnoringParentAlpha(): boolean;
    IsIgnoringParentScale(): boolean;
    IsObjectLoaded(): boolean;
    SetAlpha(alpha: SingleColorValue): void;
    SetDrawLayer(layer: DrawLayer, sublevel?: number): void;
    SetIgnoreParentAlpha(ignore: boolean): void;
    SetIgnoreParentScale(ignore: boolean): void;
    SetScale(scale: number): void;
    SetVertexColor(
      colorR: number,
      colorG: number,
      colorB: number,
      a?: SingleColorValue
    ): void;
  }

  interface SimpleScriptRegion extends SimpleObject {
    CanChangeProtectedState(): boolean;
    CollapsesLayout(): boolean;
    EnableMouse(enable?: boolean): void;
    EnableMouseMotion(enable?: boolean): void;
    EnableMouseWheel(enable?: boolean): void;
    GetBottom(): uiUnit;
    GetCenter(): LuaMultiReturn<[uiUnit, uiUnit]>;
    GetHeight(ignoreRect?: boolean): uiUnit;
    GetLeft(): uiUnit;
    GetRect(): LuaMultiReturn<[uiUnit, uiUnit, uiUnit, uiUnit]>;
    GetRight(): uiUnit;
    GetScaledRect(): LuaMultiReturn<[uiUnit, uiUnit, uiUnit, uiUnit]>;
    GetScript(scriptTypeName: string, bindingType?: number): luaFunction;
    GetSize(ignoreRect?: boolean): LuaMultiReturn<[uiUnit, uiUnit]>;
    GetSourceLocation(): string;
    GetTop(): uiUnit;
    GetWidth(ignoreRect?: boolean): uiUnit;
    HasScript(scriptName: string): boolean;
    Hide(): void;
    HookScript(
      scriptTypeName: string,
      script: luaFunction,
      bindingType?: number
    ): void;
    IsAnchoringRestricted(): boolean;
    IsCollapsed(): boolean;
    IsDragging(): boolean;
    IsMouseClickEnabled(): boolean;
    IsMouseEnabled(): boolean;
    IsMouseMotionEnabled(): boolean;
    IsMouseMotionFocus(): boolean;
    IsMouseOver(
      offsetTop?: uiUnit,
      offsetBottom?: uiUnit,
      offsetLeft?: uiUnit,
      offsetRight?: uiUnit
    ): boolean;
    IsMouseWheelEnabled(): boolean;
    IsProtected(): LuaMultiReturn<[boolean, boolean]>;
    IsRectValid(): boolean;
    IsShown(): boolean;
    IsVisible(): boolean;
    SetCollapsesLayout(collapsesLayout: boolean): void;
    SetMouseClickEnabled(enabled?: boolean): void;
    SetMouseMotionEnabled(enabled?: boolean): void;
    SetParent(parent?: SimpleFrame): void;
    SetPassThroughButtons(unpackedPrimitiveType: number): void;
    SetPropagateMouseClicks(propagate: boolean): void;
    SetPropagateMouseMotion(propagate: boolean): void;
    SetScript(scriptTypeName: string, script?: luaFunction): void;
    SetShown(show?: boolean): void;
    Show(): void;
  }

  interface SimpleScriptRegionResizing extends SimpleScriptRegion {
    AdjustPointsOffset(x: uiUnit, y: uiUnit): void;
    ClearAllPoints(): void;
    ClearPoint(point: FramePoint): void;
    ClearPointsOffset(): void;
    GetNumPoints(): number;
    GetPoint(
      anchorIndex?: number,
      resolveCollapsed?: boolean
    ): LuaMultiReturn<[FramePoint, ScriptRegion, FramePoint, uiUnit, uiUnit]>;
    GetPointByName(
      point: FramePoint,
      resolveCollapsed?: boolean
    ): LuaMultiReturn<[FramePoint, ScriptRegion, FramePoint, uiUnit, uiUnit]>;
    SetAllPoints(relativeTo: ScriptRegion, doResize?: boolean): void;
    SetHeight(height: uiUnit): void;
    SetPoint(
      point: FramePoint,
      relativeTo: ScriptRegion,
      relativePoint: FramePoint,
      offsetX: uiUnit,
      offsetY: uiUnit
    ): void;
    SetSize(x: uiUnit, y: uiUnit): void;
    SetWidth(width: uiUnit): void;
  }

  interface SimpleScrollFrame {
    GetHorizontalScroll(): uiUnit;
    GetHorizontalScrollRange(): uiUnit;
    GetScrollChild(): SimpleFrame;
    GetVerticalScroll(): uiUnit;
    GetVerticalScrollRange(): uiUnit;
    SetHorizontalScroll(offset: uiUnit): void;
    SetScrollChild(scrollChild: SimpleFrame): void;
    SetVerticalScroll(offset: uiUnit): void;
    UpdateScrollChildRect(): void;
  }

  interface SimpleSlider {
    Disable(): void;
    Enable(): void;
    GetMinMaxValues(): LuaMultiReturn<[number, number]>;
    GetObeyStepOnDrag(): boolean;
    GetOrientation(): Orientation;
    GetStepsPerPage(): number;
    GetThumbTexture(): SimpleTexture;
    GetValue(): number;
    GetValueStep(): number;
    IsDraggingThumb(): boolean;
    IsEnabled(): boolean;
    SetEnabled(enabled: boolean): void;
    SetMinMaxValues(minValue: number, maxValue: number): void;
    SetObeyStepOnDrag(obeyStepOnDrag: boolean): void;
    SetOrientation(orientation: Orientation): void;
    SetStepsPerPage(stepsPerPage: number): void;
    SetThumbTexture(asset: TextureAsset): void;
    SetValue(value: number, treatAsMouseEvent?: boolean): void;
    SetValueStep(valueStep: number): void;
  }

  interface SimpleStatusBar extends SimpleFrame {
    GetFillStyle(): StatusBarFillStyle;
    GetMinMaxValues(): LuaMultiReturn<[number, number]>;
    GetOrientation(): Orientation;
    GetReverseFill(): boolean;
    GetRotatesTexture(): boolean;
    GetStatusBarColor(): LuaMultiReturn<[number, number, number, number]>;
    GetStatusBarDesaturation(): normalizedValue;
    GetStatusBarTexture(): SimpleTexture;
    GetValue(): number;
    IsStatusBarDesaturated(): boolean;
    SetColorFill(
      colorR: number,
      colorG: number,
      colorB: number,
      a?: SingleColorValue
    ): void;
    SetFillStyle(fillStyle: StatusBarFillStyle): void;
    SetMinMaxValues(minValue: number, maxValue: number): void;
    SetOrientation(orientation: Orientation): void;
    SetReverseFill(isReverseFill: boolean): void;
    SetRotatesTexture(rotatesTexture: boolean): void;
    SetStatusBarColor(
      colorR: number,
      colorG: number,
      colorB: number,
      a?: SingleColorValue
    ): void;
    SetStatusBarDesaturated(desaturated?: boolean): void;
    SetStatusBarDesaturation(desaturation: normalizedValue): void;
    SetStatusBarTexture(asset: TextureAsset): void;
    SetValue(value: number): void;
  }

  interface SimpleTexture extends SimpleTextureBase {
    AddMaskTexture(mask: SimpleMaskTexture): void;
    GetMaskTexture(index: number): SimpleMaskTexture;
    GetNumMaskTextures(): size;
    RemoveMaskTexture(mask: SimpleMaskTexture): void;
  }

  interface SimpleTextureBase extends SimpleRegion {
    ClearTextureSlice(): void;
    GetAtlas(): textureAtlas;
    GetBlendMode(): BlendMode;
    GetDesaturation(): normalizedValue;
    GetHorizTile(): boolean;
    GetRotation(): LuaMultiReturn<[number, vector2]>;
    GetTexCoord(): LuaMultiReturn<[number, number]>;
    GetTexelSnappingBias(): normalizedValue;
    GetTexture(): string | undefined;
    GetTextureFileID(): fileID;
    GetTextureFilePath(): string | undefined;
    GetTextureSliceMargins(): LuaMultiReturn<[number, number, number, number]>;
    GetTextureSliceMode(): Enum.UITextureSliceMode;
    GetVertTile(): boolean;
    GetVertexOffset(vertexIndex: number): LuaMultiReturn<[uiUnit, uiUnit]>;
    IsBlockingLoadRequested(): boolean;
    IsDesaturated(): boolean;
    IsSnappingToPixelGrid(): boolean;
    SetAtlas(
      atlas: textureAtlas,
      useAtlasSize?: boolean,
      filterMode?: FilterMode,
      resetTexCoords?: boolean
    ): void;
    SetBlendMode(blendMode: BlendMode): void;
    SetBlockingLoadsRequested(blocking?: boolean): void;
    SetColorTexture(
      colorR: number,
      colorG: number,
      colorB: number,
      a?: SingleColorValue
    ): void;
    SetDesaturated(desaturated?: boolean): void;
    SetDesaturation(desaturation: normalizedValue): void;
    SetGradient(
      orientation: Orientation,
      minColor: colorRGBA,
      maxColor: colorRGBA
    ): void;
    SetHorizTile(tiling?: boolean): void;
    SetMask(file: string): void;
    SetRotation(radians: number, normalizedRotationPoint?: vector2): void;
    SetSnapToPixelGrid(snap?: boolean): void;
    SetTexCoord(left: number, right: number, bottom: number, top: number): void;
    SetTexelSnappingBias(bias: normalizedValue): void;
    SetTexture(
      textureAsset?: string,
      wrapModeHorizontal?: string,
      wrapModeVertical?: string,
      filterMode?: string
    ): boolean;
    SetTextureSliceMargins(
      left: number,
      top: number,
      right: number,
      bottom: number
    ): void;
    SetTextureSliceMode(sliceMode: Enum.UITextureSliceMode): void;
    SetVertTile(tiling?: boolean): void;
    SetVertexOffset(
      vertexIndex: number,
      offsetX: uiUnit,
      offsetY: uiUnit
    ): void;
  }

  namespace C_SkillInfo {}

  function AreDangerousScriptsAllowed(this: void): boolean;
  function SetAllowDangerousScripts(this: void, allowed?: boolean): void;

  namespace C_Social {
    function GetLastAchievement(
      this: void
    ): LuaMultiReturn<[number, string, string, fileID]>;
    function GetLastItem(
      this: void
    ): LuaMultiReturn<[number, string, fileID, number, number, string]>;
    function GetLastScreenshotIndex(this: void): number;
    function GetMaxTweetLength(this: void): number;
    function GetScreenshotInfoByIndex(
      this: void,
      index: number
    ): LuaMultiReturn<[number, number]>;
    function GetTweetLength(this: void, tweetText: string): number;
    function IsSocialEnabled(this: void): boolean;
    function TwitterCheckStatus(this: void): void;
    function TwitterConnect(this: void): void;
    function TwitterDisconnect(this: void): void;
    function TwitterGetMSTillCanPost(this: void): number;
    function TwitterPostMessage(this: void, message: string): void;
  }

  namespace C_SocialQueue {
    interface SocialQueueConfig {
      TOASTS_DISABLED: boolean;
      TOAST_DURATION: number;
      DELAY_DURATION: number;
      QUEUE_MULTIPLIER: number;
      PLAYER_MULTIPLIER: number;
      PLAYER_FRIEND_VALUE: number;
      PLAYER_GUILD_VALUE: number;
      THROTTLE_INITIAL_THRESHOLD: number;
      THROTTLE_DECAY_TIME: number;
      THROTTLE_PRIORITY_SPIKE: number;
      THROTTLE_MIN_THRESHOLD: number;
      THROTTLE_PVP_PRIORITY_NORMAL: number;
      THROTTLE_PVP_PRIORITY_LOW: number;
      THROTTLE_PVP_HONOR_THRESHOLD: number;
      THROTTLE_LFGLIST_PRIORITY_DEFAULT: number;
      THROTTLE_LFGLIST_PRIORITY_ABOVE: number;
      THROTTLE_LFGLIST_PRIORITY_BELOW: number;
      THROTTLE_LFGLIST_ILVL_SCALING_ABOVE: number;
      THROTTLE_LFGLIST_ILVL_SCALING_BELOW: number;
      THROTTLE_RF_PRIORITY_ABOVE: number;
      THROTTLE_RF_ILVL_SCALING_ABOVE: number;
      THROTTLE_DF_MAX_ITEM_LEVEL: number;
      THROTTLE_DF_BEST_PRIORITY: number;
    }

    interface SocialQueueGroupInfo {
      canJoin: boolean;
      numQueues: number;
      needTank: boolean;
      needHealer: boolean;
      needDamage: boolean;
      isSoloQueueParty: boolean;
      questSessionActive: boolean;
      leaderGUID: WOWGUID;
    }

    interface SocialQueueGroupQueueInfo {
      clientID: number;
      eligible: boolean;
      needTank: boolean;
      needHealer: boolean;
      needDamage: boolean;
      isAutoAccept: boolean;
      queueData: QueueSpecificInfo;
    }

    interface SocialQueuePlayerInfo {
      guid: WOWGUID;
      clubId?: ClubId;
    }

    function GetAllGroups(
      this: void,
      allowNonJoinable?: boolean,
      allowNonQueuedGroups?: boolean
    ): WOWGUID[];
    function GetConfig(this: void): SocialQueueConfig;
    function GetGroupForPlayer(
      this: void,
      playerGUID: WOWGUID
    ): LuaMultiReturn<[WOWGUID, boolean]>;
    function GetGroupInfo(
      this: void,
      groupGUID: WOWGUID
    ): LuaMultiReturn<
      [boolean, number, boolean, boolean, boolean, boolean, boolean, WOWGUID]
    >;
    function GetGroupMembers(
      this: void,
      groupGUID: WOWGUID
    ): SocialQueuePlayerInfo[];
    function GetGroupQueues(
      this: void,
      groupGUID: WOWGUID
    ): SocialQueueGroupQueueInfo[];
    function RequestToJoin(
      this: void,
      groupGUID: WOWGUID,
      applyAsTank?: boolean,
      applyAsHealer?: boolean,
      applyAsDamage?: boolean
    ): boolean;
    function SignalToastDisplayed(
      this: void,
      groupGUID: WOWGUID,
      priority: number
    ): void;
  }

  namespace C_SocialRestrictions {
    function AcknowledgeRegionalChatDisabled(this: void): void;
    function IsChatDisabled(this: void): boolean;
    function IsMuted(this: void): boolean;
    function IsSilenced(this: void): boolean;
    function IsSquelched(this: void): boolean;
    function SetChatDisabled(this: void, disabled: boolean): void;
  }

  namespace C_Soulbinds {
    interface ConduitCollectionData {
      conduitID: number;
      conduitRank: number;
      conduitItemLevel: number;
      conduitType: Enum.SoulbindConduitType;
      conduitSpecSetID: number;
      conduitSpecIDs: number[];
      conduitSpecName?: string;
      covenantID?: number;
      conduitItemID: number;
    }

    interface SoulbindConduitData {
      conduitID: number;
      conduitRank: number;
    }

    interface SoulbindData {
      ID: number;
      covenantID: number;
      name: string;
      description: string;
      textureKit: textureKit;
      unlocked: boolean;
      cvarIndex: number;
      tree: SoulbindTree;
      modelSceneData: SoulbindModelSceneData;
      activationSoundKitID: number;
      playerConditionReason?: string;
    }

    interface SoulbindModelSceneData {
      creatureDisplayInfoID: number;
      modelSceneActorID: number;
    }

    interface SoulbindNode {
      ID: number;
      row: number;
      column: number;
      icon: fileID;
      spellID: number;
      playerConditionReason?: string;
      conduitID: number;
      conduitRank: number;
      state: Enum.SoulbindNodeState;
      conduitType?: Enum.SoulbindConduitType;
      parentNodeIDs: number[];
      failureRenownRequirement?: number;
      socketEnhanced?: boolean;
    }

    interface SoulbindTree {
      editable: boolean;
      nodes: SoulbindNode[];
    }

    function ActivateSoulbind(this: void, soulbindID: number): void;
    function CanActivateSoulbind(
      this: void,
      soulbindID: number
    ): LuaMultiReturn<[boolean, string | undefined]>;
    function CanModifySoulbind(this: void): boolean;
    function CanResetConduitsInSoulbind(
      this: void,
      soulbindID: number
    ): LuaMultiReturn<[boolean, string | undefined]>;
    function CanSwitchActiveSoulbindTreeBranch(this: void): boolean;
    function CloseUI(this: void): void;
    function CommitPendingConduitsInSoulbind(
      this: void,
      soulbindID: number
    ): void;
    function FindNodeIDActuallyInstalled(
      this: void,
      soulbindID: number,
      conduitID: number
    ): number;
    function FindNodeIDAppearingInstalled(
      this: void,
      soulbindID: number,
      conduitID: number
    ): number;
    function FindNodeIDPendingInstall(
      this: void,
      soulbindID: number,
      conduitID: number
    ): number;
    function FindNodeIDPendingUninstall(
      this: void,
      soulbindID: number,
      conduitID: number
    ): number;
    function GetActiveSoulbindID(this: void): number;
    function GetConduitCollection(
      this: void,
      conduitType: Enum.SoulbindConduitType
    ): ConduitCollectionData[];
    function GetConduitCollectionCount(this: void): number;
    function GetConduitCollectionData(
      this: void,
      conduitID: number
    ): ConduitCollectionData | undefined;
    function GetConduitCollectionDataAtCursor(
      this: void
    ): ConduitCollectionData | undefined;
    function GetConduitCollectionDataByVirtualID(
      this: void,
      virtualID: number
    ): ConduitCollectionData | undefined;
    function GetConduitDisplayed(this: void, nodeID: number): number;
    function GetConduitHyperlink(
      this: void,
      conduitID: number,
      rank: number
    ): string;
    function GetConduitIDPendingInstall(this: void, nodeID: number): number;
    function GetConduitQuality(
      this: void,
      conduitID: number,
      rank: number
    ): number;
    function GetConduitRank(this: void, conduitID: number): number;
    function GetConduitSpellID(
      this: void,
      conduitID: number,
      conduitRank: number
    ): number;
    function GetInstalledConduitID(this: void, nodeID: number): number;
    function GetNode(this: void, nodeID: number): SoulbindNode;
    function GetSoulbindData(this: void, soulbindID: number): SoulbindData;
    function GetSpecsAssignedToSoulbind(
      this: void,
      soulbindID: number
    ): number[];
    function GetTree(this: void, treeID: number): SoulbindTree;
    function HasAnyInstalledConduitInSoulbind(
      this: void,
      soulbindID: number
    ): boolean;
    function HasAnyPendingConduits(this: void): boolean;
    function HasPendingConduitsInSoulbind(
      this: void,
      soulbindID: number
    ): boolean;
    function IsConduitInstalled(this: void, nodeID: number): boolean;
    function IsConduitInstalledInSoulbind(
      this: void,
      soulbindID: number,
      conduitID: number
    ): boolean;
    function IsItemConduitByItemInfo(this: void, itemInfo: ItemInfo): boolean;
    function IsNodePendingModify(this: void, nodeID: number): boolean;
    function IsUnselectedConduitPendingInSoulbind(
      this: void,
      soulbindID: number
    ): boolean;
    function ModifyNode(
      this: void,
      nodeID: number,
      conduitID: number,
      type: Enum.SoulbindConduitTransactionType
    ): void;
    function SelectNode(this: void, nodeID: number): void;
    function UnmodifyNode(this: void, nodeID: number): void;
  }

  namespace C_Sound {
    function GetSoundScaledVolume(this: void, soundHandle: number): number;
    function IsPlaying(this: void, soundHandle: number): boolean;
    function PlayItemSound(
      this: void,
      soundType: ItemSoundType,
      itemLocation: ItemLocation
    ): void;
    function PlayVocalErrorSound(
      this: void,
      vocalErrorSoundID: Vocalerrorsounds
    ): void;
  }

  namespace C_SpecializationInfo {
    interface PvpTalentInfo {
      talentID: number;
      name: string;
      icon: number;
      selected: boolean;
      available: boolean;
      spellID: number;
      unlocked: boolean;
      known: boolean;
      grantedByAura: boolean;
      dependenciesUnmet: boolean;
      dependenciesUnmetReason?: string;
    }

    interface PvpTalentSlotInfo {
      enabled: boolean;
      level: number;
      selectedTalentID?: number;
      availableTalentIDs: number[];
    }

    function CanPlayerUsePVPTalentUI(
      this: void
    ): LuaMultiReturn<[boolean, string]>;
    function CanPlayerUseTalentSpecUI(
      this: void
    ): LuaMultiReturn<[boolean, string]>;
    function CanPlayerUseTalentUI(
      this: void
    ): LuaMultiReturn<[boolean, string]>;
    function GetAllSelectedPvpTalentIDs(this: void): number[];
    function GetClassIDFromSpecID(
      this: void,
      specID: number
    ): number | undefined;
    function GetInspectSelectedPvpTalent(
      this: void,
      inspectedUnit: UnitToken,
      talentIndex: number
    ): number | undefined;
    function GetPvpTalentAlertStatus(
      this: void
    ): LuaMultiReturn<[boolean, boolean]>;
    function GetPvpTalentInfo(
      this: void,
      talentID: number
    ): PvpTalentInfo | undefined;
    function GetPvpTalentSlotInfo(
      this: void,
      talentIndex: number
    ): PvpTalentSlotInfo | undefined;
    function GetPvpTalentSlotUnlockLevel(
      this: void,
      talentIndex: number
    ): number | undefined;
    function GetPvpTalentUnlockLevel(
      this: void,
      talentID: number
    ): number | undefined;
    function GetSpecIDs(this: void, specSetID: number): number[];
    function GetSpellsDisplay(this: void, specializationID: number): number[];
    function IsInitialized(this: void): boolean;
    function IsPvpTalentLocked(this: void, talentID: number): boolean;
    function MatchesCurrentSpecSet(this: void, specSetID: number): boolean;
    function SetPvpTalentLocked(
      this: void,
      talentID: number,
      locked: boolean
    ): void;
  }

  interface SpecializationInfoResult {
    id: number;
    name: string;
    description: string;
    icon: fileID;
    role: string;
    recommended: boolean;
    allowedForBoost: boolean;
    masterySpell1?: number;
    masterySpell2?: number;
  }

  function GetNumSpecializationsForClassID(this: void, specID: number): number;
  function GetSpecializationInfoForClassID(
    this: void,
    classID: number,
    index: number,
    gender?: number
  ): LuaMultiReturn<
    [
      number,
      string,
      string,
      fileID,
      string,
      boolean,
      boolean,
      number | undefined,
      number | undefined,
    ]
  >;
  function GetSpecializationInfoForSpecID(
    this: void,
    specID: number,
    gender?: number
  ): LuaMultiReturn<
    [
      number,
      string,
      string,
      fileID,
      string,
      boolean,
      boolean,
      number | undefined,
      number | undefined,
    ]
  >;
  function GetSpecializationNameForSpecID(
    this: void,
    specID: number,
    gender?: number
  ): string | undefined;

  namespace C_SpellActivationOverlay {}

  namespace C_Spell {
    interface SpellBookItemInfo {
      actionID: number;
      spellID?: number;
      itemType: Enum.SpellBookItemType;
      name: string;
      subName: string;
      iconID: fileID;
      isPassive: boolean;
      isOffSpec: boolean;
      skillLineIndex?: number;
    }

    interface SpellBookSkillLineInfo {
      name: string;
      iconID: fileID;
      itemIndexOffset: number;
      numSpellBookItems: number;
      isGuild: boolean;
      shouldHide: boolean;
      specID?: number;
      offSpecID?: number;
    }

    function CastSpellBookItem(
      this: void,
      spellBookItemSlotIndex: number,
      spellBookItemSpellBank: Enum.SpellBookSpellBank,
      targetSelf?: boolean
    ): void;
    function ContainsAnyDisenchantSpell(this: void): boolean;
    function FindSpellBookSlotForSpell(
      this: void,
      spellIdentifier: SpellIdentifier,
      includeHidden?: boolean,
      includeFlyouts?: boolean,
      includeFutureSpells?: boolean,
      includeOffSpec?: boolean
    ): LuaMultiReturn<[number, Enum.SpellBookSpellBank]>;
    function GetCurrentLevelSpells(this: void, level: number): number[];
    function GetNumSpellBookSkillLines(this: void): number;
    function GetSkillLineIndexByID(
      this: void,
      skillLineID: number
    ): number | undefined;
    function GetSpellBookItemAutoCast(
      this: void,
      spellBookItemSlotIndex: number,
      spellBookItemSpellBank: Enum.SpellBookSpellBank
    ): LuaMultiReturn<[boolean, boolean]>;
    function GetSpellBookItemCastCount(
      this: void,
      spellBookItemSlotIndex: number,
      spellBookItemSpellBank: Enum.SpellBookSpellBank
    ): number;
    function GetSpellBookItemCharges(
      this: void,
      spellBookItemSlotIndex: number,
      spellBookItemSpellBank: Enum.SpellBookSpellBank
    ): SpellChargeInfo;
    function GetSpellBookItemCooldown(
      this: void,
      spellBookItemSlotIndex: number,
      spellBookItemSpellBank: Enum.SpellBookSpellBank
    ): SpellCooldownInfo;
    function GetSpellBookItemDescription(
      this: void,
      spellBookItemSlotIndex: number,
      spellBookItemSpellBank: Enum.SpellBookSpellBank
    ): string;
    function GetSpellBookItemInfo(
      this: void,
      spellBookItemSlotIndex: number,
      spellBookItemSpellBank: Enum.SpellBookSpellBank
    ): SpellBookItemInfo;
    function GetSpellBookItemLevelLearned(
      this: void,
      spellBookItemSlotIndex: number,
      spellBookItemSpellBank: Enum.SpellBookSpellBank
    ): number;
    function GetSpellBookItemLink(
      this: void,
      spellBookItemSlotIndex: number,
      spellBookItemSpellBank: Enum.SpellBookSpellBank,
      glyphID?: number
    ): string;
    function GetSpellBookItemLossOfControlCooldown(
      this: void,
      spellBookItemSlotIndex: number,
      spellBookItemSpellBank: Enum.SpellBookSpellBank
    ): LuaMultiReturn<[number, number]>;
    function GetSpellBookItemName(
      this: void,
      spellBookItemSlotIndex: number,
      spellBookItemSpellBank: Enum.SpellBookSpellBank
    ): LuaMultiReturn<[string, string]>;
    function GetSpellBookItemPowerCost(
      this: void,
      spellBookItemSlotIndex: number,
      spellBookItemSpellBank: Enum.SpellBookSpellBank
    ): SpellPowerCostInfo[];
    function GetSpellBookItemSkillLineIndex(
      this: void,
      spellBookItemSlotIndex: number,
      spellBookItemSpellBank: Enum.SpellBookSpellBank
    ): number | undefined;
    function GetSpellBookItemTexture(
      this: void,
      spellBookItemSlotIndex: number,
      spellBookItemSpellBank: Enum.SpellBookSpellBank
    ): fileID;
    function GetSpellBookItemTradeSkillLink(
      this: void,
      spellBookItemSlotIndex: number,
      spellBookItemSpellBank: Enum.SpellBookSpellBank
    ): string;
    function GetSpellBookItemType(
      this: void,
      spellBookItemSlotIndex: number,
      spellBookItemSpellBank: Enum.SpellBookSpellBank
    ): LuaMultiReturn<[Enum.SpellBookItemType, number, number | undefined]>;
    function GetSpellBookSkillLineInfo(
      this: void,
      skillLineIndex: number
    ): SpellBookSkillLineInfo;
    function GetTrackedNameplateCooldownSpells(this: void): number[];
    function HasPetSpells(this: void): LuaMultiReturn<[number, string]>;
    function IsAutoAttackSpellBookItem(
      this: void,
      spellBookItemSlotIndex: number,
      spellBookItemSpellBank: Enum.SpellBookSpellBank
    ): boolean;
    function IsClassTalentSpellBookItem(
      this: void,
      spellBookItemSlotIndex: number,
      spellBookItemSpellBank: Enum.SpellBookSpellBank
    ): boolean;
    function IsPvPTalentSpellBookItem(
      this: void,
      spellBookItemSlotIndex: number,
      spellBookItemSpellBank: Enum.SpellBookSpellBank
    ): boolean;
    function IsRangedAutoAttackSpellBookItem(
      this: void,
      spellBookItemSlotIndex: number,
      spellBookItemSpellBank: Enum.SpellBookSpellBank
    ): boolean;
    function IsSpellBookItemHarmful(
      this: void,
      spellBookItemSlotIndex: number,
      spellBookItemSpellBank: Enum.SpellBookSpellBank
    ): boolean;
    function IsSpellBookItemHelpful(
      this: void,
      spellBookItemSlotIndex: number,
      spellBookItemSpellBank: Enum.SpellBookSpellBank
    ): boolean;
    function IsSpellBookItemInRange(
      this: void,
      spellBookItemSlotIndex: number,
      spellBookItemSpellBank: Enum.SpellBookSpellBank,
      targetUnit?: UnitToken
    ): boolean | undefined;
    function IsSpellBookItemOffSpec(
      this: void,
      spellBookItemSlotIndex: number,
      spellBookItemSpellBank: Enum.SpellBookSpellBank
    ): boolean;
    function IsSpellBookItemPassive(
      this: void,
      spellBookItemSlotIndex: number,
      spellBookItemSpellBank: Enum.SpellBookSpellBank
    ): boolean;
    function IsSpellBookItemUsable(
      this: void,
      spellBookItemSlotIndex: number,
      spellBookItemSpellBank: Enum.SpellBookSpellBank
    ): LuaMultiReturn<[boolean, boolean]>;
    function PickupSpellBookItem(
      this: void,
      spellBookItemSlotIndex: number,
      spellBookItemSpellBank: Enum.SpellBookSpellBank
    ): void;
    function SetSpellBookItemAutoCastEnabled(
      this: void,
      spellBookItemSlotIndex: number,
      spellBookItemSpellBank: Enum.SpellBookSpellBank,
      enabled: boolean
    ): void;
    function SpellBookItemHasRange(
      this: void,
      spellBookItemSlotIndex: number,
      spellBookItemSpellBank: Enum.SpellBookSpellBank
    ): boolean;
    function ToggleSpellBookItemAutoCast(
      this: void,
      spellBookItemSlotIndex: number,
      spellBookItemSpellBank: Enum.SpellBookSpellBank
    ): void;
  }

  namespace C_Spell {
    interface DeadlyDebuffInfo {
      criticalTimeRemainingMs?: number;
      criticalStacks?: number;
      priority: number;
      warningText: string;
      soundKitID?: number;
    }

    interface SpellInfo {
      name: string;
      iconID: fileID;
      originalIconID: fileID;
      castTime: number;
      minRange: number;
      maxRange: number;
      spellID: number;
    }

    function DoesSpellExist(
      this: void,
      spellIdentifier: SpellIdentifier
    ): boolean;
    function GetDeadlyDebuffInfo(
      this: void,
      spellIdentifier: SpellIdentifier
    ): DeadlyDebuffInfo;
    function GetMawPowerBorderAtlasBySpellID(
      this: void,
      spellID: number
    ): textureAtlas;
    function GetMawPowerLinkBySpellID(this: void, spellID: number): string;
    function GetOverrideSpell(
      this: void,
      spellIdentifier: SpellIdentifier,
      spec?: number,
      onlyKnown?: boolean,
      ignoreOverrideSpellID?: number
    ): number;
    function GetSchoolString(this: void, schoolMask: number): string;
    function GetSpellAutoCast(
      this: void,
      spellIdentifier: SpellIdentifier
    ): LuaMultiReturn<[boolean, boolean]>;
    function GetSpellCastCount(
      this: void,
      spellIdentifier: SpellIdentifier
    ): number;
    function GetSpellCharges(
      this: void,
      spellIdentifier: SpellIdentifier
    ): SpellChargeInfo;
    function GetSpellCooldown(
      this: void,
      spellIdentifier: SpellIdentifier
    ): SpellCooldownInfo;
    function GetSpellDescription(
      this: void,
      spellIdentifier: SpellIdentifier
    ): string;
    function GetSpellIDForSpellIdentifier(
      this: void,
      spellIdentifier: SpellIdentifier
    ): number;
    function GetSpellInfo(
      this: void,
      spellIdentifier: SpellIdentifier
    ): SpellInfo;
    function GetSpellLevelLearned(
      this: void,
      spellIdentifier: SpellIdentifier
    ): number;
    function GetSpellLink(
      this: void,
      spellIdentifier: SpellIdentifier,
      glyphID?: number
    ): string;
    function GetSpellLossOfControlCooldown(
      this: void,
      spellIdentifier: SpellIdentifier
    ): LuaMultiReturn<[number, number]>;
    function GetSpellName(this: void, spellIdentifier: SpellIdentifier): string;
    function GetSpellPowerCost(
      this: void,
      spellIdentifier: SpellIdentifier
    ): SpellPowerCostInfo[];
    function GetSpellQueueWindow(this: void): number;
    function GetSpellSkillLineAbilityRank(
      this: void,
      spellIdentifier: SpellIdentifier
    ): number;
    function GetSpellSubtext(
      this: void,
      spellIdentifier: SpellIdentifier
    ): string;
    function GetSpellTexture(
      this: void,
      spellIdentifier: SpellIdentifier
    ): LuaMultiReturn<[fileID, fileID]>;
    function GetSpellTradeSkillLink(
      this: void,
      spellIdentifier: SpellIdentifier
    ): string;
    function IsAutoAttackSpell(
      this: void,
      spellIdentifier: SpellIdentifier
    ): boolean;
    function IsAutoRepeatSpell(
      this: void,
      spellIdentifier: SpellIdentifier
    ): boolean;
    function IsClassTalentSpell(
      this: void,
      spellIdentifier: SpellIdentifier
    ): boolean;
    function IsCurrentSpell(
      this: void,
      spellIdentifier: SpellIdentifier
    ): boolean;
    function IsPressHoldReleaseSpell(
      this: void,
      spellIdentifier: SpellIdentifier
    ): boolean;
    function IsPvPTalentSpell(
      this: void,
      spellIdentifier: SpellIdentifier
    ): boolean;
    function IsRangedAutoAttackSpell(
      this: void,
      spellIdentifier: SpellIdentifier
    ): boolean;
    function IsSpellDataCached(
      this: void,
      spellIdentifier: SpellIdentifier
    ): boolean;
    function IsSpellDisabled(
      this: void,
      spellIdentifier: SpellIdentifier
    ): boolean;
    function IsSpellHarmful(
      this: void,
      spellIdentifier: SpellIdentifier
    ): boolean;
    function IsSpellHelpful(
      this: void,
      spellIdentifier: SpellIdentifier
    ): boolean;
    function IsSpellInRange(
      this: void,
      spellIdentifier: SpellIdentifier,
      targetUnit?: UnitToken
    ): boolean | undefined;
    function IsSpellPassive(
      this: void,
      spellIdentifier: SpellIdentifier
    ): boolean;
    function IsSpellUsable(
      this: void,
      spellIdentifier: SpellIdentifier
    ): LuaMultiReturn<[boolean, boolean]>;
    function PickupSpell(this: void, spellIdentifier: SpellIdentifier): void;
    function RequestLoadSpellData(
      this: void,
      spellIdentifier: SpellIdentifier
    ): void;
    function SetSpellAutoCastEnabled(
      this: void,
      spellIdentifier: SpellIdentifier,
      enabled: boolean
    ): void;
    function SpellHasRange(
      this: void,
      spellIdentifier: SpellIdentifier
    ): boolean;
    function TargetSpellIsEnchanting(this: void): boolean;
    function TargetSpellJumpsUpgradeTrack(this: void): boolean;
    function TargetSpellReplacesBonusTree(this: void): boolean;
    function ToggleSpellAutoCast(
      this: void,
      spellIdentifier: SpellIdentifier
    ): void;
  }

  interface SpellChargeInfo {
    currentCharges: number;
    maxCharges: number;
    cooldownStartTime: number;
    cooldownDuration: number;
    chargeModRate: number;
  }

  interface SpellCooldownInfo {
    startTime: number;
    duration: number;
    isEnabled: boolean;
    modRate: number;
  }

  interface SpellPowerCostInfo {
    type: Enum.PowerType;
    name: string;
    cost: number;
    minCost: number;
    costPercent: number;
    costPerSec: number;
    requiredAuraID: number;
    hasRequiredAura: boolean;
  }

  namespace C_SplashScreen {
    interface SplashScreenInfo {
      textureKit: textureKit;
      minDisplayCharLevel: number;
      minQuestDisplayLevel: number;
      soundKitID: number;
      allianceQuestID?: number;
      hordeQuestID?: number;
      header: string;
      topLeftFeatureTitle: string;
      topLeftFeatureDesc: string;
      bottomLeftFeatureTitle: string;
      bottomLeftFeatureDesc: string;
      rightFeatureTitle: string;
      rightFeatureDesc: string;
      shouldShowQuest: boolean;
      screenType: Enum.SplashScreenType;
      gameMenuRequest: boolean;
    }

    function AcknowledgeSplash(this: void): void;
    function CanViewSplashScreen(this: void): boolean;
    function RequestLatestSplashScreen(this: void, fromGameMenu: boolean): void;
  }

  namespace C_StableInfo {
    interface PetInfo {
      slotID: number;
      icon: fileID;
      name: string;
      level: number;
      familyName: string;
      specialization: string;
      type: string;
      abilities: number[];
      displayID: number;
      isFavorite: boolean;
      isExotic: boolean;
      uiModelSceneID?: number;
      petNumber: number;
      creatureID: number;
    }

    function ClosePetStables(this: void): void;
    function GetActivePetList(this: void): PetInfo[];
    function GetNumActivePets(this: void): number;
    function GetNumStablePets(this: void): number;
    function GetStablePetFoodTypes(this: void, index: number): string[];
    function GetStablePetInfo(this: void, index: number): PetInfo | undefined;
    function GetStabledPetList(this: void): PetInfo[];
    function IsAtStableMaster(this: void): boolean;
    function IsPetFavorite(this: void, slot: number): boolean;
    function PickupStablePet(this: void, index: number): void;
    function SetPetFavorite(
      this: void,
      slot: number,
      isFavorite: boolean
    ): void;
    function SetPetSlot(this: void, index: number, slot: number): void;
  }

  namespace C_StorePublic {
    function DoesGroupHavePurchaseableProducts(
      this: void,
      groupID: number
    ): boolean;
    function IsDisabledByParentalControls(this: void): boolean;
    function IsEnabled(this: void): boolean;
  }

  function GetAvailableBandwidth(this: void): number;
  function GetBackgroundLoadingStatus(this: void): number;
  function GetDownloadedPercentage(this: void): number;
  function GetFileStreamingStatus(this: void): number;

  function StripHyperlinks(
    this: void,
    text: string,
    maintainColor?: boolean,
    maintainBrackets?: boolean,
    stripNewlines?: boolean,
    maintainAtlases?: boolean
  ): string;

  namespace C_SummonInfo {
    function CancelSummon(this: void): void;
    function ConfirmSummon(this: void): void;
    function GetSummonConfirmAreaName(this: void): string;
    function GetSummonConfirmSummoner(this: void): string | undefined;
    function GetSummonConfirmTimeLeft(this: void): number;
    function GetSummonReason(this: void): number;
    function IsSummonSkippingStartExperience(this: void): boolean;
  }

  namespace C_SuperTrack {
    function ClearAllSuperTracked(this: void): void;
    function ClearSuperTrackedContent(this: void): void;
    function ClearSuperTrackedMapPin(this: void): void;
    function GetHighestPrioritySuperTrackingType(
      this: void
    ): Enum.SuperTrackingType | undefined;
    function GetSuperTrackedContent(
      this: void
    ): LuaMultiReturn<[Enum.ContentTrackingType, number]>;
    function GetSuperTrackedMapPin(
      this: void
    ): LuaMultiReturn<[Enum.SuperTrackingMapPinType, number]>;
    function GetSuperTrackedQuestID(this: void): number | undefined;
    function GetSuperTrackedVignette(this: void): WOWGUID | undefined;
    function IsSuperTrackingAnything(this: void): boolean;
    function IsSuperTrackingContent(this: void): boolean;
    function IsSuperTrackingCorpse(this: void): boolean;
    function IsSuperTrackingMapPin(this: void): boolean;
    function IsSuperTrackingQuest(this: void): boolean;
    function IsSuperTrackingUserWaypoint(this: void): boolean;
    function SetSuperTrackedContent(
      this: void,
      trackableType: Enum.ContentTrackingType,
      trackableID: number
    ): void;
    function SetSuperTrackedMapPin(
      this: void,
      type: Enum.SuperTrackingMapPinType,
      typeID: number
    ): void;
    function SetSuperTrackedQuestID(this: void, questID: number): void;
    function SetSuperTrackedUserWaypoint(
      this: void,
      superTracked: boolean
    ): void;
    function SetSuperTrackedVignette(this: void, vignetteGUID: WOWGUID): void;
  }

  namespace C_System {
    function GetFrameStack(this: void): ScriptRegion[];
  }

  function GetGameTime(this: void): LuaMultiReturn<[number, number]>;
  function GetLocalGameTime(this: void): LuaMultiReturn<[number, number]>;
  function GetServerTime(this: void): number;
  function GetSessionTime(this: void): number;
  function GetTickTime(this: void): number;
  function GetTime(this: void): number;
  function IsUsingFixedTimeStep(this: void): boolean;

  namespace C_TalkingHead {}

  function AssistUnit(this: void, name?: string, exactMatch?: boolean): void;
  function AttackTarget(this: void): void;
  function ClearFocus(this: void): void;
  function ClearTarget(this: void): boolean;
  function FocusUnit(this: void, name?: string): void;
  function IsTargetLoose(this: void): boolean;
  function TargetDirectionEnemy(
    this: void,
    facing: number,
    coneAngle?: number
  ): void;
  function TargetDirectionFinished(this: void): void;
  function TargetDirectionFriend(
    this: void,
    facing: number,
    coneAngle?: number
  ): void;
  function TargetLastEnemy(this: void): void;
  function TargetLastFriend(this: void): void;
  function TargetLastTarget(this: void): void;
  function TargetNearest(this: void, reverse?: boolean): void;
  function TargetNearestEnemy(this: void, reverse?: boolean): void;
  function TargetNearestEnemyPlayer(this: void, reverse?: boolean): void;
  function TargetNearestFriend(this: void, reverse?: boolean): void;
  function TargetNearestFriendPlayer(this: void, reverse?: boolean): void;
  function TargetNearestPartyMember(this: void, reverse?: boolean): void;
  function TargetNearestRaidMember(this: void, reverse?: boolean): void;
  function TargetPriorityHighlightEnd(this: void): void;
  function TargetPriorityHighlightStart(
    this: void,
    useStartDelay?: boolean
  ): void;
  function TargetToggle(this: void): void;
  function TargetUnit(this: void, name?: string, exactMatch?: boolean): void;

  namespace C_TaxiMap {
    interface MapTaxiNodeInfo {
      nodeID: number;
      position: vector2;
      name: string;
      atlasName: string;
      faction: Enum.FlightPathFaction;
      textureKit: textureKit;
      isUndiscovered: boolean;
    }

    interface TaxiNodeInfo {
      nodeID: number;
      position: vector2;
      name: string;
      state: Enum.FlightPathState;
      slotIndex: number;
      textureKit: textureKit;
      useSpecialIcon: boolean;
      specialIconCostString?: string;
      isMapLayerTransition: boolean;
    }

    function GetAllTaxiNodes(this: void, uiMapID: number): TaxiNodeInfo[];
    function GetTaxiNodesForMap(this: void, uiMapID: number): MapTaxiNodeInfo[];
    function ShouldMapShowTaxiNodes(this: void, uiMapID: number): boolean;
  }

  namespace C_Texture {
    interface AtlasInfo {
      width: number;
      height: number;
      rawSize: vector2;
      leftTexCoord: number;
      rightTexCoord: number;
      topTexCoord: number;
      bottomTexCoord: number;
      tilesHorizontally: boolean;
      tilesVertically: boolean;
      file?: fileID;
      filename?: string;
      sliceData?: UITextureSliceData;
    }
    type GetTitleIconTextureCallback = (
      this: void,
      success: boolean,
      texture: fileID
    ) => void;

    function ClearTitleIconTexture(this: void, texture: SimpleTexture): void;
    function GetAtlasElementID(this: void, atlas: textureAtlas): number;
    function GetAtlasID(this: void, atlas: textureAtlas): number;
    function GetAtlasInfo(this: void, atlas: textureAtlas): AtlasInfo;
    function GetCraftingReagentQualityChatIcon(
      this: void,
      quality: number
    ): string;
    function GetFilenameFromFileDataID(this: void, fileDataID: number): string;
    function GetTitleIconTexture(
      this: void,
      titleID: string,
      version: Enum.TitleIconVersion,
      callback: GetTitleIconTextureCallback
    ): void;
    function IsTitleIconTextureReady(
      this: void,
      titleID: string,
      version: Enum.TitleIconVersion
    ): boolean;
    function SetTitleIconTexture(
      this: void,
      texture: SimpleTexture,
      titleID: string,
      version: Enum.TitleIconVersion
    ): void;
  }

  function GetThreatStatusColor(
    this: void,
    gameErrorIndex: number
  ): LuaMultiReturn<[number, number, number]>;
  function IsThreatWarningEnabled(this: void): boolean;

  interface CalendarTime {
    monthDay: number;
    month: number;
    weekday: number;
    year: number;
    hour: number;
    minute: number;
  }

  namespace C_TimerunningUI {}

  function GetCurrentTitle(this: void): number;
  function GetNumTitles(this: void): number;
  function GetTitleName(
    this: void,
    titleMaskID: number
  ): LuaMultiReturn<[string, boolean]>;
  function IsTitleKnown(this: void, titleMaskID: number): boolean;
  function SetCurrentTitle(this: void, titleMaskID: number): void;

  namespace C_TooltipComparison {
    interface TooltipItemComparisonInfo {
      method?: Enum.TooltipComparisonMethod;
      item: TooltipComparisonItem;
      additionalItems: TooltipComparisonItem[];
    }

    function GetItemComparisonDelta(
      this: void,
      comparisonItem: TooltipComparisonItem,
      equippedItem: TooltipComparisonItem,
      pairedItem?: TooltipComparisonItem,
      addPairedStats?: boolean
    ): string[];
    function GetItemComparisonInfo(
      this: void,
      comparisonItem: TooltipComparisonItem
    ): TooltipItemComparisonInfo;
  }

  namespace C_TooltipInfo {
    function GetAchievementByID(this: void, achievementID: number): TooltipData;
    function GetAction(this: void, actionID: number): TooltipData;
    function GetArtifactItem(this: void): TooltipData;
    function GetArtifactPowerByID(this: void, powerID: number): TooltipData;
    function GetAzeriteEssence(
      this: void,
      essenceID: number,
      rank?: number
    ): TooltipData;
    function GetAzeriteEssenceSlot(
      this: void,
      slot: Enum.AzeriteEssenceSlot
    ): TooltipData;
    function GetAzeritePower(
      this: void,
      itemID: number,
      itemLevel: number,
      powerID: number,
      owningItemLink?: string
    ): TooltipData;
    function GetBackpackToken(this: void, index: number): TooltipData;
    function GetBagItem(
      this: void,
      bagIndex: Enum.BagIndex,
      slotIndex: number
    ): TooltipData;
    function GetBagItemChild(
      this: void,
      bagIndex: Enum.BagIndex,
      slotIndex: number,
      equipSlotIndex: number
    ): TooltipData;
    function GetBuybackItem(this: void, index: number): TooltipData;
    function GetCompanionPet(this: void, petGUID: WOWGUID): TooltipData;
    function GetConduit(
      this: void,
      conduitID: number,
      conduitRank: number
    ): TooltipData;
    function GetCurrencyByID(
      this: void,
      currencyID: number,
      amount?: number
    ): TooltipData;
    function GetCurrencyToken(this: void, tokenIndex: number): TooltipData;
    function GetEnhancedConduit(
      this: void,
      conduitID: number,
      rank: number
    ): TooltipData;
    function GetEquipmentSet(this: void, setID: number): TooltipData;
    function GetExistingSocketGem(
      this: void,
      index: number,
      toDestroy?: boolean
    ): TooltipData;
    function GetGuildBankItem(
      this: void,
      tab: number,
      slot: number
    ): TooltipData;
    function GetHeirloomByItemID(this: void, itemID: number): TooltipData;
    function GetHyperlink(
      this: void,
      hyperlink: string,
      optionalArg1?: number,
      optionalArg2?: number,
      hideVendorPrice?: boolean
    ): TooltipData;
    function GetInboxItem(
      this: void,
      messageIndex: number,
      attachmentIndex?: number
    ): TooltipData;
    function GetInstanceLockEncountersComplete(
      this: void,
      index: number
    ): TooltipData;
    function GetInventoryItem(
      this: void,
      unit: UnitToken,
      slot: number,
      hideUselessStats?: boolean
    ): TooltipData;
    function GetInventoryItemByID(this: void, itemID: number): TooltipData;
    function GetItemByGUID(this: void, guid: WOWGUID): TooltipData;
    function GetItemByID(
      this: void,
      itemID: number,
      quality?: number
    ): TooltipData;
    function GetItemByItemModifiedAppearanceID(
      this: void,
      itemModifiedAppearanceID: number
    ): TooltipData;
    function GetItemInteractionItem(this: void): TooltipData;
    function GetItemKey(
      this: void,
      itemID: number,
      itemLevel: number,
      itemSuffix: number,
      requiredLevel?: number
    ): TooltipData;
    function GetLFGDungeonReward(
      this: void,
      dungeonID: number,
      lootIndex: number
    ): TooltipData;
    function GetLFGDungeonShortageReward(
      this: void,
      dungeonID: number,
      shortageSeverity: number,
      lootIndex: number
    ): TooltipData;
    function GetLootCurrency(this: void, slot: number): TooltipData;
    function GetLootItem(this: void, slot: number): TooltipData;
    function GetLootRollItem(this: void, id: number): TooltipData;
    function GetMerchantCostItem(
      this: void,
      slot: number,
      costIndex: number
    ): TooltipData;
    function GetMerchantItem(this: void, slot: number): TooltipData;
    function GetMinimapMouseover(this: void): TooltipData;
    function GetMountBySpellID(
      this: void,
      spellID: number,
      checkIndoors?: boolean
    ): TooltipData;
    function GetOwnedItemByID(this: void, itemID: number): TooltipData;
    function GetPetAction(this: void, slot: number): TooltipData;
    function GetPossession(this: void, slot: number): TooltipData;
    function GetPvpBrawl(this: void, isSpecial?: boolean): TooltipData;
    function GetPvpTalent(
      this: void,
      talentID: number,
      isInspect?: boolean,
      groupIndex?: number,
      talentIndex?: number
    ): TooltipData;
    function GetQuestCurrency(
      this: void,
      type: string,
      currencyIndex: number
    ): TooltipData;
    function GetQuestItem(
      this: void,
      type: string,
      itemIndex: number,
      allowCollectionText?: boolean
    ): TooltipData;
    function GetQuestLogCurrency(
      this: void,
      type: string,
      currencyIndex: number,
      questID?: number
    ): TooltipData;
    function GetQuestLogItem(
      this: void,
      type: string,
      itemIndex: number,
      questID?: number,
      allowCollectionText?: boolean
    ): TooltipData;
    function GetQuestLogSpecialItem(
      this: void,
      questIndex: number
    ): TooltipData;
    function GetQuestPartyProgress(
      this: void,
      questID: number,
      omitTitle?: boolean,
      ignoreActivePlayer?: boolean
    ): TooltipData;
    function GetRecipeRankInfo(
      this: void,
      recipeID: number,
      rank: number
    ): TooltipData;
    function GetRecipeReagentItem(
      this: void,
      recipeSpellID: number,
      dataSlotIndex: number
    ): TooltipData;
    function GetRecipeResultItem(
      this: void,
      recipeID: number,
      craftingReagents?: CraftingReagentInfo[],
      recraftItemGUID?: WOWGUID,
      recipeLevel?: number,
      overrideQualityID?: number
    ): TooltipData;
    function GetRecipeResultItemForOrder(
      this: void,
      recipeID: number,
      craftingReagents?: CraftingReagentInfo[],
      orderID?: BigUInteger,
      recipeLevel?: number,
      overrideQualityID?: number
    ): TooltipData;
    function GetRuneforgeResultItem(
      this: void,
      itemGUID: WOWGUID,
      itemLevel: number,
      powerID?: number,
      modifiers?: number[]
    ): TooltipData;
    function GetSendMailItem(this: void, attachmentIndex?: number): TooltipData;
    function GetShapeshift(this: void, slot: number): TooltipData;
    function GetSlottedKeystone(this: void): TooltipData;
    function GetSocketGem(this: void, index: number): TooltipData;
    function GetSocketedItem(this: void): TooltipData;
    function GetSocketedRelic(this: void, slotIndex: number): TooltipData;
    function GetSpellBookItem(
      this: void,
      spellBookItemSlotIndex: number,
      spellBookItemSpellBank: Enum.SpellBookSpellBank
    ): TooltipData;
    function GetSpellByID(
      this: void,
      spellID: number,
      isPet?: boolean,
      showSubtext?: boolean,
      dontOverride?: boolean,
      difficultyID?: number,
      isLink?: boolean
    ): TooltipData;
    function GetTalent(
      this: void,
      talentID: number,
      isInspect?: boolean,
      groupIndex?: number
    ): TooltipData;
    function GetTotem(this: void, slot: number): TooltipData;
    function GetToyByItemID(this: void, itemID: number): TooltipData;
    function GetTradePlayerItem(this: void, slot: number): TooltipData;
    function GetTradeTargetItem(this: void, slot: number): TooltipData;
    function GetTrainerService(this: void, serviceIndex: number): TooltipData;
    function GetTraitEntry(
      this: void,
      entryID: number,
      rank?: number
    ): TooltipData;
    function GetTransmogrifyItem(
      this: void,
      transmogLocation: TransmogLocation
    ): TooltipData;
    function GetUnit(
      this: void,
      unit: UnitToken,
      hideStatus?: boolean
    ): TooltipData;
    function GetUnitAura(
      this: void,
      unitToken: UnitToken,
      index: number,
      filter?: string
    ): TooltipData;
    function GetUnitBuff(
      this: void,
      unitToken: UnitToken,
      index: number,
      filter?: string
    ): TooltipData;
    function GetUnitBuffByAuraInstanceID(
      this: void,
      unitTokenString: string,
      auraInstanceID: number,
      filter?: string
    ): TooltipData;
    function GetUnitDebuff(
      this: void,
      unitToken: UnitToken,
      index: number,
      filter?: string
    ): TooltipData;
    function GetUnitDebuffByAuraInstanceID(
      this: void,
      unitTokenString: string,
      auraInstanceID: number,
      filter?: string
    ): TooltipData;
    function GetUpgradeItem(this: void): TooltipData;
    function GetVoidDepositItem(this: void, slot: number): TooltipData;
    function GetVoidItem(this: void, tab: number, slot: number): TooltipData;
    function GetVoidWithdrawalItem(this: void, slot: number): TooltipData;
    function GetWeeklyReward(
      this: void,
      itemDBID: WeeklyRewardItemDBID
    ): TooltipData;
    function GetWorldCursor(this: void): TooltipData;
    function GetWorldLootObject(
      this: void,
      unitTokenString: string
    ): TooltipData;
  }

  interface TooltipComparisonLine {
    text: string;
    color: colorRGB;
  }

  interface TooltipDataArg {
    field: string;
    stringVal?: string;
    intVal?: number;
    floatVal?: number;
    boolVal?: boolean;
    colorVal?: colorRGB;
    guidVal?: WOWGUID;
  }

  interface TotemInfoScript {
    haveTotem: boolean;
    totemName: string;
    startTime: number;
    duration: number;
    icon: fileID;
  }

  function DestroyTotem(this: void, slot: number): void;
  function GetTotemCannotDismiss(this: void, slot: number): boolean | undefined;
  function GetTotemInfo(
    this: void,
    slot: number
  ): LuaMultiReturn<[boolean, string, number, number, fileID]>;
  function GetTotemTimeLeft(this: void, slot: number): number | undefined;
  function TargetTotem(this: void, slot: number): void;

  namespace C_ToyBoxInfo {
    function ClearFanfare(this: void, itemID: number): void;
    function IsToySourceValid(this: void, source: number): boolean;
    function IsUsingDefaultFilters(this: void): boolean;
    function NeedsFanfare(this: void, itemID: number): boolean;
    function SetDefaultFilters(this: void): void;
  }

  namespace C_TradeInfo {}

  namespace C_TradeSkillUI {
    function CanStoreEnchantInItem(this: void, itemGUID: WOWGUID): boolean;
    function CloseTradeSkill(this: void): void;
    function CraftEnchant(
      this: void,
      recipeSpellID: number,
      numCasts?: number,
      craftingReagents?: CraftingReagentInfo[],
      itemTarget?: ItemLocation,
      applyConcentration?: boolean
    ): void;
    function CraftRecipe(
      this: void,
      recipeSpellID: number,
      numCasts?: number,
      craftingReagents?: CraftingReagentInfo[],
      recipeLevel?: number,
      orderID?: BigUInteger,
      applyConcentration?: boolean
    ): void;
    function CraftSalvage(
      this: void,
      recipeSpellID: number,
      numCasts: number | undefined,
      itemTarget: ItemLocation,
      craftingReagents?: CraftingReagentInfo[],
      applyConcentration?: boolean
    ): void;
    function DoesRecraftingRecipeAcceptItem(
      this: void,
      itemLocation: ItemLocation,
      recipeID: number
    ): boolean;
    function GetAllProfessionTradeSkillLines(this: void): number[];
    function GetBaseProfessionInfo(this: void): ProfessionInfo;
    function GetChildProfessionInfo(this: void): ProfessionInfo;
    function GetChildProfessionInfos(this: void): ProfessionInfo[];
    function GetConcentrationCurrencyID(
      this: void,
      skillLineID: number
    ): number;
    function GetCraftableCount(
      this: void,
      recipeSpellID: number,
      recipeLevel?: number
    ): number;
    function GetCraftingOperationInfo(
      this: void,
      recipeID: number,
      craftingReagents: CraftingReagentInfo[],
      allocationItemGUID: WOWGUID | undefined,
      applyConcentration: boolean
    ): CraftingOperationInfo | undefined;
    function GetCraftingOperationInfoForOrder(
      this: void,
      recipeID: number,
      craftingReagents: CraftingReagentInfo[],
      orderID: BigUInteger,
      applyConcentration: boolean
    ): CraftingOperationInfo | undefined;
    function GetCraftingReagentBonusText(
      this: void,
      recipeSpellID: number,
      craftingReagentIndex: number,
      craftingReagents: CraftingReagentInfo[],
      allocationItemGUID?: WOWGUID
    ): string[];
    function GetCraftingTargetItems(
      this: void,
      itemIDs: number[]
    ): CraftingTargetItem[];
    function GetEnchantItems(this: void, recipeID: number): WOWGUID[];
    function GetFactionSpecificOutputItem(
      this: void,
      recipeSpellID: number
    ): number | undefined;
    function GetGatheringOperationInfo(
      this: void,
      recipeID: number
    ): GatheringOperationInfo | undefined;
    function GetHideUnownedFlags(
      this: void,
      recipeID: number
    ): LuaMultiReturn<[boolean, boolean]>;
    function GetItemCraftedQualityByItemInfo(
      this: void,
      itemInfo: ItemInfo
    ): number | undefined;
    function GetItemReagentQualityByItemInfo(
      this: void,
      itemInfo: ItemInfo
    ): number | undefined;
    function GetItemSlotModifications(
      this: void,
      itemGUID: WOWGUID
    ): CraftingItemSlotModification[];
    function GetItemSlotModificationsForOrder(
      this: void,
      orderID: BigUInteger
    ): CraftingItemSlotModification[];
    function GetOriginalCraftRecipeID(
      this: void,
      itemGUID: WOWGUID
    ): LuaMultiReturn<[number | undefined, number | undefined]>;
    function GetProfessionByInventorySlot(
      this: void,
      slot: number
    ): Enum.Profession | undefined;
    function GetProfessionChildSkillLineID(this: void): number;
    function GetProfessionForCursorItem(
      this: void
    ): Enum.Profession | undefined;
    function GetProfessionInfoByRecipeID(
      this: void,
      recipeID: number
    ): ProfessionInfo;
    function GetProfessionInfoBySkillLineID(
      this: void,
      skillLineID: number
    ): ProfessionInfo;
    function GetProfessionInventorySlots(this: void): InventorySlots[];
    function GetProfessionNameForSkillLineAbility(
      this: void,
      skillLineAbilityID: number
    ): string;
    function GetProfessionSkillLineID(
      this: void,
      profession: Enum.Profession
    ): number;
    function GetProfessionSlots(
      this: void,
      profession: Enum.Profession
    ): number[];
    function GetProfessionSpells(
      this: void,
      professionID: number,
      skillLineID?: number
    ): number[];
    function GetQualitiesForRecipe(
      this: void,
      recipeID: number
    ): number[] | undefined;
    function GetReagentDifficultyText(
      this: void,
      craftingReagentIndex: number,
      craftingReagents: CraftingReagentInfo[]
    ): string;
    function GetReagentRequirementItemIDs(this: void, itemID: number): number[];
    function GetReagentSlotStatus(
      this: void,
      mcrSlotID: number,
      recipeSpellID: number,
      skillLineAbilityID: number
    ): LuaMultiReturn<[boolean, string]>;
    function GetRecipeDescription(
      this: void,
      recipeID: number,
      craftingReagents: CraftingReagentInfo[],
      allocationItemGUID?: WOWGUID
    ): string;
    function GetRecipeFixedReagentItemLink(
      this: void,
      recipeID: number,
      dataSlotIndex: number
    ): string;
    function GetRecipeInfo(
      this: void,
      recipeSpellID: number,
      recipeLevel?: number
    ): TradeSkillRecipeInfo | undefined;
    function GetRecipeInfoForSkillLineAbility(
      this: void,
      skillLineAbilityID: number,
      recipeLevel?: number
    ): TradeSkillRecipeInfo | undefined;
    function GetRecipeOutputItemData(
      this: void,
      recipeSpellID: number,
      reagents?: CraftingReagentInfo[],
      allocationItemGUID?: WOWGUID,
      overrideQualityID?: number,
      recraftOrderID?: BigUInteger
    ): CraftingRecipeOutputInfo;
    function GetRecipeQualityItemIDs(
      this: void,
      recipeSpellID: number
    ): number[] | undefined;
    function GetRecipeQualityReagentItemLink(
      this: void,
      recipeID: number,
      dataSlotIndex: number,
      qualityIndex: number
    ): string;
    function GetRecipeRequirements(
      this: void,
      recipeID: number
    ): CraftingRecipeRequirement[];
    function GetRecipeSchematic(
      this: void,
      recipeSpellID: number,
      isRecraft: boolean,
      recipeLevel?: number
    ): CraftingRecipeSchematic;
    function GetRecipesTracked(this: void, isRecraft: boolean): number[];
    function GetRecraftItems(this: void, recipeID?: number): WOWGUID[];
    function GetRecraftRemovalWarnings(
      this: void,
      itemGUID: WOWGUID,
      replacedItemIDs: number[]
    ): string[];
    function GetRemainingRecasts(this: void): number;
    function GetSalvagableItemIDs(this: void, recipeID: number): number[];
    function GetShowLearned(this: void): boolean;
    function GetShowUnlearned(this: void): boolean;
    function GetSkillLineForGear(
      this: void,
      itemInfo: ItemInfo
    ): number | undefined;
    function GetSourceTypeFilter(this: void): number;
    function GetTradeSkillDisplayName(this: void, skillLineID: number): string;
    function HasFavoriteOrderRecipes(this: void): boolean;
    function IsEnchantTargetValid(
      this: void,
      recipeID: number,
      itemGUID: WOWGUID,
      craftingReagents?: CraftingReagentInfo[]
    ): boolean;
    function IsGuildTradeSkillsEnabled(this: void): boolean;
    function IsNPCCrafting(this: void): boolean;
    function IsNearProfessionSpellFocus(
      this: void,
      profession: Enum.Profession
    ): boolean;
    function IsOriginalCraftRecipeLearned(
      this: void,
      itemGUID: WOWGUID
    ): boolean;
    function IsRecipeFirstCraft(this: void, recipeID: number): boolean;
    function IsRecipeInBaseSkillLine(this: void, recipeID: number): boolean;
    function IsRecipeInSkillLine(
      this: void,
      recipeID: number,
      skillLineID: number
    ): boolean;
    function IsRecipeProfessionLearned(this: void, recipeID: number): boolean;
    function IsRecipeTracked(
      this: void,
      recipeID: number,
      isRecraft: boolean
    ): boolean;
    function IsRecraftItemEquipped(
      this: void,
      recraftItemGUID: WOWGUID
    ): boolean;
    function IsRecraftReagentValid(
      this: void,
      itemGUID: WOWGUID,
      itemID: number
    ): boolean;
    function IsRuneforging(this: void): boolean;
    function OpenRecipe(this: void, recipeID: number): void;
    function OpenTradeSkill(this: void, skillLineID: number): boolean;
    function RecraftLimitCategoryValid(
      this: void,
      reagentItemID: number
    ): boolean;
    function RecraftRecipe(
      this: void,
      itemGUID: WOWGUID,
      craftingReagents?: CraftingReagentInfo[],
      removedModifications?: CraftingItemSlotModification[],
      applyConcentration?: boolean
    ): boolean;
    function RecraftRecipeForOrder(
      this: void,
      orderID: BigUInteger,
      itemGUID: WOWGUID,
      craftingReagents?: CraftingReagentInfo[],
      removedModifications?: CraftingItemSlotModification[],
      applyConcentration?: boolean
    ): boolean;
    function SetOnlyShowAvailableForOrders(this: void, flag: boolean): void;
    function SetProfessionChildSkillLineID(
      this: void,
      skillLineID: number
    ): void;
    function SetRecipeTracked(
      this: void,
      recipeID: number,
      tracked: boolean,
      isRecraft: boolean
    ): void;
    function SetShowLearned(this: void, flag: boolean): void;
    function SetShowUnlearned(this: void, flag: boolean): void;
    function SetSourceTypeFilter(this: void, sourceTypeFilter: number): void;
  }

  interface CraftingCurrencyResultData {
    currencyID?: number;
    quantity?: number;
    operationID?: number;
    firstCraftReward?: boolean;
    showCurrencyText?: boolean;
  }

  interface CraftingItemResultData {
    resourcesReturned?: CraftingResourceReturnInfo[];
    craftingQuality?: number;
    qualityProgress?: number;
    itemID?: number;
    itemGUID: WOWGUID;
    quantity?: number;
    hyperlink: string;
    isCrit?: boolean;
    critBonusSkill?: number;
    recraftable?: boolean;
    bonusCraft?: boolean;
    multicraft?: number;
    operationID?: number;
    firstCraftReward?: boolean;
    isEnchant?: boolean;
    hasIngenuityProc?: boolean;
    concentrationCurrencyID?: number;
    concentrationSpent?: number;
    ingenuityRefund?: number;
  }

  interface CraftingItemSlotModification {
    dataSlotIndex: number;
    itemID?: number;
  }

  interface CraftingOperationBonusStatInfo {
    bonusStatName: string;
    bonusStatValue: number;
    ratingDescription: string;
    ratingPct: number;
    bonusRatingPct: number;
  }

  interface CraftingOperationInfo {
    recipeID: number;
    baseDifficulty: number;
    bonusDifficulty: number;
    baseSkill: number;
    bonusSkill: number;
    isQualityCraft: boolean;
    quality: number;
    craftingQuality: number;
    craftingQualityID: number;
    craftingDataID: number;
    lowerSkillThreshold: number;
    upperSkillTreshold: number;
    guaranteedCraftingQualityID: number;
    bonusStats: CraftingOperationBonusStatInfo[];
    concentrationCurrencyID: number;
    concentrationCost: number;
    ingenuityRefund: number;
  }

  interface CraftingReagent {
    itemID?: number;
    currencyID?: number;
  }

  interface CraftingReagentInfo {
    itemID: number;
    dataSlotIndex: number;
    quantity: number;
  }

  interface CraftingReagentSlotInfo {
    mcrSlotID: number;
    requiredSkillRank: number;
    slotText?: string;
  }

  interface CraftingReagentSlotSchematic {
    reagents: CraftingReagent[];
    reagentType: Enum.CraftingReagentType;
    quantityRequired: number;
    slotInfo?: CraftingReagentSlotInfo;
    dataSlotType?: Enum.TradeskillSlotDataType;
    dataSlotIndex: number;
    slotIndex: number;
    orderSource?: Enum.CraftingOrderReagentSource;
    required: boolean;
  }

  interface CraftingRecipeOutputInfo {
    icon: number;
    hyperlink?: string;
    itemID?: number;
  }

  interface CraftingRecipeRequirement {
    name: string;
    met: boolean;
    type: Enum.RecipeRequirementType;
  }

  interface CraftingRecipeSchematic {
    recipeID: number;
    icon: number;
    quantityMin: number;
    quantityMax: number;
    name: string;
    recipeType?: Enum.TradeskillRecipeType;
    productQuality?: number;
    outputItemID?: number;
    reagentSlotSchematics: CraftingReagentSlotSchematic[];
    isRecraft: boolean;
    hasCraftingOperationInfo: boolean;
  }

  interface CraftingRecipeSkillLineInfo {
    professionSkillLineID: number;
    expansionSkillLineID: number;
  }

  interface CraftingResourceReturnInfo {
    itemID: number;
    quantity: number;
  }

  interface CraftingTargetItem {
    itemID: number;
    itemGUID: WOWGUID;
    hyperlink?: string;
    quantity: number;
  }

  interface GatheringOperationBonusStatInfo {
    bonusStatName: string;
    bonusStatValue: number;
    ratingDescription: string;
    ratingPct: number;
    bonusRatingPct: number;
  }

  interface GatheringOperationInfo {
    spellID: number;
    maxDifficulty: number;
    baseSkill: number;
    bonusSkill: number;
    bonusStats: GatheringOperationBonusStatInfo[];
  }

  interface ProfessionInfo {
    profession?: Enum.Profession;
    professionID: number;
    sourceCounter: number;
    professionName: string;
    expansionName: string;
    skillLevel: number;
    maxSkillLevel: number;
    skillModifier: number;
    isPrimaryProfession: boolean;
    parentProfessionID?: number;
    parentProfessionName?: string;
  }

  interface RegularReagentInfo {
    itemID: number;
    quantity: number;
  }

  interface TradeSkillRecipeInfo {
    categoryID: number;
    name: string;
    relativeDifficulty?: Enum.TradeskillRelativeDifficulty;
    maxTrivialLevel: number;
    itemLevel: number;
    alternateVerb?: string;
    numSkillUps: number;
    canSkillUp: boolean;
    firstCraft: boolean;
    sourceType?: number;
    learned: boolean;
    disabled: boolean;
    favorite: boolean;
    supportsQualities: boolean;
    craftable?: boolean;
    disabledReason?: string;
    recipeID: number;
    skillLineAbilityID: number;
    previousRecipeID?: number;
    nextRecipeID?: number;
    icon?: number;
    hyperlink?: string;
    currentRecipeExperience?: number;
    nextLevelRecipeExperience?: number;
    unlockedRecipeLevel?: number;
    earnedExperience?: number;
    supportsCraftingStats?: boolean;
    hasSingleItemOutput?: boolean;
    qualityItemIDs?: number[];
    qualityIlvlBonuses?: number[];
    alwaysUsesLowestQuality?: boolean;
    maxQuality?: number;
    qualityIDs?: number[];
    canCreateMultiple?: boolean;
    abilityVerb?: string;
    abilityAllVerb?: string;
    isRecraft?: boolean;
    isDummyRecipe?: boolean;
    isGatheringRecipe?: boolean;
    isEnchantingRecipe?: boolean;
    isSalvageRecipe?: boolean;
  }

  namespace C_Trainer {}

  namespace C_TraitConfig {}

  namespace C_Transmog {
    interface TransmogApplyWarningInfo {
      itemLink: string;
      text: string;
    }

    interface TransmogSetItemInfo {
      itemID: number;
      itemModifiedAppearanceID: number;
      invSlot: number;
      invType: string;
    }

    interface TransmogSlotInfo {
      isTransmogrified: boolean;
      hasPending: boolean;
      isPendingCollected: boolean;
      canTransmogrify: boolean;
      cannotTransmogrifyReason: number;
      hasUndo: boolean;
      isHideVisual: boolean;
      texture?: fileID;
    }

    interface TransmogSlotVisualInfo {
      baseSourceID: number;
      baseVisualID: number;
      appliedSourceID: number;
      appliedVisualID: number;
      pendingSourceID: number;
      pendingVisualID: number;
      hasUndo: boolean;
      isHideVisual: boolean;
      itemSubclass: number;
    }

    function ApplyAllPending(this: void, currentSpecOnly?: boolean): boolean;
    function CanHaveSecondaryAppearanceForSlotID(
      this: void,
      slotID: number
    ): boolean;
    function CanTransmogItem(
      this: void,
      itemInfo: ItemInfo
    ): LuaMultiReturn<
      [boolean, string | undefined, boolean, string | undefined]
    >;
    function CanTransmogItemWithItem(
      this: void,
      targetItemInfo: ItemInfo,
      sourceItemInfo: ItemInfo
    ): LuaMultiReturn<[boolean, string | undefined]>;
    function ClearAllPending(this: void): void;
    function ClearPending(this: void, transmogLocation: TransmogLocation): void;
    function Close(this: void): void;
    function ExtractTransmogIDList(this: void, input: string): number[];
    function GetAllSetAppearancesByID(
      this: void,
      setID: number
    ): TransmogSetItemInfo[] | undefined;
    function GetApplyCost(this: void): number | undefined;
    function GetApplyWarnings(this: void): TransmogApplyWarningInfo[];
    function GetBaseCategory(
      this: void,
      transmogID: number
    ): Enum.TransmogCollectionType;
    function GetCreatureDisplayIDForSource(
      this: void,
      itemModifiedAppearanceID: number
    ): number | undefined;
    function GetItemIDForSource(
      this: void,
      itemModifiedAppearanceID: number
    ): number | undefined;
    function GetPending(
      this: void,
      transmogLocation: TransmogLocation
    ): TransmogPendingInfo;
    function GetSlotEffectiveCategory(
      this: void,
      transmogLocation: TransmogLocation
    ): Enum.TransmogCollectionType;
    function GetSlotForInventoryType(this: void, inventoryType: number): number;
    function GetSlotInfo(
      this: void,
      transmogLocation: TransmogLocation
    ): LuaMultiReturn<
      [
        boolean,
        boolean,
        boolean,
        boolean,
        number,
        boolean,
        boolean,
        fileID | undefined,
      ]
    >;
    function GetSlotUseError(
      this: void,
      transmogLocation: TransmogLocation
    ): LuaMultiReturn<[number, string]>;
    function GetSlotVisualInfo(
      this: void,
      transmogLocation: TransmogLocation
    ): LuaMultiReturn<
      [number, number, number, number, number, number, boolean, boolean, number]
    >;
    function IsAtTransmogNPC(this: void): boolean;
    function IsSlotBeingCollapsed(
      this: void,
      transmogLocation: TransmogLocation
    ): boolean;
    function LoadOutfit(this: void, outfitID: number): void;
    function SetPending(
      this: void,
      transmogLocation: TransmogLocation,
      pendingInfo: TransmogPendingInfo
    ): void;
  }

  namespace C_TransmogCollection {
    interface TransmogAppearanceInfoBySourceData {
      appearanceID: number;
      appearanceIsCollected: boolean;
      sourceIsCollected: boolean;
      sourceIsCollectedPermanent: boolean;
      sourceIsCollectedConditional: boolean;
      meetsTransmogPlayerCondition: boolean;
      appearanceHasAnyNonLevelRequirements: boolean;
      appearanceMeetsNonLevelRequirements: boolean;
      appearanceIsUsable: boolean;
      appearanceNumSources: number;
      sourceIsKnown: boolean;
      canDisplayOnPlayer: boolean;
      isAnySourceValidForPlayer: boolean;
    }

    interface TransmogAppearanceJournalEncounterInfo {
      instance: string;
      instanceType: number;
      tiers: string[];
      encounter: string;
      difficulties: string[];
    }

    interface TransmogAppearanceSourceInfoData {
      category: Enum.TransmogCollectionType;
      itemAppearanceID: number;
      canHaveIllusion: boolean;
      icon: fileID;
      isCollected: boolean;
      itemLink: string;
      transmoglink: string;
      sourceType?: number;
      itemSubClass: number;
    }

    interface TransmogCategoryAppearanceInfo {
      visualID: number;
      isCollected: boolean;
      isFavorite: boolean;
      isHideVisual: boolean;
      canDisplayOnPlayer: boolean;
      uiOrder: number;
      exclusions: number;
      restrictedSlotID?: number;
      isUsable: boolean;
      hasRequiredHoliday: boolean;
      hasActiveRequiredHoliday: boolean;
      alwaysShowItem?: boolean;
    }

    interface TransmogCategoryInfo {
      name: string;
      isWeapon?: boolean;
      canHaveIllusions?: boolean;
      canMainHand?: boolean;
      canOffHand?: boolean;
    }

    interface TransmogIllusionInfo {
      visualID: number;
      sourceID: number;
      icon: fileID;
      isCollected: boolean;
      isUsable: boolean;
      isHideVisual: boolean;
    }

    interface TransmogOutfitInfo {
      name: string;
      icon: fileID;
    }

    function AccountCanCollectSource(
      this: void,
      sourceID: number
    ): LuaMultiReturn<[boolean, boolean]>;
    function AreAllCollectionTypeFiltersChecked(this: void): boolean;
    function AreAllSourceTypeFiltersChecked(this: void): boolean;
    function CanAppearanceBeDisplayedOnPlayer(
      this: void,
      itemAppearanceID: number
    ): boolean;
    function CanAppearanceHaveIllusion(
      this: void,
      appearanceID: number
    ): boolean;
    function ClearNewAppearance(this: void, visualID: number): void;
    function ClearSearch(
      this: void,
      searchType: Enum.TransmogSearchType
    ): boolean;
    function DeleteOutfit(this: void, outfitID: number): void;
    function EndSearch(this: void): void;
    function GetAllAppearanceSources(
      this: void,
      itemAppearanceID: number
    ): number[];
    function GetAllFactionsShown(this: void): boolean;
    function GetAllRacesShown(this: void): boolean;
    function GetAppearanceCameraID(
      this: void,
      itemAppearanceID: number,
      variation?: Enum.TransmogCameraVariation
    ): number;
    function GetAppearanceCameraIDBySource(
      this: void,
      itemModifiedAppearanceID: number,
      variation?: Enum.TransmogCameraVariation
    ): number;
    function GetAppearanceInfoBySource(
      this: void,
      itemModifiedAppearanceID: number
    ): TransmogAppearanceInfoBySourceData;
    function GetAppearanceSourceDrops(
      this: void,
      itemModifiedAppearanceID: number
    ): TransmogAppearanceJournalEncounterInfo[];
    function GetAppearanceSourceInfo(
      this: void,
      itemModifiedAppearanceID: number
    ): LuaMultiReturn<
      [
        Enum.TransmogCollectionType,
        number,
        boolean,
        fileID,
        boolean,
        string,
        string,
        number | undefined,
        number,
      ]
    >;
    function GetAppearanceSources(
      this: void,
      appearanceID: number,
      categoryType?: Enum.TransmogCollectionType,
      transmogLocation?: TransmogLocation
    ): AppearanceSourceInfo[];
    function GetArtifactAppearanceStrings(
      this: void,
      appearanceID: number
    ): LuaMultiReturn<[string, string]>;
    function GetCategoryAppearances(
      this: void,
      category: Enum.TransmogCollectionType,
      transmogLocation?: TransmogLocation
    ): TransmogCategoryAppearanceInfo[];
    function GetCategoryCollectedCount(
      this: void,
      category: Enum.TransmogCollectionType
    ): number;
    function GetCategoryForItem(
      this: void,
      itemModifiedAppearanceID: number
    ): Enum.TransmogCollectionType;
    function GetCategoryInfo(
      this: void,
      category: Enum.TransmogCollectionType
    ): LuaMultiReturn<[string, boolean, boolean, boolean, boolean]>;
    function GetCategoryTotal(
      this: void,
      category: Enum.TransmogCollectionType
    ): number;
    function GetClassFilter(this: void): number;
    function GetCollectedShown(this: void): boolean;
    function GetFallbackWeaponAppearance(this: void): number | undefined;
    function GetFilteredCategoryCollectedCount(
      this: void,
      category: Enum.TransmogCollectionType
    ): number;
    function GetFilteredCategoryTotal(
      this: void,
      category: Enum.TransmogCollectionType
    ): number;
    function GetIllusionInfo(
      this: void,
      illusionID: number
    ): TransmogIllusionInfo;
    function GetIllusionStrings(
      this: void,
      illusionID: number
    ): LuaMultiReturn<[string, string, string | undefined]>;
    function GetIllusions(this: void): TransmogIllusionInfo[];
    function GetInspectItemTransmogInfoList(this: void): ItemTransmogInfo[];
    function GetIsAppearanceFavorite(
      this: void,
      itemAppearanceID: number
    ): boolean;
    function GetItemInfo(
      this: void,
      itemInfo: ItemInfo
    ): LuaMultiReturn<[number, number]>;
    function GetItemTransmogInfoListFromOutfitHyperlink(
      this: void,
      hyperlink: string
    ): ItemTransmogInfo[];
    function GetLatestAppearance(
      this: void
    ): LuaMultiReturn<[number, Enum.TransmogCollectionType]>;
    function GetNumMaxOutfits(this: void): number;
    function GetNumTransmogSources(this: void): number;
    function GetOutfitHyperlinkFromItemTransmogInfoList(
      this: void,
      itemTransmogInfoList: ItemTransmogInfo[]
    ): string;
    function GetOutfitInfo(
      this: void,
      outfitID: number
    ): LuaMultiReturn<[string, fileID]>;
    function GetOutfitItemTransmogInfoList(
      this: void,
      outfitID: number
    ): ItemTransmogInfo[];
    function GetOutfits(this: void): number[];
    function GetPairedArtifactAppearance(
      this: void,
      itemModifiedAppearanceID: number
    ): number;
    function GetSourceIcon(
      this: void,
      itemModifiedAppearanceID: number
    ): fileID;
    function GetSourceInfo(this: void, sourceID: number): AppearanceSourceInfo;
    function GetSourceItemID(
      this: void,
      itemModifiedAppearanceID: number
    ): number;
    function GetSourceRequiredHoliday(
      this: void,
      itemModifiedAppearanceID: number
    ): string;
    function GetUncollectedShown(this: void): boolean;
    function GetValidAppearanceSourcesForClass(
      this: void,
      appearanceID: number,
      classID: number,
      categoryType?: Enum.TransmogCollectionType,
      transmogLocation?: TransmogLocation
    ): AppearanceSourceInfo[];
    function HasFavorites(this: void): boolean;
    function IsAppearanceHiddenVisual(
      this: void,
      appearanceID: number
    ): boolean;
    function IsCategoryValidForItem(
      this: void,
      category: Enum.TransmogCollectionType,
      itemInfo: ItemInfo
    ): boolean;
    function IsNewAppearance(this: void, visualID: number): boolean;
    function IsSearchDBLoading(this: void): boolean;
    function IsSearchInProgress(
      this: void,
      searchType: Enum.TransmogSearchType
    ): boolean;
    function IsSourceTypeFilterChecked(this: void, index: number): boolean;
    function IsUsingDefaultFilters(this: void): boolean;
    function ModifyOutfit(
      this: void,
      outfitID: number,
      itemTransmogInfoList: ItemTransmogInfo[]
    ): void;
    function NewOutfit(
      this: void,
      name: string,
      icon: fileID,
      itemTransmogInfoList: ItemTransmogInfo[]
    ): number | undefined;
    function PlayerCanCollectSource(
      this: void,
      sourceID: number
    ): LuaMultiReturn<[boolean, boolean]>;
    function PlayerHasTransmog(
      this: void,
      itemID: number,
      itemAppearanceModID?: number
    ): boolean;
    function PlayerHasTransmogByItemInfo(
      this: void,
      itemInfo: ItemInfo
    ): boolean;
    function PlayerHasTransmogItemModifiedAppearance(
      this: void,
      itemModifiedAppearanceID: number
    ): boolean;
    function PlayerKnowsSource(this: void, sourceID: number): boolean;
    function RenameOutfit(this: void, outfitID: number, name: string): void;
    function SearchProgress(
      this: void,
      searchType: Enum.TransmogSearchType
    ): number;
    function SearchSize(
      this: void,
      searchType: Enum.TransmogSearchType
    ): number;
    function SetAllCollectionTypeFilters(this: void, checked: boolean): void;
    function SetAllFactionsShown(this: void, shown: boolean): void;
    function SetAllRacesShown(this: void, shown: boolean): void;
    function SetAllSourceTypeFilters(this: void, checked: boolean): void;
    function SetClassFilter(this: void, classID: number): void;
    function SetCollectedShown(this: void, shown: boolean): void;
    function SetDefaultFilters(this: void): void;
    function SetIsAppearanceFavorite(
      this: void,
      itemAppearanceID: number,
      isFavorite: boolean
    ): void;
    function SetSearch(
      this: void,
      searchType: Enum.TransmogSearchType,
      searchText: string
    ): boolean;
    function SetSearchAndFilterCategory(
      this: void,
      category: Enum.TransmogCollectionType
    ): void;
    function SetSourceTypeFilter(
      this: void,
      index: number,
      checked: boolean
    ): void;
    function SetUncollectedShown(this: void, shown: boolean): void;
    function UpdateUsableAppearances(this: void): void;
  }

  namespace C_TransmogSets {
    interface TransmogSetInfo {
      setID: number;
      name: string;
      baseSetID?: number;
      description?: string;
      label?: string;
      expansionID: number;
      patchID: number;
      uiOrder: number;
      classMask: number;
      hiddenUntilCollected: boolean;
      requiredFaction?: string;
      collected: boolean;
      favorite: boolean;
      limitedTimeSet: boolean;
      validForCharacter: boolean;
    }

    interface TransmogSetPrimaryAppearanceInfo {
      appearanceID: number;
      collected: boolean;
    }

    function ClearLatestSource(this: void): void;
    function ClearNewSource(this: void, sourceID: number): void;
    function ClearSetNewSourcesForSlot(
      this: void,
      transmogSetID: number,
      slot: number
    ): void;
    function GetAllSets(this: void): TransmogSetInfo[];
    function GetAllSourceIDs(this: void, transmogSetID: number): number[];
    function GetBaseSetID(this: void, transmogSetID: number): number;
    function GetBaseSets(this: void): TransmogSetInfo[];
    function GetBaseSetsFilter(this: void, index: number): boolean;
    function GetCameraIDs(
      this: void
    ): LuaMultiReturn<[number | undefined, number | undefined]>;
    function GetFilteredBaseSetsCounts(
      this: void
    ): LuaMultiReturn<[number, number]>;
    function GetFullBaseSetsCounts(
      this: void
    ): LuaMultiReturn<[number, number]>;
    function GetIsFavorite(
      this: void,
      transmogSetID: number
    ): LuaMultiReturn<[boolean, boolean]>;
    function GetLatestSource(this: void): number;
    function GetSetInfo(this: void, transmogSetID: number): TransmogSetInfo;
    function GetSetNewSources(this: void, transmogSetID: number): number[];
    function GetSetPrimaryAppearances(
      this: void,
      transmogSetID: number
    ): TransmogSetPrimaryAppearanceInfo[];
    function GetSetsContainingSourceID(this: void, sourceID: number): number[];
    function GetSourceIDsForSlot(
      this: void,
      transmogSetID: number,
      slot: number
    ): number[];
    function GetSourcesForSlot(
      this: void,
      transmogSetID: number,
      slot: number
    ): AppearanceSourceInfo[];
    function GetTransmogSetsClassFilter(this: void): number;
    function GetUsableSets(this: void): TransmogSetInfo[];
    function GetValidBaseSetsCountsForCharacter(
      this: void
    ): LuaMultiReturn<[number, number]>;
    function GetVariantSets(
      this: void,
      transmogSetID: number
    ): TransmogSetInfo[];
    function HasUsableSets(this: void): boolean;
    function IsBaseSetCollected(this: void, transmogSetID: number): boolean;
    function IsNewSource(this: void, sourceID: number): boolean;
    function IsSetVisible(this: void, transmogSetID: number): boolean;
    function IsUsingDefaultBaseSetsFilters(this: void): boolean;
    function SetBaseSetsFilter(
      this: void,
      index: number,
      isChecked: boolean
    ): void;
    function SetDefaultBaseSetsFilters(this: void): void;
    function SetHasNewSources(this: void, transmogSetID: number): boolean;
    function SetHasNewSourcesForSlot(
      this: void,
      transmogSetID: number,
      slot: number
    ): boolean;
    function SetIsFavorite(
      this: void,
      transmogSetID: number,
      isFavorite: boolean
    ): void;
    function SetTransmogSetsClassFilter(this: void, classID: number): void;
  }

  namespace C_TTSSettings {
    function GetChannelEnabled(
      this: void,
      channelInfo: ChatChannelInfo
    ): boolean;
    function GetCharacterSettingsSaved(this: void): boolean;
    function GetChatTypeEnabled(this: void, chatName: string): boolean;
    function GetSetting(this: void, setting: Enum.TtsBoolSetting): boolean;
    function GetSpeechRate(this: void): number;
    function GetSpeechVolume(this: void): number;
    function GetVoiceOptionID(this: void, voiceType: Enum.TtsVoiceType): number;
    function GetVoiceOptionName(
      this: void,
      voiceType: Enum.TtsVoiceType
    ): string;
    function MarkCharacterSettingsSaved(this: void): void;
    function SetChannelEnabled(
      this: void,
      channelInfo: ChatChannelInfo,
      newVal?: boolean
    ): void;
    function SetChannelKeyEnabled(
      this: void,
      channelKey: string,
      newVal?: boolean
    ): void;
    function SetChatTypeEnabled(
      this: void,
      chatName: string,
      newVal?: boolean
    ): void;
    function SetDefaultSettings(this: void): void;
    function SetSetting(
      this: void,
      setting: Enum.TtsBoolSetting,
      newVal?: boolean
    ): void;
    function SetSpeechRate(this: void, newVal: number): void;
    function SetSpeechVolume(this: void, newVal: number): void;
    function SetVoiceOption(
      this: void,
      voiceType: Enum.TtsVoiceType,
      voiceID: number
    ): void;
    function SetVoiceOptionName(
      this: void,
      voiceType: Enum.TtsVoiceType,
      voiceName: string
    ): void;
    function ShouldOverrideMessage(
      this: void,
      language: number,
      messageText: string
    ): boolean;
  }

  namespace C_Tutorial {
    function AbandonTutorialArea(this: void): void;
    function ReturnToTutorialArea(this: void): void;
  }

  namespace C_UIColor {
    interface DBColorExport {
      baseTag: string;
      color: colorRGBA;
    }

    function GetColors(this: void): DBColorExport[];
  }

  namespace C_EventToastManager {
    interface EventToastInfo {
      eventToastID: number;
      title: string;
      subtitle: string;
      instructionText: string;
      iconFileID: fileID;
      subIcon?: textureAtlas;
      link: string;
      qualityString?: string;
      quality?: number;
      eventType: Enum.EventToastEventType;
      displayType: Enum.EventToastDisplayType;
      uiTextureKit: textureKit;
      sortOrder: number;
      time?: number;
      uiWidgetSetID?: number;
      extraUiWidgetSetID?: number;
      titleTooltip?: string;
      subtitleTooltip?: string;
      titleTooltipUiWidgetSetID?: number;
      subtitleTooltipUiWidgetSetID?: number;
      hideDefaultAtlas?: boolean;
      showSoundKitID?: number;
      hideSoundKitID?: number;
      colorTint?: colorRGB;
      flags: number;
    }

    function GetLevelUpDisplayToastsFromLevel(
      this: void,
      level: number
    ): EventToastInfo[];
    function GetNextToastToDisplay(this: void): EventToastInfo;
    function RemoveCurrentToast(this: void): void;
  }

  namespace C_FrameManager {
    function GetFrameVisibilityState(
      this: void,
      frameType: Enum.UIFrameType
    ): boolean;
  }

  namespace C_GenericWidgetDisplay {
    interface GenericWidgetDisplayFrameInfo {
      uiWidgetSetID?: number;
      uiTextureKit?: textureKit;
      title?: string;
      frameWidth: number;
      frameHeight: number;
      extraButtonText?: string;
      closeButtonText?: string;
    }

    function Acknowledge(this: void): void;
    function Close(this: void): void;
  }

  namespace C_Macro {
    type MacroExecuteLineCallback = (this: void, macroLine: string) => void;

    function RunMacroText(this: void, text: string, button: string): void;
    function SetMacroExecuteLineCallback(
      this: void,
      cb: MacroExecuteLineCallback
    ): void;
  }

  namespace C_UI {
    function DoesAnyDisplayHaveNotch(this: void): boolean;
    function GetTopLeftNotchSafeRegion(
      this: void
    ): LuaMultiReturn<[number, number, number, number]>;
    function GetTopRightNotchSafeRegion(
      this: void
    ): LuaMultiReturn<[number, number, number, number]>;
    function GetUIParent(this: void): SimpleFrame;
    function GetWorldFrame(this: void): SimpleFrame;
    function Reload(this: void): void;
    function ShouldUIParentAvoidNotch(this: void): boolean;
  }

  namespace C_ModelInfo {
    interface UIModelSceneActorDisplayInfo {
      animation: number;
      animationVariation: number;
      animSpeed: number;
      animationKitID?: number;
      spellVisualKitID?: number;
      alpha: number;
      scale: number;
    }

    interface UIModelSceneActorInfo {
      modelActorID: number;
      scriptTag: string;
      position: vector3;
      yaw: number;
      pitch: number;
      roll: number;
      normalizeScaleAggressiveness?: number;
      useCenterForOriginX: boolean;
      useCenterForOriginY: boolean;
      useCenterForOriginZ: boolean;
      modelActorDisplayID?: number;
    }

    interface UIModelSceneCameraInfo {
      modelSceneCameraID: number;
      scriptTag: string;
      cameraType: string;
      target: vector3;
      yaw: number;
      pitch: number;
      roll: number;
      zoomDistance: number;
      minZoomDistance: number;
      maxZoomDistance: number;
      zoomedTargetOffset: vector3;
      zoomedYawOffset: number;
      zoomedPitchOffset: number;
      zoomedRollOffset: number;
      flags: Enum.ModelSceneSetting;
    }

    function AddActiveModelScene(
      this: void,
      modelSceneFrame: ModelSceneFrame,
      modelSceneID: number
    ): void;
    function AddActiveModelSceneActor(
      this: void,
      modelSceneFrameActor: ModelSceneFrameActor,
      modelSceneActorID: number
    ): void;
    function ClearActiveModelScene(
      this: void,
      modelSceneFrame: ModelSceneFrame
    ): void;
    function ClearActiveModelSceneActor(
      this: void,
      modelSceneFrameActor: ModelSceneFrameActor
    ): void;
    function GetModelSceneActorDisplayInfoByID(
      this: void,
      modelActorDisplayID: number
    ): UIModelSceneActorDisplayInfo;
    function GetModelSceneActorInfoByID(
      this: void,
      modelActorID: number
    ): UIModelSceneActorInfo;
    function GetModelSceneCameraInfoByID(
      this: void,
      modelSceneCameraID: number
    ): UIModelSceneCameraInfo;
    function GetModelSceneInfoByID(
      this: void,
      modelSceneID: number
    ): LuaMultiReturn<[Enum.ModelSceneType, number[], number[], number]>;
  }

  namespace C_ModifiedInstance {
    interface ModifiedInstanceInfo {
      lfrItemLevel?: number;
      normalItemLevel?: number;
      heroicItemLevel?: number;
      mythicItemLevel?: number;
      uiTextureKit: textureKit;
      description: string;
    }

    function GetModifiedInstanceInfoFromMapID(
      this: void,
      mapID: number
    ): ModifiedInstanceInfo;
  }

  interface AnchorBinding {
    point: FramePoint;
    relativeTo: ScriptRegion;
    relativePoint: FramePoint;
    offsetX: uiUnit;
    offsetY: uiUnit;
  }

  interface uiBoundsRect {
    left: uiUnit;
    bottom: uiUnit;
    width: uiUnit;
    height: uiUnit;
  }

  namespace C_SystemVisibilityManager {
    function IsSystemVisible(this: void, system: Enum.UISystemType): boolean;
  }

  interface UITextureSliceData {
    marginLeft: number;
    marginTop: number;
    marginRight: number;
    marginBottom: number;
    sliceMode: Enum.UITextureSliceMode;
  }

  namespace C_Timer {
    type TickerCallback = (this: void, cb: TimerCallback) => void;
    type TimerCallback = (this: void) => void;

    function After(this: void, seconds: number, callback: TimerCallback): void;
    function NewTicker(
      this: void,
      seconds: number,
      callback: TickerCallback,
      iterations?: number
    ): TickerCallback;
    function NewTimer(
      this: void,
      seconds: number,
      callback: TickerCallback
    ): TickerCallback;
  }

  namespace C_UIWidgetManager {
    interface BulletTextListWidgetVisualizationInfo {
      shownState: Enum.WidgetShownState;
      enabledState: Enum.WidgetEnabledState;
      lines: string[];
      widgetSizeSetting: number;
      textureKit: textureKit;
      frameTextureKit: textureKit;
      hasTimer: boolean;
      orderIndex: number;
      widgetTag: string;
      inAnimType: Enum.WidgetAnimationType;
      outAnimType: Enum.WidgetAnimationType;
      widgetScale: Enum.UIWidgetScale;
      layoutDirection: Enum.UIWidgetLayoutDirection;
      modelSceneLayer: Enum.UIWidgetModelSceneLayer;
      scriptedAnimationEffectID: number;
    }

    interface CaptureBarWidgetVisualizationInfo {
      shownState: Enum.WidgetShownState;
      barValue: number;
      barMinValue: number;
      barMaxValue: number;
      neutralZoneSize: number;
      neutralZoneCenter: number;
      tooltip: string;
      glowAnimType: Enum.WidgetGlowAnimType;
      fillDirectionType: Enum.CaptureBarWidgetFillDirectionType;
      tooltipLoc: Enum.UIWidgetTooltipLocation;
      widgetSizeSetting: number;
      textureKit: textureKit;
      frameTextureKit: textureKit;
      hasTimer: boolean;
      orderIndex: number;
      widgetTag: string;
      inAnimType: Enum.WidgetAnimationType;
      outAnimType: Enum.WidgetAnimationType;
      widgetScale: Enum.UIWidgetScale;
      layoutDirection: Enum.UIWidgetLayoutDirection;
      modelSceneLayer: Enum.UIWidgetModelSceneLayer;
      scriptedAnimationEffectID: number;
    }

    interface CaptureZoneVisualizationInfo {
      shownState: Enum.WidgetShownState;
      mode: Enum.ZoneControlMode;
      leadingEdgeType: Enum.ZoneControlLeadingEdgeType;
      dangerFlashType: Enum.ZoneControlDangerFlashType;
      zoneInfo: ZoneEntry;
      tooltipLoc: Enum.UIWidgetTooltipLocation;
      widgetSizeSetting: number;
      textureKit: textureKit;
      frameTextureKit: textureKit;
      hasTimer: boolean;
      orderIndex: number;
      widgetTag: string;
      inAnimType: Enum.WidgetAnimationType;
      outAnimType: Enum.WidgetAnimationType;
      widgetScale: Enum.UIWidgetScale;
      layoutDirection: Enum.UIWidgetLayoutDirection;
      modelSceneLayer: Enum.UIWidgetModelSceneLayer;
      scriptedAnimationEffectID: number;
    }

    interface DiscreteProgressStepsVisualizationInfo {
      shownState: Enum.WidgetShownState;
      tooltip: string;
      progressMin: number;
      progressMax: number;
      progressVal: number;
      numSteps: number;
      tooltipLoc: Enum.UIWidgetTooltipLocation;
      widgetSizeSetting: number;
      textureKit: textureKit;
      frameTextureKit: textureKit;
      hasTimer: boolean;
      orderIndex: number;
      widgetTag: string;
      inAnimType: Enum.WidgetAnimationType;
      outAnimType: Enum.WidgetAnimationType;
      widgetScale: Enum.UIWidgetScale;
      layoutDirection: Enum.UIWidgetLayoutDirection;
      modelSceneLayer: Enum.UIWidgetModelSceneLayer;
      scriptedAnimationEffectID: number;
    }

    interface DoubleIconAndTextWidgetVisualizationInfo {
      shownState: Enum.WidgetShownState;
      label: string;
      leftText: string;
      leftTooltip: string;
      rightText: string;
      rightTooltip: string;
      tooltipLoc: Enum.UIWidgetTooltipLocation;
      widgetSizeSetting: number;
      textureKit: textureKit;
      frameTextureKit: textureKit;
      hasTimer: boolean;
      orderIndex: number;
      widgetTag: string;
      inAnimType: Enum.WidgetAnimationType;
      outAnimType: Enum.WidgetAnimationType;
      widgetScale: Enum.UIWidgetScale;
      layoutDirection: Enum.UIWidgetLayoutDirection;
      modelSceneLayer: Enum.UIWidgetModelSceneLayer;
      scriptedAnimationEffectID: number;
    }

    interface DoubleStateIconRowVisualizationInfo {
      shownState: Enum.WidgetShownState;
      leftIcons: UIWidgetStateIconInfo[];
      rightIcons: UIWidgetStateIconInfo[];
      tooltipLoc: Enum.UIWidgetTooltipLocation;
      widgetSizeSetting: number;
      textureKit: textureKit;
      frameTextureKit: textureKit;
      hasTimer: boolean;
      orderIndex: number;
      widgetTag: string;
      inAnimType: Enum.WidgetAnimationType;
      outAnimType: Enum.WidgetAnimationType;
      widgetScale: Enum.UIWidgetScale;
      layoutDirection: Enum.UIWidgetLayoutDirection;
      modelSceneLayer: Enum.UIWidgetModelSceneLayer;
      scriptedAnimationEffectID: number;
    }

    interface DoubleStatusBarWidgetVisualizationInfo {
      shownState: Enum.WidgetShownState;
      leftBarMin: number;
      leftBarMax: number;
      leftBarValue: number;
      leftBarTooltip: string;
      rightBarMin: number;
      rightBarMax: number;
      rightBarValue: number;
      rightBarTooltip: string;
      barValueTextType: Enum.StatusBarValueTextType;
      text: string;
      leftBarTooltipLoc: Enum.UIWidgetTooltipLocation;
      rightBarTooltipLoc: Enum.UIWidgetTooltipLocation;
      fillMotionType: Enum.UIWidgetMotionType;
      widgetSizeSetting: number;
      textureKit: textureKit;
      frameTextureKit: textureKit;
      hasTimer: boolean;
      orderIndex: number;
      widgetTag: string;
      inAnimType: Enum.WidgetAnimationType;
      outAnimType: Enum.WidgetAnimationType;
      widgetScale: Enum.UIWidgetScale;
      layoutDirection: Enum.UIWidgetLayoutDirection;
      modelSceneLayer: Enum.UIWidgetModelSceneLayer;
      scriptedAnimationEffectID: number;
    }

    interface FillUpFramesWidgetVisualizationInfo {
      shownState: Enum.WidgetShownState;
      fillMin: number;
      fillMax: number;
      fillValue: number;
      numTotalFrames: number;
      numFullFrames: number;
      pulseFillingFrame: boolean;
      tooltip: string;
      tooltipLoc: Enum.UIWidgetTooltipLocation;
      widgetSizeSetting: number;
      textureKit: textureKit;
      frameTextureKit: textureKit;
      hasTimer: boolean;
      orderIndex: number;
      widgetTag: string;
      inAnimType: Enum.WidgetAnimationType;
      outAnimType: Enum.WidgetAnimationType;
      widgetScale: Enum.UIWidgetScale;
      layoutDirection: Enum.UIWidgetLayoutDirection;
      modelSceneLayer: Enum.UIWidgetModelSceneLayer;
      scriptedAnimationEffectID: number;
    }

    interface HorizontalCurrenciesWidgetVisualizationInfo {
      shownState: Enum.WidgetShownState;
      currencies: UIWidgetCurrencyInfo[];
      tooltipLoc: Enum.UIWidgetTooltipLocation;
      widgetSizeSetting: number;
      textureKit: textureKit;
      frameTextureKit: textureKit;
      hasTimer: boolean;
      orderIndex: number;
      widgetTag: string;
      inAnimType: Enum.WidgetAnimationType;
      outAnimType: Enum.WidgetAnimationType;
      widgetScale: Enum.UIWidgetScale;
      layoutDirection: Enum.UIWidgetLayoutDirection;
      modelSceneLayer: Enum.UIWidgetModelSceneLayer;
      scriptedAnimationEffectID: number;
    }

    interface IconAndTextWidgetVisualizationInfo {
      state: Enum.IconAndTextWidgetState;
      text: string;
      tooltip: string;
      dynamicTooltip: string;
      tooltipLoc: Enum.UIWidgetTooltipLocation;
      widgetSizeSetting: number;
      textureKit: textureKit;
      frameTextureKit: textureKit;
      hasTimer: boolean;
      orderIndex: number;
      widgetTag: string;
      inAnimType: Enum.WidgetAnimationType;
      outAnimType: Enum.WidgetAnimationType;
      widgetScale: Enum.UIWidgetScale;
      layoutDirection: Enum.UIWidgetLayoutDirection;
      modelSceneLayer: Enum.UIWidgetModelSceneLayer;
      scriptedAnimationEffectID: number;
    }

    interface IconTextAndBackgroundWidgetVisualizationInfo {
      shownState: Enum.WidgetShownState;
      text: string;
      widgetSizeSetting: number;
      textureKit: textureKit;
      frameTextureKit: textureKit;
      hasTimer: boolean;
      orderIndex: number;
      widgetTag: string;
      inAnimType: Enum.WidgetAnimationType;
      outAnimType: Enum.WidgetAnimationType;
      widgetScale: Enum.UIWidgetScale;
      layoutDirection: Enum.UIWidgetLayoutDirection;
      modelSceneLayer: Enum.UIWidgetModelSceneLayer;
      scriptedAnimationEffectID: number;
    }

    interface IconTextAndCurrenciesWidgetVisualizationInfo {
      shownState: Enum.WidgetShownState;
      enabledState: Enum.WidgetEnabledState;
      descriptionShownState: Enum.WidgetShownState;
      descriptionEnabledState: Enum.WidgetEnabledState;
      text: string;
      description: string;
      currencies: UIWidgetCurrencyInfo[];
      tooltipLoc: Enum.UIWidgetTooltipLocation;
      widgetSizeSetting: number;
      textureKit: textureKit;
      frameTextureKit: textureKit;
      hasTimer: boolean;
      orderIndex: number;
      widgetTag: string;
      inAnimType: Enum.WidgetAnimationType;
      outAnimType: Enum.WidgetAnimationType;
      widgetScale: Enum.UIWidgetScale;
      layoutDirection: Enum.UIWidgetLayoutDirection;
      modelSceneLayer: Enum.UIWidgetModelSceneLayer;
      scriptedAnimationEffectID: number;
    }

    interface ItemDisplayVisualizationInfo {
      shownState: Enum.WidgetShownState;
      tooltipLoc: Enum.UIWidgetTooltipLocation;
      itemInfo: UIWidgetItemInfo;
      widgetSizeSetting: number;
      textureKit: textureKit;
      frameTextureKit: textureKit;
      hasTimer: boolean;
      orderIndex: number;
      widgetTag: string;
      inAnimType: Enum.WidgetAnimationType;
      outAnimType: Enum.WidgetAnimationType;
      widgetScale: Enum.UIWidgetScale;
      layoutDirection: Enum.UIWidgetLayoutDirection;
      modelSceneLayer: Enum.UIWidgetModelSceneLayer;
      scriptedAnimationEffectID: number;
    }

    interface MapPinAnimationWidgetVisualizationInfo {
      shownState: Enum.WidgetShownState;
      animType: Enum.MapPinAnimationType;
      widgetSizeSetting: number;
      textureKit: textureKit;
      frameTextureKit: textureKit;
      hasTimer: boolean;
      orderIndex: number;
      widgetTag: string;
      inAnimType: Enum.WidgetAnimationType;
      outAnimType: Enum.WidgetAnimationType;
      widgetScale: Enum.UIWidgetScale;
      layoutDirection: Enum.UIWidgetLayoutDirection;
      modelSceneLayer: Enum.UIWidgetModelSceneLayer;
      scriptedAnimationEffectID: number;
    }

    interface ScenarioHeaderCurrenciesAndBackgroundWidgetVisualizationInfo {
      shownState: Enum.WidgetShownState;
      currencies: UIWidgetCurrencyInfo[];
      headerText: string;
      widgetSizeSetting: number;
      textureKit: textureKit;
      frameTextureKit: textureKit;
      hasTimer: boolean;
      orderIndex: number;
      widgetTag: string;
      inAnimType: Enum.WidgetAnimationType;
      outAnimType: Enum.WidgetAnimationType;
      widgetScale: Enum.UIWidgetScale;
      layoutDirection: Enum.UIWidgetLayoutDirection;
      modelSceneLayer: Enum.UIWidgetModelSceneLayer;
      scriptedAnimationEffectID: number;
    }

    interface ScenarioHeaderDelvesWidgetVisualizationInfo {
      shownState: Enum.WidgetShownState;
      headerText: string;
      tooltip: string;
      tooltipLoc: Enum.UIWidgetTooltipLocation;
      tierText: string;
      tierTooltipSpellID?: number;
      currencies: UIWidgetCurrencyInfo[];
      spells: UIWidgetSpellInfo[];
      rewardInfo: UIWidgetRewardInfo;
      widgetSizeSetting: number;
      textureKit: textureKit;
      frameTextureKit: textureKit;
      hasTimer: boolean;
      orderIndex: number;
      widgetTag: string;
      inAnimType: Enum.WidgetAnimationType;
      outAnimType: Enum.WidgetAnimationType;
      widgetScale: Enum.UIWidgetScale;
      layoutDirection: Enum.UIWidgetLayoutDirection;
      modelSceneLayer: Enum.UIWidgetModelSceneLayer;
      scriptedAnimationEffectID: number;
    }

    interface ScenarioHeaderTimerWidgetVisualizationInfo {
      shownState: Enum.WidgetShownState;
      timerMin: number;
      timerMax: number;
      timerValue: number;
      headerText: string;
      timerTooltip: string;
      widgetSizeSetting: number;
      textureKit: textureKit;
      frameTextureKit: textureKit;
      hasTimer: boolean;
      orderIndex: number;
      widgetTag: string;
      inAnimType: Enum.WidgetAnimationType;
      outAnimType: Enum.WidgetAnimationType;
      widgetScale: Enum.UIWidgetScale;
      layoutDirection: Enum.UIWidgetLayoutDirection;
      modelSceneLayer: Enum.UIWidgetModelSceneLayer;
      scriptedAnimationEffectID: number;
    }

    interface SpacerVisualizationInfo {
      shownState: Enum.WidgetShownState;
      widgetWidth: number;
      widgetHeight: number;
      widgetSizeSetting: number;
      textureKit: textureKit;
      frameTextureKit: textureKit;
      hasTimer: boolean;
      orderIndex: number;
      widgetTag: string;
      inAnimType: Enum.WidgetAnimationType;
      outAnimType: Enum.WidgetAnimationType;
      widgetScale: Enum.UIWidgetScale;
      layoutDirection: Enum.UIWidgetLayoutDirection;
      modelSceneLayer: Enum.UIWidgetModelSceneLayer;
      scriptedAnimationEffectID: number;
    }

    interface SpellDisplayVisualizationInfo {
      spellInfo: UIWidgetSpellInfo;
      tooltipLoc: Enum.UIWidgetTooltipLocation;
      widgetSizeSetting: number;
      textureKit: textureKit;
      frameTextureKit: textureKit;
      hasTimer: boolean;
      orderIndex: number;
      widgetTag: string;
      inAnimType: Enum.WidgetAnimationType;
      outAnimType: Enum.WidgetAnimationType;
      widgetScale: Enum.UIWidgetScale;
      layoutDirection: Enum.UIWidgetLayoutDirection;
      modelSceneLayer: Enum.UIWidgetModelSceneLayer;
      scriptedAnimationEffectID: number;
    }

    interface StackedResourceTrackerWidgetVisualizationInfo {
      shownState: Enum.WidgetShownState;
      resources: UIWidgetCurrencyInfo[];
      tooltipLoc: Enum.UIWidgetTooltipLocation;
      widgetSizeSetting: number;
      textureKit: textureKit;
      frameTextureKit: textureKit;
      hasTimer: boolean;
      orderIndex: number;
      widgetTag: string;
      inAnimType: Enum.WidgetAnimationType;
      outAnimType: Enum.WidgetAnimationType;
      widgetScale: Enum.UIWidgetScale;
      layoutDirection: Enum.UIWidgetLayoutDirection;
      modelSceneLayer: Enum.UIWidgetModelSceneLayer;
      scriptedAnimationEffectID: number;
    }

    interface StatusBarWidgetVisualizationInfo {
      shownState: Enum.WidgetShownState;
      barMin: number;
      barMax: number;
      barValue: number;
      text: string;
      tooltip: string;
      barValueTextType: Enum.StatusBarValueTextType;
      overrideBarText: string;
      overrideBarTextShownType: Enum.StatusBarOverrideBarTextShownType;
      colorTint: Enum.StatusBarColorTintValue;
      partitionValues: number[];
      tooltipLoc: Enum.UIWidgetTooltipLocation;
      fillMotionType: Enum.UIWidgetMotionType;
      barTextEnabledState: Enum.WidgetEnabledState;
      barTextFontType: Enum.UIWidgetFontType;
      barTextSizeType: Enum.UIWidgetTextSizeType;
      textEnabledState: Enum.WidgetEnabledState;
      textFontType: Enum.UIWidgetFontType;
      textSizeType: Enum.UIWidgetTextSizeType;
      glowAnimType: Enum.WidgetGlowAnimType;
      showGlowState: Enum.WidgetShowGlowState;
      fillMinOpacity: Enum.WidgetOpacityType;
      fillMaxOpacity: Enum.WidgetOpacityType;
      widgetSizeSetting: number;
      textureKit: textureKit;
      frameTextureKit: textureKit;
      hasTimer: boolean;
      orderIndex: number;
      widgetTag: string;
      inAnimType: Enum.WidgetAnimationType;
      outAnimType: Enum.WidgetAnimationType;
      widgetScale: Enum.UIWidgetScale;
      layoutDirection: Enum.UIWidgetLayoutDirection;
      modelSceneLayer: Enum.UIWidgetModelSceneLayer;
      scriptedAnimationEffectID: number;
    }

    interface TextColumnRowEntryInfo {
      text: string;
      enabledState: Enum.WidgetEnabledState;
      hAlign: Enum.WidgetTextHorizontalAlignmentType;
      columnWidth: number;
    }

    interface TextColumnRowVisualizationInfo {
      shownState: Enum.WidgetShownState;
      entries: TextColumnRowEntryInfo[];
      textSizeType: Enum.UIWidgetTextSizeType;
      fontType: Enum.UIWidgetFontType;
      tooltip: string;
      tooltipLoc: Enum.UIWidgetTooltipLocation;
      bottomPadding: number;
      widgetSizeSetting: number;
      textureKit: textureKit;
      frameTextureKit: textureKit;
      hasTimer: boolean;
      orderIndex: number;
      widgetTag: string;
      inAnimType: Enum.WidgetAnimationType;
      outAnimType: Enum.WidgetAnimationType;
      widgetScale: Enum.UIWidgetScale;
      layoutDirection: Enum.UIWidgetLayoutDirection;
      modelSceneLayer: Enum.UIWidgetModelSceneLayer;
      scriptedAnimationEffectID: number;
    }

    interface TextWithStateWidgetVisualizationInfo {
      shownState: Enum.WidgetShownState;
      enabledState: Enum.WidgetEnabledState;
      text: string;
      tooltip: string;
      textSizeType: Enum.UIWidgetTextSizeType;
      fontType: Enum.UIWidgetFontType;
      bottomPadding: number;
      tooltipLoc: Enum.UIWidgetTooltipLocation;
      hAlign: Enum.WidgetTextHorizontalAlignmentType;
      widgetSizeSetting: number;
      textureKit: textureKit;
      frameTextureKit: textureKit;
      hasTimer: boolean;
      orderIndex: number;
      widgetTag: string;
      inAnimType: Enum.WidgetAnimationType;
      outAnimType: Enum.WidgetAnimationType;
      widgetScale: Enum.UIWidgetScale;
      layoutDirection: Enum.UIWidgetLayoutDirection;
      modelSceneLayer: Enum.UIWidgetModelSceneLayer;
      scriptedAnimationEffectID: number;
    }

    interface TextWithSubtextWidgetVisualizationInfo {
      shownState: Enum.WidgetShownState;
      enabledState: Enum.WidgetEnabledState;
      text: string;
      widgetWidth: number;
      tooltip: string;
      textSizeType: Enum.UIWidgetTextSizeType;
      fontType: Enum.UIWidgetFontType;
      tooltipLoc: Enum.UIWidgetTooltipLocation;
      hAlign: Enum.WidgetTextHorizontalAlignmentType;
      subText: string;
      subTextSizeType: Enum.UIWidgetTextSizeType;
      subTextFontType: Enum.UIWidgetFontType;
      subTextHAlign: Enum.WidgetTextHorizontalAlignmentType;
      subTextEnabledState: Enum.WidgetEnabledState;
      widgetSizeSetting: number;
      textureKit: textureKit;
      frameTextureKit: textureKit;
      hasTimer: boolean;
      orderIndex: number;
      widgetTag: string;
      inAnimType: Enum.WidgetAnimationType;
      outAnimType: Enum.WidgetAnimationType;
      widgetScale: Enum.UIWidgetScale;
      layoutDirection: Enum.UIWidgetLayoutDirection;
      modelSceneLayer: Enum.UIWidgetModelSceneLayer;
      scriptedAnimationEffectID: number;
      spacing: number;
    }

    interface TextureAndTextEntryInfo {
      text: string;
      tooltip: string;
    }

    interface TextureAndTextRowVisualizationInfo {
      shownState: Enum.WidgetShownState;
      entries: TextureAndTextEntryInfo[];
      textSizeType: Enum.UIWidgetTextureAndTextSizeType;
      groupAlignment: Enum.UIWidgetHorizontalDirection;
      fixedWidth?: number;
      tooltipLoc: Enum.UIWidgetTooltipLocation;
      widgetSizeSetting: number;
      textureKit: textureKit;
      frameTextureKit: textureKit;
      hasTimer: boolean;
      orderIndex: number;
      widgetTag: string;
      inAnimType: Enum.WidgetAnimationType;
      outAnimType: Enum.WidgetAnimationType;
      widgetScale: Enum.UIWidgetScale;
      layoutDirection: Enum.UIWidgetLayoutDirection;
      modelSceneLayer: Enum.UIWidgetModelSceneLayer;
      scriptedAnimationEffectID: number;
    }

    interface TextureAndTextVisualizationInfo {
      shownState: Enum.WidgetShownState;
      text: string;
      tooltip: string;
      tooltipLoc: Enum.UIWidgetTooltipLocation;
      textSizeType: Enum.UIWidgetTextureAndTextSizeType;
      widgetSizeSetting: number;
      textureKit: textureKit;
      frameTextureKit: textureKit;
      hasTimer: boolean;
      orderIndex: number;
      widgetTag: string;
      inAnimType: Enum.WidgetAnimationType;
      outAnimType: Enum.WidgetAnimationType;
      widgetScale: Enum.UIWidgetScale;
      layoutDirection: Enum.UIWidgetLayoutDirection;
      modelSceneLayer: Enum.UIWidgetModelSceneLayer;
      scriptedAnimationEffectID: number;
    }

    interface TextureWithAnimationVisualizationInfo {
      shownState: Enum.WidgetShownState;
      tooltip: string;
      tooltipLoc: Enum.UIWidgetTooltipLocation;
      widgetSizeSetting: number;
      textureKit: textureKit;
      frameTextureKit: textureKit;
      hasTimer: boolean;
      orderIndex: number;
      widgetTag: string;
      inAnimType: Enum.WidgetAnimationType;
      outAnimType: Enum.WidgetAnimationType;
      widgetScale: Enum.UIWidgetScale;
      layoutDirection: Enum.UIWidgetLayoutDirection;
      modelSceneLayer: Enum.UIWidgetModelSceneLayer;
      scriptedAnimationEffectID: number;
    }

    interface TugOfWarWidgetVisualizationInfo {
      shownState: Enum.WidgetShownState;
      minValue: number;
      maxValue: number;
      currentValue: number;
      neutralZoneCenter: number;
      neutralZoneSize: number;
      leftIconInfo: UIWidgetIconInfo;
      rightIconInfo: UIWidgetIconInfo;
      glowAnimType: Enum.WidgetGlowAnimType;
      tooltip: string;
      tooltipLoc: Enum.UIWidgetTooltipLocation;
      neutralFillStyle: Enum.TugOfWarStyleValue;
      markerArrowShownState: Enum.TugOfWarMarkerArrowShownState;
      widgetSizeSetting: number;
      textureKit: textureKit;
      frameTextureKit: textureKit;
      hasTimer: boolean;
      orderIndex: number;
      widgetTag: string;
      inAnimType: Enum.WidgetAnimationType;
      outAnimType: Enum.WidgetAnimationType;
      widgetScale: Enum.UIWidgetScale;
      layoutDirection: Enum.UIWidgetLayoutDirection;
      modelSceneLayer: Enum.UIWidgetModelSceneLayer;
      scriptedAnimationEffectID: number;
    }

    interface UIWidgetCurrencyInfo {
      iconFileID: fileID;
      leadingText: string;
      text: string;
      tooltip: string;
      isCurrencyMaxed: boolean;
      textFontType: Enum.UIWidgetFontType;
      textSizeType: Enum.UIWidgetTextSizeType;
      textEnabledState: Enum.WidgetEnabledState;
      iconSizeType: Enum.WidgetIconSizeType;
      updateAnimType: Enum.UIWidgetUpdateAnimType;
    }

    interface UIWidgetIconInfo {
      sourceType: Enum.WidgetIconSourceType;
      sourceID: number;
      sizeType: Enum.WidgetIconSizeType;
      tooltip: string;
      tooltipLoc: Enum.UIWidgetTooltipLocation;
    }

    interface UIWidgetInfo {
      widgetID: number;
      widgetSetID: number;
      widgetType: Enum.UIWidgetVisualizationType;
      unitToken?: string;
    }

    interface UIWidgetItemInfo {
      itemID: number;
      stackCount?: number;
      overrideItemName?: string;
      infoText?: string;
      overrideTooltip?: string;
      textDisplayStyle: Enum.ItemDisplayTextDisplayStyle;
      tooltipEnabled: boolean;
      iconSizeType: Enum.WidgetIconSizeType;
      infoTextEnabledState: Enum.WidgetEnabledState;
      showAsEarned: boolean;
      itemNameTextFontType: Enum.UIWidgetFontType;
      itemNameTextSizeType: Enum.UIWidgetTextSizeType;
      infoTextFontType: Enum.UIWidgetFontType;
      infoTextSizeType: Enum.UIWidgetTextSizeType;
      itemNameCustomColor: Enum.WidgetEnabledState;
      itemNameCustomColorOverrideState: Enum.UIWidgetOverrideState;
    }

    interface UIWidgetRewardInfo {
      shownState: Enum.UIWidgetRewardShownState;
      earnedTooltip: string;
      unearnedTooltip: string;
    }

    interface UIWidgetSetInfo {
      layoutDirection: Enum.UIWidgetSetLayoutDirection;
      verticalPadding: number;
    }

    interface UIWidgetSpellInfo {
      spellID: number;
      shownState: Enum.WidgetShownState;
      enabledState: Enum.WidgetEnabledState;
      tooltip: string;
      text: string;
      stackDisplay: number;
      iconSizeType: Enum.WidgetIconSizeType;
      iconDisplayType: Enum.SpellDisplayIconDisplayType;
      textShownState: Enum.SpellDisplayTextShownStateType;
      borderColor: Enum.SpellDisplayBorderColor;
      textFontType: Enum.UIWidgetFontType;
      textSizeType: Enum.UIWidgetTextSizeType;
      hAlignType: Enum.WidgetTextHorizontalAlignmentType;
      tint: Enum.SpellDisplayTint;
      showGlowState: Enum.WidgetShowGlowState;
    }

    interface UIWidgetStateIconInfo {
      iconState: Enum.IconState;
      state1Tooltip: string;
      state2Tooltip: string;
    }

    interface UIWidgetTextTooltipPair {
      text: string;
      tooltip: string;
    }

    interface UnitPowerBarWidgetVisualizationInfo {
      shownState: Enum.WidgetShownState;
      barMin: number;
      barMax: number;
      barValue: number;
      tooltip: string;
      barValueTextType: Enum.StatusBarValueTextType;
      overrideBarText: string;
      overrideBarTextShownType: Enum.StatusBarOverrideBarTextShownType;
      tooltipLoc: Enum.UIWidgetTooltipLocation;
      fillMotionType: Enum.UIWidgetMotionType;
      flashBlendModeType: Enum.UIWidgetBlendModeType;
      sparkBlendModeType: Enum.UIWidgetBlendModeType;
      flashMomentType: Enum.WidgetUnitPowerBarFlashMomentType;
      widgetSizeSetting: number;
      textureKit: textureKit;
      frameTextureKit: textureKit;
      hasTimer: boolean;
      orderIndex: number;
      widgetTag: string;
      inAnimType: Enum.WidgetAnimationType;
      outAnimType: Enum.WidgetAnimationType;
      widgetScale: Enum.UIWidgetScale;
      layoutDirection: Enum.UIWidgetLayoutDirection;
      modelSceneLayer: Enum.UIWidgetModelSceneLayer;
      scriptedAnimationEffectID: number;
    }

    interface ZoneControlVisualizationInfo {
      shownState: Enum.WidgetShownState;
      mode: Enum.ZoneControlMode;
      leadingEdgeType: Enum.ZoneControlLeadingEdgeType;
      dangerFlashType: Enum.ZoneControlDangerFlashType;
      zoneEntries: ZoneEntry[];
      tooltipLoc: Enum.UIWidgetTooltipLocation;
      widgetSizeSetting: number;
      textureKit: textureKit;
      frameTextureKit: textureKit;
      hasTimer: boolean;
      orderIndex: number;
      widgetTag: string;
      inAnimType: Enum.WidgetAnimationType;
      outAnimType: Enum.WidgetAnimationType;
      widgetScale: Enum.UIWidgetScale;
      layoutDirection: Enum.UIWidgetLayoutDirection;
      modelSceneLayer: Enum.UIWidgetModelSceneLayer;
      scriptedAnimationEffectID: number;
    }

    interface ZoneEntry {
      state: Enum.ZoneControlState;
      activeState: Enum.ZoneControlActiveState;
      fillType: Enum.ZoneControlFillType;
      min: number;
      max: number;
      current: number;
      capturePoint: number;
      tooltip: string;
    }

    function GetAllWidgetsBySetID(this: void, setID: number): UIWidgetInfo[];
    function GetBelowMinimapWidgetSetID(this: void): number;
    function GetBulletTextListWidgetVisualizationInfo(
      this: void,
      widgetID: number
    ): BulletTextListWidgetVisualizationInfo | undefined;
    function GetCaptureBarWidgetVisualizationInfo(
      this: void,
      widgetID: number
    ): CaptureBarWidgetVisualizationInfo | undefined;
    function GetCaptureZoneVisualizationInfo(
      this: void,
      widgetID: number
    ): CaptureZoneVisualizationInfo | undefined;
    function GetDiscreteProgressStepsVisualizationInfo(
      this: void,
      widgetID: number
    ): DiscreteProgressStepsVisualizationInfo | undefined;
    function GetDoubleIconAndTextWidgetVisualizationInfo(
      this: void,
      widgetID: number
    ): DoubleIconAndTextWidgetVisualizationInfo | undefined;
    function GetDoubleStateIconRowVisualizationInfo(
      this: void,
      widgetID: number
    ): DoubleStateIconRowVisualizationInfo | undefined;
    function GetDoubleStatusBarWidgetVisualizationInfo(
      this: void,
      widgetID: number
    ): DoubleStatusBarWidgetVisualizationInfo | undefined;
    function GetFillUpFramesWidgetVisualizationInfo(
      this: void,
      widgetID: number
    ): FillUpFramesWidgetVisualizationInfo | undefined;
    function GetHorizontalCurrenciesWidgetVisualizationInfo(
      this: void,
      widgetID: number
    ): HorizontalCurrenciesWidgetVisualizationInfo | undefined;
    function GetIconAndTextWidgetVisualizationInfo(
      this: void,
      widgetID: number
    ): IconAndTextWidgetVisualizationInfo | undefined;
    function GetIconTextAndBackgroundWidgetVisualizationInfo(
      this: void,
      widgetID: number
    ): IconTextAndBackgroundWidgetVisualizationInfo | undefined;
    function GetIconTextAndCurrenciesWidgetVisualizationInfo(
      this: void,
      widgetID: number
    ): IconTextAndCurrenciesWidgetVisualizationInfo | undefined;
    function GetItemDisplayVisualizationInfo(
      this: void,
      widgetID: number
    ): ItemDisplayVisualizationInfo | undefined;
    function GetMapPinAnimationWidgetVisualizationInfo(
      this: void,
      widgetID: number
    ): MapPinAnimationWidgetVisualizationInfo | undefined;
    function GetObjectiveTrackerWidgetSetID(this: void): number;
    function GetPowerBarWidgetSetID(this: void): number;
    function GetScenarioHeaderCurrenciesAndBackgroundWidgetVisualizationInfo(
      this: void,
      widgetID: number
    ): ScenarioHeaderCurrenciesAndBackgroundWidgetVisualizationInfo | undefined;
    function GetScenarioHeaderDelvesWidgetVisualizationInfo(
      this: void,
      widgetID: number
    ): ScenarioHeaderDelvesWidgetVisualizationInfo | undefined;
    function GetScenarioHeaderTimerWidgetVisualizationInfo(
      this: void,
      widgetID: number
    ): ScenarioHeaderTimerWidgetVisualizationInfo | undefined;
    function GetSpacerVisualizationInfo(
      this: void,
      widgetID: number
    ): SpacerVisualizationInfo | undefined;
    function GetSpellDisplayVisualizationInfo(
      this: void,
      widgetID: number
    ): SpellDisplayVisualizationInfo | undefined;
    function GetStackedResourceTrackerWidgetVisualizationInfo(
      this: void,
      widgetID: number
    ): StackedResourceTrackerWidgetVisualizationInfo | undefined;
    function GetStatusBarWidgetVisualizationInfo(
      this: void,
      widgetID: number
    ): StatusBarWidgetVisualizationInfo | undefined;
    function GetTextColumnRowVisualizationInfo(
      this: void,
      widgetID: number
    ): TextColumnRowVisualizationInfo | undefined;
    function GetTextWithStateWidgetVisualizationInfo(
      this: void,
      widgetID: number
    ): TextWithStateWidgetVisualizationInfo | undefined;
    function GetTextWithSubtextWidgetVisualizationInfo(
      this: void,
      widgetID: number
    ): TextWithSubtextWidgetVisualizationInfo | undefined;
    function GetTextureAndTextRowVisualizationInfo(
      this: void,
      widgetID: number
    ): TextureAndTextRowVisualizationInfo | undefined;
    function GetTextureAndTextVisualizationInfo(
      this: void,
      widgetID: number
    ): TextureAndTextVisualizationInfo | undefined;
    function GetTextureWithAnimationVisualizationInfo(
      this: void,
      widgetID: number
    ): TextureWithAnimationVisualizationInfo | undefined;
    function GetTopCenterWidgetSetID(this: void): number;
    function GetTugOfWarWidgetVisualizationInfo(
      this: void,
      widgetID: number
    ): TugOfWarWidgetVisualizationInfo | undefined;
    function GetUnitPowerBarWidgetVisualizationInfo(
      this: void,
      widgetID: number
    ): UnitPowerBarWidgetVisualizationInfo | undefined;
    function GetWidgetSetInfo(this: void, widgetSetID: number): UIWidgetSetInfo;
    function GetZoneControlVisualizationInfo(
      this: void,
      widgetID: number
    ): ZoneControlVisualizationInfo | undefined;
    function RegisterUnitForWidgetUpdates(
      this: void,
      unitToken: string,
      isGuid?: boolean
    ): void;
    function SetProcessingUnit(this: void, unit?: UnitToken): void;
    function SetProcessingUnitGuid(this: void, unit?: WOWGUID): void;
    function UnregisterUnitForWidgetUpdates(
      this: void,
      unitToken: string,
      isGuid?: boolean
    ): void;
  }

  namespace C_UnitAuras {
    function AddPrivateAuraAnchor(
      this: void,
      args: AddPrivateAuraAnchorArgs
    ): number | undefined;
    function AddPrivateAuraAppliedSound(
      this: void,
      sound: UnitPrivateAuraAppliedSoundInfo
    ): number | undefined;
    function AuraIsPrivate(this: void, spellID: number): boolean;
    function GetAuraDataByAuraInstanceID(
      this: void,
      unitToken: string,
      auraInstanceID: number
    ): AuraData | undefined;
    function GetAuraDataByIndex(
      this: void,
      unitToken: string,
      index: number,
      filter?: string
    ): AuraData | undefined;
    function GetAuraDataBySlot(
      this: void,
      unitToken: string,
      slot: number
    ): AuraData | undefined;
    function GetAuraDataBySpellName(
      this: void,
      unitToken: string,
      spellName: string,
      filter?: string
    ): AuraData | undefined;
    function GetAuraSlots(
      this: void,
      unitToken: UnitToken,
      filter?: string,
      maxSlots?: number,
      continuationToken?: number
    ): LuaMultiReturn<[number | undefined, number]>;
    function GetBuffDataByIndex(
      this: void,
      unitToken: string,
      index: number,
      filter?: string
    ): AuraData | undefined;
    function GetCooldownAuraBySpellID(
      this: void,
      spellID: number
    ): number | undefined;
    function GetDebuffDataByIndex(
      this: void,
      unitToken: string,
      index: number,
      filter?: string
    ): AuraData | undefined;
    function GetPlayerAuraBySpellID(
      this: void,
      spellID: number
    ): AuraData | undefined;
    function IsAuraFilteredOutByInstanceID(
      this: void,
      unitToken: string,
      auraInstanceID: number,
      filterFlags: string
    ): boolean;
    function RemovePrivateAuraAnchor(this: void, anchorID: number): void;
    function RemovePrivateAuraAppliedSound(
      this: void,
      privateAuraSoundID: number
    ): void;
    function SetPrivateWarningTextAnchor(
      this: void,
      parent: SimpleFrame,
      anchor?: AnchorBinding
    ): void;
    function WantsAlteredForm(this: void, unitToken: string): boolean;
  }

  interface AddPrivateAuraAnchorArgs {
    unitToken: string;
    auraIndex: number;
    parent: SimpleFrame;
    showCountdownFrame: boolean;
    showCountdownNumbers: boolean;
    iconInfo?: PrivateAuraIconInfo;
    durationAnchor?: AnchorBinding;
  }

  interface PrivateAuraIconInfo {
    iconAnchor: AnchorBinding;
    iconWidth: uiUnit;
    iconHeight: uiUnit;
  }

  interface UnitAuraUpdateInfo {
    isFullUpdate?: boolean;
    removedAuraInstanceIDs?: number[];
    addedAuras?: AuraData[];
    updatedAuraInstanceIDs?: number[];
  }

  interface UnitPrivateAuraAnchorInfo {
    anchorID: number;
    unitToken: string;
    auraIndex: number;
    showCountdownFrame: boolean;
    showCountdownNumbers: boolean;
    iconWidth?: uiUnit;
    iconHeight?: uiUnit;
  }

  interface UnitPrivateAuraAppliedSoundInfo {
    unitToken: string;
    spellID: number;
    soundFileName?: string;
    soundFileID?: number;
    outputChannel?: string;
  }

  interface CorruptionEffectInfo {
    name: string;
    description: string;
    minCorruption: number;
  }

  interface UnitCastingInfoResult {
    name: string;
    displayName: string;
    textureID: fileID;
    startTimeMs: number;
    endTimeMs: number;
    isTradeskill: boolean;
    castID: WOWGUID;
    notInterruptible: boolean;
    castingSpellID: number;
  }

  interface UnitChannelInfoResult {
    name: string;
    displayName: string;
    textureID: fileID;
    startTimeMs: number;
    endTimeMs: number;
    isTradeskill: boolean;
    notInterruptible: boolean;
    spellID: number;
    isEmpowered: boolean;
    numEmpowerStages: number;
  }

  interface UnitPowerBarInfo {
    ID: number;
    barType: number;
    minPower: number;
    startInset: number;
    endInset: number;
    smooth: boolean;
    hideFromOthers: boolean;
    showOnRaid: boolean;
    opaqueSpark: boolean;
    opaqueFlash: boolean;
    anchorTop: boolean;
    forcePercentage: boolean;
    sparkUnderFrame: boolean;
    flashAtMinPower: boolean;
    fractionalCounter: boolean;
    animateNumbers: boolean;
  }

  function CanEjectPassengerFromSeat(
    this: void,
    virtualSeatIndex: number
  ): boolean;
  function CanShowSetRoleButton(this: void): boolean;
  function CanSwitchVehicleSeat(this: void): boolean;
  function ClosestGameObjectPosition(
    this: void,
    gameObjectID: number
  ): LuaMultiReturn<[number, number, number]>;
  function ClosestUnitPosition(
    this: void,
    creatureID: number
  ): LuaMultiReturn<[number, number, number]>;
  function EjectPassengerFromSeat(this: void, virtualSeatIndex: number): void;
  function GetComboPoints(
    this: void,
    unit: UnitToken,
    target: UnitToken
  ): number;
  function GetNegativeCorruptionEffectInfo(this: void): CorruptionEffectInfo[];
  function GetUnitChargedPowerPoints(this: void, unit: UnitToken): number[];
  function GetUnitEmpowerHoldAtMaxTime(this: void, unit: UnitToken): number;
  function GetUnitEmpowerMinHoldTime(this: void, unit: UnitToken): number;
  function GetUnitEmpowerStageDuration(
    this: void,
    unit: UnitToken,
    index: number
  ): number;
  function GetUnitHealthModifier(this: void, unit: UnitToken): number;
  function GetUnitMaxHealthModifier(this: void, unit: UnitToken): number;
  function GetUnitPowerBarInfo(
    this: void,
    unitToken: UnitToken
  ): UnitPowerBarInfo;
  function GetUnitPowerBarInfoByID(this: void, barID: number): UnitPowerBarInfo;
  function GetUnitPowerBarStrings(
    this: void,
    unitToken: UnitToken
  ): LuaMultiReturn<
    [string | undefined, string | undefined, string | undefined]
  >;
  function GetUnitPowerBarStringsByID(
    this: void,
    barID: number
  ): LuaMultiReturn<
    [string | undefined, string | undefined, string | undefined]
  >;
  function GetUnitPowerBarTextureInfo(
    this: void,
    unitToken: UnitToken,
    textureIndex: number,
    timerIndex?: number
  ): LuaMultiReturn<[fileID, number, number, number, number]>;
  function GetUnitPowerBarTextureInfoByID(
    this: void,
    barID: number,
    textureIndex: number
  ): LuaMultiReturn<[fileID, number, number, number, number]>;
  function GetUnitPowerModifier(this: void, unit: UnitToken): number;
  function GetUnitSpeed(
    this: void,
    unit: UnitToken
  ): LuaMultiReturn<[number, number, number, number]>;
  function GetUnitTotalModifiedMaxHealthPercent(
    this: void,
    unit: UnitToken
  ): number;
  function GetVehicleUIIndicator(
    this: void,
    vehicleIndicatorID: number
  ): LuaMultiReturn<[fileID, number]>;
  function GetVehicleUIIndicatorSeat(
    this: void,
    vehicleIndicatorID: number,
    indicatorSeatIndex: number
  ): LuaMultiReturn<[number, number, number]>;
  function InitiateRolePoll(this: void): boolean;
  function IsFalling(this: void, unit?: UnitToken): boolean;
  function IsFlying(this: void, unit?: UnitToken): boolean;
  function IsPlayerInGuildFromGUID(this: void, playerGUID: WOWGUID): boolean;
  function IsSubmerged(this: void, unit?: UnitToken): boolean;
  function IsSwimming(this: void, unit?: UnitToken): boolean;
  function IsUnitModelReadyForUI(this: void, unitToken: UnitToken): boolean;
  function PlayerIsPVPInactive(this: void, unit: UnitToken): boolean;
  function PlayerVehicleHasComboPoints(this: void): boolean;
  function ReportPlayerIsPVPAFK(this: void, unit: UnitToken): void;
  function ResistancePercent(
    this: void,
    resistance: number,
    casterLevel: number
  ): number;
  function SetPortraitTexture(
    this: void,
    textureObject: SimpleTexture,
    unitToken: UnitToken,
    disableMasking?: boolean
  ): void;
  function SetPortraitTextureFromCreatureDisplayID(
    this: void,
    textureObject: SimpleTexture,
    creatureDisplayID: number
  ): void;
  function SetUnitCursorTexture(
    this: void,
    textureObject: SimpleTexture,
    unit: UnitToken,
    style?: Enum.CursorStyle,
    includeLowPriority?: boolean
  ): boolean;
  function ShowBossFrameWhenUninteractable(
    this: void,
    unit: UnitToken
  ): boolean;
  function UnitAffectingCombat(this: void, unit: UnitToken): boolean;
  function UnitAlliedRaceInfo(
    this: void,
    unit: UnitToken
  ): LuaMultiReturn<[boolean, boolean]>;
  function UnitArmor(
    this: void,
    unit: UnitToken
  ): LuaMultiReturn<[number, number, number, number]>;
  function UnitAttackPower(
    this: void,
    unit: UnitToken
  ): LuaMultiReturn<[number, number, number]>;
  function UnitAttackSpeed(
    this: void,
    unit: UnitToken
  ): LuaMultiReturn<[number, number | undefined]>;
  function UnitBattlePetLevel(this: void, unit: UnitToken): number | undefined;
  function UnitBattlePetSpeciesID(
    this: void,
    unit: UnitToken
  ): number | undefined;
  function UnitBattlePetType(this: void, unit: UnitToken): number | undefined;
  function UnitCanAssist(
    this: void,
    unit: UnitToken,
    target: UnitToken
  ): boolean;
  function UnitCanAttack(
    this: void,
    unit: UnitToken,
    target: UnitToken
  ): boolean;
  function UnitCanCooperate(
    this: void,
    unit: UnitToken,
    target: UnitToken
  ): boolean;
  function UnitCanPetBattle(
    this: void,
    unit: UnitToken,
    target: UnitToken
  ): boolean;
  function UnitCastingInfo(
    this: void,
    unit: UnitToken
  ): LuaMultiReturn<
    [string, string, fileID, number, number, boolean, WOWGUID, boolean, number]
  >;
  function UnitChannelInfo(
    this: void,
    unitToken: string
  ): LuaMultiReturn<
    [
      string,
      string,
      fileID,
      number,
      number,
      boolean,
      boolean,
      number,
      boolean,
      number,
    ]
  >;
  function UnitChromieTimeID(this: void, unit: UnitToken): number;
  function UnitClass(
    this: void,
    unit: UnitToken
  ): LuaMultiReturn<[string, string, number]>;
  function UnitClassBase(
    this: void,
    unit: UnitToken
  ): LuaMultiReturn<[string, number]>;
  function UnitClassification(this: void, unit: UnitToken): string;
  function UnitControllingVehicle(this: void, unit: UnitToken): boolean;
  function UnitCreatureFamily(this: void, unit: UnitToken): string;
  function UnitCreatureType(this: void, unit: UnitToken): string;
  function UnitDamage(
    this: void,
    unit: UnitToken
  ): LuaMultiReturn<[number, number, number, number, number, number, number]>;
  function UnitDetailedThreatSituation(
    this: void,
    unit: UnitToken,
    mobGUID: UnitToken
  ): LuaMultiReturn<[boolean, number, number, number, number]>;
  function UnitDistanceSquared(
    this: void,
    unit: UnitToken
  ): LuaMultiReturn<[number, boolean]>;
  function UnitEffectiveLevel(this: void, name: string): number;
  function UnitExists(this: void, unit?: UnitToken): boolean;
  function UnitFactionGroup(
    this: void,
    unitName: string,
    checkDisplayRace?: boolean
  ): LuaMultiReturn<[string, string]>;
  function UnitFullName(
    this: void,
    unit: string
  ): LuaMultiReturn<[string, string]>;
  function UnitGUID(this: void, unit: UnitToken): WOWGUID | undefined;
  function UnitGetIncomingHeals(
    this: void,
    unit: UnitToken,
    healerGUID?: UnitToken
  ): number | undefined;
  function UnitGetTotalAbsorbs(this: void, unit: UnitToken): number;
  function UnitGetTotalHealAbsorbs(this: void, unit: UnitToken): number;
  function UnitGroupRolesAssigned(this: void, unit?: UnitToken): string;
  function UnitGroupRolesAssignedEnum(this: void, unit?: UnitToken): number;
  function UnitHPPerStamina(this: void, unit: UnitToken): number;
  function UnitHasRelicSlot(this: void, unit: UnitToken): boolean;
  function UnitHasVehiclePlayerFrameUI(this: void, unit?: UnitToken): boolean;
  function UnitHasVehicleUI(this: void, unit?: UnitToken): boolean;
  function UnitHealthMax(this: void, unit: UnitToken): number;
  function UnitHealth(
    this: void,
    unit: UnitToken,
    usePredicted?: boolean
  ): number;
  function UnitHonor(this: void, unit: UnitToken): number;
  function UnitHonorLevel(this: void, unit: UnitToken): number;
  function UnitHonorMax(this: void, unit: UnitToken): number;
  function UnitInAnyGroup(
    this: void,
    unit?: UnitToken,
    partyIndex?: number
  ): boolean;
  function UnitInBattleground(
    this: void,
    unit?: UnitToken,
    partyIndex?: number
  ): number | undefined;
  function UnitInParty(
    this: void,
    unit?: UnitToken,
    partyIndex?: number
  ): boolean;
  function UnitInPartyIsAI(this: void, unit?: UnitToken): boolean;
  function UnitInPartyShard(this: void, unit: UnitToken): boolean;
  function UnitInRaid(
    this: void,
    unit?: UnitToken,
    partyIndex?: number
  ): number | undefined;
  function UnitInRange(
    this: void,
    unit: UnitToken
  ): LuaMultiReturn<[boolean, boolean]>;
  function UnitInSubgroup(
    this: void,
    unit?: UnitToken,
    partyIndex?: number
  ): boolean;
  function UnitInVehicle(this: void, unit: UnitToken): boolean;
  function UnitInVehicleControlSeat(this: void, unit?: UnitToken): boolean;
  function UnitInVehicleHidesPetFrame(this: void, unit?: UnitToken): boolean;
  function UnitIsAFK(this: void, unit: UnitToken): boolean;
  function UnitIsBattlePet(this: void, unit: UnitToken): boolean | undefined;
  function UnitIsBattlePetCompanion(this: void, unit: UnitToken): boolean;
  function UnitIsBossMob(this: void, unit: UnitToken): boolean;
  function UnitIsCharmed(this: void, unit?: UnitToken): boolean;
  function UnitIsConnected(this: void, unit: UnitToken): boolean;
  function UnitIsControlling(this: void, unit: UnitToken): boolean;
  function UnitIsCorpse(this: void, unit?: UnitToken): boolean;
  function UnitIsDND(this: void, unit: UnitToken): boolean;
  function UnitIsDead(this: void, unit: UnitToken): boolean;
  function UnitIsDeadOrGhost(this: void, unit: UnitToken): boolean;
  function UnitIsEnemy(this: void, unit: UnitToken, target: UnitToken): boolean;
  function UnitIsFeignDeath(this: void, unit: UnitToken): boolean;
  function UnitIsFriend(
    this: void,
    unit: UnitToken,
    target: UnitToken
  ): boolean;
  function UnitIsGameObject(this: void, unit?: UnitToken): boolean;
  function UnitIsGhost(this: void, unit: UnitToken): boolean;
  function UnitIsInMyGuild(this: void, unit: string): boolean;
  function UnitIsInteractable(this: void, unit?: UnitToken): boolean;
  function UnitIsMercenary(this: void, name: string): boolean;
  function UnitIsOtherPlayersBattlePet(this: void, unit?: UnitToken): boolean;
  function UnitIsOtherPlayersPet(this: void, unit?: UnitToken): boolean;
  function UnitIsOwnerOrControllerOfUnit(
    this: void,
    controllingUnit: UnitToken,
    controlledUnit: UnitToken
  ): boolean;
  function UnitIsPVP(this: void, unit: UnitToken): boolean;
  function UnitIsPVPFreeForAll(this: void, unit: UnitToken): boolean;
  function UnitIsPVPSanctuary(this: void, unit?: UnitToken): boolean;
  function UnitIsPlayer(
    this: void,
    unit?: UnitToken,
    partyIndex?: number
  ): boolean;
  function UnitIsPossessed(this: void, unit?: UnitToken): boolean;
  function UnitIsQuestBoss(this: void, unit: UnitToken): boolean;
  function UnitIsRaidOfficer(this: void, unit?: UnitToken): boolean;
  function UnitIsSameServer(this: void, unitName: string): boolean;
  function UnitIsTapDenied(this: void, unit: UnitToken): boolean;
  function UnitIsTrivial(this: void, unit: UnitToken): boolean;
  function UnitIsUnconscious(this: void, unit: UnitToken): boolean;
  function UnitIsUnit(
    this: void,
    unitName1: string,
    unitName2: string
  ): boolean;
  function UnitIsVisible(this: void, unit?: UnitToken): boolean;
  function UnitIsWildBattlePet(this: void, unit: UnitToken): boolean;
  function UnitLevel(this: void, name: string): number;
  function UnitName(this: void, unit: string): LuaMultiReturn<[string, string]>;
  function UnitNameUnmodified(
    this: void,
    unit: string
  ): LuaMultiReturn<[string, string]>;
  function UnitNameplateShowsWidgetsOnly(this: void, unit: UnitToken): boolean;
  function UnitNumPowerBarTimers(this: void, unit: UnitToken): number;
  function UnitOnTaxi(this: void, unit: UnitToken): boolean;
  function UnitPVPName(this: void, unit: UnitToken): string;
  function UnitPartialPower(
    this: void,
    unitToken: UnitToken,
    powerType?: Enum.PowerType,
    unmodified?: boolean
  ): number;
  function UnitPercentHealthFromGUID(
    this: void,
    unitGUID: WOWGUID
  ): number | undefined;
  function UnitPhaseReason(
    this: void,
    unit: UnitToken
  ): Enum.PhaseReason | undefined;
  function UnitPlayerControlled(this: void, unit?: UnitToken): boolean;
  function UnitPlayerOrPetInParty(
    this: void,
    unit?: UnitToken,
    partyIndex?: number
  ): boolean;
  function UnitPlayerOrPetInRaid(
    this: void,
    unit?: UnitToken,
    partyIndex?: number
  ): boolean;
  function UnitPosition(
    this: void,
    unit: UnitToken
  ): LuaMultiReturn<[number, number, number, number]>;
  function UnitPower(
    this: void,
    unitToken: UnitToken,
    powerType?: Enum.PowerType,
    unmodified?: boolean
  ): number;
  function UnitPowerBarID(this: void, unitToken: UnitToken): number;
  function UnitPowerBarTimerInfo(
    this: void,
    unit: UnitToken,
    index?: number
  ): LuaMultiReturn<[number, number, number, number]>;
  function UnitPowerDisplayMod(this: void, powerType: Enum.PowerType): number;
  function UnitPowerMax(
    this: void,
    unitToken: UnitToken,
    powerType?: Enum.PowerType,
    unmodified?: boolean
  ): number;
  function UnitPowerType(
    this: void,
    unit: UnitToken,
    index?: number
  ): LuaMultiReturn<[Enum.PowerType, string, number, number, number]>;
  function UnitPvpClassification(
    this: void,
    unit: UnitToken
  ): Enum.PvPUnitClassification | undefined;
  function UnitQuestTrivialLevelRange(this: void, unit: UnitToken): number;
  function UnitQuestTrivialLevelRangeScaling(
    this: void,
    unit: UnitToken
  ): number;
  function UnitRace(
    this: void,
    name: string
  ): LuaMultiReturn<[string, string, number]>;
  function UnitRangedAttackPower(
    this: void,
    unit: UnitToken
  ): LuaMultiReturn<[number, number, number]>;
  function UnitRangedDamage(
    this: void,
    unit: UnitToken
  ): LuaMultiReturn<[number, number, number, number, number, number]>;
  function UnitReaction(
    this: void,
    unit: UnitToken,
    target: UnitToken
  ): number | undefined;
  function UnitRealmRelationship(
    this: void,
    unit: UnitToken
  ): number | undefined;
  function UnitSelectionColor(
    this: void,
    unit: UnitToken,
    useExtendedColors?: boolean
  ): LuaMultiReturn<[number, number, number, number]>;
  function UnitSelectionType(
    this: void,
    unit: UnitToken,
    useExtendedColors?: boolean
  ): number;
  function UnitSetRole(this: void, unit: UnitToken, roleStr?: string): boolean;
  function UnitSetRoleEnum(
    this: void,
    unit: UnitToken,
    role?: Enum.LFGRole
  ): boolean;
  function UnitSex(this: void, unit: UnitToken): number | undefined;
  function UnitShouldDisplayName(this: void, unit: UnitToken): boolean;
  function UnitSpellHaste(this: void, unit: UnitToken): number;
  function UnitStagger(this: void, unit: UnitToken): number;
  function UnitStat(
    this: void,
    unit: UnitToken,
    index: number
  ): LuaMultiReturn<[number, number, number, number]>;
  function UnitSwitchToVehicleSeat(
    this: void,
    unit: UnitToken,
    virtualSeatIndex: number
  ): void;
  function UnitTargetsVehicleInRaidUI(this: void, unit?: UnitToken): boolean;
  function UnitThreatPercentageOfLead(
    this: void,
    unit: UnitToken,
    mobGUID: UnitToken
  ): number | undefined;
  function UnitThreatSituation(
    this: void,
    unit: UnitToken,
    mobGUID?: UnitToken
  ): number | undefined;
  function UnitTokenFromGUID(this: void, unitGUID: WOWGUID): string | undefined;
  function UnitTreatAsPlayerForDisplay(this: void, unit: UnitToken): boolean;
  function UnitTrialBankedLevels(
    this: void,
    unit: UnitToken
  ): LuaMultiReturn<[number, number, number]>;
  function UnitTrialXP(this: void, unit: UnitToken): number;
  function UnitUsingVehicle(this: void, unit: UnitToken): boolean;
  function UnitVehicleSeatCount(this: void, unit: UnitToken): number;
  function UnitVehicleSeatInfo(
    this: void,
    unit: UnitToken,
    virtualSeatIndex: number
  ): LuaMultiReturn<[string, string, string, boolean, boolean]>;
  function UnitVehicleSkin(this: void, unit?: UnitToken): fileID;
  function UnitWeaponAttackPower(
    this: void,
    unit: UnitToken
  ): LuaMultiReturn<[number, number, number]>;
  function UnitWidgetSet(this: void, unit: UnitToken): number;
  function UnitXP(this: void, unit: UnitToken): number;
  function UnitXPMax(this: void, unit: UnitToken): number;
  function WorldLootObjectExists(this: void, unit?: UnitToken): boolean;

  function LaunchURL(this: void, url: string): void;
  function LoadURLIndex(this: void, index: number, param?: number): void;

  namespace C_UserFeedback {
    function SubmitBug(
      this: void,
      bugInfo: string,
      suppressNotification?: boolean
    ): boolean;
    function SubmitSuggestion(this: void, suggestion: string): boolean;
  }

  namespace C_Vehicle {}

  namespace C_VideoOptions {
    interface GxAdapterInfoDetails {
      name: string;
      isLowPower: boolean;
      isExternal: boolean;
    }

    function GetCurrentGameWindowSize(this: void): vector2;
    function GetDefaultGameWindowSize(this: void, monitor: number): vector2;
    function GetGameWindowSizes(
      this: void,
      monitor: number,
      fullscreen: boolean
    ): vector2[];
    function GetGxAdapterInfo(this: void): GxAdapterInfoDetails[];
    function SetGameWindowSize(this: void, x: number, y: number): void;
  }

  namespace C_VignetteInfo {
    interface VignetteInfo {
      vignetteGUID: WOWGUID;
      objectGUID: WOWGUID;
      name: string;
      isDead: boolean;
      onWorldMap: boolean;
      zoneInfiniteAOI: boolean;
      onMinimap: boolean;
      isUnique: boolean;
      inFogOfWar: boolean;
      atlasName: textureAtlas;
      hasTooltip: boolean;
      vignetteID: number;
      type: Enum.VignetteType;
      rewardQuestID: number;
      tooltipWidgetSet?: number;
      iconWidgetSet?: number;
      addPaddingAboveTooltipWidgets?: boolean;
    }

    function FindBestUniqueVignette(
      this: void,
      vignetteGUIDs: WOWGUID[]
    ): number | undefined;
    function GetVignetteInfo(
      this: void,
      vignetteGUID: WOWGUID
    ): VignetteInfo | undefined;
    function GetVignettePosition(
      this: void,
      vignetteGUID: WOWGUID,
      uiMapID: number
    ): LuaMultiReturn<[vector2, number | undefined]>;
    function GetVignettes(this: void): WOWGUID[];
  }

  namespace C_VoiceChat {
    interface VoiceAudioDevice {
      deviceID: string;
      displayName: string;
      isActive: boolean;
      isSystemDefault: boolean;
      isCommsDefault: boolean;
    }

    interface VoiceChatChannel {
      name: string;
      channelID: number;
      channelType: Enum.ChatChannelType;
      clubId: ClubId;
      streamId: ClubStreamId;
      volume: number;
      isActive: boolean;
      isMuted: boolean;
      isTransmitting: boolean;
      isTranscribing: boolean;
      members: VoiceChatMember[];
    }

    interface VoiceChatMember {
      energy: number;
      memberID: number;
      isActive: boolean;
      isSpeaking: boolean;
      isMutedForAll: boolean;
      isSilenced: boolean;
    }

    interface VoiceChatProcess {
      name: string;
      channels: VoiceChatChannel[];
    }

    interface VoiceTtsVoiceType {
      voiceID: number;
      name: string;
    }

    function ActivateChannel(this: void, channelID: number): void;
    function ActivateChannelTranscription(this: void, channelID: number): void;
    function BeginLocalCapture(this: void, listenToLocalUser: boolean): void;
    function CanPlayerUseVoiceChat(this: void): boolean;
    function CreateChannel(
      this: void,
      channelDisplayName: string
    ): Enum.VoiceChatStatusCode;
    function DeactivateChannel(this: void, channelID: number): void;
    function DeactivateChannelTranscription(
      this: void,
      channelID: number
    ): void;
    function EndLocalCapture(this: void): void;
    function GetActiveChannelID(this: void): number | undefined;
    function GetActiveChannelType(this: void): Enum.ChatChannelType | undefined;
    function GetAvailableInputDevices(
      this: void
    ): VoiceAudioDevice[] | undefined;
    function GetAvailableOutputDevices(
      this: void
    ): VoiceAudioDevice[] | undefined;
    function GetChannel(
      this: void,
      channelID: number
    ): VoiceChatChannel | undefined;
    function GetChannelForChannelType(
      this: void,
      channelType: Enum.ChatChannelType
    ): VoiceChatChannel | undefined;
    function GetChannelForCommunityStream(
      this: void,
      clubId: ClubId,
      streamId: ClubStreamId
    ): VoiceChatChannel | undefined;
    function GetCommunicationMode(
      this: void
    ): Enum.CommunicationMode | undefined;
    function GetCurrentVoiceChatConnectionStatusCode(
      this: void
    ): Enum.VoiceChatStatusCode | undefined;
    function GetInputVolume(this: void): number | undefined;
    function GetJoinClubVoiceChannelError(
      this: void,
      clubId: ClubId
    ): Enum.VoiceChannelErrorReason | undefined;
    function GetLocalPlayerActiveChannelMemberInfo(
      this: void
    ): VoiceChatMember | undefined;
    function GetLocalPlayerMemberID(
      this: void,
      channelID: number
    ): number | undefined;
    function GetMasterVolumeScale(this: void): number;
    function GetMemberGUID(
      this: void,
      memberID: number,
      channelID: number
    ): WOWGUID;
    function GetMemberID(
      this: void,
      channelID: number,
      memberGUID: WOWGUID
    ): number | undefined;
    function GetMemberInfo(
      this: void,
      memberID: number,
      channelID: number
    ): VoiceChatMember | undefined;
    function GetMemberName(
      this: void,
      memberID: number,
      channelID: number
    ): string | undefined;
    function GetMemberVolume(
      this: void,
      playerLocation: PlayerLocation
    ): number | undefined;
    function GetOutputVolume(this: void): number | undefined;
    function GetPTTButtonPressedState(this: void): boolean | undefined;
    function GetProcesses(this: void): VoiceChatProcess[];
    function GetPushToTalkBinding(this: void): string[] | undefined;
    function GetRemoteTtsVoices(this: void): VoiceTtsVoiceType[];
    function GetTtsVoices(this: void): VoiceTtsVoiceType[];
    function GetVADSensitivity(this: void): number | undefined;
    function IsChannelJoinPending(
      this: void,
      channelType: Enum.ChatChannelType,
      clubId?: ClubId,
      streamId?: ClubStreamId
    ): boolean;
    function IsDeafened(this: void): boolean | undefined;
    function IsEnabled(this: void): boolean;
    function IsInitialized(this: void): boolean;
    function IsLoggedIn(this: void): boolean;
    function IsMemberLocalPlayer(
      this: void,
      memberID: number,
      channelID: number
    ): boolean;
    function IsMemberMuted(
      this: void,
      playerLocation: PlayerLocation
    ): boolean | undefined;
    function IsMemberMutedForAll(
      this: void,
      memberID: number,
      channelID: number
    ): boolean | undefined;
    function IsMemberSilenced(
      this: void,
      memberID: number,
      channelID: number
    ): boolean | undefined;
    function IsMuted(this: void): boolean | undefined;
    function IsParentalDisabled(this: void): boolean;
    function IsParentalMuted(this: void): boolean;
    function IsPlayerUsingVoice(
      this: void,
      playerLocation: PlayerLocation
    ): boolean;
    function IsSilenced(this: void): boolean | undefined;
    function IsSpeakForMeActive(this: void): boolean;
    function IsSpeakForMeAllowed(this: void): boolean;
    function IsTranscribing(this: void): boolean;
    function IsTranscriptionAllowed(this: void): boolean;
    function IsVoiceChatConnected(this: void): boolean;
    function LeaveChannel(this: void, channelID: number): void;
    function Login(this: void): Enum.VoiceChatStatusCode;
    function Logout(this: void): Enum.VoiceChatStatusCode;
    function MarkChannelsDiscovered(this: void): void;
    function RequestJoinAndActivateCommunityStreamChannel(
      this: void,
      clubId: ClubId,
      streamId: ClubStreamId
    ): void;
    function RequestJoinChannelByChannelType(
      this: void,
      channelType: Enum.ChatChannelType,
      autoActivate?: boolean
    ): void;
    function SetCommunicationMode(
      this: void,
      communicationMode: Enum.CommunicationMode
    ): void;
    function SetDeafened(this: void, isDeafened: boolean): void;
    function SetInputDevice(this: void, deviceID: string): void;
    function SetInputVolume(this: void, volume: number): void;
    function SetMasterVolumeScale(this: void, scale: number): void;
    function SetMemberMuted(
      this: void,
      playerLocation: PlayerLocation,
      muted: boolean
    ): void;
    function SetMemberVolume(
      this: void,
      playerLocation: PlayerLocation,
      volume: number
    ): void;
    function SetMuted(this: void, isMuted: boolean): void;
    function SetOutputDevice(this: void, deviceID: string): void;
    function SetOutputVolume(this: void, volume: number): void;
    function SetPortraitTexture(
      this: void,
      textureObject: SimpleTexture,
      memberID: number,
      channelID: number
    ): void;
    function SetPushToTalkBinding(this: void, keys: string[]): void;
    function SetVADSensitivity(this: void, sensitivity: number): void;
    function ShouldDiscoverChannels(this: void): boolean;
    function SpeakRemoteTextSample(this: void, text: string): void;
    function SpeakText(
      this: void,
      voiceID: number,
      text: string,
      destination: Enum.VoiceTtsDestination,
      rate: number,
      volume: number
    ): void;
    function StopSpeakingText(this: void): void;
    function ToggleDeafened(this: void): void;
    function ToggleMemberMuted(
      this: void,
      playerLocation: PlayerLocation
    ): void;
    function ToggleMuted(this: void): void;
  }

  namespace C_VoidStorageInfo {}

  namespace C_CampaignInfo {
    interface CampaignChapterInfo {
      name: string;
      description: string;
      rewardQuestID: number;
    }

    interface CampaignFailureReason {
      text: string;
      questID?: number;
      mapID?: number;
    }

    interface CampaignInfo {
      name: string;
      description: string;
      uiTextureKit: textureKit;
      isWarCampaign: boolean;
      usesNormalQuestIcons: boolean;
      isContainerCampaign: boolean;
      sortAsNormalQuest: boolean;
    }

    function GetAvailableCampaigns(this: void): number[];
    function GetCampaignChapterInfo(
      this: void,
      campaignChapterID: number
    ): CampaignChapterInfo | undefined;
    function GetCampaignID(this: void, questID: number): number;
    function GetCampaignInfo(
      this: void,
      campaignID: number
    ): CampaignInfo | undefined;
    function GetChapterIDs(
      this: void,
      campaignID: number
    ): number[] | undefined;
    function GetCurrentChapterID(
      this: void,
      campaignID: number
    ): number | undefined;
    function GetFailureReason(
      this: void,
      campaignID: number
    ): CampaignFailureReason | undefined;
    function GetState(this: void, campaignID: number): Enum.CampaignState;
    function IsCampaignQuest(this: void, questID: number): boolean;
    function SortAsNormalQuest(this: void, campaignID: number): boolean;
  }

  namespace C_WeeklyRewards {
    interface ConquestWeeklyProgress {
      progress: number;
      maxProgress: number;
      displayType: Enum.ConquestProgressBarDisplayType;
      unlocksCompleted: number;
      maxUnlocks: number;
      sampleItemHyperlink: string;
    }

    interface WeeklyRewardActivityEncounterInfo {
      encounterID: number;
      bestDifficulty: number;
      uiOrder: number;
      instanceID: number;
    }

    interface WeeklyRewardActivityInfo {
      type: WeeklyRewardChestThresholdType;
      index: number;
      threshold: number;
      progress: number;
      id: number;
      activityTierID: number;
      level: number;
      claimID?: number;
      raidString?: string;
      rewards: WeeklyRewardActivityRewardInfo[];
    }

    interface WeeklyRewardActivityRewardInfo {
      type: CachedRewardType;
      id: number;
      quantity: number;
      itemDBID?: WeeklyRewardItemDBID;
    }

    function AreRewardsForCurrentRewardPeriod(this: void): boolean;
    function CanClaimRewards(this: void): boolean;
    function ClaimReward(this: void, id: number): void;
    function CloseInteraction(this: void): void;
    function GetActivities(
      this: void,
      type?: WeeklyRewardChestThresholdType
    ): WeeklyRewardActivityInfo[];
    function GetActivityEncounterInfo(
      this: void,
      type: WeeklyRewardChestThresholdType,
      index: number
    ): WeeklyRewardActivityEncounterInfo[];
    function GetConquestWeeklyProgress(this: void): ConquestWeeklyProgress;
    function GetDifficultyIDForActivityTier(
      this: void,
      activityTierID: number
    ): number;
    function GetExampleRewardItemHyperlinks(
      this: void,
      id: number
    ): LuaMultiReturn<[string, string]>;
    function GetItemHyperlink(
      this: void,
      itemDBID: WeeklyRewardItemDBID
    ): string;
    function GetNextActivitiesIncrease(
      this: void,
      activityTierID: number,
      level: number
    ): LuaMultiReturn<
      [boolean, number | undefined, number | undefined, number | undefined]
    >;
    function GetNextMythicPlusIncrease(
      this: void,
      mythicPlusLevel: number
    ): LuaMultiReturn<[boolean, number | undefined, number | undefined]>;
    function GetNumCompletedDungeonRuns(
      this: void
    ): LuaMultiReturn<[number, number, number]>;
    function HasAvailableRewards(this: void): boolean;
    function HasGeneratedRewards(this: void): boolean;
    function HasInteraction(this: void): boolean;
    function IsWeeklyChestRetired(this: void): boolean;
    function OnUIInteract(this: void): void;
    function ShouldShowFinalRetirementMessage(this: void): boolean;
    function ShouldShowRetirementMessage(this: void): boolean;
  }

  namespace C_WorldLootObject {
    interface WorldLootObjectInfo {
      inventoryType: Enum.InventoryType;
      atMaxQuality: boolean;
      isUpgrade: boolean;
    }

    function GetCurrentWorldLootObjectSwapInventoryType(
      this: void
    ): Enum.InventoryType;
    function GetWorldLootObjectInfo(
      this: void,
      unitToken: UnitToken
    ): WorldLootObjectInfo;
    function IsWorldLootObject(this: void, unitToken: UnitToken): boolean;
    function IsWorldLootObjectInRange(
      this: void,
      unitToken: UnitToken
    ): boolean;
    function OnWorldLootObjectClick(this: void, unitToken: UnitToken): void;
  }

  namespace C_WorldStateInfo {}

  namespace C_WowEntitlementInfo {}

  namespace C_WowTokenUI {
    function StartTokenSell(this: void, tokenGUID: WOWGUID): void;
  }

  namespace C_XMLUtil {
    interface XMLTemplateInfo {
      type: string;
      width: number;
      height: number;
      keyValues: XMLTemplateKeyValue[];
      inherits?: string;
      sourceLocation: string;
    }

    interface XMLTemplateKeyValue {
      key: string;
      keyType: string;
      type: string;
      value: string;
    }

    interface XMLTemplateListInfo {
      name: string;
      type: string;
    }

    function GetTemplateInfo(this: void, name: string): XMLTemplateInfo;
    function GetTemplates(this: void): XMLTemplateListInfo[];
  }

  namespace C_ZoneAbility {
    interface ZoneAbilityInfo {
      zoneAbilityID: number;
      uiPriority: number;
      spellID: number;
      textureKit: textureKit;
      tutorialText?: string;
    }

    function GetActiveAbilities(this: void): ZoneAbilityInfo[];
    function GetZoneAbilityIcon(
      this: void,
      zoneAbilitySpellID: number
    ): number | undefined;
  }

  function GetAreaText(this: void): string;
  function GetMinimapZoneText(this: void): string;
  function GetRealZoneText(this: void, mapID?: number): string;
  function GetSubZoneText(this: void): string;
  function GetZoneText(this: void): string;
}
