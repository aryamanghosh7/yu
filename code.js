var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["e266ad82-10f8-4fd1-b35d-7fb247da54a4","2dcd7d40-838c-43ae-a205-3f458174a8c1","ef073403-6ec4-4c21-924a-53274a8c9844","dd0d0bf1-ade8-4fe5-8656-a1b7e2e00682","a54648ac-ea9a-41e4-8abd-263a8ec0048b","3c0843be-6a0a-4938-a5be-2e6128af878f","aff1b794-f3cf-4a11-9bb7-dc4a7640afe1","a7aba1b7-d0c0-47c9-88d5-adbe83014eb3","17963c35-0307-47b7-b716-818777e303bd","7ba3b71e-c260-414c-86be-2db7522d131e","1035616e-61c5-42e2-9be0-f3a9e4b73371","89e8e57e-7f06-4d46-be23-afc888e1d426","494503d7-6c0d-42c8-a5de-a7aedee17e3b","95b02a67-f8eb-43c8-bf66-d1f2db140a6a","e06125d6-58f9-4166-9b4b-64059eff476c","f320c987-ab9d-493f-bb83-d02ee100ca53","49349c34-9e8f-4c1a-89e9-3d4e6364cd8a","bf4b60e4-0d5e-4713-b029-2f95c6a4a73d","04c02eb2-9602-4fda-8ff6-e14282c4dd30","e7c68bba-5b24-4520-9f89-e81c6d413c6e","7c59c4a3-f130-482a-9bd7-e234ea1a6a89","eb87f897-4f5a-4e67-be71-35d54344420d","d59e1731-04ae-4793-95f0-2d990f6bffde","f402a805-e1e0-4607-b10f-d45541ad5f8c","f8d6f42f-2f98-4bf3-be8c-d89cdaf78bbe","6c0eb64e-4db5-426f-8087-0ee283a3e112","4aef0896-2160-46bd-a2d2-f23b91a74bf1","4c56ae94-309d-4e57-9345-da8dd1ab62d3","d08dab2b-d414-4911-b4f5-b0b57cf2d67d","235bef69-cbe3-4c02-bdea-8fa3f1ba32c8","b4bf654f-c59b-4ad8-9eff-957417f6abe0","6896d160-2baa-424d-87bf-f5ec0880a4c0","b69a1db7-5063-4e72-ad46-fbe447a30563","d3e2615f-9772-4df7-9e3c-63fcab44404c","5502c0c0-fad1-4fe8-8fb9-ceb0061e57bd","b4d551b0-f50b-495d-a320-62fd578d2878","f5d15103-fb9e-48ae-8470-9e50d8387b0c","a5a23f4a-c038-404a-8830-2abd40bb76bb","d3332e62-4465-4f46-a355-ebc3cf56a94a","4a306a6e-8d60-49e0-89b2-eafa5090d742","ed42c013-5a39-42e6-ba37-26809888f2ff","a3b85da1-863e-4447-afe2-587685f064be","d8d76dfb-cc42-4d4b-90a3-e31352e22d1d","b76342cb-76f9-4c08-96d7-8ab9e774994f","9c403ecd-ac57-4566-8e76-baabeb1e702d","59caff47-77d5-48b9-9a24-aab2890eb263","313b5b91-a1b3-4e35-9bde-faabfd08312f","c4a3f919-ba74-4e7d-965d-3fc74a97a468","be224733-114a-4864-b0d5-48ff590d6676","d1ca4258-0487-4880-9b9c-fce94830e651","4f4818b0-b240-42f3-83d9-0d854dddc718","7e2ecfc4-cbe5-423b-afe2-8578a421a942","1954271f-19a2-46c3-b676-f5c9aef0ba80","69a31078-b049-432f-8757-d609e7a827a0","e4c6a9d0-9f6d-463e-b9b1-90c3941ab15d","b1343042-d3f9-4891-a4b5-fa1479dff5df","5ac5a1a3-3bbb-4851-b7b5-b83ad29e7391","79e9c342-c28f-4cac-8339-840fa998fd63","73fdec5f-faae-4fd7-8bb1-07dc1e98cb81","2578ef8b-317e-462f-b279-e49a39436a9f","859d23d6-e9c2-4737-90fe-58800c3dbeab","1368f8cf-de9e-4ee4-b58c-5d32d4ddf92e","f44dfa30-d317-4831-911e-d86db85ef6fd","20ea5095-41b8-4c42-a662-42da8941c6db","d9289340-0b80-4d23-95ed-c54a2eeea883","22ceab63-0da5-4918-a251-6aaa46a8ce80","515a8c45-14f7-456b-a3f0-657c1e402a7c","7f061538-db97-434b-a465-c057dc5623ab","cc867188-7b2f-41cd-b85a-4b0558b5ed02","a048807b-8170-49bb-9ae1-db45297f0b6c","87d795ce-eda6-4358-9486-6c88ed117e7b","95a4c4c3-a7f6-4c1d-87bb-4aad8f3a057b","e1ea0212-a200-4278-8fab-21d33c83b9f9","c5a40d4a-1b71-46b5-b0ca-660953f8a035","e1e565a4-2974-411b-ae8d-16d6ed2303c7","f8095396-7824-4629-9017-aeec9e2eb5c2","7bf9b14d-392f-4353-abc6-590672b6ed53","dbe8d1c7-d261-433e-85a9-eabf1f0e0f20","b0d42f07-ff1a-4ae8-8c6f-95da9cfe4b17","e7121fd4-5f73-4067-a27d-510f2ec3abbf","821d1227-3fd5-45eb-934e-de4992dec458"],"propsByKey":{"e266ad82-10f8-4fd1-b35d-7fb247da54a4":{"name":"knight_idle_1","sourceUrl":null,"frameSize":{"x":8,"y":16},"frameCount":2,"looping":true,"frameDelay":12,"version":"qcCOCuaWtAyWb4TZBQONsiFDw5lghMqM","loadedFromSource":true,"saved":true,"sourceSize":{"x":16,"y":16},"rootRelativePath":"assets/e266ad82-10f8-4fd1-b35d-7fb247da54a4.png"},"2dcd7d40-838c-43ae-a205-3f458174a8c1":{"name":"knight_idle_2","sourceUrl":null,"frameSize":{"x":8,"y":16},"frameCount":2,"looping":true,"frameDelay":12,"version":"Q7YlrxdlCbtuyoH6HYKwsLzVr.mCm8zV","loadedFromSource":true,"saved":true,"sourceSize":{"x":16,"y":16},"rootRelativePath":"assets/2dcd7d40-838c-43ae-a205-3f458174a8c1.png"},"ef073403-6ec4-4c21-924a-53274a8c9844":{"name":"knight_walking_1","sourceUrl":null,"frameSize":{"x":8,"y":16},"frameCount":2,"looping":true,"frameDelay":12,"version":"w3av6s1GtPku50GZXRZaQEYru.i7d071","loadedFromSource":true,"saved":true,"sourceSize":{"x":16,"y":16},"rootRelativePath":"assets/ef073403-6ec4-4c21-924a-53274a8c9844.png"},"dd0d0bf1-ade8-4fe5-8656-a1b7e2e00682":{"name":"knight_walking_2","sourceUrl":null,"frameSize":{"x":8,"y":16},"frameCount":2,"looping":true,"frameDelay":12,"version":"VUq4_1UXGThXPnhR_me9qGs9i0zNwhiz","loadedFromSource":true,"saved":true,"sourceSize":{"x":16,"y":16},"rootRelativePath":"assets/dd0d0bf1-ade8-4fe5-8656-a1b7e2e00682.png"},"a54648ac-ea9a-41e4-8abd-263a8ec0048b":{"name":"wizard_idle_1","sourceUrl":null,"frameSize":{"x":10,"y":16},"frameCount":2,"looping":true,"frameDelay":12,"version":"DigP1iUNrB4ksWhuN4WAQRrC22R4AJmf","loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":16},"rootRelativePath":"assets/a54648ac-ea9a-41e4-8abd-263a8ec0048b.png"},"3c0843be-6a0a-4938-a5be-2e6128af878f":{"name":"wizard_idle_2","sourceUrl":null,"frameSize":{"x":10,"y":16},"frameCount":2,"looping":true,"frameDelay":12,"version":"rjHuvDQRwEH1cVYoryVmW1pshG_ttxJ.","loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":16},"rootRelativePath":"assets/3c0843be-6a0a-4938-a5be-2e6128af878f.png"},"aff1b794-f3cf-4a11-9bb7-dc4a7640afe1":{"name":"wizard_walking_1","sourceUrl":null,"frameSize":{"x":10,"y":16},"frameCount":2,"looping":true,"frameDelay":12,"version":"EPb0B7T0Aa6nV8dkIb4kgF5xSr4lMml7","loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":16},"rootRelativePath":"assets/aff1b794-f3cf-4a11-9bb7-dc4a7640afe1.png"},"a7aba1b7-d0c0-47c9-88d5-adbe83014eb3":{"name":"wizard_walking_2","sourceUrl":null,"frameSize":{"x":10,"y":16},"frameCount":2,"looping":true,"frameDelay":12,"version":"yAB0BDC18hwke8Iq67kPIdEoEZYyCdeE","loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":16},"rootRelativePath":"assets/a7aba1b7-d0c0-47c9-88d5-adbe83014eb3.png"},"17963c35-0307-47b7-b716-818777e303bd":{"name":"holy_guard_idle_1","sourceUrl":null,"frameSize":{"x":10,"y":16},"frameCount":2,"looping":true,"frameDelay":12,"version":"VMNkovaN8uLsFB8qIuq1ZozOgF8Ezs9I","loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":16},"rootRelativePath":"assets/17963c35-0307-47b7-b716-818777e303bd.png"},"7ba3b71e-c260-414c-86be-2db7522d131e":{"name":"holy_guard_idle_2","sourceUrl":null,"frameSize":{"x":10,"y":16},"frameCount":2,"looping":true,"frameDelay":12,"version":"oEa3wJ4Y8S_15N3WvYXFmVCxmoy4neN2","loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":16},"rootRelativePath":"assets/7ba3b71e-c260-414c-86be-2db7522d131e.png"},"1035616e-61c5-42e2-9be0-f3a9e4b73371":{"name":"holy_guard_walking_1","sourceUrl":null,"frameSize":{"x":10,"y":16},"frameCount":2,"looping":true,"frameDelay":12,"version":"zIU3iA53jI_Goes8.CkcjLVizsSuDvLJ","loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":16},"rootRelativePath":"assets/1035616e-61c5-42e2-9be0-f3a9e4b73371.png"},"89e8e57e-7f06-4d46-be23-afc888e1d426":{"name":"holy_guard_walking_2","sourceUrl":null,"frameSize":{"x":10,"y":16},"frameCount":2,"looping":true,"frameDelay":12,"version":"HnoF7d_HUC6In_hp3XnHuGNGBWbigqY3","loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":16},"rootRelativePath":"assets/89e8e57e-7f06-4d46-be23-afc888e1d426.png"},"494503d7-6c0d-42c8-a5de-a7aedee17e3b":{"name":"centaur_idle_1","sourceUrl":null,"frameSize":{"x":30,"y":29},"frameCount":2,"looping":true,"frameDelay":12,"version":"Xr0xPiB6exOmJW6qqzjm9xSAsnR7kb9G","loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":58},"rootRelativePath":"assets/494503d7-6c0d-42c8-a5de-a7aedee17e3b.png"},"95b02a67-f8eb-43c8-bf66-d1f2db140a6a":{"name":"centaur_select_1","sourceUrl":null,"frameSize":{"x":21,"y":22},"frameCount":2,"looping":true,"frameDelay":12,"version":"ogDNO_.m2ItoWff0kygdmgWrzp1YlfUQ","loadedFromSource":true,"saved":true,"sourceSize":{"x":21,"y":44},"rootRelativePath":"assets/95b02a67-f8eb-43c8-bf66-d1f2db140a6a.png"},"e06125d6-58f9-4166-9b4b-64059eff476c":{"name":"centaur_walking_1","sourceUrl":null,"frameSize":{"x":30,"y":29},"frameCount":7,"looping":true,"frameDelay":2,"version":"2Ji88uFDnruOCkXoKgAKKOS8LtITRxJV","loadedFromSource":true,"saved":true,"sourceSize":{"x":90,"y":87},"rootRelativePath":"assets/e06125d6-58f9-4166-9b4b-64059eff476c.png"},"f320c987-ab9d-493f-bb83-d02ee100ca53":{"name":"dwarf_idle_1","sourceUrl":null,"frameSize":{"x":8,"y":10},"frameCount":2,"looping":true,"frameDelay":12,"version":"v3a3DwC1OkaM_MmBCzTcxv8xndiBZfZy","loadedFromSource":true,"saved":true,"sourceSize":{"x":16,"y":10},"rootRelativePath":"assets/f320c987-ab9d-493f-bb83-d02ee100ca53.png"},"49349c34-9e8f-4c1a-89e9-3d4e6364cd8a":{"name":"dwarf_idle_2","sourceUrl":null,"frameSize":{"x":8,"y":10},"frameCount":2,"looping":true,"frameDelay":12,"version":"VmRSFSGJYMv2RqF5AHhCJCv6VFt_7ANG","loadedFromSource":true,"saved":true,"sourceSize":{"x":16,"y":10},"rootRelativePath":"assets/49349c34-9e8f-4c1a-89e9-3d4e6364cd8a.png"},"bf4b60e4-0d5e-4713-b029-2f95c6a4a73d":{"name":"dwarf_walking_1","sourceUrl":null,"frameSize":{"x":8,"y":10},"frameCount":2,"looping":true,"frameDelay":12,"version":"aGBFUBIACbdB7viBGjI7.i1nHrSS1nQO","loadedFromSource":true,"saved":true,"sourceSize":{"x":16,"y":10},"rootRelativePath":"assets/bf4b60e4-0d5e-4713-b029-2f95c6a4a73d.png"},"04c02eb2-9602-4fda-8ff6-e14282c4dd30":{"name":"dwarf_walking_2","sourceUrl":null,"frameSize":{"x":8,"y":10},"frameCount":2,"looping":true,"frameDelay":12,"version":"KORvs6UGgWTaDmjVhu8uRoRD0JAb_bow","loadedFromSource":true,"saved":true,"sourceSize":{"x":16,"y":10},"rootRelativePath":"assets/04c02eb2-9602-4fda-8ff6-e14282c4dd30.png"},"e7c68bba-5b24-4520-9f89-e81c6d413c6e":{"name":"evil_knight_idle","sourceUrl":null,"frameSize":{"x":8,"y":16},"frameCount":2,"looping":true,"frameDelay":12,"version":"7eBPyXe5I7WQqDFT2oyuwcCn.5M0lFEW","loadedFromSource":true,"saved":true,"sourceSize":{"x":16,"y":16},"rootRelativePath":"assets/e7c68bba-5b24-4520-9f89-e81c6d413c6e.png"},"7c59c4a3-f130-482a-9bd7-e234ea1a6a89":{"name":"evil_knight_walking","sourceUrl":null,"frameSize":{"x":8,"y":16},"frameCount":2,"looping":true,"frameDelay":12,"version":"zIQlhRcVq.abC6hS_cdZ6ASxjYdK.kP2","loadedFromSource":true,"saved":true,"sourceSize":{"x":16,"y":16},"rootRelativePath":"assets/7c59c4a3-f130-482a-9bd7-e234ea1a6a89.png"},"eb87f897-4f5a-4e67-be71-35d54344420d":{"name":"santa_idle","sourceUrl":null,"frameSize":{"x":8,"y":16},"frameCount":2,"looping":true,"frameDelay":12,"version":"6tfzZBztDdA1sgHxRmWm8Wn3MZ7Tgp15","loadedFromSource":true,"saved":true,"sourceSize":{"x":16,"y":16},"rootRelativePath":"assets/eb87f897-4f5a-4e67-be71-35d54344420d.png"},"d59e1731-04ae-4793-95f0-2d990f6bffde":{"name":"santa_walking","sourceUrl":null,"frameSize":{"x":8,"y":16},"frameCount":2,"looping":true,"frameDelay":12,"version":".JSj3qqsCQSUyQOckhpixgaOMQdX2Ism","loadedFromSource":true,"saved":true,"sourceSize":{"x":16,"y":16},"rootRelativePath":"assets/d59e1731-04ae-4793-95f0-2d990f6bffde.png"},"f402a805-e1e0-4607-b10f-d45541ad5f8c":{"name":"goblin_idle_1","sourceUrl":null,"frameSize":{"x":8,"y":16},"frameCount":2,"looping":true,"frameDelay":12,"version":"UyyXA.UD9z2khZRT4w4ulTpv.tRLD9Yn","loadedFromSource":true,"saved":true,"sourceSize":{"x":16,"y":16},"rootRelativePath":"assets/f402a805-e1e0-4607-b10f-d45541ad5f8c.png"},"f8d6f42f-2f98-4bf3-be8c-d89cdaf78bbe":{"name":"goblin_dead_1","sourceUrl":null,"frameSize":{"x":16,"y":16},"frameCount":1,"looping":true,"frameDelay":12,"version":"qfI32agsZAV6q8D02SJVr.uMISgR17i.","loadedFromSource":true,"saved":true,"sourceSize":{"x":16,"y":16},"rootRelativePath":"assets/f8d6f42f-2f98-4bf3-be8c-d89cdaf78bbe.png"},"6c0eb64e-4db5-426f-8087-0ee283a3e112":{"name":"goblin_hurt_1","sourceUrl":null,"frameSize":{"x":8,"y":16},"frameCount":2,"looping":true,"frameDelay":12,"version":"81U2NaSdcPtfuBF6g_LsB4UaPKiHRCBR","loadedFromSource":true,"saved":true,"sourceSize":{"x":16,"y":16},"rootRelativePath":"assets/6c0eb64e-4db5-426f-8087-0ee283a3e112.png"},"4aef0896-2160-46bd-a2d2-f23b91a74bf1":{"name":"skeleton_idle_1","sourceUrl":null,"frameSize":{"x":8,"y":16},"frameCount":2,"looping":true,"frameDelay":5,"version":"UzTsgrO5MFt_cB23a7erpxvp839uHxUB","loadedFromSource":true,"saved":true,"sourceSize":{"x":16,"y":16},"rootRelativePath":"assets/4aef0896-2160-46bd-a2d2-f23b91a74bf1.png"},"4c56ae94-309d-4e57-9345-da8dd1ab62d3":{"name":"skeleton_dead_1","sourceUrl":null,"frameSize":{"x":16,"y":16},"frameCount":1,"looping":true,"frameDelay":12,"version":"7EU_u1c0c0GHJC2XZ1qaUemfcxVyMwu6","loadedFromSource":true,"saved":true,"sourceSize":{"x":16,"y":16},"rootRelativePath":"assets/4c56ae94-309d-4e57-9345-da8dd1ab62d3.png"},"d08dab2b-d414-4911-b4f5-b0b57cf2d67d":{"name":"skeleton_hurt_1","sourceUrl":null,"frameSize":{"x":8,"y":16},"frameCount":2,"looping":true,"frameDelay":60,"version":"_jw3Kqqoo_BBFsBf8UhGD_E43a4Ql.5c","loadedFromSource":true,"saved":true,"sourceSize":{"x":16,"y":16},"rootRelativePath":"assets/d08dab2b-d414-4911-b4f5-b0b57cf2d67d.png"},"235bef69-cbe3-4c02-bdea-8fa3f1ba32c8":{"name":"summoner_idle_1","sourceUrl":null,"frameSize":{"x":8,"y":16},"frameCount":2,"looping":true,"frameDelay":12,"version":"87GYd1B8SdO0HHX7sihGyGaCuHUm5WC9","loadedFromSource":true,"saved":true,"sourceSize":{"x":16,"y":16},"rootRelativePath":"assets/235bef69-cbe3-4c02-bdea-8fa3f1ba32c8.png"},"b4bf654f-c59b-4ad8-9eff-957417f6abe0":{"name":"summoner_dead_1","sourceUrl":null,"frameSize":{"x":16,"y":16},"frameCount":1,"looping":true,"frameDelay":12,"version":"zX8W.T1_xmaMg7ylOTOgIYDPcnvBPjN2","loadedFromSource":true,"saved":true,"sourceSize":{"x":16,"y":16},"rootRelativePath":"assets/b4bf654f-c59b-4ad8-9eff-957417f6abe0.png"},"6896d160-2baa-424d-87bf-f5ec0880a4c0":{"name":"summoner_hurt_1","sourceUrl":null,"frameSize":{"x":8,"y":16},"frameCount":2,"looping":true,"frameDelay":12,"version":"Uq_GmjwGPwjV05CI5AqPvQLvVwlHBtA5","loadedFromSource":true,"saved":true,"sourceSize":{"x":16,"y":16},"rootRelativePath":"assets/6896d160-2baa-424d-87bf-f5ec0880a4c0.png"},"b69a1db7-5063-4e72-ad46-fbe447a30563":{"name":"summoner_summoning_1","sourceUrl":null,"frameSize":{"x":16,"y":16},"frameCount":2,"looping":true,"frameDelay":15,"version":"NKgUF6p4eT3tlvZK83v3K0dwpWtRGN0E","loadedFromSource":true,"saved":true,"sourceSize":{"x":16,"y":32},"rootRelativePath":"assets/b69a1db7-5063-4e72-ad46-fbe447a30563.png"},"d3e2615f-9772-4df7-9e3c-63fcab44404c":{"name":"frank_idle_1","sourceUrl":null,"frameSize":{"x":16,"y":16},"frameCount":2,"looping":true,"frameDelay":12,"version":"G1_KDR7vEC4gG9cqqA_jXEypH46.iBDn","loadedFromSource":true,"saved":true,"sourceSize":{"x":16,"y":32},"rootRelativePath":"assets/d3e2615f-9772-4df7-9e3c-63fcab44404c.png"},"5502c0c0-fad1-4fe8-8fb9-ceb0061e57bd":{"name":"frank_dead_1","sourceUrl":null,"frameSize":{"x":16,"y":16},"frameCount":1,"looping":true,"frameDelay":12,"version":"soXPL6CyzAEZrBgMS6aUBqCrzLqe.Io9","loadedFromSource":true,"saved":true,"sourceSize":{"x":16,"y":16},"rootRelativePath":"assets/5502c0c0-fad1-4fe8-8fb9-ceb0061e57bd.png"},"b4d551b0-f50b-495d-a320-62fd578d2878":{"name":"frank_hurt_1","sourceUrl":null,"frameSize":{"x":16,"y":16},"frameCount":2,"looping":true,"frameDelay":12,"version":"eA0IVFUwgsKyACk7Ps8k_lNmRlPu18mG","loadedFromSource":true,"saved":true,"sourceSize":{"x":16,"y":32},"rootRelativePath":"assets/b4d551b0-f50b-495d-a320-62fd578d2878.png"},"f5d15103-fb9e-48ae-8470-9e50d8387b0c":{"name":"knight_attack_1","sourceUrl":null,"frameSize":{"x":19,"y":5},"frameCount":7,"looping":false,"frameDelay":1,"version":"Oj801My.jMUAGtMHjSQeyEOdjUgoBn_1","loadedFromSource":true,"saved":true,"sourceSize":{"x":19,"y":35},"rootRelativePath":"assets/f5d15103-fb9e-48ae-8470-9e50d8387b0c.png"},"a5a23f4a-c038-404a-8830-2abd40bb76bb":{"name":"knight_attack_idle_1","sourceUrl":null,"frameSize":{"x":19,"y":5},"frameCount":1,"looping":false,"frameDelay":12,"version":"y4SMQXLy55qc6qZsd.MV36IuvydQ2z8R","loadedFromSource":true,"saved":true,"sourceSize":{"x":19,"y":5},"rootRelativePath":"assets/a5a23f4a-c038-404a-8830-2abd40bb76bb.png"},"d3332e62-4465-4f46-a355-ebc3cf56a94a":{"name":"goblin_spear_1","sourceUrl":null,"frameSize":{"x":13,"y":9},"frameCount":4,"looping":true,"frameDelay":1,"version":"1TgQ5Iqzkf8I1Dp6hXHqCnPzzWRbnw2a","loadedFromSource":true,"saved":true,"sourceSize":{"x":26,"y":18},"rootRelativePath":"assets/d3332e62-4465-4f46-a355-ebc3cf56a94a.png"},"4a306a6e-8d60-49e0-89b2-eafa5090d742":{"name":"skeleton_bow_1","sourceUrl":null,"frameSize":{"x":16,"y":16},"frameCount":1,"looping":true,"frameDelay":12,"version":"XVUxxC0c7j6Gusa.vYlHb1HG.ggCR5WX","loadedFromSource":true,"saved":true,"sourceSize":{"x":16,"y":16},"rootRelativePath":"assets/4a306a6e-8d60-49e0-89b2-eafa5090d742.png"},"ed42c013-5a39-42e6-ba37-26809888f2ff":{"name":"skeleton_arrow_1","sourceUrl":null,"frameSize":{"x":9,"y":3},"frameCount":1,"looping":true,"frameDelay":12,"version":"UrSeAmmLGSqFGKW.gKbZmrom69QILBXf","loadedFromSource":true,"saved":true,"sourceSize":{"x":9,"y":3},"rootRelativePath":"assets/ed42c013-5a39-42e6-ba37-26809888f2ff.png"},"a3b85da1-863e-4447-afe2-587685f064be":{"name":"summoner_attack_1","sourceUrl":null,"frameSize":{"x":8,"y":8},"frameCount":2,"looping":true,"frameDelay":1,"version":"r2h6jPjt2z7jFjB.nB2YjB3yAwrrN41p","loadedFromSource":true,"saved":true,"sourceSize":{"x":8,"y":16},"rootRelativePath":"assets/a3b85da1-863e-4447-afe2-587685f064be.png"},"d8d76dfb-cc42-4d4b-90a3-e31352e22d1d":{"name":"frank_bat_1","sourceUrl":null,"frameSize":{"x":16,"y":16},"frameCount":5,"looping":true,"frameDelay":2,"version":"pq5I0Rnm1_KLcTts1FBy36meqPTnNC8j","loadedFromSource":true,"saved":true,"sourceSize":{"x":32,"y":48},"rootRelativePath":"assets/d8d76dfb-cc42-4d4b-90a3-e31352e22d1d.png"},"b76342cb-76f9-4c08-96d7-8ab9e774994f":{"name":"buffer","sourceUrl":"assets/api/v1/animation-library/mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz/category_backgrounds/blank.png","frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":4,"version":"mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/api/v1/animation-library/mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz/category_backgrounds/blank.png"},"9c403ecd-ac57-4566-8e76-baabeb1e702d":{"name":"start_game_button","sourceUrl":null,"frameSize":{"x":45,"y":9},"frameCount":1,"looping":true,"frameDelay":12,"version":"wK0saELKTh_2sd_0DPkfCawx6vi1Vybq","loadedFromSource":true,"saved":true,"sourceSize":{"x":45,"y":9},"rootRelativePath":"assets/9c403ecd-ac57-4566-8e76-baabeb1e702d.png"},"59caff47-77d5-48b9-9a24-aab2890eb263":{"name":"start_game_button_on","sourceUrl":null,"frameSize":{"x":45,"y":9},"frameCount":1,"looping":true,"frameDelay":12,"version":"7d_2RBiU._nI0ymIuQw5rzVO7L9Esu8G","loadedFromSource":true,"saved":true,"sourceSize":{"x":45,"y":9},"rootRelativePath":"assets/59caff47-77d5-48b9-9a24-aab2890eb263.png"},"313b5b91-a1b3-4e35-9bde-faabfd08312f":{"name":"credits_button","sourceUrl":null,"frameSize":{"x":27,"y":9},"frameCount":1,"looping":true,"frameDelay":12,"version":"K4UlJxBiIE5TIb5CAcbWf.TsuCilGngA","loadedFromSource":true,"saved":true,"sourceSize":{"x":27,"y":9},"rootRelativePath":"assets/313b5b91-a1b3-4e35-9bde-faabfd08312f.png"},"c4a3f919-ba74-4e7d-965d-3fc74a97a468":{"name":"credits_button_on","sourceUrl":null,"frameSize":{"x":27,"y":9},"frameCount":1,"looping":true,"frameDelay":12,"version":"4iiynL8QGj9g7mHb8xhqwQsY_jbiZtC7","loadedFromSource":true,"saved":true,"sourceSize":{"x":27,"y":9},"rootRelativePath":"assets/c4a3f919-ba74-4e7d-965d-3fc74a97a468.png"},"be224733-114a-4864-b0d5-48ff590d6676":{"name":"arrows","sourceUrl":null,"frameSize":{"x":12,"y":16},"frameCount":1,"looping":true,"frameDelay":12,"version":"kcEtSNmWJzdzkP_DYp75EMW58kykw0Yy","loadedFromSource":true,"saved":true,"sourceSize":{"x":12,"y":16},"rootRelativePath":"assets/be224733-114a-4864-b0d5-48ff590d6676.png"},"d1ca4258-0487-4880-9b9c-fce94830e651":{"name":"arrows_on","sourceUrl":null,"frameSize":{"x":12,"y":16},"frameCount":1,"looping":true,"frameDelay":12,"version":"cB3ivh.LMLb7UVA20W5KBjAag6FDnNCI","loadedFromSource":true,"saved":true,"sourceSize":{"x":12,"y":16},"rootRelativePath":"assets/d1ca4258-0487-4880-9b9c-fce94830e651.png"},"4f4818b0-b240-42f3-83d9-0d854dddc718":{"name":"stairs_1","sourceUrl":null,"frameSize":{"x":16,"y":16},"frameCount":1,"looping":true,"frameDelay":12,"version":"tvL_YpcCxNwL8JW3jMk5ItCP9RGCGqUG","loadedFromSource":true,"saved":true,"sourceSize":{"x":16,"y":16},"rootRelativePath":"assets/4f4818b0-b240-42f3-83d9-0d854dddc718.png"},"7e2ecfc4-cbe5-423b-afe2-8578a421a942":{"name":"healing_potion_1","sourceUrl":null,"frameSize":{"x":16,"y":16},"frameCount":1,"looping":true,"frameDelay":12,"version":"g5JLWas3h8shnHlHluzGVRIrYANv7itx","loadedFromSource":true,"saved":true,"sourceSize":{"x":16,"y":16},"rootRelativePath":"assets/7e2ecfc4-cbe5-423b-afe2-8578a421a942.png"},"1954271f-19a2-46c3-b676-f5c9aef0ba80":{"name":"healing_potion_2","sourceUrl":null,"frameSize":{"x":16,"y":16},"frameCount":1,"looping":true,"frameDelay":12,"version":"ZoZe_ls8RaCQ0QCFuDn0_uA_PsDF9ADT","loadedFromSource":true,"saved":true,"sourceSize":{"x":16,"y":16},"rootRelativePath":"assets/1954271f-19a2-46c3-b676-f5c9aef0ba80.png"},"69a31078-b049-432f-8757-d609e7a827a0":{"name":"fire_staff_1","sourceUrl":null,"frameSize":{"x":8,"y":16},"frameCount":2,"looping":true,"frameDelay":2,"version":"22qKpsf7pruIhjXuaRmNKWcSHHBUxCyJ","loadedFromSource":true,"saved":true,"sourceSize":{"x":16,"y":16},"rootRelativePath":"assets/69a31078-b049-432f-8757-d609e7a827a0.png"},"e4c6a9d0-9f6d-463e-b9b1-90c3941ab15d":{"name":"fireball_1","sourceUrl":null,"frameSize":{"x":16,"y":16},"frameCount":3,"looping":true,"frameDelay":3,"version":"Fl4wtw1ooOa..q3mfSOXMlrjHGmOKPbJ","loadedFromSource":true,"saved":true,"sourceSize":{"x":32,"y":32},"rootRelativePath":"assets/e4c6a9d0-9f6d-463e-b9b1-90c3941ab15d.png"},"b1343042-d3f9-4891-a4b5-fa1479dff5df":{"name":"iron_sword_1","sourceUrl":null,"frameSize":{"x":16,"y":16},"frameCount":5,"looping":true,"frameDelay":1,"version":"b1Zf.wfx92ZsThbku_QggJH79zFXjjLC","loadedFromSource":true,"saved":true,"sourceSize":{"x":32,"y":48},"rootRelativePath":"assets/b1343042-d3f9-4891-a4b5-fa1479dff5df.png"},"5ac5a1a3-3bbb-4851-b7b5-b83ad29e7391":{"name":"iron_sword_2","sourceUrl":null,"frameSize":{"x":16,"y":16},"frameCount":1,"looping":true,"frameDelay":12,"version":"rjGT78gOEY.RCHNAk26wN.znfBxDyq4N","loadedFromSource":true,"saved":true,"sourceSize":{"x":16,"y":16},"rootRelativePath":"assets/5ac5a1a3-3bbb-4851-b7b5-b83ad29e7391.png"},"79e9c342-c28f-4cac-8339-840fa998fd63":{"name":"bow_1","sourceUrl":null,"frameSize":{"x":16,"y":16},"frameCount":7,"looping":true,"frameDelay":12,"version":"QQmI4Ujs3Ed6o7Ip8jNh21dSTQmuMSxa","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":48},"rootRelativePath":"assets/79e9c342-c28f-4cac-8339-840fa998fd63.png"},"73fdec5f-faae-4fd7-8bb1-07dc1e98cb81":{"name":"arrow_1","sourceUrl":null,"frameSize":{"x":8,"y":3},"frameCount":1,"looping":true,"frameDelay":12,"version":"pHNxHLlCs.VnsXEKJuPqt89sihP6KUeD","loadedFromSource":true,"saved":true,"sourceSize":{"x":8,"y":3},"rootRelativePath":"assets/73fdec5f-faae-4fd7-8bb1-07dc1e98cb81.png"},"2578ef8b-317e-462f-b279-e49a39436a9f":{"name":"chainsaw_1","sourceUrl":null,"frameSize":{"x":16,"y":16},"frameCount":1,"looping":true,"frameDelay":12,"version":"Lp25WFYULOWqVRKv4l4sZH2O8EBRGF2c","loadedFromSource":true,"saved":true,"sourceSize":{"x":16,"y":16},"rootRelativePath":"assets/2578ef8b-317e-462f-b279-e49a39436a9f.png"},"859d23d6-e9c2-4737-90fe-58800c3dbeab":{"name":"chainsaw_2","sourceUrl":null,"frameSize":{"x":18,"y":18},"frameCount":6,"looping":true,"frameDelay":1,"version":"ibZSksX9AJE4k3HorRfx1f1v43RMLaeW","loadedFromSource":true,"saved":true,"sourceSize":{"x":36,"y":54},"rootRelativePath":"assets/859d23d6-e9c2-4737-90fe-58800c3dbeab.png"},"1368f8cf-de9e-4ee4-b58c-5d32d4ddf92e":{"name":"axe_1","sourceUrl":null,"frameSize":{"x":32,"y":32},"frameCount":8,"looping":true,"frameDelay":3,"version":"bAs98DwvyqAJtFJyQl.zmRFjLG.0ukhs","loadedFromSource":true,"saved":true,"sourceSize":{"x":96,"y":96},"rootRelativePath":"assets/1368f8cf-de9e-4ee4-b58c-5d32d4ddf92e.png"},"f44dfa30-d317-4831-911e-d86db85ef6fd":{"name":"axe_2","sourceUrl":null,"frameSize":{"x":16,"y":16},"frameCount":1,"looping":true,"frameDelay":12,"version":"Nkgvdfx4mGsJ2UeOBt0AU8sUj3SrlS9b","loadedFromSource":true,"saved":true,"sourceSize":{"x":16,"y":16},"rootRelativePath":"assets/f44dfa30-d317-4831-911e-d86db85ef6fd.png"},"20ea5095-41b8-4c42-a662-42da8941c6db":{"name":"shotgun_1","sourceUrl":null,"frameSize":{"x":64,"y":16},"frameCount":1,"looping":true,"frameDelay":60,"version":"OmeZGdsei48Ji5jLmqliOvvHOu5M32Vu","loadedFromSource":true,"saved":true,"sourceSize":{"x":64,"y":16},"rootRelativePath":"assets/20ea5095-41b8-4c42-a662-42da8941c6db.png"},"d9289340-0b80-4d23-95ed-c54a2eeea883":{"name":"shotgun_2","sourceUrl":null,"frameSize":{"x":64,"y":16},"frameCount":9,"looping":false,"frameDelay":1,"version":"o0hgzwOIAXwdz204JsISznp9sw5Ky5pd","loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":80},"rootRelativePath":"assets/d9289340-0b80-4d23-95ed-c54a2eeea883.png"},"22ceab63-0da5-4918-a251-6aaa46a8ce80":{"name":"blood_blade_1","sourceUrl":null,"frameSize":{"x":16,"y":16},"frameCount":18,"looping":false,"frameDelay":1,"version":"__GW8YAeuVyKSae8qeZy4KsYfjnJJsjG","loadedFromSource":true,"saved":true,"sourceSize":{"x":64,"y":80},"rootRelativePath":"assets/22ceab63-0da5-4918-a251-6aaa46a8ce80.png"},"515a8c45-14f7-456b-a3f0-657c1e402a7c":{"name":"blood_blade_2","sourceUrl":null,"frameSize":{"x":16,"y":16},"frameCount":1,"looping":false,"frameDelay":12,"version":"nKd2BIbzaj.pvg9MEUAZO.t6k3CC_Vju","loadedFromSource":true,"saved":true,"sourceSize":{"x":16,"y":16},"rootRelativePath":"assets/515a8c45-14f7-456b-a3f0-657c1e402a7c.png"},"7f061538-db97-434b-a465-c057dc5623ab":{"name":"tutorial_all","sourceUrl":null,"frameSize":{"x":19,"y":12},"frameCount":2,"looping":true,"frameDelay":12,"version":"KRikiKk6f5UaNZmaPww165B74urj2wcz","loadedFromSource":true,"saved":true,"sourceSize":{"x":19,"y":24},"rootRelativePath":"assets/7f061538-db97-434b-a465-c057dc5623ab.png"},"cc867188-7b2f-41cd-b85a-4b0558b5ed02":{"name":"tutorial_vertical","sourceUrl":null,"frameSize":{"x":19,"y":12},"frameCount":2,"looping":true,"frameDelay":12,"version":"sNaFWGZLE9hOOOcp8X2E_qjeAYL9TgsL","loadedFromSource":true,"saved":true,"sourceSize":{"x":19,"y":24},"rootRelativePath":"assets/cc867188-7b2f-41cd-b85a-4b0558b5ed02.png"},"a048807b-8170-49bb-9ae1-db45297f0b6c":{"name":"tutorial_horizontal","sourceUrl":null,"frameSize":{"x":19,"y":12},"frameCount":2,"looping":true,"frameDelay":12,"version":"YdmXmcHrYU7lp9DUg6OFo5.r.HWwypRz","loadedFromSource":true,"saved":true,"sourceSize":{"x":19,"y":24},"rootRelativePath":"assets/a048807b-8170-49bb-9ae1-db45297f0b6c.png"},"87d795ce-eda6-4358-9486-6c88ed117e7b":{"name":"tutorial_spacebar","sourceUrl":null,"frameSize":{"x":19,"y":5},"frameCount":2,"looping":true,"frameDelay":12,"version":"OFprYbhmNbeyuyFc.s_Ckznrgn2PDEgG","loadedFromSource":true,"saved":true,"sourceSize":{"x":19,"y":10},"rootRelativePath":"assets/87d795ce-eda6-4358-9486-6c88ed117e7b.png"},"95a4c4c3-a7f6-4c1d-87bb-4aad8f3a057b":{"name":"game_over_1","sourceUrl":null,"frameSize":{"x":42,"y":32},"frameCount":2,"looping":true,"frameDelay":12,"version":"dFmUMy9jxFHsP7H3qStrIH7ZWkjx05Wi","loadedFromSource":true,"saved":true,"sourceSize":{"x":42,"y":64},"rootRelativePath":"assets/95a4c4c3-a7f6-4c1d-87bb-4aad8f3a057b.png"},"e1ea0212-a200-4278-8fab-21d33c83b9f9":{"name":"dungeon_crash","sourceUrl":null,"frameSize":{"x":66,"y":32},"frameCount":1,"looping":true,"frameDelay":12,"version":"Mrt24p2IP2q6uy9WrM0kK3LzLGrt4f_x","loadedFromSource":true,"saved":true,"sourceSize":{"x":66,"y":32},"rootRelativePath":"assets/e1ea0212-a200-4278-8fab-21d33c83b9f9.png"},"c5a40d4a-1b71-46b5-b0ca-660953f8a035":{"name":"heart_1","sourceUrl":null,"frameSize":{"x":13,"y":14},"frameCount":1,"looping":true,"frameDelay":12,"version":"xU3TbSB3ctblOgibFrOkxznijMVoS1Sk","loadedFromSource":true,"saved":true,"sourceSize":{"x":13,"y":14},"rootRelativePath":"assets/c5a40d4a-1b71-46b5-b0ca-660953f8a035.png"},"e1e565a4-2974-411b-ae8d-16d6ed2303c7":{"name":"heart_1_flashing","sourceUrl":null,"frameSize":{"x":13,"y":14},"frameCount":13,"looping":true,"frameDelay":12,"version":"o95yyx1fJta5fQp.J2NwerNXan3f_enZ","loadedFromSource":true,"saved":true,"sourceSize":{"x":52,"y":56},"rootRelativePath":"assets/e1e565a4-2974-411b-ae8d-16d6ed2303c7.png"},"f8095396-7824-4629-9017-aeec9e2eb5c2":{"name":"heart_half_1","sourceUrl":null,"frameSize":{"x":13,"y":14},"frameCount":1,"looping":true,"frameDelay":12,"version":"Yw_BkZlZo3LUsPOTm5hz8VoVDqCqg5PG","loadedFromSource":true,"saved":true,"sourceSize":{"x":13,"y":14},"rootRelativePath":"assets/f8095396-7824-4629-9017-aeec9e2eb5c2.png"},"7bf9b14d-392f-4353-abc6-590672b6ed53":{"name":"heart_half_1_flashing","sourceUrl":null,"frameSize":{"x":13,"y":14},"frameCount":13,"looping":true,"frameDelay":12,"version":".Tj32HP6rr7VoKOnzpOggncJM28cMuxW","loadedFromSource":true,"saved":true,"sourceSize":{"x":52,"y":56},"rootRelativePath":"assets/7bf9b14d-392f-4353-abc6-590672b6ed53.png"},"dbe8d1c7-d261-433e-85a9-eabf1f0e0f20":{"name":"heart_empty_1_flashing","sourceUrl":null,"frameSize":{"x":13,"y":14},"frameCount":1,"looping":true,"frameDelay":12,"version":"o5hJsXn.O9gdaLCZ9cBKXo6nOIPB6vJx","loadedFromSource":true,"saved":true,"sourceSize":{"x":13,"y":14},"rootRelativePath":"assets/dbe8d1c7-d261-433e-85a9-eabf1f0e0f20.png"},"b0d42f07-ff1a-4ae8-8c6f-95da9cfe4b17":{"name":"heart_empty_1","sourceUrl":null,"frameSize":{"x":13,"y":14},"frameCount":1,"looping":true,"frameDelay":12,"version":"3e5NZfkzueM8IUYPy4NNNigKtSROUkUe","loadedFromSource":true,"saved":true,"sourceSize":{"x":13,"y":14},"rootRelativePath":"assets/b0d42f07-ff1a-4ae8-8c6f-95da9cfe4b17.png"},"e7121fd4-5f73-4067-a27d-510f2ec3abbf":{"name":"gift","sourceUrl":null,"frameSize":{"x":25,"y":25},"frameCount":4,"looping":true,"frameDelay":5,"version":"HzI9AVk9GhKx3D3abVjghhRBerI3Ls.C","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":50},"rootRelativePath":"assets/e7121fd4-5f73-4067-a27d-510f2ec3abbf.png"},"821d1227-3fd5-45eb-934e-de4992dec458":{"name":"gift_idle","sourceUrl":null,"frameSize":{"x":25,"y":25},"frameCount":1,"looping":true,"frameDelay":12,"version":"tfkExBD7AmSvsuQR7lHYyUg_m3iIGx2L","loadedFromSource":true,"saved":true,"sourceSize":{"x":25,"y":25},"rootRelativePath":"assets/821d1227-3fd5-45eb-934e-de4992dec458.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----






//variables
var healing;
var topfloor = 0;
var tutorial = true;
tutorial_2 = 1;
var floor = 0;

var selection = "start_button";
var screen_1 = "start_screen";
var selection_hero = "knight";
var health = 100;
var weapon = "iron_sword_1";
var dammage = 3;
var weapon_dammage = 1;
var hero_attack_timer = 0;
var enemy_attack_timer = 0;


//enemy values
var goblin_play_1 = false;
var skeleton_play_1 = false;
var summoner_play_1 = false;
var frank_play_1 = false;


//enemy_hp
var goblin_hp = 50;
var skeleton_hp = 50;
var summoner_hp = 25;
var frank_hp = 50;


//extra
var loot_weapon;
var sprite_loop;
var ran3;
var ran4;
var maxhealth;
var lootran;
var collectable_used;
var walk_skin;
var idle_skin;
var speed;


//start screen
var game_over = createSprite(-1000, -1000);
game_over.setAnimation("game_over_1");
game_over.scale = 7;
var start_button = createSprite(200, 700);
start_button.setAnimation("start_game_button");
start_button.scale = 5;
var title = createSprite(200, 460);
title.setAnimation("dungeon_crash");
title.scale = 3;
var tutorial_1 = createSprite(50, 450);
tutorial_1.setAnimation("tutorial_vertical");
tutorial_1.scale = 3;
var tutorial_2 = createSprite(50, 500);
tutorial_2.setAnimation("tutorial_vertical");
tutorial_2.scale = 3;
var arrows = createSprite(200, 600);
arrows.setAnimation("arrows");
arrows.scale = 5;


//hero selection
var select_santa = createSprite(200, 600);
select_santa.setAnimation("santa_idle");
select_santa.scale = 5;
var select_wizard = createSprite(275, 600);
select_wizard.setAnimation("wizard_idle_1");
select_wizard.scale = 5;
var select_centaur = createSprite(25, 590);
select_centaur.setAnimation("centaur_select_1");
select_centaur.scale = 5;
var select_guard = createSprite(125, 600);
select_guard.setAnimation("holy_guard_idle_1");
select_guard.scale = 5;
var select_dwarf = createSprite(350, 615);
select_dwarf.setAnimation("dwarf_idle_1");
select_dwarf.scale = 5;


//decoration
var dead_goblin = createSprite(-100, -100);
dead_goblin.setAnimation("goblin_dead_1");
dead_goblin.scale = 5;
var dead_skeleton = createSprite(-100, -100);
dead_skeleton.setAnimation("skeleton_dead_1");
dead_skeleton.scale = 5;
var dead_summoner = createSprite(-100, -100);
dead_summoner.setAnimation("summoner_dead_1");
dead_summoner.scale = 5;
var dead_frank = createSprite(-100, -100);
dead_frank.setAnimation("frank_dead_1");
dead_frank.scale = 5;


//heros and hero props
var stairs_1 = createSprite(-100, -100);
stairs_1.setAnimation("stairs_1");
stairs_1.scale = 5;
var collectable = createSprite(-100, -100);
collectable.setAnimation("buffer");
collectable.scale = 3;


//hearts
var heart_1 = createSprite(30, 30);
heart_1.setAnimation("heart_1");
heart_1.scale = 2;
var heart_2 = createSprite(60, 30);
heart_2.setAnimation("heart_1");
heart_2.scale = 2;
var heart_3 = createSprite(90, 30);
heart_3.setAnimation("heart_1");
heart_3.scale = 2;
var heart_4 = createSprite(120, 30);
heart_4.setAnimation("heart_1");
heart_4.scale = 2;
var heart_5 = createSprite(150, 30);
heart_5.setAnimation("heart_1");
heart_5.scale = 2;
var heart_6 = createSprite(180, 30);
heart_6.setAnimation("heart_1");
heart_6.scale = 2;


//enemys

//goblin
var goblin_spear_1 = createSprite(200, 200);
goblin_spear_1.setAnimation("goblin_spear_1");
goblin_spear_1.scale = 5;
var goblin_1 = createSprite(200, 200);
goblin_1.setAnimation("goblin_idle_1");
goblin_1.scale = 5;

//skeleton
var skeleton_1 = createSprite(200, 200);
skeleton_1.setAnimation("skeleton_idle_1");
skeleton_1.scale = 5;
skeleton_1.velocityX = 4;
var skeleton_bow_1 = createSprite(200, 200);
skeleton_bow_1.setAnimation("skeleton_bow_1");
skeleton_bow_1.scale = 4;
var skeleton_arrow_1 = createSprite(200, 200);
skeleton_arrow_1.setAnimation("skeleton_arrow_1");
skeleton_arrow_1.scale = 5;
skeleton_arrow_1.velocityX = -13;

//summoner
var summoner_1 = createSprite(400, 200);
summoner_1.setAnimation("summoner_idle_1");
summoner_1.scale = 5;
var summoner_attack_1 = createSprite(200, 200);
summoner_attack_1.setAnimation("summoner_attack_1");
summoner_attack_1.scale = 5;
summoner_attack_1.velocityX = -3;

//frank
var frank_1 = createSprite(200, 200);
frank_1.setAnimation("frank_idle_1");
frank_1.scale = 5;
var frank_bat_1 = createSprite(200, 200);
frank_bat_1.setAnimation("frank_bat_1");
frank_bat_1.scale = 5;


//hero should always be seen so its here
var hero = createSprite(200, 200);
hero.setAnimation("knight_idle_1");
hero.scale = 5;
var extra_1 = createSprite(-100, -100);
extra_1.setAnimation("buffer");
extra_1.scale = 3;
var hero_attack = createSprite(-100, -100);
hero_attack.setAnimation("buffer");
hero_attack.scale = 5;


//extra var
remove_goblin();
remove_skeleton();
remove_summoner();
remove_frank();
function start_level() {
  playSound("assets/category_jump/arcade_game_jump_15.mp3", false);
  hero_attack.x = -100;
  hero_attack.y = -100;
  dead_goblin.x = -100;
  dead_goblin.y = -100;
  dead_frank.x = -100;
  dead_frank.y = -100;
  dead_skeleton.x = -100;
  dead_skeleton.y = -100;
  dead_summoner.x = -100;
  dead_summoner.y = -100;
  collectable.x = -100;
  collectable.y = -100;
  stairs_1.x = -100;
  stairs_1.y = -100;
  hero.x = 25;
  hero.y = 200;
  
  
  lootran = randomNumber(1, 12);
  
  
  collectable_used = false;
  remove_goblin();
  remove_skeleton();
  remove_summoner();
  remove_frank();
  goblin_play_1 = false;
  frank_play_1 = false;
  summoner_play_1 = false;
  skeleton_play_1 = false;
  goblin_hp = 0;
  skeleton_hp = 0;
  summoner_hp = 0;
  frank_hp = 0;
  var ran10 = randomNumber(1, 4);
  if (floor <= 3) {
    if (ran10 == 1) {
      add_goblin();
    }
    if (ran10 == 2) {
      add_skeleton();
    }
    if (ran10 == 3) {
      add_summoner();
    }
    if (ran10 == 4) {
      add_frank();
    }
  } else if (floor <= 6) {
    if (ran10 == 1) {
      add_goblin();
      add_skeleton();
    }
    if (ran10 == 2) {
      add_skeleton();
      add_frank();
    }
    if (ran10 == 3) {
      add_summoner();
      add_goblin();
    }
    if (ran10 == 4) {
      add_frank();
      add_summoner();
    }
  } else if (floor <= 9) {
    if (ran10 == 1) {
      add_goblin();
      add_skeleton();
      add_summoner();
    }
    if (ran10 == 2) {
      add_skeleton();
      add_frank();
      add_goblin();
    }
    if (ran10 == 3) {
      add_summoner();
      add_goblin();
      add_frank();
    }
    if (ran10 == 4) {
      add_frank();
      add_summoner();
      add_skeleton();
    }
  } else {
    add_frank();
    add_summoner();
    add_goblin();
    add_skeleton();
  }
}


//drawing
function draw() {
 background("#dddddd");
 if (floor > topfloor) {
    topfloor = floor;
  }
 
 textSize(20);
 text("highest floor visited: "+topfloor , 100, 525);
 
 
 if(screen_1 == "game_over_screen") {
    camera.x = -1000;
    camera.y = -1000;
    textSize(16);
    text("click SPACE to return to menu", game_over + -180, game_over + -180);
    if (keyWentDown("h")) {
      screen_1 = "start_screen";
      selection = "hero_select";
    }
  }
 if (screen_1 == "start_screen") {
    camera.x = 200;
    camera.y = 600;
    if (selection == "start_button") {
      start_button.setAnimation("start_game_button_on");
      tutorial_2.setAnimation("tutorial_spacebar");
      arrows.setAnimation("arrows");
      if (tutorial == true) {
        textSize(15);
        text("you can navigate using up and down. press space to start", 10, 660);
      }
    }
    if (selection == "hero_select") {
      start_button.setAnimation("start_game_button");
      tutorial_2.setAnimation("tutorial_horizontal");
      arrows.setAnimation("arrows_on");
      if (tutorial == true) {
        textSize(14);
        text("you can navigate using up and down. left and right to select hero.", 10, 660);
      }
    }
    if (keyWentDown("down")) {
      playSound("assets/category_app/perfect_app_button_1.mp3", false);
      if (selection == "hero_select") {
        selection = "start_button";
      }
    }
    if (keyWentDown("up")) {
      playSound("assets/category_app/perfect_app_button_1.mp3", false);
      if (selection == "start_button") {
        selection = "hero_select";
      }
    }
    if (keyWentDown("space")) {
      if (selection == "start_button") {
        screen_1 = "battle_screen";
        floor = 1;
        start_level();
        playSound("assets/category_background/eerie_beginnings.mp3", true);
      } else {
        playSound("assets/category_app/perfect_app_button_1.mp3", false);
      }
    }
    if (selection == "hero_select" && keyWentDown("left")) {
      arrows.x = arrows.x + -75;
      playSound("assets/category_app/perfect_app_button_1.mp3", false);
    }
    if ((arrows.x) <= 0) {
      arrows.x = 350;
    }
    if (selection == "hero_select" && keyWentDown("right")) {
      arrows.x = arrows.x + 75;
      playSound("assets/category_app/perfect_app_button_1.mp3", false);
    }
    if ((arrows.x) >= 400) {
      arrows.x = 50;
    }
    
    
    //fluff
    if (arrows.isTouching(select_santa)) {
      selection_hero = "santa";
    }
    if (arrows.isTouching(select_wizard)) {
      selection_hero = "wizard";
    }
    if (arrows.isTouching(select_guard)) {
      selection_hero = "guard";
    }
    if (arrows.isTouching(select_centaur)) {
      selection_hero = "centaur";
    }
    if (arrows.isTouching(select_dwarf)) {
      selection_hero = "dwarf";
    }
    
    
    //heros
    if (selection_hero == "knight") {
      textSize(18);
      text("health: average | speed: average | no extra skill", 10, 750);
      text("starting weapon: iron sword", 10, 780);
      textSize(30);
      text("Knight", 160, 550);
      maxhealth = 150;
      walk_skin = "knight_walking_1";
      idle_skin = "knight_idle_1";
      speed = 4.5;
      weapon = "iron_sword";
      hero.setAnimation("knight_idle_1");
      health = maxhealth;
    }
    if (selection_hero == "wizard") {
      textSize(19);
      text("health: very low | speed: fast | 25% dammage +", 10, 750);
      text("starting weapon: fireball staff", 10, 780);
      textSize(30);
      text("Wizard", 160, 550);
      maxhealth = 75;
      walk_skin = "wizard_walking_1";
      idle_skin = "wizard_idle_1";
      speed = 5.5;
      weapon = "fireball_staff";
      hero.setAnimation("wizard_idle_1");
      health = maxhealth;
    }
    if (selection_hero == "guard") {
      textSize(15);
      text("health: very high | speed: super slow |can heal to 3/4 full ", 10, 750);
      text("starting weapon: spear", 10, 780);
      textSize(30);
      text("Holy Guard", 130, 550);
      maxhealth = 250;
      walk_skin = "holy_guard_walking_1";
      idle_skin = "holy_guard_idle_1";
      speed = 3.75;
      weapon = "knight_spear";
      hero.setAnimation("holy_guard_idle_1");
      health = maxhealth;
    }
    if (selection_hero == "centaur") {
      textSize(30);
      text("Centaur", 150, 550);
      textSize(15);
      text("health: super high | speed: 1 horsepower | massive hitbox", 10, 750);
      text("starting weapon: bow", 10, 780);
      maxhealth = 300;
      walk_skin = "centaur_walking_1";
      idle_skin = "centaur_idle_1";
      speed = 6.5;
      weapon = "wooden_bow";
      hero.setAnimation("centaur_idle_1");
      health = maxhealth;
    }
    if (selection_hero == "dwarf") {
      textSize(30);
      text("Dwarf", 160, 550);
      textSize(17);
      text("health: low | speed: above average | small hitbox", 10, 750);
      text("starting weapon: battle axe", 10, 780);
      maxhealth = 100;
      walk_skin = "dwarf_walking_1";
      idle_skin = "dwarf_idle_1";
      speed = 4.75;
      weapon = "battle_axe";
      hero.setAnimation("dwarf_idle_1");
      health = maxhealth;
    }
    if (selection_hero == "evil_knight") {
       textSize(16);
      text("health: super high | speed: super fast | 2x dammage", 10, 750);
      text("starting weapon: iron sword", 10, 780);
      textSize(30);
      text("Evil Knight", 130, 550);
      maxhealth = 250;
    walk_skin = "evil_knight_walking";
    idle_skin = "evil_knight_idle";
    speed = 7;
    weapon = "iron_sword";
       hero.setAnimation("evil_knight_idle");
       health = maxhealth;
    }
    if (selection_hero == "santa") {
       textSize(16);
      text("health: super high | speed: super fast | 2x dammage", 10, 750);
      text("starting weapon: x-mas gift", 10, 780);
      textSize(30);
      text("Santa", 160, 550);
      maxhealth = 250;
    walk_skin = "santa_walking";
    idle_skin = "santa_idle";
    speed = 7;
    weapon = "gift";
       hero.setAnimation("santa_idle");
       health = maxhealth;
    }
  }


//battlescreen
 if (health > maxhealth) {
    health = maxhealth;
  }


//health
 if (healing == false) {
    if (health >= 300) {
      heart_6.setAnimation("heart_1");
    } else if (health >= 275) {
      heart_6.setAnimation("heart_half_1");
    } else {
      heart_6.setAnimation("heart_empty_1");
    }
    if (health >= 250) {
      heart_5.setAnimation("heart_1");
    } else if ((health >= 225)) {
      heart_5.setAnimation("heart_half_1");
    } else {
      heart_5.setAnimation("heart_empty_1");
    }
    if (health >= 200) {
      heart_4.setAnimation("heart_1");
    } else if ((health >= 175)) {
      heart_4.setAnimation("heart_half_1");
    } else {
      heart_4.setAnimation("heart_empty_1");
    }
    if (health >= 150) {
      heart_3.setAnimation("heart_1");
    } else if ((health >= 125)) {
      heart_3.setAnimation("heart_half_1");
    } else {
      heart_3.setAnimation("heart_empty_1");
    }
    if (health >= 100) {
      heart_2.setAnimation("heart_1");
    } else if ((health >= 75)) {
      heart_2.setAnimation("heart_half_1");
    } else {
      heart_2.setAnimation("heart_empty_1");
    }
    if (health >= 50) {
      heart_1.setAnimation("heart_1");
    } else if ((health >= 25)) {
      heart_1.setAnimation("heart_half_1");
    } else {
      heart_1.setAnimation("heart_half_1");
    }
  } else if (healing == true) {
    if (health >= 300) {
      heart_6.setAnimation("heart_1_flashing");
    } else if (health >= 275) {
      heart_6.setAnimation("heart_half_1_flashing");
    } else {
      heart_6.setAnimation("heart_empty_1_flashing");
    }
    if (health >= 250) {
      heart_5.setAnimation("heart_1_flashing");
    } else if ((health >= 225)) {
      heart_5.setAnimation("heart_half_1_flashing");
    } else {
      heart_5.setAnimation("heart_empty_1_flashing");
    }
    if (health >= 200) {
      heart_4.setAnimation("heart_1_flashing");
    } else if ((health >= 175)) {
      heart_4.setAnimation("heart_half_1_flashing");
    } else {
      heart_4.setAnimation("heart_empty_1_flashing");
    }
    if (health >= 150) {
      heart_3.setAnimation("heart_1_flashing");
    } else if ((health >= 125)) {
      heart_3.setAnimation("heart_half_1_flashing");
    } else {
      heart_3.setAnimation("heart_empty_1_flashing");
    }
    if (health >= 100) {
      heart_2.setAnimation("heart_1_flashing");
    } else if ((health >= 75)) {
      heart_2.setAnimation("heart_half_1_flashing");
    } else {
      heart_2.setAnimation("heart_empty_1_flashing");
    }
    if (health >= 50) {
      heart_1.setAnimation("heart_1_flashing");
    } else if ((health >= 25)) {
      heart_1.setAnimation("heart_half_1_flashing");
    } else {
      heart_1.setAnimation("heart_half_1_flashing");
    }
  }


//health buff
 if (selection_hero == "guard") {
    if (health < (maxhealth * 3)/4) {
      healing = true;
      health = health + 0.1;
    } else {
      healing = false;
    }
  } else {
    if (health < (maxhealth * 1)/2) {
      healing = true;
      health = health + 0.15;
      health = health + 0.03;
    } else {
      healing = false;
    }
  }
 
 
 //dont ask
 if (screen_1 == "battle_screen") {
    if (hero.isTouching(goblin_spear_1)) {
      playSound("assets/category_hits/8bit_splat.mp3", false);
      background("maroon");
      health = health - 1;
    }
    if (hero.isTouching(skeleton_arrow_1)) {
      playSound("assets/category_hits/8bit_splat.mp3", false);
      background("maroon");
      health = health - 5;
    }
    if (hero.isTouching(summoner_attack_1)) {
      playSound("assets/category_hits/8bit_splat.mp3", false);
      background("maroon");
      health = health - 3;
    }
    if (hero.isTouching(frank_bat_1)) {
      playSound("assets/category_hits/8bit_splat.mp3", false);
      background("maroon");
      health = health - 1;
    }
    textSize(25);
    text("Floor: " + floor, 300, 20);
    
    
    //camera
    camera.x = 200;
    camera.y = 200;
  hero_attack_timer = hero_attack_timer + 1;
  enemy_attack_timer = enemy_attack_timer + 1;
    sprite_loop = sprite_loop + 1;
    goblin_1.setAnimation("goblin_idle_1");
    skeleton_1.setAnimation("skeleton_idle_1");
    summoner_1.setAnimation("summoner_idle_1");
    frank_1.setAnimation("frank_idle_1");
    
    
    //death
    if (health <= 0) {
      screen_1 = "game_over_screen";
      stopSound("assets/category_background/eerie_beginnings.mp3");
      playSound("assets/category_music/8bit_game_over_1.mp3", false);
    }
    
    
    //hero stuff
    if (selection_hero == "wizard") {
      dammage = weapon_dammage * 1.25;
    } else if ((selection_hero == "guard")) {
      dammage = weapon_dammage * 3/4;
    } else if ((selection_hero == "evil_knight")) {
      dammage = weapon_dammage * 2;
    } else if ((selection_hero == "santa")) {
      dammage = weapon_dammage * 2;
    } else {
      dammage = weapon_dammage;
    }
    
    
    //tutorial
    if (tutorial == true && hero.isTouching(collectable)) {
      textSize(15);
      text("you can collect items and switch weapons with Space.", 10, 390);
    }
    if (tutorial == true && hero.isTouching(stairs_1)) {
      textSize(15);
      text("to move to the next floor click SPACE ", 10, 390);
    }
    if (tutorial == true && hero.isTouching(goblin_spear_1)) {
      textSize(15);
      text("avoid enemy attacks!", 10, 390);
    }
    if (tutorial == true && hero.isTouching(skeleton_arrow_1)) {
      textSize(15);
      text("avoid enemy attacks!", 10, 390);
    }
    if (tutorial == true && hero.isTouching(summoner_attack_1)) {
      textSize(15);
      text("avoid enemy attacks!", 10, 390);
    }
    if (tutorial == true && hero.isTouching(frank_bat_1)) {
      textSize(15);
      text("avoid enemy attacks!", 10, 390);
    }
    if (tutorial == true) {
      textSize(15);
      text("arrow keys to move, spacebar to attack.", 10, 370);
    }
    
    
    //enemy timer
  if (enemy_attack_timer >= 100) {
    enemy_attack_timer = 0;
  }
    
    
    //floor control
    if (skeleton_hp <= 0 && goblin_hp <= 0 && summoner_hp <= 0 && frank_hp <= 0) {
      stairs_1.x = 300;
      stairs_1.y = 200;
      collectable.x = 100;
      collectable.y = 200;
      
      if (collectable_used == true) {
        collectable.x = -100;
        collectable.y = -100;
      }
      if (hero.isTouching(collectable) && keyWentDown("space")) {
        playSound("assets/category_collect/energy_bar_recharge_6.mp3", false);
      }
      
      
      //potions
      if (lootran == 1) {
        collectable.setAnimation("healing_potion_1");
        collectable.scale = 3;
        if (hero.isTouching(collectable) && keyWentDown("space")) {
          collectable_used = true;
          collectable.scale = 2;
          health = health + 50;
          if (hero == "guard") {
            health = health + 25;
          }
        }
      }
      if (lootran == 2) {
        collectable.setAnimation("healing_potion_1");
        collectable.scale = 3;
        if (hero.isTouching(collectable) && keyWentDown("space")) {
          collectable_used = true;
          collectable.scale = 2;
          health = health + 50;
          if (hero == "guard") {
            health = health + 25;
          }
        }
      }
      if (lootran == 3) {
        collectable.setAnimation("healing_potion_2");
        collectable.scale = 3;
        if (hero.isTouching(collectable) && keyWentDown("space")) {
          collectable_used = true;
          collectable.scale = 2;
          health = health + 100;
          if (hero == "guard") {
            health = health + 25;
          }
        }
      }
      
      
      //weapons
      if (lootran == 4) {
        collectable.setAnimation("fire_staff_1");
        collectable.scale = 3;
        if (hero.isTouching(collectable) && keyWentDown("space")) {
          collectable_used = true;
          weapon = "fireball_staff";
          collectable.scale = 2;
        }
      }
      if (lootran == 5) {
        collectable.setAnimation("knight_attack_idle_1");
        collectable.scale = 3;
        if (hero.isTouching(collectable) && keyWentDown("space")) {
          collectable_used = true;
          weapon = "knight_spear";
          collectable.scale = 2;
        }
      }
      if (lootran == 6) {
        collectable.setAnimation("iron_sword_2");
        collectable.scale = 3;
        if (hero.isTouching(collectable) && keyWentDown("space")) {
          collectable_used = true;
          weapon = "iron_sword";
          collectable.scale = 2;
        }
      }
      if (lootran == 7) {
        collectable.setAnimation("bow_1");
        collectable.scale = 3;
        if (hero.isTouching(collectable) && keyWentDown("space")) {
          collectable_used = true;
          weapon = "wooden_bow";
          collectable.scale = 2;
        }
      }
      if (lootran == 8) {
        collectable.setAnimation("chainsaw_1");
        collectable.scale = 3;
        if (hero.isTouching(collectable) && keyWentDown("space")) {
          collectable_used = true;
          weapon = "chainsaw";
          collectable.scale = 2;
        }
      }
      if (lootran == 9) {
        collectable.setAnimation("axe_2");
        collectable.scale = 3;
        if (hero.isTouching(collectable) && keyWentDown("space")) {
          collectable_used = true;
          weapon = "battle_axe";
          collectable.scale = 2;
        }
      }
      if (lootran == 10) {
        collectable.setAnimation("shotgun_1");
        collectable.scale = 3;
        if (hero.isTouching(collectable) && keyWentDown("space")) {
          collectable_used = true;
          weapon = "shotgun";
          collectable.scale = 2;
        }
      }
      if (lootran == 11) {
        collectable.setAnimation("blood_blade_2");
        collectable.scale = 3;
        if (hero.isTouching(collectable) && keyWentDown("space")) {
          collectable_used = true;
          weapon = "blood_blade";
          collectable.scale = 2;
        }
      }
      if (lootran == 12) {
        collectable.setAnimation("gift_idle");
        collectable.scale = 3;
        if (hero.isTouching(collectable) && keyWentDown("space")) {
          collectable_used = true;
          weapon = "gift";
          collectable.scale = 2;
        }
      }
    }
    if (hero.isTouching(stairs_1) && keyDown("space")) {
      start_level();
      floor = floor + 1;
    }
  
  
  //basic movement
  if (keyDown("up")) {
    hero.y = hero.y -speed;
    hero.setAnimation(walk_skin);
  }
  if (keyDown("down")) {
    hero.y = hero.y +speed;
    hero.setAnimation(walk_skin);
  }
  if (keyDown("left")) {
    hero.x = hero.x -speed;
    hero.setAnimation(walk_skin);
  }
  if (keyDown("right")) {
    hero.x = hero.x +speed;
    hero.setAnimation(walk_skin);
  }
    if (keyWentUp("up")) {
      hero.setAnimation(idle_skin);
    }
    if (keyWentUp("down")) {
      hero.setAnimation(idle_skin);
    }
    if (keyWentUp("left")) {
      hero.setAnimation(idle_skin);
    }
    if (keyWentUp("right")) {
      hero.setAnimation(idle_skin);
    }
  if (hero.x >= 375) {
    hero.x = 375;
  }
  if ((hero.y) <= 25) {
    hero.y = 25;
  }
  if (hero.y >= 375) {
    hero.y = 375;
  }
  if (hero.x <= 25) {
    hero.x = 25;
  }
  
  
  //attacks
    
    //knight_spear
    if (weapon == "knight_spear") {
    if (hero_attack_timer < 10) {
      hero_attack.x = hero.x + 50;
      hero_attack.y = hero.y + 20;
    }
    if (keyWentDown("space")) {
      if (hero_attack_timer >= 20) {
        playSound("assets/category_swing/air_whoosh_swing.mp3", false);
        hero_attack_timer = 0;
        hero_attack.setAnimation("buffer");
        hero_attack.setAnimation("knight_attack_1");
      }
    }
    if (hero_attack_timer == 10) {
      hero_attack.x = -100;
      hero_attack.y = -100;
    }
    weapon_dammage = 2;
    hero_attack.scale = 5;
      }
    
    //fireball staff
    if (weapon == "fireball_staff") {
    if (hero_attack_timer < 30) {
      extra_1.x = hero.x + 20;
      extra_1.y = hero.y + 10;
      extra_1.setAnimation("fire_staff_1");
    }
    if (keyWentDown("space")) {
      if (hero_attack_timer >= 40) {
        playSound("assets/category_nature/fire_loop.mp3", false);
        hero_attack.x = hero.x + 60;
        hero_attack.y = hero.y + 10;
        hero_attack.setAnimation("fireball_1");
        hero_attack_timer = 0;
        hero_attack.velocityX = 5;
      }
    }
    if (hero_attack_timer == 30) {
      stopSound("assets/category_nature/fire_loop.mp3");
      extra_1.x = -100;
      extra_1.y = -100;
      hero_attack.x = -100;
      hero_attack.y = -100;
      hero_attack.velocityX = 0;
    }
    weapon_dammage = 7/10;
    hero_attack.scale = 5;
      }
    
    //iron_sword
    if (weapon == "iron_sword") {
    if (hero_attack_timer < 10) {
      hero_attack.x = hero.x + 50;
      hero_attack.y = hero.y + 20;
    }
    if (keyWentDown("space")) {
      if (hero_attack_timer >= 15) {
        playSound("assets/category_swing/swing_3_fast.mp3", false);
        hero_attack_timer = 0;
        hero_attack.setAnimation("buffer");
        hero_attack.setAnimation("iron_sword_1");
      }
    }
    if (hero_attack_timer == 10) {
      hero_attack.x = -100;
      hero_attack.y = -100;
    }
    weapon_dammage = 1.5;
    hero_attack.scale = 4;
      }
    
    //wooden_bow
    if (weapon == "wooden_bow") {
    if (hero_attack_timer < 25) {
      extra_1.x = hero.x + 0;
      extra_1.y = hero.y + 10;
      extra_1.setAnimation("bow_1");
    }
    if (keyWentDown("space")) {
      if (hero_attack_timer >= 60) {
        playSound("assets/category_slide/arrow_whoosh.mp3", false);
        hero_attack.x = hero.x + 60;
        hero_attack.y = hero.y + 10;
        hero_attack.setAnimation("arrow_1");
        hero_attack_timer = 0;
        hero_attack.velocityX = 12;
      }
    }
    if (hero_attack_timer == 25) {
      extra_1.x = -100;
      extra_1.y = -100;
      hero_attack.x = -100;
      hero_attack.y = -100;
      hero_attack.velocityX = 0;
    }
    weapon_dammage = 3;
    hero_attack.scale = 6;
      }
    
    //chainsaw
    if (weapon == "chainsaw") {
    hero_attack.setAnimation("chainsaw_2");
    extra_1.setAnimation("chainsaw_1");
    hero_attack.x = -100;
    hero_attack.y = -100;
    if (keyDown("space")) {
      playSound("assets/category_objects/creak_2.mp3", false);
      hero_attack.x = hero.x + 50;
      hero_attack.y = hero.y + 20;
      extra_1.x = -100;
      extra_1.y = -100;
      hero_attack_timer = 0;
    }
    weapon_dammage = 1;
    hero_attack.scale = 5;
    extra_1.scale = 5;
  }
    
    //axe
    if (weapon == "battle_axe") {
    if (hero_attack_timer < 35) {
      hero_attack.x = hero.x;
      hero_attack.y = hero.y + 10;
    }
    if (hero_attack_timer == 35) {
      hero_attack.x = -100;
      hero_attack.y = -100;
    }
    if (keyWentDown("space")) {
      if (hero_attack_timer >= 40) {
        hero_attack_timer = 0;
        hero_attack.setAnimation("buffer");
        hero_attack.setAnimation("axe_1");
        playSound("assets/category_swish/heavy_axe_swing.mp3", false);
      }
    }
    weapon_dammage = 2;
    hero_attack.scale = 4;
      }
    
    //shotgun
    if (weapon == "shotgun") {
    if (hero_attack_timer < 15) {
      hero_attack.x = hero.x + 120;
      hero_attack.y = hero.y + 20;
    }
    if (hero_attack_timer == 15) {
      hero_attack.x = -100;
      hero_attack.y = -100;
    }
    if (keyWentDown("space")) {
      if (hero_attack_timer >= 45) {
        hero_attack_timer = 0;
        hero_attack.setAnimation("buffer");
        hero_attack.setAnimation("shotgun_2");
        playSound("assets/category_explosion/8bit_explosion.mp3", false);
      }
    }
    weapon_dammage = 1;
    hero_attack.scale = 4;
      }
    
    //blood_blade
    if (weapon == "blood_blade") {
    if (hero_attack_timer < 60) {
      hero_attack.x = hero.x + 50;
      hero_attack.y = hero.y + 20;
    }
    if (keyWentDown("space")) {
      if (hero_attack_timer >= 75) {
        health = health - 6;
        hero_attack_timer = 0;
        hero_attack.setAnimation("buffer");
        hero_attack.setAnimation("blood_blade_1");
        playSound("assets/category_transition/retro_game_enemy_teleport_5.mp3", false);
      }
    }
    if (hero_attack_timer <= 30) {
      hero_attack.x = -100;
      hero_attack.y = -100;
    }
    weapon_dammage = 3;
    hero_attack.scale = 3.5;
      }
    
    //gift
    if (weapon == "gift") {
    if (keyWentDown("space")) {
      if (hero_attack_timer >= 40) {
        playSound("assets/category_slide/arrow_whoosh.mp3", false);
        hero_attack.x = hero.x + 60;
        hero_attack.y = hero.y + 10;
        hero_attack.setAnimation("gift");
        hero_attack_timer = 0;
        hero_attack.velocityX = 12;
      }
    }
    weapon_dammage = 3;
    hero_attack.scale = 2;
      }
  
  
  //enemys
    if (hero_attack.isTouching(goblin_1)) {
      goblin_hp = goblin_hp - dammage;
      goblin_1.setAnimation("goblin_hurt_1");
    }
    if (hero_attack.isTouching(skeleton_1)) {
      skeleton_hp = skeleton_hp - dammage;
      skeleton_1.setAnimation("skeleton_hurt_1");
    }
    if (hero_attack.isTouching(summoner_1)) {
      summoner_hp = summoner_hp - dammage;
      summoner_1.setAnimation("summoner_hurt_1");
    }
    if (hero_attack.isTouching(frank_1)) {
      frank_hp = frank_hp - dammage;
      frank_1.setAnimation("frank_hurt_1");
    }
    if (goblin_hp <= 0) {
      remove_goblin();
    }
    if (skeleton_hp <= 0) {
      remove_skeleton();
    }
    if (summoner_hp <= 0) {
      remove_summoner();
    }
    if (frank_hp <= 0) {
      remove_frank();
    }
  
  //goblin ai
  if (goblin_play_1 == true) {
    if (enemy_attack_timer >= 95) {
      var ran1 = randomNumber(1, 3);
      if (ran1 == 1) {
        goblin_1.velocityX = 4;
      }
      if (ran1 == 2) {
        goblin_1.velocityX = -4;
      }
      if (ran1 == 3) {
        goblin_1.velocityX = 0;
      }
    }
    goblin_spear_1.x = goblin_1.x -40;
    goblin_spear_1.y = goblin_1.y +20;
    if (goblin_1.x >= 325) {
      goblin_1.x = 325;
    }
    if (goblin_1.x <= 100) {
      goblin_1.x = 100;
      goblin_1.velocityX = 4;
    }
    if (goblin_1.y > hero.y) {
      goblin_1.velocityY = -2;
    } else {
      goblin_1.velocityY = 2;
    }
  }
  
  //skeleton ai
  if (skeleton_play_1 == true) {
    if (enemy_attack_timer >= 80) {
      skeleton_bow_1.x = skeleton_1.x -40;
      skeleton_bow_1.y = skeleton_1.y +20;
    } else {
      skeleton_bow_1.x = -100;
      skeleton_bow_1.y = -100;
    }
    if (enemy_attack_timer == 90) {
      skeleton_arrow_1.x = skeleton_bow_1.x;
      skeleton_arrow_1.y = skeleton_bow_1.y;
      var ran2 = randomNumber(1, 2);
      if (ran2 == 1) {
        skeleton_1.velocityY = skeleton_1.velocityY * -1;
      }
      if (ran2 == 2) {
        skeleton_1.velocityY = 4;
      }
    }
    if (skeleton_1.y >= 375) {
      skeleton_1.y = 375;
      skeleton_1.velocityY = -4;
    }
    if ((skeleton_1.y) <= 75) {
      skeleton_1.y = 75;
      skeleton_1.velocityY = 4;
    }
    skeleton_1.x = 375;
  }
  
  //summoner ai
  if (summoner_play_1 == true) {
    if (enemy_attack_timer == 50) {
      summoner_attack_1.x = summoner_1.x;
      summoner_attack_1.y = summoner_1.y;
      summoner_1.setAnimation("summoner_summoning_1");
    }
    if (enemy_attack_timer == 10) {
      summoner_1.setAnimation("summoner_idle_1");
      summoner_attack_1.x = -100;
      summoner_attack_1.y = -100;
    }
    if (summoner_attack_1.y > hero.y) {
      summoner_attack_1.velocityY = -1.75;
    } else {
      summoner_attack_1.velocityY = 1.75;
    }
    if (summoner_attack_1.x > hero.x) {
      summoner_attack_1.velocityX = -1.75;
    } else {
      summoner_attack_1.velocityX = 1.75;
    }
    if (enemy_attack_timer == 95) {
      ran3 = randomNumber(1, 2);
      if (ran3 == 1) {
        if (summoner_1.y > hero.y) {
          summoner_1.velocityY = -1;
        } else {
          summoner_1.velocityY = 1;
        }
        if (summoner_1.x > hero.x) {
          summoner_1.velocityX = -1;
        } else {
          summoner_1.velocityX = 1;
        }
      }
      if (ran3 == 2) {
        summoner_1.velocityX = 3;
        summoner_1.velocityY = 0;
      }
    }
    if (summoner_1.x >= 375) {
      summoner_1.x = 375;
    }
  }
  
  //frank ai
  if (frank_play_1 == true) {
    if (frank_1.x > hero.x + 100) {
      frank_1.velocityX = -3;
    } else {
      frank_1.velocityX = 3;
    }
    if (enemy_attack_timer  == 95) {
      ran4 = randomNumber(1, 3);
    }
    if (ran4 == 1) {
      if (frank_1.y > hero.y) {
        frank_1.velocityY = -3.5;
      } else {
        frank_1.velocityY = 3.5;
      }
    }
    if (ran4 == 2) {
      if (frank_1.y > hero.y -100) {
        frank_1.velocityY = -3.5;
      } else {
        frank_1.velocityY = 3.5;
      }
    }
    if (ran4 == 3) {
      if (frank_1.y > hero.y +100) {
        frank_1.velocityY = -3.5;
      } else {
        frank_1.velocityY = 3.5;
      }
    }
    if (enemy_attack_timer <= 25) {
      frank_bat_1.x = frank_1.x -40;
      frank_bat_1.y = frank_1.y +20;
      frank_bat_1.setAnimation("frank_bat_1");
    } else {
      frank_bat_1.x = -100;
      frank_bat_1.y = -100;
    }
  }
  }
 if (goblin_play_1 == true) {
    dead_goblin.x = goblin_1.x;
    dead_goblin.y = goblin_1.y;
    dead_goblin.setAnimation("buffer");
  } else {
    dead_goblin.setAnimation("goblin_dead_1");
  }
 if (skeleton_play_1 == true) {
    dead_skeleton.x = skeleton_1.x;
    dead_skeleton.y = skeleton_1.y;
    dead_skeleton.setAnimation("buffer");
  } else {
    dead_skeleton.setAnimation("skeleton_dead_1");
  }
 if (summoner_play_1 == true) {
    dead_summoner.x = summoner_1.x;
    dead_summoner.y = summoner_1.y;
    dead_summoner.setAnimation("buffer");
  } else {
    dead_summoner.setAnimation("summoner_dead_1");
  }
 if (frank_play_1 == true) {
    dead_frank.x = frank_1.x;
    dead_frank.y = frank_1.y;
    dead_frank.setAnimation("buffer");
  } else {
    dead_frank.setAnimation("frank_dead_1");
  }
 drawSprites();
 newcolors();
 words();
}
function add_goblin() {
  goblin_1.x = 300;
  goblin_1.y = 200;
  goblin_hp = 100;
  goblin_play_1 = true;
}
function remove_goblin() {
  goblin_1.x = -100;
  goblin_1.y = -100;
  goblin_spear_1.x = -100;
  goblin_spear_1.y = -100;
  goblin_play_1 = false;
}
function add_skeleton() {
  skeleton_1.x = 375;
  skeleton_1.y = 100;
  skeleton_1.velocityY = 4;
  skeleton_hp = 100;
  skeleton_play_1 = true;
}
function remove_skeleton() {
  skeleton_1.x = -100;
  skeleton_1.y = -100;
  skeleton_bow_1.x = -100;
  skeleton_bow_1.y = -100;
  skeleton_arrow_1.x = -100;
  skeleton_arrow_1.y = -100;
  skeleton_play_1 = false;
}
function add_summoner() {
  summoner_1.x = 200;
  summoner_1.y = 350;
  summoner_hp = 100;
  summoner_play_1 = true;
}
function remove_summoner() {
  summoner_1.x = -100;
  summoner_1.y = -100;
  summoner_attack_1.x = -100;
  summoner_attack_1.y = -100;
  summoner_play_1 = false;
}
function add_frank() {
  frank_1.x = 175;
  frank_1.y = 175;
  frank_hp = 100;
  frank_play_1 = true;
}
function remove_frank() {
  frank_1.x = -100;
  frank_1.y = -100;
  frank_bat_1.x = -100;
  frank_bat_1.y = -100;
  frank_play_1 = false;
}


//Extras
function newcolors() {
  if (keyWentDown("1")) {
    walk_skin = "holy_guard_walking_2";
    idle_skin = "holy_guard_idle_2";
  }
  if (keyWentDown("2")) {
    walk_skin = "knight_walking_2";
    idle_skin = "knight_idle_2";
  }
  if (keyWentDown("3")) {
    walk_skin = "wizard_walking_2";
    idle_skin = "wizard_idle_2";
  }
  if (keyWentDown("4")) {
    walk_skin = "dwarf_walking_2";
    idle_skin = "dwarf_idle_2";
  }
}
function words() {
  if (keyWentDown("0")) {
    if (tutorial == true) {
      tutorial = false;
    } else if ((tutorial == false)) {
      tutorial = true;
    }
  }
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
