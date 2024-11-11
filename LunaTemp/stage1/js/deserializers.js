var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i6842 = root || request.c( 'UnityEngine.JointSpring' )
  var i6843 = data
  i6842.spring = i6843[0]
  i6842.damper = i6843[1]
  i6842.targetPosition = i6843[2]
  return i6842
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i6844 = root || request.c( 'UnityEngine.JointMotor' )
  var i6845 = data
  i6844.m_TargetVelocity = i6845[0]
  i6844.m_Force = i6845[1]
  i6844.m_FreeSpin = i6845[2]
  return i6844
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i6846 = root || request.c( 'UnityEngine.JointLimits' )
  var i6847 = data
  i6846.m_Min = i6847[0]
  i6846.m_Max = i6847[1]
  i6846.m_Bounciness = i6847[2]
  i6846.m_BounceMinVelocity = i6847[3]
  i6846.m_ContactDistance = i6847[4]
  i6846.minBounce = i6847[5]
  i6846.maxBounce = i6847[6]
  return i6846
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i6848 = root || request.c( 'UnityEngine.JointDrive' )
  var i6849 = data
  i6848.m_PositionSpring = i6849[0]
  i6848.m_PositionDamper = i6849[1]
  i6848.m_MaximumForce = i6849[2]
  return i6848
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i6850 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i6851 = data
  i6850.m_Spring = i6851[0]
  i6850.m_Damper = i6851[1]
  return i6850
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i6852 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i6853 = data
  i6852.m_Limit = i6853[0]
  i6852.m_Bounciness = i6853[1]
  i6852.m_ContactDistance = i6853[2]
  return i6852
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i6854 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i6855 = data
  i6854.m_ExtremumSlip = i6855[0]
  i6854.m_ExtremumValue = i6855[1]
  i6854.m_AsymptoteSlip = i6855[2]
  i6854.m_AsymptoteValue = i6855[3]
  i6854.m_Stiffness = i6855[4]
  return i6854
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i6856 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i6857 = data
  i6856.m_LowerAngle = i6857[0]
  i6856.m_UpperAngle = i6857[1]
  return i6856
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i6858 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i6859 = data
  i6858.m_MotorSpeed = i6859[0]
  i6858.m_MaximumMotorTorque = i6859[1]
  return i6858
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i6860 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i6861 = data
  i6860.m_DampingRatio = i6861[0]
  i6860.m_Frequency = i6861[1]
  i6860.m_Angle = i6861[2]
  return i6860
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i6862 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i6863 = data
  i6862.m_LowerTranslation = i6863[0]
  i6862.m_UpperTranslation = i6863[1]
  return i6862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i6864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i6865 = data
  i6864.name = i6865[0]
  i6864.halfPrecision = !!i6865[1]
  i6864.useUInt32IndexFormat = !!i6865[2]
  i6864.vertexCount = i6865[3]
  i6864.aabb = i6865[4]
  var i6867 = i6865[5]
  var i6866 = []
  for(var i = 0; i < i6867.length; i += 1) {
    i6866.push( !!i6867[i + 0] );
  }
  i6864.streams = i6866
  i6864.vertices = i6865[6]
  var i6869 = i6865[7]
  var i6868 = []
  for(var i = 0; i < i6869.length; i += 1) {
    i6868.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i6869[i + 0]) );
  }
  i6864.subMeshes = i6868
  var i6871 = i6865[8]
  var i6870 = []
  for(var i = 0; i < i6871.length; i += 16) {
    i6870.push( new pc.Mat4().setData(i6871[i + 0], i6871[i + 1], i6871[i + 2], i6871[i + 3],  i6871[i + 4], i6871[i + 5], i6871[i + 6], i6871[i + 7],  i6871[i + 8], i6871[i + 9], i6871[i + 10], i6871[i + 11],  i6871[i + 12], i6871[i + 13], i6871[i + 14], i6871[i + 15]) );
  }
  i6864.bindposes = i6870
  var i6873 = i6865[9]
  var i6872 = []
  for(var i = 0; i < i6873.length; i += 1) {
    i6872.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i6873[i + 0]) );
  }
  i6864.blendShapes = i6872
  return i6864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i6878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i6879 = data
  i6878.triangles = i6879[0]
  return i6878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i6884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i6885 = data
  i6884.name = i6885[0]
  var i6887 = i6885[1]
  var i6886 = []
  for(var i = 0; i < i6887.length; i += 1) {
    i6886.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i6887[i + 0]) );
  }
  i6884.frames = i6886
  return i6884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i6888 = root || new pc.UnityMaterial()
  var i6889 = data
  i6888.name = i6889[0]
  request.r(i6889[1], i6889[2], 0, i6888, 'shader')
  i6888.renderQueue = i6889[3]
  i6888.enableInstancing = !!i6889[4]
  var i6891 = i6889[5]
  var i6890 = []
  for(var i = 0; i < i6891.length; i += 1) {
    i6890.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i6891[i + 0]) );
  }
  i6888.floatParameters = i6890
  var i6893 = i6889[6]
  var i6892 = []
  for(var i = 0; i < i6893.length; i += 1) {
    i6892.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i6893[i + 0]) );
  }
  i6888.colorParameters = i6892
  var i6895 = i6889[7]
  var i6894 = []
  for(var i = 0; i < i6895.length; i += 1) {
    i6894.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i6895[i + 0]) );
  }
  i6888.vectorParameters = i6894
  var i6897 = i6889[8]
  var i6896 = []
  for(var i = 0; i < i6897.length; i += 1) {
    i6896.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i6897[i + 0]) );
  }
  i6888.textureParameters = i6896
  var i6899 = i6889[9]
  var i6898 = []
  for(var i = 0; i < i6899.length; i += 1) {
    i6898.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i6899[i + 0]) );
  }
  i6888.materialFlags = i6898
  return i6888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i6902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i6903 = data
  i6902.name = i6903[0]
  i6902.value = i6903[1]
  return i6902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i6906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i6907 = data
  i6906.name = i6907[0]
  i6906.value = new pc.Color(i6907[1], i6907[2], i6907[3], i6907[4])
  return i6906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i6910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i6911 = data
  i6910.name = i6911[0]
  i6910.value = new pc.Vec4( i6911[1], i6911[2], i6911[3], i6911[4] )
  return i6910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i6914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i6915 = data
  i6914.name = i6915[0]
  request.r(i6915[1], i6915[2], 0, i6914, 'value')
  return i6914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i6918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i6919 = data
  i6918.name = i6919[0]
  i6918.enabled = !!i6919[1]
  return i6918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i6920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i6921 = data
  i6920.name = i6921[0]
  i6920.width = i6921[1]
  i6920.height = i6921[2]
  i6920.mipmapCount = i6921[3]
  i6920.anisoLevel = i6921[4]
  i6920.filterMode = i6921[5]
  i6920.hdr = !!i6921[6]
  i6920.format = i6921[7]
  i6920.wrapMode = i6921[8]
  i6920.alphaIsTransparency = !!i6921[9]
  i6920.alphaSource = i6921[10]
  i6920.graphicsFormat = i6921[11]
  i6920.sRGBTexture = !!i6921[12]
  i6920.desiredColorSpace = i6921[13]
  i6920.wrapU = i6921[14]
  i6920.wrapV = i6921[15]
  return i6920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i6922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i6923 = data
  i6922.name = i6923[0]
  i6922.atlasId = i6923[1]
  i6922.mipmapCount = i6923[2]
  i6922.hdr = !!i6923[3]
  i6922.size = i6923[4]
  i6922.anisoLevel = i6923[5]
  i6922.filterMode = i6923[6]
  var i6925 = i6923[7]
  var i6924 = []
  for(var i = 0; i < i6925.length; i += 4) {
    i6924.push( UnityEngine.Rect.MinMaxRect(i6925[i + 0], i6925[i + 1], i6925[i + 2], i6925[i + 3]) );
  }
  i6922.rects = i6924
  i6922.wrapU = i6923[8]
  i6922.wrapV = i6923[9]
  return i6922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i6928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i6929 = data
  i6928.name = i6929[0]
  i6928.index = i6929[1]
  i6928.startup = !!i6929[2]
  return i6928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i6930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i6931 = data
  i6930.position = new pc.Vec3( i6931[0], i6931[1], i6931[2] )
  i6930.scale = new pc.Vec3( i6931[3], i6931[4], i6931[5] )
  i6930.rotation = new pc.Quat(i6931[6], i6931[7], i6931[8], i6931[9])
  return i6930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i6932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i6933 = data
  i6932.enabled = !!i6933[0]
  i6932.aspect = i6933[1]
  i6932.orthographic = !!i6933[2]
  i6932.orthographicSize = i6933[3]
  i6932.backgroundColor = new pc.Color(i6933[4], i6933[5], i6933[6], i6933[7])
  i6932.nearClipPlane = i6933[8]
  i6932.farClipPlane = i6933[9]
  i6932.fieldOfView = i6933[10]
  i6932.depth = i6933[11]
  i6932.clearFlags = i6933[12]
  i6932.cullingMask = i6933[13]
  i6932.rect = i6933[14]
  request.r(i6933[15], i6933[16], 0, i6932, 'targetTexture')
  i6932.usePhysicalProperties = !!i6933[17]
  i6932.focalLength = i6933[18]
  i6932.sensorSize = new pc.Vec2( i6933[19], i6933[20] )
  i6932.lensShift = new pc.Vec2( i6933[21], i6933[22] )
  i6932.gateFit = i6933[23]
  i6932.commandBufferCount = i6933[24]
  i6932.cameraType = i6933[25]
  return i6932
}

Deserializers["FOVCalculator"] = function (request, data, root) {
  var i6934 = root || request.c( 'FOVCalculator' )
  var i6935 = data
  return i6934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i6936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i6937 = data
  i6936.name = i6937[0]
  i6936.tagId = i6937[1]
  i6936.enabled = !!i6937[2]
  i6936.isStatic = !!i6937[3]
  i6936.layer = i6937[4]
  return i6936
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i6938 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i6939 = data
  request.r(i6939[0], i6939[1], 0, i6938, 'm_FirstSelected')
  i6938.m_sendNavigationEvents = !!i6939[2]
  i6938.m_DragThreshold = i6939[3]
  return i6938
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i6940 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i6941 = data
  i6940.m_HorizontalAxis = i6941[0]
  i6940.m_VerticalAxis = i6941[1]
  i6940.m_SubmitButton = i6941[2]
  i6940.m_CancelButton = i6941[3]
  i6940.m_InputActionsPerSecond = i6941[4]
  i6940.m_RepeatDelay = i6941[5]
  i6940.m_ForceModuleActive = !!i6941[6]
  i6940.m_SendPointerHoverToParent = !!i6941[7]
  return i6940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i6942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i6943 = data
  request.r(i6943[0], i6943[1], 0, i6942, 'sharedMesh')
  return i6942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i6944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i6945 = data
  request.r(i6945[0], i6945[1], 0, i6944, 'additionalVertexStreams')
  i6944.enabled = !!i6945[2]
  request.r(i6945[3], i6945[4], 0, i6944, 'sharedMaterial')
  var i6947 = i6945[5]
  var i6946 = []
  for(var i = 0; i < i6947.length; i += 2) {
  request.r(i6947[i + 0], i6947[i + 1], 2, i6946, '')
  }
  i6944.sharedMaterials = i6946
  i6944.receiveShadows = !!i6945[6]
  i6944.shadowCastingMode = i6945[7]
  i6944.sortingLayerID = i6945[8]
  i6944.sortingOrder = i6945[9]
  i6944.lightmapIndex = i6945[10]
  i6944.lightmapSceneIndex = i6945[11]
  i6944.lightmapScaleOffset = new pc.Vec4( i6945[12], i6945[13], i6945[14], i6945[15] )
  i6944.lightProbeUsage = i6945[16]
  i6944.reflectionProbeUsage = i6945[17]
  return i6944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i6950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i6951 = data
  i6950.enabled = !!i6951[0]
  i6950.isTrigger = !!i6951[1]
  request.r(i6951[2], i6951[3], 0, i6950, 'material')
  request.r(i6951[4], i6951[5], 0, i6950, 'sharedMesh')
  i6950.convex = !!i6951[6]
  return i6950
}

Deserializers["PainterGame"] = function (request, data, root) {
  var i6952 = root || request.c( 'PainterGame' )
  var i6953 = data
  request.r(i6953[0], i6953[1], 0, i6952, 'texturePaint')
  request.r(i6953[2], i6953[3], 0, i6952, 'brushSizeSlider')
  request.r(i6953[4], i6953[5], 0, i6952, 'yellowButton')
  request.r(i6953[6], i6953[7], 0, i6952, 'redButton')
  request.r(i6953[8], i6953[9], 0, i6952, 'blueButton')
  request.r(i6953[10], i6953[11], 0, i6952, 'canvas')
  request.r(i6953[12], i6953[13], 0, i6952, 'mainMaterial')
  request.r(i6953[14], i6953[15], 0, i6952, '_meshRenderer')
  request.r(i6953[16], i6953[17], 0, i6952, 'wallTransform')
  request.r(i6953[18], i6953[19], 0, i6952, '_audioSource')
  i6952.maxVolume = i6953[20]
  i6952.volumeFadeSpeed = i6953[21]
  var i6955 = i6953[22]
  var i6954 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i6955.length; i += 2) {
  request.r(i6955[i + 0], i6955[i + 1], 1, i6954, '')
  }
  i6952.maskSprites = i6954
  request.r(i6953[23], i6953[24], 0, i6952, 'maskRenderer')
  request.r(i6953[25], i6953[26], 0, i6952, 'completeGameUI')
  return i6952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i6958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i6959 = data
  request.r(i6959[0], i6959[1], 0, i6958, 'clip')
  request.r(i6959[2], i6959[3], 0, i6958, 'outputAudioMixerGroup')
  i6958.playOnAwake = !!i6959[4]
  i6958.loop = !!i6959[5]
  i6958.time = i6959[6]
  i6958.volume = i6959[7]
  i6958.pitch = i6959[8]
  i6958.enabled = !!i6959[9]
  return i6958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i6960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i6961 = data
  i6960.pivot = new pc.Vec2( i6961[0], i6961[1] )
  i6960.anchorMin = new pc.Vec2( i6961[2], i6961[3] )
  i6960.anchorMax = new pc.Vec2( i6961[4], i6961[5] )
  i6960.sizeDelta = new pc.Vec2( i6961[6], i6961[7] )
  i6960.anchoredPosition3D = new pc.Vec3( i6961[8], i6961[9], i6961[10] )
  i6960.rotation = new pc.Quat(i6961[11], i6961[12], i6961[13], i6961[14])
  i6960.scale = new pc.Vec3( i6961[15], i6961[16], i6961[17] )
  return i6960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i6962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i6963 = data
  i6962.enabled = !!i6963[0]
  i6962.planeDistance = i6963[1]
  i6962.referencePixelsPerUnit = i6963[2]
  i6962.isFallbackOverlay = !!i6963[3]
  i6962.renderMode = i6963[4]
  i6962.renderOrder = i6963[5]
  i6962.sortingLayerName = i6963[6]
  i6962.sortingOrder = i6963[7]
  i6962.scaleFactor = i6963[8]
  request.r(i6963[9], i6963[10], 0, i6962, 'worldCamera')
  i6962.overrideSorting = !!i6963[11]
  i6962.pixelPerfect = !!i6963[12]
  i6962.targetDisplay = i6963[13]
  i6962.overridePixelPerfect = !!i6963[14]
  return i6962
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i6964 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i6965 = data
  i6964.m_UiScaleMode = i6965[0]
  i6964.m_ReferencePixelsPerUnit = i6965[1]
  i6964.m_ScaleFactor = i6965[2]
  i6964.m_ReferenceResolution = new pc.Vec2( i6965[3], i6965[4] )
  i6964.m_ScreenMatchMode = i6965[5]
  i6964.m_MatchWidthOrHeight = i6965[6]
  i6964.m_PhysicalUnit = i6965[7]
  i6964.m_FallbackScreenDPI = i6965[8]
  i6964.m_DefaultSpriteDPI = i6965[9]
  i6964.m_DynamicPixelsPerUnit = i6965[10]
  i6964.m_PresetInfoIsWorld = !!i6965[11]
  return i6964
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i6966 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i6967 = data
  i6966.m_IgnoreReversedGraphics = !!i6967[0]
  i6966.m_BlockingObjects = i6967[1]
  i6966.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i6967[2] )
  return i6966
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i6968 = root || request.c( 'UnityEngine.UI.Slider' )
  var i6969 = data
  request.r(i6969[0], i6969[1], 0, i6968, 'm_FillRect')
  request.r(i6969[2], i6969[3], 0, i6968, 'm_HandleRect')
  i6968.m_Direction = i6969[4]
  i6968.m_MinValue = i6969[5]
  i6968.m_MaxValue = i6969[6]
  i6968.m_WholeNumbers = !!i6969[7]
  i6968.m_Value = i6969[8]
  i6968.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i6969[9], i6968.m_OnValueChanged)
  i6968.m_Navigation = request.d('UnityEngine.UI.Navigation', i6969[10], i6968.m_Navigation)
  i6968.m_Transition = i6969[11]
  i6968.m_Colors = request.d('UnityEngine.UI.ColorBlock', i6969[12], i6968.m_Colors)
  i6968.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i6969[13], i6968.m_SpriteState)
  i6968.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i6969[14], i6968.m_AnimationTriggers)
  i6968.m_Interactable = !!i6969[15]
  request.r(i6969[16], i6969[17], 0, i6968, 'm_TargetGraphic')
  return i6968
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i6970 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i6971 = data
  i6970.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i6971[0], i6970.m_PersistentCalls)
  return i6970
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i6972 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i6973 = data
  var i6975 = i6973[0]
  var i6974 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i6975.length; i += 1) {
    i6974.add(request.d('UnityEngine.Events.PersistentCall', i6975[i + 0]));
  }
  i6972.m_Calls = i6974
  return i6972
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i6978 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i6979 = data
  request.r(i6979[0], i6979[1], 0, i6978, 'm_Target')
  i6978.m_TargetAssemblyTypeName = i6979[2]
  i6978.m_MethodName = i6979[3]
  i6978.m_Mode = i6979[4]
  i6978.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i6979[5], i6978.m_Arguments)
  i6978.m_CallState = i6979[6]
  return i6978
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i6980 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i6981 = data
  i6980.m_Mode = i6981[0]
  i6980.m_WrapAround = !!i6981[1]
  request.r(i6981[2], i6981[3], 0, i6980, 'm_SelectOnUp')
  request.r(i6981[4], i6981[5], 0, i6980, 'm_SelectOnDown')
  request.r(i6981[6], i6981[7], 0, i6980, 'm_SelectOnLeft')
  request.r(i6981[8], i6981[9], 0, i6980, 'm_SelectOnRight')
  return i6980
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i6982 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i6983 = data
  i6982.m_NormalColor = new pc.Color(i6983[0], i6983[1], i6983[2], i6983[3])
  i6982.m_HighlightedColor = new pc.Color(i6983[4], i6983[5], i6983[6], i6983[7])
  i6982.m_PressedColor = new pc.Color(i6983[8], i6983[9], i6983[10], i6983[11])
  i6982.m_SelectedColor = new pc.Color(i6983[12], i6983[13], i6983[14], i6983[15])
  i6982.m_DisabledColor = new pc.Color(i6983[16], i6983[17], i6983[18], i6983[19])
  i6982.m_ColorMultiplier = i6983[20]
  i6982.m_FadeDuration = i6983[21]
  return i6982
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i6984 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i6985 = data
  request.r(i6985[0], i6985[1], 0, i6984, 'm_HighlightedSprite')
  request.r(i6985[2], i6985[3], 0, i6984, 'm_PressedSprite')
  request.r(i6985[4], i6985[5], 0, i6984, 'm_SelectedSprite')
  request.r(i6985[6], i6985[7], 0, i6984, 'm_DisabledSprite')
  return i6984
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i6986 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i6987 = data
  i6986.m_NormalTrigger = i6987[0]
  i6986.m_HighlightedTrigger = i6987[1]
  i6986.m_PressedTrigger = i6987[2]
  i6986.m_SelectedTrigger = i6987[3]
  i6986.m_DisabledTrigger = i6987[4]
  return i6986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i6988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i6989 = data
  i6988.cullTransparentMesh = !!i6989[0]
  return i6988
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i6990 = root || request.c( 'UnityEngine.UI.Image' )
  var i6991 = data
  request.r(i6991[0], i6991[1], 0, i6990, 'm_Sprite')
  i6990.m_Type = i6991[2]
  i6990.m_PreserveAspect = !!i6991[3]
  i6990.m_FillCenter = !!i6991[4]
  i6990.m_FillMethod = i6991[5]
  i6990.m_FillAmount = i6991[6]
  i6990.m_FillClockwise = !!i6991[7]
  i6990.m_FillOrigin = i6991[8]
  i6990.m_UseSpriteMesh = !!i6991[9]
  i6990.m_PixelsPerUnitMultiplier = i6991[10]
  request.r(i6991[11], i6991[12], 0, i6990, 'm_Material')
  i6990.m_Maskable = !!i6991[13]
  i6990.m_Color = new pc.Color(i6991[14], i6991[15], i6991[16], i6991[17])
  i6990.m_RaycastTarget = !!i6991[18]
  i6990.m_RaycastPadding = new pc.Vec4( i6991[19], i6991[20], i6991[21], i6991[22] )
  return i6990
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i6992 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i6993 = data
  i6992.m_Spacing = i6993[0]
  i6992.m_ChildForceExpandWidth = !!i6993[1]
  i6992.m_ChildForceExpandHeight = !!i6993[2]
  i6992.m_ChildControlWidth = !!i6993[3]
  i6992.m_ChildControlHeight = !!i6993[4]
  i6992.m_ChildScaleWidth = !!i6993[5]
  i6992.m_ChildScaleHeight = !!i6993[6]
  i6992.m_ReverseArrangement = !!i6993[7]
  i6992.m_Padding = UnityEngine.RectOffset.FromPaddings(i6993[8], i6993[9], i6993[10], i6993[11])
  i6992.m_ChildAlignment = i6993[12]
  return i6992
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i6994 = root || request.c( 'UnityEngine.UI.Button' )
  var i6995 = data
  i6994.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i6995[0], i6994.m_OnClick)
  i6994.m_Navigation = request.d('UnityEngine.UI.Navigation', i6995[1], i6994.m_Navigation)
  i6994.m_Transition = i6995[2]
  i6994.m_Colors = request.d('UnityEngine.UI.ColorBlock', i6995[3], i6994.m_Colors)
  i6994.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i6995[4], i6994.m_SpriteState)
  i6994.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i6995[5], i6994.m_AnimationTriggers)
  i6994.m_Interactable = !!i6995[6]
  request.r(i6995[7], i6995[8], 0, i6994, 'm_TargetGraphic')
  return i6994
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i6996 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i6997 = data
  i6996.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i6997[0], i6996.m_PersistentCalls)
  return i6996
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i6998 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i6999 = data
  request.r(i6999[0], i6999[1], 0, i6998, 'm_ObjectArgument')
  i6998.m_ObjectArgumentAssemblyTypeName = i6999[2]
  i6998.m_IntArgument = i6999[3]
  i6998.m_FloatArgument = i6999[4]
  i6998.m_StringArgument = i6999[5]
  i6998.m_BoolArgument = !!i6999[6]
  return i6998
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i7000 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i7001 = data
  i7000.m_hasFontAssetChanged = !!i7001[0]
  request.r(i7001[1], i7001[2], 0, i7000, 'm_baseMaterial')
  i7000.m_maskOffset = new pc.Vec4( i7001[3], i7001[4], i7001[5], i7001[6] )
  i7000.m_text = i7001[7]
  i7000.m_isRightToLeft = !!i7001[8]
  request.r(i7001[9], i7001[10], 0, i7000, 'm_fontAsset')
  request.r(i7001[11], i7001[12], 0, i7000, 'm_sharedMaterial')
  var i7003 = i7001[13]
  var i7002 = []
  for(var i = 0; i < i7003.length; i += 2) {
  request.r(i7003[i + 0], i7003[i + 1], 2, i7002, '')
  }
  i7000.m_fontSharedMaterials = i7002
  request.r(i7001[14], i7001[15], 0, i7000, 'm_fontMaterial')
  var i7005 = i7001[16]
  var i7004 = []
  for(var i = 0; i < i7005.length; i += 2) {
  request.r(i7005[i + 0], i7005[i + 1], 2, i7004, '')
  }
  i7000.m_fontMaterials = i7004
  i7000.m_fontColor32 = UnityEngine.Color32.ConstructColor(i7001[17], i7001[18], i7001[19], i7001[20])
  i7000.m_fontColor = new pc.Color(i7001[21], i7001[22], i7001[23], i7001[24])
  i7000.m_enableVertexGradient = !!i7001[25]
  i7000.m_colorMode = i7001[26]
  i7000.m_fontColorGradient = request.d('TMPro.VertexGradient', i7001[27], i7000.m_fontColorGradient)
  request.r(i7001[28], i7001[29], 0, i7000, 'm_fontColorGradientPreset')
  request.r(i7001[30], i7001[31], 0, i7000, 'm_spriteAsset')
  i7000.m_tintAllSprites = !!i7001[32]
  request.r(i7001[33], i7001[34], 0, i7000, 'm_StyleSheet')
  i7000.m_TextStyleHashCode = i7001[35]
  i7000.m_overrideHtmlColors = !!i7001[36]
  i7000.m_faceColor = UnityEngine.Color32.ConstructColor(i7001[37], i7001[38], i7001[39], i7001[40])
  i7000.m_fontSize = i7001[41]
  i7000.m_fontSizeBase = i7001[42]
  i7000.m_fontWeight = i7001[43]
  i7000.m_enableAutoSizing = !!i7001[44]
  i7000.m_fontSizeMin = i7001[45]
  i7000.m_fontSizeMax = i7001[46]
  i7000.m_fontStyle = i7001[47]
  i7000.m_HorizontalAlignment = i7001[48]
  i7000.m_VerticalAlignment = i7001[49]
  i7000.m_textAlignment = i7001[50]
  i7000.m_characterSpacing = i7001[51]
  i7000.m_wordSpacing = i7001[52]
  i7000.m_lineSpacing = i7001[53]
  i7000.m_lineSpacingMax = i7001[54]
  i7000.m_paragraphSpacing = i7001[55]
  i7000.m_charWidthMaxAdj = i7001[56]
  i7000.m_enableWordWrapping = !!i7001[57]
  i7000.m_wordWrappingRatios = i7001[58]
  i7000.m_overflowMode = i7001[59]
  request.r(i7001[60], i7001[61], 0, i7000, 'm_linkedTextComponent')
  request.r(i7001[62], i7001[63], 0, i7000, 'parentLinkedComponent')
  i7000.m_enableKerning = !!i7001[64]
  i7000.m_enableExtraPadding = !!i7001[65]
  i7000.checkPaddingRequired = !!i7001[66]
  i7000.m_isRichText = !!i7001[67]
  i7000.m_parseCtrlCharacters = !!i7001[68]
  i7000.m_isOrthographic = !!i7001[69]
  i7000.m_isCullingEnabled = !!i7001[70]
  i7000.m_horizontalMapping = i7001[71]
  i7000.m_verticalMapping = i7001[72]
  i7000.m_uvLineOffset = i7001[73]
  i7000.m_geometrySortingOrder = i7001[74]
  i7000.m_IsTextObjectScaleStatic = !!i7001[75]
  i7000.m_VertexBufferAutoSizeReduction = !!i7001[76]
  i7000.m_useMaxVisibleDescender = !!i7001[77]
  i7000.m_pageToDisplay = i7001[78]
  i7000.m_margin = new pc.Vec4( i7001[79], i7001[80], i7001[81], i7001[82] )
  i7000.m_isUsingLegacyAnimationComponent = !!i7001[83]
  i7000.m_isVolumetricText = !!i7001[84]
  request.r(i7001[85], i7001[86], 0, i7000, 'm_Material')
  i7000.m_Maskable = !!i7001[87]
  i7000.m_Color = new pc.Color(i7001[88], i7001[89], i7001[90], i7001[91])
  i7000.m_RaycastTarget = !!i7001[92]
  i7000.m_RaycastPadding = new pc.Vec4( i7001[93], i7001[94], i7001[95], i7001[96] )
  return i7000
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i7006 = root || request.c( 'TMPro.VertexGradient' )
  var i7007 = data
  i7006.topLeft = new pc.Color(i7007[0], i7007[1], i7007[2], i7007[3])
  i7006.topRight = new pc.Color(i7007[4], i7007[5], i7007[6], i7007[7])
  i7006.bottomLeft = new pc.Color(i7007[8], i7007[9], i7007[10], i7007[11])
  i7006.bottomRight = new pc.Color(i7007[12], i7007[13], i7007[14], i7007[15])
  return i7006
}

Deserializers["EscToMainMenu"] = function (request, data, root) {
  var i7008 = root || request.c( 'EscToMainMenu' )
  var i7009 = data
  return i7008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i7010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i7011 = data
  i7010.ambientIntensity = i7011[0]
  i7010.reflectionIntensity = i7011[1]
  i7010.ambientMode = i7011[2]
  i7010.ambientLight = new pc.Color(i7011[3], i7011[4], i7011[5], i7011[6])
  i7010.ambientSkyColor = new pc.Color(i7011[7], i7011[8], i7011[9], i7011[10])
  i7010.ambientGroundColor = new pc.Color(i7011[11], i7011[12], i7011[13], i7011[14])
  i7010.ambientEquatorColor = new pc.Color(i7011[15], i7011[16], i7011[17], i7011[18])
  i7010.fogColor = new pc.Color(i7011[19], i7011[20], i7011[21], i7011[22])
  i7010.fogEndDistance = i7011[23]
  i7010.fogStartDistance = i7011[24]
  i7010.fogDensity = i7011[25]
  i7010.fog = !!i7011[26]
  request.r(i7011[27], i7011[28], 0, i7010, 'skybox')
  i7010.fogMode = i7011[29]
  var i7013 = i7011[30]
  var i7012 = []
  for(var i = 0; i < i7013.length; i += 1) {
    i7012.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i7013[i + 0]) );
  }
  i7010.lightmaps = i7012
  i7010.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i7011[31], i7010.lightProbes)
  i7010.lightmapsMode = i7011[32]
  i7010.mixedBakeMode = i7011[33]
  i7010.environmentLightingMode = i7011[34]
  i7010.ambientProbe = new pc.SphericalHarmonicsL2(i7011[35])
  i7010.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i7011[36])
  i7010.useReferenceAmbientProbe = !!i7011[37]
  request.r(i7011[38], i7011[39], 0, i7010, 'customReflection')
  request.r(i7011[40], i7011[41], 0, i7010, 'defaultReflection')
  i7010.defaultReflectionMode = i7011[42]
  i7010.defaultReflectionResolution = i7011[43]
  i7010.sunLightObjectId = i7011[44]
  i7010.pixelLightCount = i7011[45]
  i7010.defaultReflectionHDR = !!i7011[46]
  i7010.hasLightDataAsset = !!i7011[47]
  i7010.hasManualGenerate = !!i7011[48]
  return i7010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i7016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i7017 = data
  request.r(i7017[0], i7017[1], 0, i7016, 'lightmapColor')
  request.r(i7017[2], i7017[3], 0, i7016, 'lightmapDirection')
  return i7016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i7018 = root || new UnityEngine.LightProbes()
  var i7019 = data
  return i7018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i7026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i7027 = data
  var i7029 = i7027[0]
  var i7028 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i7029.length; i += 1) {
    i7028.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i7029[i + 0]));
  }
  i7026.ShaderCompilationErrors = i7028
  i7026.name = i7027[1]
  i7026.guid = i7027[2]
  var i7031 = i7027[3]
  var i7030 = []
  for(var i = 0; i < i7031.length; i += 1) {
    i7030.push( i7031[i + 0] );
  }
  i7026.shaderDefinedKeywords = i7030
  var i7033 = i7027[4]
  var i7032 = []
  for(var i = 0; i < i7033.length; i += 1) {
    i7032.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i7033[i + 0]) );
  }
  i7026.passes = i7032
  var i7035 = i7027[5]
  var i7034 = []
  for(var i = 0; i < i7035.length; i += 1) {
    i7034.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i7035[i + 0]) );
  }
  i7026.usePasses = i7034
  var i7037 = i7027[6]
  var i7036 = []
  for(var i = 0; i < i7037.length; i += 1) {
    i7036.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i7037[i + 0]) );
  }
  i7026.defaultParameterValues = i7036
  request.r(i7027[7], i7027[8], 0, i7026, 'unityFallbackShader')
  i7026.readDepth = !!i7027[9]
  i7026.isCreatedByShaderGraph = !!i7027[10]
  i7026.compiled = !!i7027[11]
  return i7026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i7040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i7041 = data
  i7040.shaderName = i7041[0]
  i7040.errorMessage = i7041[1]
  return i7040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i7046 = root || new pc.UnityShaderPass()
  var i7047 = data
  i7046.id = i7047[0]
  i7046.subShaderIndex = i7047[1]
  i7046.name = i7047[2]
  i7046.passType = i7047[3]
  i7046.grabPassTextureName = i7047[4]
  i7046.usePass = !!i7047[5]
  i7046.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7047[6], i7046.zTest)
  i7046.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7047[7], i7046.zWrite)
  i7046.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7047[8], i7046.culling)
  i7046.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i7047[9], i7046.blending)
  i7046.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i7047[10], i7046.alphaBlending)
  i7046.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7047[11], i7046.colorWriteMask)
  i7046.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7047[12], i7046.offsetUnits)
  i7046.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7047[13], i7046.offsetFactor)
  i7046.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7047[14], i7046.stencilRef)
  i7046.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7047[15], i7046.stencilReadMask)
  i7046.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7047[16], i7046.stencilWriteMask)
  i7046.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i7047[17], i7046.stencilOp)
  i7046.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i7047[18], i7046.stencilOpFront)
  i7046.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i7047[19], i7046.stencilOpBack)
  var i7049 = i7047[20]
  var i7048 = []
  for(var i = 0; i < i7049.length; i += 1) {
    i7048.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i7049[i + 0]) );
  }
  i7046.tags = i7048
  var i7051 = i7047[21]
  var i7050 = []
  for(var i = 0; i < i7051.length; i += 1) {
    i7050.push( i7051[i + 0] );
  }
  i7046.passDefinedKeywords = i7050
  var i7053 = i7047[22]
  var i7052 = []
  for(var i = 0; i < i7053.length; i += 1) {
    i7052.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i7053[i + 0]) );
  }
  i7046.passDefinedKeywordGroups = i7052
  var i7055 = i7047[23]
  var i7054 = []
  for(var i = 0; i < i7055.length; i += 1) {
    i7054.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i7055[i + 0]) );
  }
  i7046.variants = i7054
  var i7057 = i7047[24]
  var i7056 = []
  for(var i = 0; i < i7057.length; i += 1) {
    i7056.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i7057[i + 0]) );
  }
  i7046.excludedVariants = i7056
  i7046.hasDepthReader = !!i7047[25]
  return i7046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i7058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i7059 = data
  i7058.val = i7059[0]
  i7058.name = i7059[1]
  return i7058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i7060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i7061 = data
  i7060.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7061[0], i7060.src)
  i7060.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7061[1], i7060.dst)
  i7060.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7061[2], i7060.op)
  return i7060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i7062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i7063 = data
  i7062.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7063[0], i7062.pass)
  i7062.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7063[1], i7062.fail)
  i7062.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7063[2], i7062.zFail)
  i7062.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7063[3], i7062.comp)
  return i7062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i7066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i7067 = data
  i7066.name = i7067[0]
  i7066.value = i7067[1]
  return i7066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i7070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i7071 = data
  var i7073 = i7071[0]
  var i7072 = []
  for(var i = 0; i < i7073.length; i += 1) {
    i7072.push( i7073[i + 0] );
  }
  i7070.keywords = i7072
  i7070.hasDiscard = !!i7071[1]
  return i7070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i7076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i7077 = data
  i7076.passId = i7077[0]
  i7076.subShaderIndex = i7077[1]
  var i7079 = i7077[2]
  var i7078 = []
  for(var i = 0; i < i7079.length; i += 1) {
    i7078.push( i7079[i + 0] );
  }
  i7076.keywords = i7078
  i7076.vertexProgram = i7077[3]
  i7076.fragmentProgram = i7077[4]
  i7076.exportedForWebGl2 = !!i7077[5]
  i7076.readDepth = !!i7077[6]
  return i7076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i7082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i7083 = data
  request.r(i7083[0], i7083[1], 0, i7082, 'shader')
  i7082.pass = i7083[2]
  return i7082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i7086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i7087 = data
  i7086.name = i7087[0]
  i7086.type = i7087[1]
  i7086.value = new pc.Vec4( i7087[2], i7087[3], i7087[4], i7087[5] )
  i7086.textureValue = i7087[6]
  i7086.shaderPropertyFlag = i7087[7]
  return i7086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i7088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i7089 = data
  i7088.name = i7089[0]
  request.r(i7089[1], i7089[2], 0, i7088, 'texture')
  i7088.aabb = i7089[3]
  i7088.vertices = i7089[4]
  i7088.triangles = i7089[5]
  i7088.textureRect = UnityEngine.Rect.MinMaxRect(i7089[6], i7089[7], i7089[8], i7089[9])
  i7088.packedRect = UnityEngine.Rect.MinMaxRect(i7089[10], i7089[11], i7089[12], i7089[13])
  i7088.border = new pc.Vec4( i7089[14], i7089[15], i7089[16], i7089[17] )
  i7088.transparency = i7089[18]
  i7088.bounds = i7089[19]
  i7088.pixelsPerUnit = i7089[20]
  i7088.textureWidth = i7089[21]
  i7088.textureHeight = i7089[22]
  i7088.nativeSize = new pc.Vec2( i7089[23], i7089[24] )
  i7088.pivot = new pc.Vec2( i7089[25], i7089[26] )
  i7088.textureRectOffset = new pc.Vec2( i7089[27], i7089[28] )
  return i7088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i7090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i7091 = data
  i7090.name = i7091[0]
  return i7090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i7092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i7093 = data
  i7092.name = i7093[0]
  i7092.ascent = i7093[1]
  i7092.originalLineHeight = i7093[2]
  i7092.fontSize = i7093[3]
  var i7095 = i7093[4]
  var i7094 = []
  for(var i = 0; i < i7095.length; i += 1) {
    i7094.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i7095[i + 0]) );
  }
  i7092.characterInfo = i7094
  request.r(i7093[5], i7093[6], 0, i7092, 'texture')
  i7092.originalFontSize = i7093[7]
  return i7092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i7098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i7099 = data
  i7098.index = i7099[0]
  i7098.advance = i7099[1]
  i7098.bearing = i7099[2]
  i7098.glyphWidth = i7099[3]
  i7098.glyphHeight = i7099[4]
  i7098.minX = i7099[5]
  i7098.maxX = i7099[6]
  i7098.minY = i7099[7]
  i7098.maxY = i7099[8]
  i7098.uvBottomLeftX = i7099[9]
  i7098.uvBottomLeftY = i7099[10]
  i7098.uvBottomRightX = i7099[11]
  i7098.uvBottomRightY = i7099[12]
  i7098.uvTopLeftX = i7099[13]
  i7098.uvTopLeftY = i7099[14]
  i7098.uvTopRightX = i7099[15]
  i7098.uvTopRightY = i7099[16]
  return i7098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i7100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i7101 = data
  i7100.name = i7101[0]
  i7100.bytes64 = i7101[1]
  i7100.data = i7101[2]
  return i7100
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i7102 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i7103 = data
  i7102.hashCode = i7103[0]
  request.r(i7103[1], i7103[2], 0, i7102, 'material')
  i7102.materialHashCode = i7103[3]
  request.r(i7103[4], i7103[5], 0, i7102, 'atlas')
  i7102.normalStyle = i7103[6]
  i7102.normalSpacingOffset = i7103[7]
  i7102.boldStyle = i7103[8]
  i7102.boldSpacing = i7103[9]
  i7102.italicStyle = i7103[10]
  i7102.tabSize = i7103[11]
  i7102.m_Version = i7103[12]
  i7102.m_SourceFontFileGUID = i7103[13]
  request.r(i7103[14], i7103[15], 0, i7102, 'm_SourceFontFile_EditorRef')
  request.r(i7103[16], i7103[17], 0, i7102, 'm_SourceFontFile')
  i7102.m_AtlasPopulationMode = i7103[18]
  i7102.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i7103[19], i7102.m_FaceInfo)
  var i7105 = i7103[20]
  var i7104 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i7105.length; i += 1) {
    i7104.add(request.d('UnityEngine.TextCore.Glyph', i7105[i + 0]));
  }
  i7102.m_GlyphTable = i7104
  var i7107 = i7103[21]
  var i7106 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i7107.length; i += 1) {
    i7106.add(request.d('TMPro.TMP_Character', i7107[i + 0]));
  }
  i7102.m_CharacterTable = i7106
  var i7109 = i7103[22]
  var i7108 = []
  for(var i = 0; i < i7109.length; i += 2) {
  request.r(i7109[i + 0], i7109[i + 1], 2, i7108, '')
  }
  i7102.m_AtlasTextures = i7108
  i7102.m_AtlasTextureIndex = i7103[23]
  i7102.m_IsMultiAtlasTexturesEnabled = !!i7103[24]
  i7102.m_ClearDynamicDataOnBuild = !!i7103[25]
  var i7111 = i7103[26]
  var i7110 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i7111.length; i += 1) {
    i7110.add(request.d('UnityEngine.TextCore.GlyphRect', i7111[i + 0]));
  }
  i7102.m_UsedGlyphRects = i7110
  var i7113 = i7103[27]
  var i7112 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i7113.length; i += 1) {
    i7112.add(request.d('UnityEngine.TextCore.GlyphRect', i7113[i + 0]));
  }
  i7102.m_FreeGlyphRects = i7112
  i7102.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i7103[28], i7102.m_fontInfo)
  i7102.m_AtlasWidth = i7103[29]
  i7102.m_AtlasHeight = i7103[30]
  i7102.m_AtlasPadding = i7103[31]
  i7102.m_AtlasRenderMode = i7103[32]
  var i7115 = i7103[33]
  var i7114 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i7115.length; i += 1) {
    i7114.add(request.d('TMPro.TMP_Glyph', i7115[i + 0]));
  }
  i7102.m_glyphInfoList = i7114
  i7102.m_KerningTable = request.d('TMPro.KerningTable', i7103[34], i7102.m_KerningTable)
  i7102.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i7103[35], i7102.m_FontFeatureTable)
  var i7117 = i7103[36]
  var i7116 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i7117.length; i += 2) {
  request.r(i7117[i + 0], i7117[i + 1], 1, i7116, '')
  }
  i7102.fallbackFontAssets = i7116
  var i7119 = i7103[37]
  var i7118 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i7119.length; i += 2) {
  request.r(i7119[i + 0], i7119[i + 1], 1, i7118, '')
  }
  i7102.m_FallbackFontAssetTable = i7118
  i7102.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i7103[38], i7102.m_CreationSettings)
  var i7121 = i7103[39]
  var i7120 = []
  for(var i = 0; i < i7121.length; i += 1) {
    i7120.push( request.d('TMPro.TMP_FontWeightPair', i7121[i + 0]) );
  }
  i7102.m_FontWeightTable = i7120
  var i7123 = i7103[40]
  var i7122 = []
  for(var i = 0; i < i7123.length; i += 1) {
    i7122.push( request.d('TMPro.TMP_FontWeightPair', i7123[i + 0]) );
  }
  i7102.fontWeights = i7122
  return i7102
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i7124 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i7125 = data
  i7124.m_FaceIndex = i7125[0]
  i7124.m_FamilyName = i7125[1]
  i7124.m_StyleName = i7125[2]
  i7124.m_PointSize = i7125[3]
  i7124.m_Scale = i7125[4]
  i7124.m_UnitsPerEM = i7125[5]
  i7124.m_LineHeight = i7125[6]
  i7124.m_AscentLine = i7125[7]
  i7124.m_CapLine = i7125[8]
  i7124.m_MeanLine = i7125[9]
  i7124.m_Baseline = i7125[10]
  i7124.m_DescentLine = i7125[11]
  i7124.m_SuperscriptOffset = i7125[12]
  i7124.m_SuperscriptSize = i7125[13]
  i7124.m_SubscriptOffset = i7125[14]
  i7124.m_SubscriptSize = i7125[15]
  i7124.m_UnderlineOffset = i7125[16]
  i7124.m_UnderlineThickness = i7125[17]
  i7124.m_StrikethroughOffset = i7125[18]
  i7124.m_StrikethroughThickness = i7125[19]
  i7124.m_TabWidth = i7125[20]
  return i7124
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i7128 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i7129 = data
  i7128.m_Index = i7129[0]
  i7128.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i7129[1], i7128.m_Metrics)
  i7128.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i7129[2], i7128.m_GlyphRect)
  i7128.m_Scale = i7129[3]
  i7128.m_AtlasIndex = i7129[4]
  i7128.m_ClassDefinitionType = i7129[5]
  return i7128
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i7130 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i7131 = data
  i7130.m_Width = i7131[0]
  i7130.m_Height = i7131[1]
  i7130.m_HorizontalBearingX = i7131[2]
  i7130.m_HorizontalBearingY = i7131[3]
  i7130.m_HorizontalAdvance = i7131[4]
  return i7130
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i7132 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i7133 = data
  i7132.m_X = i7133[0]
  i7132.m_Y = i7133[1]
  i7132.m_Width = i7133[2]
  i7132.m_Height = i7133[3]
  return i7132
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i7136 = root || request.c( 'TMPro.TMP_Character' )
  var i7137 = data
  i7136.m_ElementType = i7137[0]
  i7136.m_Unicode = i7137[1]
  i7136.m_GlyphIndex = i7137[2]
  i7136.m_Scale = i7137[3]
  return i7136
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i7142 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i7143 = data
  i7142.Name = i7143[0]
  i7142.PointSize = i7143[1]
  i7142.Scale = i7143[2]
  i7142.CharacterCount = i7143[3]
  i7142.LineHeight = i7143[4]
  i7142.Baseline = i7143[5]
  i7142.Ascender = i7143[6]
  i7142.CapHeight = i7143[7]
  i7142.Descender = i7143[8]
  i7142.CenterLine = i7143[9]
  i7142.SuperscriptOffset = i7143[10]
  i7142.SubscriptOffset = i7143[11]
  i7142.SubSize = i7143[12]
  i7142.Underline = i7143[13]
  i7142.UnderlineThickness = i7143[14]
  i7142.strikethrough = i7143[15]
  i7142.strikethroughThickness = i7143[16]
  i7142.TabWidth = i7143[17]
  i7142.Padding = i7143[18]
  i7142.AtlasWidth = i7143[19]
  i7142.AtlasHeight = i7143[20]
  return i7142
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i7146 = root || request.c( 'TMPro.TMP_Glyph' )
  var i7147 = data
  i7146.id = i7147[0]
  i7146.x = i7147[1]
  i7146.y = i7147[2]
  i7146.width = i7147[3]
  i7146.height = i7147[4]
  i7146.xOffset = i7147[5]
  i7146.yOffset = i7147[6]
  i7146.xAdvance = i7147[7]
  i7146.scale = i7147[8]
  return i7146
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i7148 = root || request.c( 'TMPro.KerningTable' )
  var i7149 = data
  var i7151 = i7149[0]
  var i7150 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i7151.length; i += 1) {
    i7150.add(request.d('TMPro.KerningPair', i7151[i + 0]));
  }
  i7148.kerningPairs = i7150
  return i7148
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i7154 = root || request.c( 'TMPro.KerningPair' )
  var i7155 = data
  i7154.xOffset = i7155[0]
  i7154.m_FirstGlyph = i7155[1]
  i7154.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i7155[2], i7154.m_FirstGlyphAdjustments)
  i7154.m_SecondGlyph = i7155[3]
  i7154.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i7155[4], i7154.m_SecondGlyphAdjustments)
  i7154.m_IgnoreSpacingAdjustments = !!i7155[5]
  return i7154
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i7156 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i7157 = data
  var i7159 = i7157[0]
  var i7158 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i7159.length; i += 1) {
    i7158.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i7159[i + 0]));
  }
  i7156.m_GlyphPairAdjustmentRecords = i7158
  return i7156
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i7162 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i7163 = data
  i7162.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i7163[0], i7162.m_FirstAdjustmentRecord)
  i7162.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i7163[1], i7162.m_SecondAdjustmentRecord)
  i7162.m_FeatureLookupFlags = i7163[2]
  return i7162
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i7164 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i7165 = data
  i7164.m_GlyphIndex = i7165[0]
  i7164.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i7165[1], i7164.m_GlyphValueRecord)
  return i7164
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i7166 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i7167 = data
  i7166.m_XPlacement = i7167[0]
  i7166.m_YPlacement = i7167[1]
  i7166.m_XAdvance = i7167[2]
  i7166.m_YAdvance = i7167[3]
  return i7166
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i7170 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i7171 = data
  i7170.sourceFontFileName = i7171[0]
  i7170.sourceFontFileGUID = i7171[1]
  i7170.pointSizeSamplingMode = i7171[2]
  i7170.pointSize = i7171[3]
  i7170.padding = i7171[4]
  i7170.packingMode = i7171[5]
  i7170.atlasWidth = i7171[6]
  i7170.atlasHeight = i7171[7]
  i7170.characterSetSelectionMode = i7171[8]
  i7170.characterSequence = i7171[9]
  i7170.referencedFontAssetGUID = i7171[10]
  i7170.referencedTextAssetGUID = i7171[11]
  i7170.fontStyle = i7171[12]
  i7170.fontStyleModifier = i7171[13]
  i7170.renderMode = i7171[14]
  i7170.includeFontFeatures = !!i7171[15]
  return i7170
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i7174 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i7175 = data
  request.r(i7175[0], i7175[1], 0, i7174, 'regularTypeface')
  request.r(i7175[2], i7175[3], 0, i7174, 'italicTypeface')
  return i7174
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i7176 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i7177 = data
  i7176.useSafeMode = !!i7177[0]
  i7176.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i7177[1], i7176.safeModeOptions)
  i7176.timeScale = i7177[2]
  i7176.unscaledTimeScale = i7177[3]
  i7176.useSmoothDeltaTime = !!i7177[4]
  i7176.maxSmoothUnscaledTime = i7177[5]
  i7176.rewindCallbackMode = i7177[6]
  i7176.showUnityEditorReport = !!i7177[7]
  i7176.logBehaviour = i7177[8]
  i7176.drawGizmos = !!i7177[9]
  i7176.defaultRecyclable = !!i7177[10]
  i7176.defaultAutoPlay = i7177[11]
  i7176.defaultUpdateType = i7177[12]
  i7176.defaultTimeScaleIndependent = !!i7177[13]
  i7176.defaultEaseType = i7177[14]
  i7176.defaultEaseOvershootOrAmplitude = i7177[15]
  i7176.defaultEasePeriod = i7177[16]
  i7176.defaultAutoKill = !!i7177[17]
  i7176.defaultLoopType = i7177[18]
  i7176.debugMode = !!i7177[19]
  i7176.debugStoreTargetId = !!i7177[20]
  i7176.showPreviewPanel = !!i7177[21]
  i7176.storeSettingsLocation = i7177[22]
  i7176.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i7177[23], i7176.modules)
  i7176.createASMDEF = !!i7177[24]
  i7176.showPlayingTweens = !!i7177[25]
  i7176.showPausedTweens = !!i7177[26]
  return i7176
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i7178 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i7179 = data
  i7178.logBehaviour = i7179[0]
  i7178.nestedTweenFailureBehaviour = i7179[1]
  return i7178
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i7180 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i7181 = data
  i7180.showPanel = !!i7181[0]
  i7180.audioEnabled = !!i7181[1]
  i7180.physicsEnabled = !!i7181[2]
  i7180.physics2DEnabled = !!i7181[3]
  i7180.spriteEnabled = !!i7181[4]
  i7180.uiEnabled = !!i7181[5]
  i7180.textMeshProEnabled = !!i7181[6]
  i7180.tk2DEnabled = !!i7181[7]
  i7180.deAudioEnabled = !!i7181[8]
  i7180.deUnityExtendedEnabled = !!i7181[9]
  i7180.epoOutlineEnabled = !!i7181[10]
  return i7180
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i7182 = root || request.c( 'TMPro.TMP_Settings' )
  var i7183 = data
  i7182.m_enableWordWrapping = !!i7183[0]
  i7182.m_enableKerning = !!i7183[1]
  i7182.m_enableExtraPadding = !!i7183[2]
  i7182.m_enableTintAllSprites = !!i7183[3]
  i7182.m_enableParseEscapeCharacters = !!i7183[4]
  i7182.m_EnableRaycastTarget = !!i7183[5]
  i7182.m_GetFontFeaturesAtRuntime = !!i7183[6]
  i7182.m_missingGlyphCharacter = i7183[7]
  i7182.m_warningsDisabled = !!i7183[8]
  request.r(i7183[9], i7183[10], 0, i7182, 'm_defaultFontAsset')
  i7182.m_defaultFontAssetPath = i7183[11]
  i7182.m_defaultFontSize = i7183[12]
  i7182.m_defaultAutoSizeMinRatio = i7183[13]
  i7182.m_defaultAutoSizeMaxRatio = i7183[14]
  i7182.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i7183[15], i7183[16] )
  i7182.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i7183[17], i7183[18] )
  i7182.m_autoSizeTextContainer = !!i7183[19]
  i7182.m_IsTextObjectScaleStatic = !!i7183[20]
  var i7185 = i7183[21]
  var i7184 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i7185.length; i += 2) {
  request.r(i7185[i + 0], i7185[i + 1], 1, i7184, '')
  }
  i7182.m_fallbackFontAssets = i7184
  i7182.m_matchMaterialPreset = !!i7183[22]
  request.r(i7183[23], i7183[24], 0, i7182, 'm_defaultSpriteAsset')
  i7182.m_defaultSpriteAssetPath = i7183[25]
  i7182.m_enableEmojiSupport = !!i7183[26]
  i7182.m_MissingCharacterSpriteUnicode = i7183[27]
  i7182.m_defaultColorGradientPresetsPath = i7183[28]
  request.r(i7183[29], i7183[30], 0, i7182, 'm_defaultStyleSheet')
  i7182.m_StyleSheetsResourcePath = i7183[31]
  request.r(i7183[32], i7183[33], 0, i7182, 'm_leadingCharacters')
  request.r(i7183[34], i7183[35], 0, i7182, 'm_followingCharacters')
  i7182.m_UseModernHangulLineBreakingRules = !!i7183[36]
  return i7182
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i7186 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i7187 = data
  i7186.hashCode = i7187[0]
  request.r(i7187[1], i7187[2], 0, i7186, 'material')
  i7186.materialHashCode = i7187[3]
  request.r(i7187[4], i7187[5], 0, i7186, 'spriteSheet')
  var i7189 = i7187[6]
  var i7188 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i7189.length; i += 1) {
    i7188.add(request.d('TMPro.TMP_Sprite', i7189[i + 0]));
  }
  i7186.spriteInfoList = i7188
  var i7191 = i7187[7]
  var i7190 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i7191.length; i += 2) {
  request.r(i7191[i + 0], i7191[i + 1], 1, i7190, '')
  }
  i7186.fallbackSpriteAssets = i7190
  i7186.m_Version = i7187[8]
  i7186.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i7187[9], i7186.m_FaceInfo)
  var i7193 = i7187[10]
  var i7192 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i7193.length; i += 1) {
    i7192.add(request.d('TMPro.TMP_SpriteCharacter', i7193[i + 0]));
  }
  i7186.m_SpriteCharacterTable = i7192
  var i7195 = i7187[11]
  var i7194 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i7195.length; i += 1) {
    i7194.add(request.d('TMPro.TMP_SpriteGlyph', i7195[i + 0]));
  }
  i7186.m_SpriteGlyphTable = i7194
  return i7186
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i7198 = root || request.c( 'TMPro.TMP_Sprite' )
  var i7199 = data
  i7198.name = i7199[0]
  i7198.hashCode = i7199[1]
  i7198.unicode = i7199[2]
  i7198.pivot = new pc.Vec2( i7199[3], i7199[4] )
  request.r(i7199[5], i7199[6], 0, i7198, 'sprite')
  i7198.id = i7199[7]
  i7198.x = i7199[8]
  i7198.y = i7199[9]
  i7198.width = i7199[10]
  i7198.height = i7199[11]
  i7198.xOffset = i7199[12]
  i7198.yOffset = i7199[13]
  i7198.xAdvance = i7199[14]
  i7198.scale = i7199[15]
  return i7198
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i7204 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i7205 = data
  i7204.m_Name = i7205[0]
  i7204.m_HashCode = i7205[1]
  i7204.m_ElementType = i7205[2]
  i7204.m_Unicode = i7205[3]
  i7204.m_GlyphIndex = i7205[4]
  i7204.m_Scale = i7205[5]
  return i7204
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i7208 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i7209 = data
  request.r(i7209[0], i7209[1], 0, i7208, 'sprite')
  i7208.m_Index = i7209[2]
  i7208.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i7209[3], i7208.m_Metrics)
  i7208.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i7209[4], i7208.m_GlyphRect)
  i7208.m_Scale = i7209[5]
  i7208.m_AtlasIndex = i7209[6]
  i7208.m_ClassDefinitionType = i7209[7]
  return i7208
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i7210 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i7211 = data
  var i7213 = i7211[0]
  var i7212 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i7213.length; i += 1) {
    i7212.add(request.d('TMPro.TMP_Style', i7213[i + 0]));
  }
  i7210.m_StyleList = i7212
  return i7210
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i7216 = root || request.c( 'TMPro.TMP_Style' )
  var i7217 = data
  i7216.m_Name = i7217[0]
  i7216.m_HashCode = i7217[1]
  i7216.m_OpeningDefinition = i7217[2]
  i7216.m_ClosingDefinition = i7217[3]
  i7216.m_OpeningTagArray = i7217[4]
  i7216.m_ClosingTagArray = i7217[5]
  i7216.m_OpeningTagUnicodeArray = i7217[6]
  i7216.m_ClosingTagUnicodeArray = i7217[7]
  return i7216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i7218 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i7219 = data
  var i7221 = i7219[0]
  var i7220 = []
  for(var i = 0; i < i7221.length; i += 1) {
    i7220.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i7221[i + 0]) );
  }
  i7218.files = i7220
  i7218.componentToPrefabIds = i7219[1]
  return i7218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i7224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i7225 = data
  i7224.path = i7225[0]
  request.r(i7225[1], i7225[2], 0, i7224, 'unityObject')
  return i7224
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i7226 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i7227 = data
  var i7229 = i7227[0]
  var i7228 = []
  for(var i = 0; i < i7229.length; i += 1) {
    i7228.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i7229[i + 0]) );
  }
  i7226.scriptsExecutionOrder = i7228
  var i7231 = i7227[1]
  var i7230 = []
  for(var i = 0; i < i7231.length; i += 1) {
    i7230.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i7231[i + 0]) );
  }
  i7226.sortingLayers = i7230
  var i7233 = i7227[2]
  var i7232 = []
  for(var i = 0; i < i7233.length; i += 1) {
    i7232.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i7233[i + 0]) );
  }
  i7226.cullingLayers = i7232
  i7226.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i7227[3], i7226.timeSettings)
  i7226.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i7227[4], i7226.physicsSettings)
  i7226.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i7227[5], i7226.physics2DSettings)
  i7226.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i7227[6], i7226.qualitySettings)
  i7226.enableRealtimeShadows = !!i7227[7]
  i7226.enableAutoInstancing = !!i7227[8]
  i7226.enableDynamicBatching = !!i7227[9]
  i7226.lightmapEncodingQuality = i7227[10]
  i7226.desiredColorSpace = i7227[11]
  var i7235 = i7227[12]
  var i7234 = []
  for(var i = 0; i < i7235.length; i += 1) {
    i7234.push( i7235[i + 0] );
  }
  i7226.allTags = i7234
  return i7226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i7238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i7239 = data
  i7238.name = i7239[0]
  i7238.value = i7239[1]
  return i7238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i7242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i7243 = data
  i7242.id = i7243[0]
  i7242.name = i7243[1]
  i7242.value = i7243[2]
  return i7242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i7246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i7247 = data
  i7246.id = i7247[0]
  i7246.name = i7247[1]
  return i7246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i7248 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i7249 = data
  i7248.fixedDeltaTime = i7249[0]
  i7248.maximumDeltaTime = i7249[1]
  i7248.timeScale = i7249[2]
  i7248.maximumParticleTimestep = i7249[3]
  return i7248
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i7250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i7251 = data
  i7250.gravity = new pc.Vec3( i7251[0], i7251[1], i7251[2] )
  i7250.defaultSolverIterations = i7251[3]
  i7250.bounceThreshold = i7251[4]
  i7250.autoSyncTransforms = !!i7251[5]
  i7250.autoSimulation = !!i7251[6]
  var i7253 = i7251[7]
  var i7252 = []
  for(var i = 0; i < i7253.length; i += 1) {
    i7252.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i7253[i + 0]) );
  }
  i7250.collisionMatrix = i7252
  return i7250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i7256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i7257 = data
  i7256.enabled = !!i7257[0]
  i7256.layerId = i7257[1]
  i7256.otherLayerId = i7257[2]
  return i7256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i7258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i7259 = data
  request.r(i7259[0], i7259[1], 0, i7258, 'material')
  i7258.gravity = new pc.Vec2( i7259[2], i7259[3] )
  i7258.positionIterations = i7259[4]
  i7258.velocityIterations = i7259[5]
  i7258.velocityThreshold = i7259[6]
  i7258.maxLinearCorrection = i7259[7]
  i7258.maxAngularCorrection = i7259[8]
  i7258.maxTranslationSpeed = i7259[9]
  i7258.maxRotationSpeed = i7259[10]
  i7258.baumgarteScale = i7259[11]
  i7258.baumgarteTOIScale = i7259[12]
  i7258.timeToSleep = i7259[13]
  i7258.linearSleepTolerance = i7259[14]
  i7258.angularSleepTolerance = i7259[15]
  i7258.defaultContactOffset = i7259[16]
  i7258.autoSimulation = !!i7259[17]
  i7258.queriesHitTriggers = !!i7259[18]
  i7258.queriesStartInColliders = !!i7259[19]
  i7258.callbacksOnDisable = !!i7259[20]
  i7258.reuseCollisionCallbacks = !!i7259[21]
  i7258.autoSyncTransforms = !!i7259[22]
  var i7261 = i7259[23]
  var i7260 = []
  for(var i = 0; i < i7261.length; i += 1) {
    i7260.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i7261[i + 0]) );
  }
  i7258.collisionMatrix = i7260
  return i7258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i7264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i7265 = data
  i7264.enabled = !!i7265[0]
  i7264.layerId = i7265[1]
  i7264.otherLayerId = i7265[2]
  return i7264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i7266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i7267 = data
  var i7269 = i7267[0]
  var i7268 = []
  for(var i = 0; i < i7269.length; i += 1) {
    i7268.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i7269[i + 0]) );
  }
  i7266.qualityLevels = i7268
  var i7271 = i7267[1]
  var i7270 = []
  for(var i = 0; i < i7271.length; i += 1) {
    i7270.push( i7271[i + 0] );
  }
  i7266.names = i7270
  i7266.shadows = i7267[2]
  i7266.anisotropicFiltering = i7267[3]
  i7266.antiAliasing = i7267[4]
  i7266.lodBias = i7267[5]
  i7266.shadowCascades = i7267[6]
  i7266.shadowDistance = i7267[7]
  i7266.shadowmaskMode = i7267[8]
  i7266.shadowProjection = i7267[9]
  i7266.shadowResolution = i7267[10]
  i7266.softParticles = !!i7267[11]
  i7266.softVegetation = !!i7267[12]
  i7266.activeColorSpace = i7267[13]
  i7266.desiredColorSpace = i7267[14]
  i7266.masterTextureLimit = i7267[15]
  i7266.maxQueuedFrames = i7267[16]
  i7266.particleRaycastBudget = i7267[17]
  i7266.pixelLightCount = i7267[18]
  i7266.realtimeReflectionProbes = !!i7267[19]
  i7266.shadowCascade2Split = i7267[20]
  i7266.shadowCascade4Split = new pc.Vec3( i7267[21], i7267[22], i7267[23] )
  i7266.streamingMipmapsActive = !!i7267[24]
  i7266.vSyncCount = i7267[25]
  i7266.asyncUploadBufferSize = i7267[26]
  i7266.asyncUploadTimeSlice = i7267[27]
  i7266.billboardsFaceCameraPosition = !!i7267[28]
  i7266.shadowNearPlaneOffset = i7267[29]
  i7266.streamingMipmapsMemoryBudget = i7267[30]
  i7266.maximumLODLevel = i7267[31]
  i7266.streamingMipmapsAddAllCameras = !!i7267[32]
  i7266.streamingMipmapsMaxLevelReduction = i7267[33]
  i7266.streamingMipmapsRenderersPerFrame = i7267[34]
  i7266.resolutionScalingFixedDPIFactor = i7267[35]
  i7266.streamingMipmapsMaxFileIORequests = i7267[36]
  i7266.currentQualityLevel = i7267[37]
  return i7266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i7276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i7277 = data
  i7276.weight = i7277[0]
  i7276.vertices = i7277[1]
  i7276.normals = i7277[2]
  i7276.tangents = i7277[3]
  return i7276
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i7278 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i7279 = data
  i7278.xPlacement = i7279[0]
  i7278.yPlacement = i7279[1]
  i7278.xAdvance = i7279[2]
  i7278.yAdvance = i7279[3]
  return i7278
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.CharacterController":{"enabled":0,"center":1,"radius":4,"height":5,"minMoveDistance":6,"skinWidth":7,"enableOverlapRecovery":8},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animations.BlendTree":{"name":0,"blendParameter":1,"blendParameterY":2,"blendType":3,"children":4,"useAutomaticThresholds":5,"minThreshold":6,"maxThreshold":7},"Luna.Unity.DTO.UnityEngine.Animations.ChildMotion":{"motion":0,"threshold":2,"position":3,"timeScale":5,"cycleOffset":6,"directBlendParameter":7,"mirror":8},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar":{"name":0,"tos":1,"constant":2,"isValid":3,"isHuman":4,"hasRootMotion":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair":{"hash":0,"path":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"39":[40],"41":[40],"42":[40],"43":[40],"44":[40],"45":[40],"46":[47],"48":[3],"49":[50],"51":[50],"52":[50],"53":[50],"54":[50],"55":[50],"56":[50],"57":[58],"59":[58],"60":[58],"61":[58],"62":[58],"63":[58],"64":[58],"65":[58],"66":[58],"67":[58],"68":[58],"69":[58],"70":[58],"71":[3],"72":[12],"73":[74],"75":[74],"23":[22],"76":[77],"78":[77],"79":[77],"80":[81],"82":[3],"83":[3],"84":[85],"86":[22],"87":[12,22],"29":[22,27],"88":[22],"89":[27,22],"90":[12],"91":[27,22],"92":[22],"93":[94],"95":[22],"96":[22],"25":[23],"26":[27,22],"97":[22],"24":[23],"98":[22],"99":[22],"28":[22],"100":[22],"101":[22],"102":[22],"103":[22],"104":[22],"105":[22],"106":[27,22],"107":[22],"108":[22],"109":[22],"16":[22],"110":[27,22],"111":[22],"112":[8],"113":[8],"9":[8],"114":[8],"115":[3],"116":[3],"117":[22],"118":[94],"119":[94]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","FOVCalculator","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.MeshCollider","PainterGame","UnityEngine.UI.Slider","UnityEngine.UI.Button","UnityEngine.GameObject","UnityEngine.AudioSource","UnityEngine.Sprite","UnityEngine.AudioClip","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.UI.HorizontalLayoutGroup","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","EscToMainMenu","UnityEngine.Cubemap","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","BotController","UnityEngine.CharacterController","CharacterBaseController","PlayerController","DeathObstacleEffect","ObstacleBase","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","UnityEngine.Light","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.Rendering.UI.UIFoldout","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2021.3.45f1";

Deserializers.productName = "PanteonDemo";

Deserializers.lunaInitializationTime = "11/07/2024 13:58:49";

Deserializers.lunaDaysRunning = "3.5";

Deserializers.lunaVersion = "6.2.0";

Deserializers.lunaSHA = "7963e9fed253d218ae1c5298f104efd7e457ea14";

Deserializers.creativeName = "RealLastPlayable-3";

Deserializers.lunaAppID = "25575";

Deserializers.projectId = "183a878df3c572c46b908bc772bb8712";

Deserializers.packagesInfo = "com.unity.render-pipelines.universal: 12.1.15\ncom.unity.textmeshpro: 3.0.6\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1549";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4819";

Deserializers.runtimeAnalysisExcludedModules = "physics2d";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "True";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.PanteonDemo";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "51b37402-045d-4df1-97f4-a5c49a87a847";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["Unity","Collections","NativeLeakDetection","Initialize"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[["UnityEngine","Rendering","Universal","XRSystem","XRSystemInit"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

