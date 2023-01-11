export enum OverviewDataType {
  ScorePerMinute = 'scorePerMinute',
  ScorePerGame = 'scorePerGame',
  TotalShots = 'totalShots',
  Wins = 'wins',
  KDRatio = 'kdRatio',
  Kills = 'kills',
  Assists = 'assists',
  Headshots = 'headshots',
  Deaths = 'deaths',
  BestKillStreak = 'bestKillStreak',
  Losses = 'losses',
  TimePlayed = 'timePlayedTotal',
  TotalGamePlayed = 'totalGamesPlayed',
  WinLoseRatio = 'winLossRatio'
}

export enum Pistols {
  Renetti = 'iw8_pi_mike9',
  _50gs = 'iw8_pi_decho',
  M19 = 'iw8_pi_papa320',
  _1911 = 'iw8_pi_mike1911',
  x16 = 'iw8_pi_papa320'
}
export enum RocketLuncher {
  Pila = 'iw8_la_gromeo',
  RPG7 = 'iw8_la_rpapa7',
  Joker = 'iw8_la_juliet',
  Sterlap = 'iw8_la_kgolf',
}
export enum AssaultRifle {
  Ak47 = 'iw8_ar_akilo47',
  An94 = 'iw8_ar_anovember94',
  Oden = 'iw8_ar_asierra12',
  Fal = 'iw8_ar_falima',
  Fr556 = 'iw8_ar_falpha',
  Cr56Amax = 'iw8_ar_galima',
  Kilo141 = 'iw8_ar_kilo433',
  M13 = 'iw8_ar_mcharlie',
  M4a1 = 'iw8_ar_mike4',
  FnScar17 = 'iw8_ar_scharlie',
  Grau556 = 'iw8_ar_sierra552',
  Ram7 = 'iw8_ar_tango21',
  AsVal = 'iw8_ar_valph',
}
export enum ShotgunRifle {
  Model1680 = 'iw8_sh_romeo870',
  R90 = 'iw8_sh_dpapa12',
  _725 = 'iw8_sh_charlie725',
  Origin12 = 'iw8_sh_oscar12',
  VlkRouge = 'iw8_sh_mike26',
  Jak12 = 'iw8_sh_aalpha12',
}
export enum MarksmanRifle {
  Ebr14 = 'iw8_sn_sbeta',
  Mk2Carbine = 'iw8_sn_romeo700',
  Kark98k = 'iw8_sn_kilo98',
  CrossBow = 'iw8_sn_crossbow',
  Sks = 'iw8_sn_mike14',
  Srpr208 = 'iw8_sn_sksierra',
}
export enum LargeMAchineGun {
  Pkm = 'iw8_lm_pkilo',
  Sa87 = 'iw8_lm_lima86',
  M91 = 'iw8_lm_kilo121',
  Mg34 = 'iw8_lm_mgolf34',
  Holger26 = 'iw8_lm_mgolf36',
  BurenMk9 = 'iw8_lm_mkilo3',
  RkmFinn = 'iw8_lm_sierrax',
  KmRaal = 'iw8_la_mike32',
}
export enum SniperRifle {
  Ax50 = 'iw8_sn_alpha50',
  RytecAmr = 'iw8_sn_xmike109',
  Hdr = 'iw8_sn_hdromeo',
  Dragunow = 'iw8_sn_delta',
}
export enum MachineGun {
  Mp7 = 'iw8_sm_mpapa7',
  Aug = 'iw8_sm_augolf',
  P90 = 'iw8_sm_papa90',
  Iso = 'iw8_sm_charlie9',
  Mp5 = 'iw8_sm_mpapa5',
  Striker45 = 'iw8_sm_smgolf45',
  Pp19Bizon = 'iw8_sm_beta',
  Fennec = 'iw8_sm_victor',
  Uzi = 'iw8_sm_uzulu',
}
export enum TacticalEquipment {
  GasGranate = 'equip_gas_grenade',
  Wykrwyajacy = 'equip_snapshot_grenade',
  Decoy = 'equip_decoy',
  Smoke = 'equip_smoke',
  Ogluszajacy = 'equip_concussion',
  SensorPulse = 'equip_hb_sensor',
  Flesh = 'equip_flash',
  Adrealine = 'equip_adrenaline',
  Granate = 'equip_frag',
  Thermit = 'equip_thermite',
  Claymore = 'equip_claymore',
  C4 = 'equip_c4',
  Mine = 'equip_at_mine',
  ThrowingKnife = 'equip_throwing_knife',
  Molotov = 'equip_molotov' ,
}
export enum KillStreak {
  AirStrike = 'precision_airstrike',
  CruiseMissile = 'cruise_predator',
  ManualTurret = 'manual_turret',
  WhitePhosphorus = 'white_phosphorus',
  JetVtol = 'hover_jet',
  ChopperGunner = 'chopper_gunner',
  GunShip = 'gunship',
  AutoTurret = 'sentry_gun',
  ClusterFire = 'toma_strike',
  Colos = 'juggernaut',
  ChopperSupport = 'chopper_support',
  Wheelson = 'pac_sentry',
  ChopperRadar = 'radar_drone_overwatch',
  CounterUav = 'scrambler_drone_guard',
  Uav = 'uav' ,
  SuperUav = 'directional_uav' ,
}
export enum FieldUpgrade {
  DroneIem = 'super_emp_drone',
  Trophy = 'super_trophy',
  SupplyDrop = 'super_ammo_drop',
  Drop = 'super_weapon_drop',
  ArmorBox = 'super_armor_drop',
  Recon = 'super_recon_drone',
  DeadSilence = 'super_deadsilence',
  TacticShield = 'super_tac_cover',
  PowerAmmo = 'super_support_box',
  Balon = 'super_select',
}
export enum MeleeWeapon {
  Knife = 'iw8_knife',
  AkimboBlades = 'iw8_me_akimboblades',
  AkimboBlunt = 'iw8_me_akimboblunt',
  Shield = 'iw8_me_riotshield',
}
export enum GameInfo {
  GameTitle = 'title',
  GamePlatform = 'platform',
  UserName = 'username',
  AccountLevel = 'level',
  RemainderExp = 'levelXpRemainder',
  GainedExp = 'levelXpGained',
  Prestige = 'prestige',
  TotalExp = 'totalXp',
}
