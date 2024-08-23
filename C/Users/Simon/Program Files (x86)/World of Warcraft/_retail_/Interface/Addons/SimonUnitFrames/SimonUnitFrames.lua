--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]

local ____modules = {}
local ____moduleCache = {}
local ____originalRequire = require
local function require(file, ...)
    if ____moduleCache[file] then
        return ____moduleCache[file].value
    end
    if ____modules[file] then
        local module = ____modules[file]
        local value = nil
        if (select("#", ...) > 0) then value = module(...) else value = module(file) end
        ____moduleCache[file] = { value = value }
        return value
    else
        if ____originalRequire then
            return ____originalRequire(file)
        else
            error("module '" .. file .. "' not found")
        end
    end
end
____modules = {
["lualib_bundle"] = function(...) 
local function __TS__ArrayAt(self, relativeIndex)
    local absoluteIndex = relativeIndex < 0 and #self + relativeIndex or relativeIndex
    if absoluteIndex >= 0 and absoluteIndex < #self then
        return self[absoluteIndex + 1]
    end
    return nil
end

local function __TS__ArrayIsArray(value)
    return type(value) == "table" and (value[1] ~= nil or next(value) == nil)
end

local function __TS__ArrayConcat(self, ...)
    local items = {...}
    local result = {}
    local len = 0
    for i = 1, #self do
        len = len + 1
        result[len] = self[i]
    end
    for i = 1, #items do
        local item = items[i]
        if __TS__ArrayIsArray(item) then
            for j = 1, #item do
                len = len + 1
                result[len] = item[j]
            end
        else
            len = len + 1
            result[len] = item
        end
    end
    return result
end

local __TS__Symbol, Symbol
do
    local symbolMetatable = {__tostring = function(self)
        return ("Symbol(" .. (self.description or "")) .. ")"
    end}
    function __TS__Symbol(description)
        return setmetatable({description = description}, symbolMetatable)
    end
    Symbol = {
        asyncDispose = __TS__Symbol("Symbol.asyncDispose"),
        dispose = __TS__Symbol("Symbol.dispose"),
        iterator = __TS__Symbol("Symbol.iterator"),
        hasInstance = __TS__Symbol("Symbol.hasInstance"),
        species = __TS__Symbol("Symbol.species"),
        toStringTag = __TS__Symbol("Symbol.toStringTag")
    }
end

local function __TS__ArrayEntries(array)
    local key = 0
    return {
        [Symbol.iterator] = function(self)
            return self
        end,
        next = function(self)
            local result = {done = array[key + 1] == nil, value = {key, array[key + 1]}}
            key = key + 1
            return result
        end
    }
end

local function __TS__ArrayEvery(self, callbackfn, thisArg)
    for i = 1, #self do
        if not callbackfn(thisArg, self[i], i - 1, self) then
            return false
        end
    end
    return true
end

local function __TS__ArrayFill(self, value, start, ____end)
    local relativeStart = start or 0
    local relativeEnd = ____end or #self
    if relativeStart < 0 then
        relativeStart = relativeStart + #self
    end
    if relativeEnd < 0 then
        relativeEnd = relativeEnd + #self
    end
    do
        local i = relativeStart
        while i < relativeEnd do
            self[i + 1] = value
            i = i + 1
        end
    end
    return self
end

local function __TS__ArrayFilter(self, callbackfn, thisArg)
    local result = {}
    local len = 0
    for i = 1, #self do
        if callbackfn(thisArg, self[i], i - 1, self) then
            len = len + 1
            result[len] = self[i]
        end
    end
    return result
end

local function __TS__ArrayForEach(self, callbackFn, thisArg)
    for i = 1, #self do
        callbackFn(thisArg, self[i], i - 1, self)
    end
end

local function __TS__ArrayFind(self, predicate, thisArg)
    for i = 1, #self do
        local elem = self[i]
        if predicate(thisArg, elem, i - 1, self) then
            return elem
        end
    end
    return nil
end

local function __TS__ArrayFindIndex(self, callbackFn, thisArg)
    for i = 1, #self do
        if callbackFn(thisArg, self[i], i - 1, self) then
            return i - 1
        end
    end
    return -1
end

local __TS__Iterator
do
    local function iteratorGeneratorStep(self)
        local co = self.____coroutine
        local status, value = coroutine.resume(co)
        if not status then
            error(value, 0)
        end
        if coroutine.status(co) == "dead" then
            return
        end
        return true, value
    end
    local function iteratorIteratorStep(self)
        local result = self:next()
        if result.done then
            return
        end
        return true, result.value
    end
    local function iteratorStringStep(self, index)
        index = index + 1
        if index > #self then
            return
        end
        return index, string.sub(self, index, index)
    end
    function __TS__Iterator(iterable)
        if type(iterable) == "string" then
            return iteratorStringStep, iterable, 0
        elseif iterable.____coroutine ~= nil then
            return iteratorGeneratorStep, iterable
        elseif iterable[Symbol.iterator] then
            local iterator = iterable[Symbol.iterator](iterable)
            return iteratorIteratorStep, iterator
        else
            return ipairs(iterable)
        end
    end
end

local __TS__ArrayFrom
do
    local function arrayLikeStep(self, index)
        index = index + 1
        if index > self.length then
            return
        end
        return index, self[index]
    end
    local function arrayLikeIterator(arr)
        if type(arr.length) == "number" then
            return arrayLikeStep, arr, 0
        end
        return __TS__Iterator(arr)
    end
    function __TS__ArrayFrom(arrayLike, mapFn, thisArg)
        local result = {}
        if mapFn == nil then
            for ____, v in arrayLikeIterator(arrayLike) do
                result[#result + 1] = v
            end
        else
            for i, v in arrayLikeIterator(arrayLike) do
                result[#result + 1] = mapFn(thisArg, v, i - 1)
            end
        end
        return result
    end
end

local function __TS__ArrayIncludes(self, searchElement, fromIndex)
    if fromIndex == nil then
        fromIndex = 0
    end
    local len = #self
    local k = fromIndex
    if fromIndex < 0 then
        k = len + fromIndex
    end
    if k < 0 then
        k = 0
    end
    for i = k + 1, len do
        if self[i] == searchElement then
            return true
        end
    end
    return false
end

local function __TS__ArrayIndexOf(self, searchElement, fromIndex)
    if fromIndex == nil then
        fromIndex = 0
    end
    local len = #self
    if len == 0 then
        return -1
    end
    if fromIndex >= len then
        return -1
    end
    if fromIndex < 0 then
        fromIndex = len + fromIndex
        if fromIndex < 0 then
            fromIndex = 0
        end
    end
    for i = fromIndex + 1, len do
        if self[i] == searchElement then
            return i - 1
        end
    end
    return -1
end

local function __TS__ArrayJoin(self, separator)
    if separator == nil then
        separator = ","
    end
    local parts = {}
    for i = 1, #self do
        parts[i] = tostring(self[i])
    end
    return table.concat(parts, separator)
end

local function __TS__ArrayMap(self, callbackfn, thisArg)
    local result = {}
    for i = 1, #self do
        result[i] = callbackfn(thisArg, self[i], i - 1, self)
    end
    return result
end

local function __TS__ArrayPush(self, ...)
    local items = {...}
    local len = #self
    for i = 1, #items do
        len = len + 1
        self[len] = items[i]
    end
    return len
end

local function __TS__ArrayPushArray(self, items)
    local len = #self
    for i = 1, #items do
        len = len + 1
        self[len] = items[i]
    end
    return len
end

local function __TS__CountVarargs(...)
    return select("#", ...)
end

local function __TS__ArrayReduce(self, callbackFn, ...)
    local len = #self
    local k = 0
    local accumulator = nil
    if __TS__CountVarargs(...) ~= 0 then
        accumulator = ...
    elseif len > 0 then
        accumulator = self[1]
        k = 1
    else
        error("Reduce of empty array with no initial value", 0)
    end
    for i = k + 1, len do
        accumulator = callbackFn(
            nil,
            accumulator,
            self[i],
            i - 1,
            self
        )
    end
    return accumulator
end

local function __TS__ArrayReduceRight(self, callbackFn, ...)
    local len = #self
    local k = len - 1
    local accumulator = nil
    if __TS__CountVarargs(...) ~= 0 then
        accumulator = ...
    elseif len > 0 then
        accumulator = self[k + 1]
        k = k - 1
    else
        error("Reduce of empty array with no initial value", 0)
    end
    for i = k + 1, 1, -1 do
        accumulator = callbackFn(
            nil,
            accumulator,
            self[i],
            i - 1,
            self
        )
    end
    return accumulator
end

local function __TS__ArrayReverse(self)
    local i = 1
    local j = #self
    while i < j do
        local temp = self[j]
        self[j] = self[i]
        self[i] = temp
        i = i + 1
        j = j - 1
    end
    return self
end

local function __TS__ArrayUnshift(self, ...)
    local items = {...}
    local numItemsToInsert = #items
    if numItemsToInsert == 0 then
        return #self
    end
    for i = #self, 1, -1 do
        self[i + numItemsToInsert] = self[i]
    end
    for i = 1, numItemsToInsert do
        self[i] = items[i]
    end
    return #self
end

local function __TS__ArraySort(self, compareFn)
    if compareFn ~= nil then
        table.sort(
            self,
            function(a, b) return compareFn(nil, a, b) < 0 end
        )
    else
        table.sort(self)
    end
    return self
end

local function __TS__ArraySlice(self, first, last)
    local len = #self
    first = first or 0
    if first < 0 then
        first = len + first
        if first < 0 then
            first = 0
        end
    else
        if first > len then
            first = len
        end
    end
    last = last or len
    if last < 0 then
        last = len + last
        if last < 0 then
            last = 0
        end
    else
        if last > len then
            last = len
        end
    end
    local out = {}
    first = first + 1
    last = last + 1
    local n = 1
    while first < last do
        out[n] = self[first]
        first = first + 1
        n = n + 1
    end
    return out
end

local function __TS__ArraySome(self, callbackfn, thisArg)
    for i = 1, #self do
        if callbackfn(thisArg, self[i], i - 1, self) then
            return true
        end
    end
    return false
end

local function __TS__ArraySplice(self, ...)
    local args = {...}
    local len = #self
    local actualArgumentCount = __TS__CountVarargs(...)
    local start = args[1]
    local deleteCount = args[2]
    if start < 0 then
        start = len + start
        if start < 0 then
            start = 0
        end
    elseif start > len then
        start = len
    end
    local itemCount = actualArgumentCount - 2
    if itemCount < 0 then
        itemCount = 0
    end
    local actualDeleteCount
    if actualArgumentCount == 0 then
        actualDeleteCount = 0
    elseif actualArgumentCount == 1 then
        actualDeleteCount = len - start
    else
        actualDeleteCount = deleteCount or 0
        if actualDeleteCount < 0 then
            actualDeleteCount = 0
        end
        if actualDeleteCount > len - start then
            actualDeleteCount = len - start
        end
    end
    local out = {}
    for k = 1, actualDeleteCount do
        local from = start + k
        if self[from] ~= nil then
            out[k] = self[from]
        end
    end
    if itemCount < actualDeleteCount then
        for k = start + 1, len - actualDeleteCount do
            local from = k + actualDeleteCount
            local to = k + itemCount
            if self[from] then
                self[to] = self[from]
            else
                self[to] = nil
            end
        end
        for k = len - actualDeleteCount + itemCount + 1, len do
            self[k] = nil
        end
    elseif itemCount > actualDeleteCount then
        for k = len - actualDeleteCount, start + 1, -1 do
            local from = k + actualDeleteCount
            local to = k + itemCount
            if self[from] then
                self[to] = self[from]
            else
                self[to] = nil
            end
        end
    end
    local j = start + 1
    for i = 3, actualArgumentCount do
        self[j] = args[i]
        j = j + 1
    end
    for k = #self, len - actualDeleteCount + itemCount + 1, -1 do
        self[k] = nil
    end
    return out
end

local function __TS__ArrayToObject(self)
    local object = {}
    for i = 1, #self do
        object[i - 1] = self[i]
    end
    return object
end

local function __TS__ArrayFlat(self, depth)
    if depth == nil then
        depth = 1
    end
    local result = {}
    local len = 0
    for i = 1, #self do
        local value = self[i]
        if depth > 0 and __TS__ArrayIsArray(value) then
            local toAdd
            if depth == 1 then
                toAdd = value
            else
                toAdd = __TS__ArrayFlat(value, depth - 1)
            end
            for j = 1, #toAdd do
                local val = toAdd[j]
                len = len + 1
                result[len] = val
            end
        else
            len = len + 1
            result[len] = value
        end
    end
    return result
end

local function __TS__ArrayFlatMap(self, callback, thisArg)
    local result = {}
    local len = 0
    for i = 1, #self do
        local value = callback(thisArg, self[i], i - 1, self)
        if __TS__ArrayIsArray(value) then
            for j = 1, #value do
                len = len + 1
                result[len] = value[j]
            end
        else
            len = len + 1
            result[len] = value
        end
    end
    return result
end

local function __TS__ArraySetLength(self, length)
    if length < 0 or length ~= length or length == math.huge or math.floor(length) ~= length then
        error(
            "invalid array length: " .. tostring(length),
            0
        )
    end
    for i = length + 1, #self do
        self[i] = nil
    end
    return length
end

local __TS__Unpack = table.unpack or unpack

local function __TS__ArrayToReversed(self)
    local copy = {__TS__Unpack(self)}
    __TS__ArrayReverse(copy)
    return copy
end

local function __TS__ArrayToSorted(self, compareFn)
    local copy = {__TS__Unpack(self)}
    __TS__ArraySort(copy, compareFn)
    return copy
end

local function __TS__ArrayToSpliced(self, start, deleteCount, ...)
    local copy = {__TS__Unpack(self)}
    __TS__ArraySplice(copy, start, deleteCount, ...)
    return copy
end

local function __TS__ArrayWith(self, index, value)
    local copy = {__TS__Unpack(self)}
    copy[index + 1] = value
    return copy
end

local function __TS__New(target, ...)
    local instance = setmetatable({}, target.prototype)
    instance:____constructor(...)
    return instance
end

local function __TS__InstanceOf(obj, classTbl)
    if type(classTbl) ~= "table" then
        error("Right-hand side of 'instanceof' is not an object", 0)
    end
    if classTbl[Symbol.hasInstance] ~= nil then
        return not not classTbl[Symbol.hasInstance](classTbl, obj)
    end
    if type(obj) == "table" then
        local luaClass = obj.constructor
        while luaClass ~= nil do
            if luaClass == classTbl then
                return true
            end
            luaClass = luaClass.____super
        end
    end
    return false
end

local function __TS__Class(self)
    local c = {prototype = {}}
    c.prototype.__index = c.prototype
    c.prototype.constructor = c
    return c
end

local __TS__Promise
do
    local function makeDeferredPromiseFactory()
        local resolve
        local reject
        local function executor(____, res, rej)
            resolve = res
            reject = rej
        end
        return function()
            local promise = __TS__New(__TS__Promise, executor)
            return promise, resolve, reject
        end
    end
    local makeDeferredPromise = makeDeferredPromiseFactory()
    local function isPromiseLike(value)
        return __TS__InstanceOf(value, __TS__Promise)
    end
    local function doNothing(self)
    end
    local ____pcall = _G.pcall
    __TS__Promise = __TS__Class()
    __TS__Promise.name = "__TS__Promise"
    function __TS__Promise.prototype.____constructor(self, executor)
        self.state = 0
        self.fulfilledCallbacks = {}
        self.rejectedCallbacks = {}
        self.finallyCallbacks = {}
        local success, ____error = ____pcall(
            executor,
            nil,
            function(____, v) return self:resolve(v) end,
            function(____, err) return self:reject(err) end
        )
        if not success then
            self:reject(____error)
        end
    end
    function __TS__Promise.resolve(value)
        if __TS__InstanceOf(value, __TS__Promise) then
            return value
        end
        local promise = __TS__New(__TS__Promise, doNothing)
        promise.state = 1
        promise.value = value
        return promise
    end
    function __TS__Promise.reject(reason)
        local promise = __TS__New(__TS__Promise, doNothing)
        promise.state = 2
        promise.rejectionReason = reason
        return promise
    end
    __TS__Promise.prototype["then"] = function(self, onFulfilled, onRejected)
        local promise, resolve, reject = makeDeferredPromise()
        self:addCallbacks(
            onFulfilled and self:createPromiseResolvingCallback(onFulfilled, resolve, reject) or resolve,
            onRejected and self:createPromiseResolvingCallback(onRejected, resolve, reject) or reject
        )
        return promise
    end
    function __TS__Promise.prototype.addCallbacks(self, fulfilledCallback, rejectedCallback)
        if self.state == 1 then
            return fulfilledCallback(nil, self.value)
        end
        if self.state == 2 then
            return rejectedCallback(nil, self.rejectionReason)
        end
        local ____self_fulfilledCallbacks_0 = self.fulfilledCallbacks
        ____self_fulfilledCallbacks_0[#____self_fulfilledCallbacks_0 + 1] = fulfilledCallback
        local ____self_rejectedCallbacks_1 = self.rejectedCallbacks
        ____self_rejectedCallbacks_1[#____self_rejectedCallbacks_1 + 1] = rejectedCallback
    end
    function __TS__Promise.prototype.catch(self, onRejected)
        return self["then"](self, nil, onRejected)
    end
    function __TS__Promise.prototype.finally(self, onFinally)
        if onFinally then
            local ____self_finallyCallbacks_2 = self.finallyCallbacks
            ____self_finallyCallbacks_2[#____self_finallyCallbacks_2 + 1] = onFinally
            if self.state ~= 0 then
                onFinally(nil)
            end
        end
        return self
    end
    function __TS__Promise.prototype.resolve(self, value)
        if isPromiseLike(value) then
            return value:addCallbacks(
                function(____, v) return self:resolve(v) end,
                function(____, err) return self:reject(err) end
            )
        end
        if self.state == 0 then
            self.state = 1
            self.value = value
            return self:invokeCallbacks(self.fulfilledCallbacks, value)
        end
    end
    function __TS__Promise.prototype.reject(self, reason)
        if self.state == 0 then
            self.state = 2
            self.rejectionReason = reason
            return self:invokeCallbacks(self.rejectedCallbacks, reason)
        end
    end
    function __TS__Promise.prototype.invokeCallbacks(self, callbacks, value)
        local callbacksLength = #callbacks
        local finallyCallbacks = self.finallyCallbacks
        local finallyCallbacksLength = #finallyCallbacks
        if callbacksLength ~= 0 then
            for i = 1, callbacksLength - 1 do
                callbacks[i](callbacks, value)
            end
            if finallyCallbacksLength == 0 then
                return callbacks[callbacksLength](callbacks, value)
            end
            callbacks[callbacksLength](callbacks, value)
        end
        if finallyCallbacksLength ~= 0 then
            for i = 1, finallyCallbacksLength - 1 do
                finallyCallbacks[i](finallyCallbacks)
            end
            return finallyCallbacks[finallyCallbacksLength](finallyCallbacks)
        end
    end
    function __TS__Promise.prototype.createPromiseResolvingCallback(self, f, resolve, reject)
        return function(____, value)
            local success, resultOrError = ____pcall(f, nil, value)
            if not success then
                return reject(nil, resultOrError)
            end
            return self:handleCallbackValue(resultOrError, resolve, reject)
        end
    end
    function __TS__Promise.prototype.handleCallbackValue(self, value, resolve, reject)
        if isPromiseLike(value) then
            local nextpromise = value
            if nextpromise.state == 1 then
                return resolve(nil, nextpromise.value)
            elseif nextpromise.state == 2 then
                return reject(nil, nextpromise.rejectionReason)
            else
                return nextpromise:addCallbacks(resolve, reject)
            end
        else
            return resolve(nil, value)
        end
    end
end

local __TS__AsyncAwaiter, __TS__Await
do
    local ____coroutine = _G.coroutine or ({})
    local cocreate = ____coroutine.create
    local coresume = ____coroutine.resume
    local costatus = ____coroutine.status
    local coyield = ____coroutine.yield
    function __TS__AsyncAwaiter(generator)
        return __TS__New(
            __TS__Promise,
            function(____, resolve, reject)
                local fulfilled, step, resolved, asyncCoroutine
                function fulfilled(self, value)
                    local success, resultOrError = coresume(asyncCoroutine, value)
                    if success then
                        return step(resultOrError)
                    end
                    return reject(nil, resultOrError)
                end
                function step(result)
                    if resolved then
                        return
                    end
                    if costatus(asyncCoroutine) == "dead" then
                        return resolve(nil, result)
                    end
                    return __TS__Promise.resolve(result):addCallbacks(fulfilled, reject)
                end
                resolved = false
                asyncCoroutine = cocreate(generator)
                local success, resultOrError = coresume(
                    asyncCoroutine,
                    function(____, v)
                        resolved = true
                        return __TS__Promise.resolve(v):addCallbacks(resolve, reject)
                    end
                )
                if success then
                    return step(resultOrError)
                else
                    return reject(nil, resultOrError)
                end
            end
        )
    end
    function __TS__Await(thing)
        return coyield(thing)
    end
end

local function __TS__ClassExtends(target, base)
    target.____super = base
    local staticMetatable = setmetatable({__index = base}, base)
    setmetatable(target, staticMetatable)
    local baseMetatable = getmetatable(base)
    if baseMetatable then
        if type(baseMetatable.__index) == "function" then
            staticMetatable.__index = baseMetatable.__index
        end
        if type(baseMetatable.__newindex) == "function" then
            staticMetatable.__newindex = baseMetatable.__newindex
        end
    end
    setmetatable(target.prototype, base.prototype)
    if type(base.prototype.__index) == "function" then
        target.prototype.__index = base.prototype.__index
    end
    if type(base.prototype.__newindex) == "function" then
        target.prototype.__newindex = base.prototype.__newindex
    end
    if type(base.prototype.__tostring) == "function" then
        target.prototype.__tostring = base.prototype.__tostring
    end
end

local function __TS__CloneDescriptor(____bindingPattern0)
    local value
    local writable
    local set
    local get
    local configurable
    local enumerable
    enumerable = ____bindingPattern0.enumerable
    configurable = ____bindingPattern0.configurable
    get = ____bindingPattern0.get
    set = ____bindingPattern0.set
    writable = ____bindingPattern0.writable
    value = ____bindingPattern0.value
    local descriptor = {enumerable = enumerable == true, configurable = configurable == true}
    local hasGetterOrSetter = get ~= nil or set ~= nil
    local hasValueOrWritableAttribute = writable ~= nil or value ~= nil
    if hasGetterOrSetter and hasValueOrWritableAttribute then
        error("Invalid property descriptor. Cannot both specify accessors and a value or writable attribute.", 0)
    end
    if get or set then
        descriptor.get = get
        descriptor.set = set
    else
        descriptor.value = value
        descriptor.writable = writable == true
    end
    return descriptor
end

local function __TS__Decorate(self, originalValue, decorators, context)
    local result = originalValue
    do
        local i = #decorators
        while i >= 0 do
            local decorator = decorators[i + 1]
            if decorator ~= nil then
                local ____decorator_result_0 = decorator(self, result, context)
                if ____decorator_result_0 == nil then
                    ____decorator_result_0 = result
                end
                result = ____decorator_result_0
            end
            i = i - 1
        end
    end
    return result
end

local function __TS__ObjectAssign(target, ...)
    local sources = {...}
    for i = 1, #sources do
        local source = sources[i]
        for key in pairs(source) do
            target[key] = source[key]
        end
    end
    return target
end

local function __TS__ObjectGetOwnPropertyDescriptor(object, key)
    local metatable = getmetatable(object)
    if not metatable then
        return
    end
    if not rawget(metatable, "_descriptors") then
        return
    end
    return rawget(metatable, "_descriptors")[key]
end

local __TS__DescriptorGet
do
    local getmetatable = _G.getmetatable
    local ____rawget = _G.rawget
    function __TS__DescriptorGet(self, metatable, key)
        while metatable do
            local rawResult = ____rawget(metatable, key)
            if rawResult ~= nil then
                return rawResult
            end
            local descriptors = ____rawget(metatable, "_descriptors")
            if descriptors then
                local descriptor = descriptors[key]
                if descriptor ~= nil then
                    if descriptor.get then
                        return descriptor.get(self)
                    end
                    return descriptor.value
                end
            end
            metatable = getmetatable(metatable)
        end
    end
end

local __TS__DescriptorSet
do
    local getmetatable = _G.getmetatable
    local ____rawget = _G.rawget
    local rawset = _G.rawset
    function __TS__DescriptorSet(self, metatable, key, value)
        while metatable do
            local descriptors = ____rawget(metatable, "_descriptors")
            if descriptors then
                local descriptor = descriptors[key]
                if descriptor ~= nil then
                    if descriptor.set then
                        descriptor.set(self, value)
                    else
                        if descriptor.writable == false then
                            error(
                                ((("Cannot assign to read only property '" .. key) .. "' of object '") .. tostring(self)) .. "'",
                                0
                            )
                        end
                        descriptor.value = value
                    end
                    return
                end
            end
            metatable = getmetatable(metatable)
        end
        rawset(self, key, value)
    end
end

local __TS__SetDescriptor
do
    local getmetatable = _G.getmetatable
    local function descriptorIndex(self, key)
        return __TS__DescriptorGet(
            self,
            getmetatable(self),
            key
        )
    end
    local function descriptorNewIndex(self, key, value)
        return __TS__DescriptorSet(
            self,
            getmetatable(self),
            key,
            value
        )
    end
    function __TS__SetDescriptor(target, key, desc, isPrototype)
        if isPrototype == nil then
            isPrototype = false
        end
        local ____isPrototype_0
        if isPrototype then
            ____isPrototype_0 = target
        else
            ____isPrototype_0 = getmetatable(target)
        end
        local metatable = ____isPrototype_0
        if not metatable then
            metatable = {}
            setmetatable(target, metatable)
        end
        local value = rawget(target, key)
        if value ~= nil then
            rawset(target, key, nil)
        end
        if not rawget(metatable, "_descriptors") then
            metatable._descriptors = {}
        end
        metatable._descriptors[key] = __TS__CloneDescriptor(desc)
        metatable.__index = descriptorIndex
        metatable.__newindex = descriptorNewIndex
    end
end

local function __TS__DecorateLegacy(decorators, target, key, desc)
    local result = target
    do
        local i = #decorators
        while i >= 0 do
            local decorator = decorators[i + 1]
            if decorator ~= nil then
                local oldResult = result
                if key == nil then
                    result = decorator(nil, result)
                elseif desc == true then
                    local value = rawget(target, key)
                    local descriptor = __TS__ObjectGetOwnPropertyDescriptor(target, key) or ({configurable = true, writable = true, value = value})
                    local desc = decorator(nil, target, key, descriptor) or descriptor
                    local isSimpleValue = desc.configurable == true and desc.writable == true and not desc.get and not desc.set
                    if isSimpleValue then
                        rawset(target, key, desc.value)
                    else
                        __TS__SetDescriptor(
                            target,
                            key,
                            __TS__ObjectAssign({}, descriptor, desc)
                        )
                    end
                elseif desc == false then
                    result = decorator(nil, target, key, desc)
                else
                    result = decorator(nil, target, key)
                end
                result = result or oldResult
            end
            i = i - 1
        end
    end
    return result
end

local function __TS__DecorateParam(paramIndex, decorator)
    return function(____, target, key) return decorator(nil, target, key, paramIndex) end
end

local function __TS__StringIncludes(self, searchString, position)
    if not position then
        position = 1
    else
        position = position + 1
    end
    local index = string.find(self, searchString, position, true)
    return index ~= nil
end

local Error, RangeError, ReferenceError, SyntaxError, TypeError, URIError
do
    local function getErrorStack(self, constructor)
        if debug == nil then
            return nil
        end
        local level = 1
        while true do
            local info = debug.getinfo(level, "f")
            level = level + 1
            if not info then
                level = 1
                break
            elseif info.func == constructor then
                break
            end
        end
        if __TS__StringIncludes(_VERSION, "Lua 5.0") then
            return debug.traceback(("[Level " .. tostring(level)) .. "]")
        else
            return debug.traceback(nil, level)
        end
    end
    local function wrapErrorToString(self, getDescription)
        return function(self)
            local description = getDescription(self)
            local caller = debug.getinfo(3, "f")
            local isClassicLua = __TS__StringIncludes(_VERSION, "Lua 5.0") or _VERSION == "Lua 5.1"
            if isClassicLua or caller and caller.func ~= error then
                return description
            else
                return (description .. "\n") .. tostring(self.stack)
            end
        end
    end
    local function initErrorClass(self, Type, name)
        Type.name = name
        return setmetatable(
            Type,
            {__call = function(____, _self, message) return __TS__New(Type, message) end}
        )
    end
    local ____initErrorClass_1 = initErrorClass
    local ____class_0 = __TS__Class()
    ____class_0.name = ""
    function ____class_0.prototype.____constructor(self, message)
        if message == nil then
            message = ""
        end
        self.message = message
        self.name = "Error"
        self.stack = getErrorStack(nil, self.constructor.new)
        local metatable = getmetatable(self)
        if metatable and not metatable.__errorToStringPatched then
            metatable.__errorToStringPatched = true
            metatable.__tostring = wrapErrorToString(nil, metatable.__tostring)
        end
    end
    function ____class_0.prototype.__tostring(self)
        return self.message ~= "" and (self.name .. ": ") .. self.message or self.name
    end
    Error = ____initErrorClass_1(nil, ____class_0, "Error")
    local function createErrorClass(self, name)
        local ____initErrorClass_3 = initErrorClass
        local ____class_2 = __TS__Class()
        ____class_2.name = ____class_2.name
        __TS__ClassExtends(____class_2, Error)
        function ____class_2.prototype.____constructor(self, ...)
            ____class_2.____super.prototype.____constructor(self, ...)
            self.name = name
        end
        return ____initErrorClass_3(nil, ____class_2, name)
    end
    RangeError = createErrorClass(nil, "RangeError")
    ReferenceError = createErrorClass(nil, "ReferenceError")
    SyntaxError = createErrorClass(nil, "SyntaxError")
    TypeError = createErrorClass(nil, "TypeError")
    URIError = createErrorClass(nil, "URIError")
end

local function __TS__ObjectGetOwnPropertyDescriptors(object)
    local metatable = getmetatable(object)
    if not metatable then
        return {}
    end
    return rawget(metatable, "_descriptors") or ({})
end

local function __TS__Delete(target, key)
    local descriptors = __TS__ObjectGetOwnPropertyDescriptors(target)
    local descriptor = descriptors[key]
    if descriptor then
        if not descriptor.configurable then
            error(
                __TS__New(
                    TypeError,
                    ((("Cannot delete property " .. tostring(key)) .. " of ") .. tostring(target)) .. "."
                ),
                0
            )
        end
        descriptors[key] = nil
        return true
    end
    target[key] = nil
    return true
end

local function __TS__StringAccess(self, index)
    if index >= 0 and index < #self then
        return string.sub(self, index + 1, index + 1)
    end
end

local function __TS__DelegatedYield(iterable)
    if type(iterable) == "string" then
        for index = 0, #iterable - 1 do
            coroutine.yield(__TS__StringAccess(iterable, index))
        end
    elseif iterable.____coroutine ~= nil then
        local co = iterable.____coroutine
        while true do
            local status, value = coroutine.resume(co)
            if not status then
                error(value, 0)
            end
            if coroutine.status(co) == "dead" then
                return value
            else
                coroutine.yield(value)
            end
        end
    elseif iterable[Symbol.iterator] then
        local iterator = iterable[Symbol.iterator](iterable)
        while true do
            local result = iterator:next()
            if result.done then
                return result.value
            else
                coroutine.yield(result.value)
            end
        end
    else
        for ____, value in ipairs(iterable) do
            coroutine.yield(value)
        end
    end
end

local function __TS__FunctionBind(fn, ...)
    local boundArgs = {...}
    return function(____, ...)
        local args = {...}
        __TS__ArrayUnshift(
            args,
            __TS__Unpack(boundArgs)
        )
        return fn(__TS__Unpack(args))
    end
end

local __TS__Generator
do
    local function generatorIterator(self)
        return self
    end
    local function generatorNext(self, ...)
        local co = self.____coroutine
        if coroutine.status(co) == "dead" then
            return {done = true}
        end
        local status, value = coroutine.resume(co, ...)
        if not status then
            error(value, 0)
        end
        return {
            value = value,
            done = coroutine.status(co) == "dead"
        }
    end
    function __TS__Generator(fn)
        return function(...)
            local args = {...}
            local argsLength = __TS__CountVarargs(...)
            return {
                ____coroutine = coroutine.create(function() return fn(__TS__Unpack(args, 1, argsLength)) end),
                [Symbol.iterator] = generatorIterator,
                next = generatorNext
            }
        end
    end
end

local function __TS__InstanceOfObject(value)
    local valueType = type(value)
    return valueType == "table" or valueType == "function"
end

local function __TS__LuaIteratorSpread(self, state, firstKey)
    local results = {}
    local key, value = self(state, firstKey)
    while key do
        results[#results + 1] = {key, value}
        key, value = self(state, key)
    end
    return __TS__Unpack(results)
end

local Map
do
    Map = __TS__Class()
    Map.name = "Map"
    function Map.prototype.____constructor(self, entries)
        self[Symbol.toStringTag] = "Map"
        self.items = {}
        self.size = 0
        self.nextKey = {}
        self.previousKey = {}
        if entries == nil then
            return
        end
        local iterable = entries
        if iterable[Symbol.iterator] then
            local iterator = iterable[Symbol.iterator](iterable)
            while true do
                local result = iterator:next()
                if result.done then
                    break
                end
                local value = result.value
                self:set(value[1], value[2])
            end
        else
            local array = entries
            for ____, kvp in ipairs(array) do
                self:set(kvp[1], kvp[2])
            end
        end
    end
    function Map.prototype.clear(self)
        self.items = {}
        self.nextKey = {}
        self.previousKey = {}
        self.firstKey = nil
        self.lastKey = nil
        self.size = 0
    end
    function Map.prototype.delete(self, key)
        local contains = self:has(key)
        if contains then
            self.size = self.size - 1
            local next = self.nextKey[key]
            local previous = self.previousKey[key]
            if next ~= nil and previous ~= nil then
                self.nextKey[previous] = next
                self.previousKey[next] = previous
            elseif next ~= nil then
                self.firstKey = next
                self.previousKey[next] = nil
            elseif previous ~= nil then
                self.lastKey = previous
                self.nextKey[previous] = nil
            else
                self.firstKey = nil
                self.lastKey = nil
            end
            self.nextKey[key] = nil
            self.previousKey[key] = nil
        end
        self.items[key] = nil
        return contains
    end
    function Map.prototype.forEach(self, callback)
        for ____, key in __TS__Iterator(self:keys()) do
            callback(nil, self.items[key], key, self)
        end
    end
    function Map.prototype.get(self, key)
        return self.items[key]
    end
    function Map.prototype.has(self, key)
        return self.nextKey[key] ~= nil or self.lastKey == key
    end
    function Map.prototype.set(self, key, value)
        local isNewValue = not self:has(key)
        if isNewValue then
            self.size = self.size + 1
        end
        self.items[key] = value
        if self.firstKey == nil then
            self.firstKey = key
            self.lastKey = key
        elseif isNewValue then
            self.nextKey[self.lastKey] = key
            self.previousKey[key] = self.lastKey
            self.lastKey = key
        end
        return self
    end
    Map.prototype[Symbol.iterator] = function(self)
        return self:entries()
    end
    function Map.prototype.entries(self)
        local items = self.items
        local nextKey = self.nextKey
        local key = self.firstKey
        return {
            [Symbol.iterator] = function(self)
                return self
            end,
            next = function(self)
                local result = {done = not key, value = {key, items[key]}}
                key = nextKey[key]
                return result
            end
        }
    end
    function Map.prototype.keys(self)
        local nextKey = self.nextKey
        local key = self.firstKey
        return {
            [Symbol.iterator] = function(self)
                return self
            end,
            next = function(self)
                local result = {done = not key, value = key}
                key = nextKey[key]
                return result
            end
        }
    end
    function Map.prototype.values(self)
        local items = self.items
        local nextKey = self.nextKey
        local key = self.firstKey
        return {
            [Symbol.iterator] = function(self)
                return self
            end,
            next = function(self)
                local result = {done = not key, value = items[key]}
                key = nextKey[key]
                return result
            end
        }
    end
    Map[Symbol.species] = Map
end

local function __TS__MapGroupBy(items, keySelector)
    local result = __TS__New(Map)
    local i = 0
    for ____, item in __TS__Iterator(items) do
        local key = keySelector(nil, item, i)
        if result:has(key) then
            local ____temp_0 = result:get(key)
            ____temp_0[#____temp_0 + 1] = item
        else
            result:set(key, {item})
        end
        i = i + 1
    end
    return result
end

local __TS__Match = string.match

local __TS__MathAtan2 = math.atan2 or math.atan

local __TS__MathModf = math.modf

local function __TS__NumberIsNaN(value)
    return value ~= value
end

local function __TS__MathSign(val)
    if __TS__NumberIsNaN(val) or val == 0 then
        return val
    end
    if val < 0 then
        return -1
    end
    return 1
end

local function __TS__NumberIsFinite(value)
    return type(value) == "number" and value == value and value ~= math.huge and value ~= -math.huge
end

local function __TS__MathTrunc(val)
    if not __TS__NumberIsFinite(val) or val == 0 then
        return val
    end
    return val > 0 and math.floor(val) or math.ceil(val)
end

local function __TS__Number(value)
    local valueType = type(value)
    if valueType == "number" then
        return value
    elseif valueType == "string" then
        local numberValue = tonumber(value)
        if numberValue then
            return numberValue
        end
        if value == "Infinity" then
            return math.huge
        end
        if value == "-Infinity" then
            return -math.huge
        end
        local stringWithoutSpaces = string.gsub(value, "%s", "")
        if stringWithoutSpaces == "" then
            return 0
        end
        return 0 / 0
    elseif valueType == "boolean" then
        return value and 1 or 0
    else
        return 0 / 0
    end
end

local function __TS__NumberIsInteger(value)
    return __TS__NumberIsFinite(value) and math.floor(value) == value
end

local function __TS__StringSubstring(self, start, ____end)
    if ____end ~= ____end then
        ____end = 0
    end
    if ____end ~= nil and start > ____end then
        start, ____end = ____end, start
    end
    if start >= 0 then
        start = start + 1
    else
        start = 1
    end
    if ____end ~= nil and ____end < 0 then
        ____end = 0
    end
    return string.sub(self, start, ____end)
end

local __TS__ParseInt
do
    local parseIntBasePattern = "0123456789aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTvVwWxXyYzZ"
    function __TS__ParseInt(numberString, base)
        if base == nil then
            base = 10
            local hexMatch = __TS__Match(numberString, "^%s*-?0[xX]")
            if hexMatch ~= nil then
                base = 16
                numberString = (__TS__Match(hexMatch, "-")) and "-" .. __TS__StringSubstring(numberString, #hexMatch) or __TS__StringSubstring(numberString, #hexMatch)
            end
        end
        if base < 2 or base > 36 then
            return 0 / 0
        end
        local allowedDigits = base <= 10 and __TS__StringSubstring(parseIntBasePattern, 0, base) or __TS__StringSubstring(parseIntBasePattern, 0, 10 + 2 * (base - 10))
        local pattern = ("^%s*(-?[" .. allowedDigits) .. "]*)"
        local number = tonumber((__TS__Match(numberString, pattern)), base)
        if number == nil then
            return 0 / 0
        end
        if number >= 0 then
            return math.floor(number)
        else
            return math.ceil(number)
        end
    end
end

local function __TS__ParseFloat(numberString)
    local infinityMatch = __TS__Match(numberString, "^%s*(-?Infinity)")
    if infinityMatch ~= nil then
        return __TS__StringAccess(infinityMatch, 0) == "-" and -math.huge or math.huge
    end
    local number = tonumber((__TS__Match(numberString, "^%s*(-?%d+%.?%d*)")))
    return number or 0 / 0
end

local __TS__NumberToString
do
    local radixChars = "0123456789abcdefghijklmnopqrstuvwxyz"
    function __TS__NumberToString(self, radix)
        if radix == nil or radix == 10 or self == math.huge or self == -math.huge or self ~= self then
            return tostring(self)
        end
        radix = math.floor(radix)
        if radix < 2 or radix > 36 then
            error("toString() radix argument must be between 2 and 36", 0)
        end
        local integer, fraction = __TS__MathModf(math.abs(self))
        local result = ""
        if radix == 8 then
            result = string.format("%o", integer)
        elseif radix == 16 then
            result = string.format("%x", integer)
        else
            repeat
                do
                    result = __TS__StringAccess(radixChars, integer % radix) .. result
                    integer = math.floor(integer / radix)
                end
            until not (integer ~= 0)
        end
        if fraction ~= 0 then
            result = result .. "."
            local delta = 1e-16
            repeat
                do
                    fraction = fraction * radix
                    delta = delta * radix
                    local digit = math.floor(fraction)
                    result = result .. __TS__StringAccess(radixChars, digit)
                    fraction = fraction - digit
                end
            until not (fraction >= delta)
        end
        if self < 0 then
            result = "-" .. result
        end
        return result
    end
end

local function __TS__NumberToFixed(self, fractionDigits)
    if math.abs(self) >= 1e+21 or self ~= self then
        return tostring(self)
    end
    local f = math.floor(fractionDigits or 0)
    if f < 0 or f > 99 then
        error("toFixed() digits argument must be between 0 and 99", 0)
    end
    return string.format(
        ("%." .. tostring(f)) .. "f",
        self
    )
end

local function __TS__ObjectDefineProperty(target, key, desc)
    local luaKey = type(key) == "number" and key + 1 or key
    local value = rawget(target, luaKey)
    local hasGetterOrSetter = desc.get ~= nil or desc.set ~= nil
    local descriptor
    if hasGetterOrSetter then
        if value ~= nil then
            error(
                "Cannot redefine property: " .. tostring(key),
                0
            )
        end
        descriptor = desc
    else
        local valueExists = value ~= nil
        local ____desc_set_4 = desc.set
        local ____desc_get_5 = desc.get
        local ____temp_0
        if desc.configurable ~= nil then
            ____temp_0 = desc.configurable
        else
            ____temp_0 = valueExists
        end
        local ____temp_1
        if desc.enumerable ~= nil then
            ____temp_1 = desc.enumerable
        else
            ____temp_1 = valueExists
        end
        local ____temp_2
        if desc.writable ~= nil then
            ____temp_2 = desc.writable
        else
            ____temp_2 = valueExists
        end
        local ____temp_3
        if desc.value ~= nil then
            ____temp_3 = desc.value
        else
            ____temp_3 = value
        end
        descriptor = {
            set = ____desc_set_4,
            get = ____desc_get_5,
            configurable = ____temp_0,
            enumerable = ____temp_1,
            writable = ____temp_2,
            value = ____temp_3
        }
    end
    __TS__SetDescriptor(target, luaKey, descriptor)
    return target
end

local function __TS__ObjectEntries(obj)
    local result = {}
    local len = 0
    for key in pairs(obj) do
        len = len + 1
        result[len] = {key, obj[key]}
    end
    return result
end

local function __TS__ObjectFromEntries(entries)
    local obj = {}
    local iterable = entries
    if iterable[Symbol.iterator] then
        local iterator = iterable[Symbol.iterator](iterable)
        while true do
            local result = iterator:next()
            if result.done then
                break
            end
            local value = result.value
            obj[value[1]] = value[2]
        end
    else
        for ____, entry in ipairs(entries) do
            obj[entry[1]] = entry[2]
        end
    end
    return obj
end

local function __TS__ObjectGroupBy(items, keySelector)
    local result = {}
    local i = 0
    for ____, item in __TS__Iterator(items) do
        local key = keySelector(nil, item, i)
        if result[key] ~= nil then
            local ____result_key_0 = result[key]
            ____result_key_0[#____result_key_0 + 1] = item
        else
            result[key] = {item}
        end
        i = i + 1
    end
    return result
end

local function __TS__ObjectKeys(obj)
    local result = {}
    local len = 0
    for key in pairs(obj) do
        len = len + 1
        result[len] = key
    end
    return result
end

local function __TS__ObjectRest(target, usedProperties)
    local result = {}
    for property in pairs(target) do
        if not usedProperties[property] then
            result[property] = target[property]
        end
    end
    return result
end

local function __TS__ObjectValues(obj)
    local result = {}
    local len = 0
    for key in pairs(obj) do
        len = len + 1
        result[len] = obj[key]
    end
    return result
end

local function __TS__PromiseAll(iterable)
    local results = {}
    local toResolve = {}
    local numToResolve = 0
    local i = 0
    for ____, item in __TS__Iterator(iterable) do
        if __TS__InstanceOf(item, __TS__Promise) then
            if item.state == 1 then
                results[i + 1] = item.value
            elseif item.state == 2 then
                return __TS__Promise.reject(item.rejectionReason)
            else
                numToResolve = numToResolve + 1
                toResolve[i] = item
            end
        else
            results[i + 1] = item
        end
        i = i + 1
    end
    if numToResolve == 0 then
        return __TS__Promise.resolve(results)
    end
    return __TS__New(
        __TS__Promise,
        function(____, resolve, reject)
            for index, promise in pairs(toResolve) do
                promise["then"](
                    promise,
                    function(____, data)
                        results[index + 1] = data
                        numToResolve = numToResolve - 1
                        if numToResolve == 0 then
                            resolve(nil, results)
                        end
                    end,
                    function(____, reason)
                        reject(nil, reason)
                    end
                )
            end
        end
    )
end

local function __TS__PromiseAllSettled(iterable)
    local results = {}
    local toResolve = {}
    local numToResolve = 0
    local i = 0
    for ____, item in __TS__Iterator(iterable) do
        if __TS__InstanceOf(item, __TS__Promise) then
            if item.state == 1 then
                results[i + 1] = {status = "fulfilled", value = item.value}
            elseif item.state == 2 then
                results[i + 1] = {status = "rejected", reason = item.rejectionReason}
            else
                numToResolve = numToResolve + 1
                toResolve[i] = item
            end
        else
            results[i + 1] = {status = "fulfilled", value = item}
        end
        i = i + 1
    end
    if numToResolve == 0 then
        return __TS__Promise.resolve(results)
    end
    return __TS__New(
        __TS__Promise,
        function(____, resolve)
            for index, promise in pairs(toResolve) do
                promise["then"](
                    promise,
                    function(____, data)
                        results[index + 1] = {status = "fulfilled", value = data}
                        numToResolve = numToResolve - 1
                        if numToResolve == 0 then
                            resolve(nil, results)
                        end
                    end,
                    function(____, reason)
                        results[index + 1] = {status = "rejected", reason = reason}
                        numToResolve = numToResolve - 1
                        if numToResolve == 0 then
                            resolve(nil, results)
                        end
                    end
                )
            end
        end
    )
end

local function __TS__PromiseAny(iterable)
    local rejections = {}
    local pending = {}
    for ____, item in __TS__Iterator(iterable) do
        if __TS__InstanceOf(item, __TS__Promise) then
            if item.state == 1 then
                return __TS__Promise.resolve(item.value)
            elseif item.state == 2 then
                rejections[#rejections + 1] = item.rejectionReason
            else
                pending[#pending + 1] = item
            end
        else
            return __TS__Promise.resolve(item)
        end
    end
    if #pending == 0 then
        return __TS__Promise.reject("No promises to resolve with .any()")
    end
    local numResolved = 0
    return __TS__New(
        __TS__Promise,
        function(____, resolve, reject)
            for ____, promise in ipairs(pending) do
                promise["then"](
                    promise,
                    function(____, data)
                        resolve(nil, data)
                    end,
                    function(____, reason)
                        rejections[#rejections + 1] = reason
                        numResolved = numResolved + 1
                        if numResolved == #pending then
                            reject(nil, {name = "AggregateError", message = "All Promises rejected", errors = rejections})
                        end
                    end
                )
            end
        end
    )
end

local function __TS__PromiseRace(iterable)
    local pending = {}
    for ____, item in __TS__Iterator(iterable) do
        if __TS__InstanceOf(item, __TS__Promise) then
            if item.state == 1 then
                return __TS__Promise.resolve(item.value)
            elseif item.state == 2 then
                return __TS__Promise.reject(item.rejectionReason)
            else
                pending[#pending + 1] = item
            end
        else
            return __TS__Promise.resolve(item)
        end
    end
    return __TS__New(
        __TS__Promise,
        function(____, resolve, reject)
            for ____, promise in ipairs(pending) do
                promise["then"](
                    promise,
                    function(____, value) return resolve(nil, value) end,
                    function(____, reason) return reject(nil, reason) end
                )
            end
        end
    )
end

local Set
do
    Set = __TS__Class()
    Set.name = "Set"
    function Set.prototype.____constructor(self, values)
        self[Symbol.toStringTag] = "Set"
        self.size = 0
        self.nextKey = {}
        self.previousKey = {}
        if values == nil then
            return
        end
        local iterable = values
        if iterable[Symbol.iterator] then
            local iterator = iterable[Symbol.iterator](iterable)
            while true do
                local result = iterator:next()
                if result.done then
                    break
                end
                self:add(result.value)
            end
        else
            local array = values
            for ____, value in ipairs(array) do
                self:add(value)
            end
        end
    end
    function Set.prototype.add(self, value)
        local isNewValue = not self:has(value)
        if isNewValue then
            self.size = self.size + 1
        end
        if self.firstKey == nil then
            self.firstKey = value
            self.lastKey = value
        elseif isNewValue then
            self.nextKey[self.lastKey] = value
            self.previousKey[value] = self.lastKey
            self.lastKey = value
        end
        return self
    end
    function Set.prototype.clear(self)
        self.nextKey = {}
        self.previousKey = {}
        self.firstKey = nil
        self.lastKey = nil
        self.size = 0
    end
    function Set.prototype.delete(self, value)
        local contains = self:has(value)
        if contains then
            self.size = self.size - 1
            local next = self.nextKey[value]
            local previous = self.previousKey[value]
            if next ~= nil and previous ~= nil then
                self.nextKey[previous] = next
                self.previousKey[next] = previous
            elseif next ~= nil then
                self.firstKey = next
                self.previousKey[next] = nil
            elseif previous ~= nil then
                self.lastKey = previous
                self.nextKey[previous] = nil
            else
                self.firstKey = nil
                self.lastKey = nil
            end
            self.nextKey[value] = nil
            self.previousKey[value] = nil
        end
        return contains
    end
    function Set.prototype.forEach(self, callback)
        for ____, key in __TS__Iterator(self:keys()) do
            callback(nil, key, key, self)
        end
    end
    function Set.prototype.has(self, value)
        return self.nextKey[value] ~= nil or self.lastKey == value
    end
    Set.prototype[Symbol.iterator] = function(self)
        return self:values()
    end
    function Set.prototype.entries(self)
        local nextKey = self.nextKey
        local key = self.firstKey
        return {
            [Symbol.iterator] = function(self)
                return self
            end,
            next = function(self)
                local result = {done = not key, value = {key, key}}
                key = nextKey[key]
                return result
            end
        }
    end
    function Set.prototype.keys(self)
        local nextKey = self.nextKey
        local key = self.firstKey
        return {
            [Symbol.iterator] = function(self)
                return self
            end,
            next = function(self)
                local result = {done = not key, value = key}
                key = nextKey[key]
                return result
            end
        }
    end
    function Set.prototype.values(self)
        local nextKey = self.nextKey
        local key = self.firstKey
        return {
            [Symbol.iterator] = function(self)
                return self
            end,
            next = function(self)
                local result = {done = not key, value = key}
                key = nextKey[key]
                return result
            end
        }
    end
    function Set.prototype.union(self, other)
        local result = __TS__New(Set, self)
        for ____, item in __TS__Iterator(other) do
            result:add(item)
        end
        return result
    end
    function Set.prototype.intersection(self, other)
        local result = __TS__New(Set)
        for ____, item in __TS__Iterator(self) do
            if other:has(item) then
                result:add(item)
            end
        end
        return result
    end
    function Set.prototype.difference(self, other)
        local result = __TS__New(Set, self)
        for ____, item in __TS__Iterator(other) do
            result:delete(item)
        end
        return result
    end
    function Set.prototype.symmetricDifference(self, other)
        local result = __TS__New(Set, self)
        for ____, item in __TS__Iterator(other) do
            if self:has(item) then
                result:delete(item)
            else
                result:add(item)
            end
        end
        return result
    end
    function Set.prototype.isSubsetOf(self, other)
        for ____, item in __TS__Iterator(self) do
            if not other:has(item) then
                return false
            end
        end
        return true
    end
    function Set.prototype.isSupersetOf(self, other)
        for ____, item in __TS__Iterator(other) do
            if not self:has(item) then
                return false
            end
        end
        return true
    end
    function Set.prototype.isDisjointFrom(self, other)
        for ____, item in __TS__Iterator(self) do
            if other:has(item) then
                return false
            end
        end
        return true
    end
    Set[Symbol.species] = Set
end

local function __TS__SparseArrayNew(...)
    local sparseArray = {...}
    sparseArray.sparseLength = __TS__CountVarargs(...)
    return sparseArray
end

local function __TS__SparseArrayPush(sparseArray, ...)
    local args = {...}
    local argsLen = __TS__CountVarargs(...)
    local listLen = sparseArray.sparseLength
    for i = 1, argsLen do
        sparseArray[listLen + i] = args[i]
    end
    sparseArray.sparseLength = listLen + argsLen
end

local function __TS__SparseArraySpread(sparseArray)
    local _unpack = unpack or table.unpack
    return _unpack(sparseArray, 1, sparseArray.sparseLength)
end

local WeakMap
do
    WeakMap = __TS__Class()
    WeakMap.name = "WeakMap"
    function WeakMap.prototype.____constructor(self, entries)
        self[Symbol.toStringTag] = "WeakMap"
        self.items = {}
        setmetatable(self.items, {__mode = "k"})
        if entries == nil then
            return
        end
        local iterable = entries
        if iterable[Symbol.iterator] then
            local iterator = iterable[Symbol.iterator](iterable)
            while true do
                local result = iterator:next()
                if result.done then
                    break
                end
                local value = result.value
                self.items[value[1]] = value[2]
            end
        else
            for ____, kvp in ipairs(entries) do
                self.items[kvp[1]] = kvp[2]
            end
        end
    end
    function WeakMap.prototype.delete(self, key)
        local contains = self:has(key)
        self.items[key] = nil
        return contains
    end
    function WeakMap.prototype.get(self, key)
        return self.items[key]
    end
    function WeakMap.prototype.has(self, key)
        return self.items[key] ~= nil
    end
    function WeakMap.prototype.set(self, key, value)
        self.items[key] = value
        return self
    end
    WeakMap[Symbol.species] = WeakMap
end

local WeakSet
do
    WeakSet = __TS__Class()
    WeakSet.name = "WeakSet"
    function WeakSet.prototype.____constructor(self, values)
        self[Symbol.toStringTag] = "WeakSet"
        self.items = {}
        setmetatable(self.items, {__mode = "k"})
        if values == nil then
            return
        end
        local iterable = values
        if iterable[Symbol.iterator] then
            local iterator = iterable[Symbol.iterator](iterable)
            while true do
                local result = iterator:next()
                if result.done then
                    break
                end
                self.items[result.value] = true
            end
        else
            for ____, value in ipairs(values) do
                self.items[value] = true
            end
        end
    end
    function WeakSet.prototype.add(self, value)
        self.items[value] = true
        return self
    end
    function WeakSet.prototype.delete(self, value)
        local contains = self:has(value)
        self.items[value] = nil
        return contains
    end
    function WeakSet.prototype.has(self, value)
        return self.items[value] == true
    end
    WeakSet[Symbol.species] = WeakSet
end

local function __TS__SourceMapTraceBack(fileName, sourceMap)
    _G.__TS__sourcemap = _G.__TS__sourcemap or ({})
    _G.__TS__sourcemap[fileName] = sourceMap
    if _G.__TS__originalTraceback == nil then
        local originalTraceback = debug.traceback
        _G.__TS__originalTraceback = originalTraceback
        debug.traceback = function(thread, message, level)
            local trace
            if thread == nil and message == nil and level == nil then
                trace = originalTraceback()
            elseif __TS__StringIncludes(_VERSION, "Lua 5.0") then
                trace = originalTraceback((("[Level " .. tostring(level)) .. "] ") .. tostring(message))
            else
                trace = originalTraceback(thread, message, level)
            end
            if type(trace) ~= "string" then
                return trace
            end
            local function replacer(____, file, srcFile, line)
                local fileSourceMap = _G.__TS__sourcemap[file]
                if fileSourceMap ~= nil and fileSourceMap[line] ~= nil then
                    local data = fileSourceMap[line]
                    if type(data) == "number" then
                        return (srcFile .. ":") .. tostring(data)
                    end
                    return (data.file .. ":") .. tostring(data.line)
                end
                return (file .. ":") .. line
            end
            local result = string.gsub(
                trace,
                "(%S+)%.lua:(%d+)",
                function(file, line) return replacer(nil, file .. ".lua", file .. ".ts", line) end
            )
            local function stringReplacer(____, file, line)
                local fileSourceMap = _G.__TS__sourcemap[file]
                if fileSourceMap ~= nil and fileSourceMap[line] ~= nil then
                    local chunkName = (__TS__Match(file, "%[string \"([^\"]+)\"%]"))
                    local sourceName = string.gsub(chunkName, ".lua$", ".ts")
                    local data = fileSourceMap[line]
                    if type(data) == "number" then
                        return (sourceName .. ":") .. tostring(data)
                    end
                    return (data.file .. ":") .. tostring(data.line)
                end
                return (file .. ":") .. line
            end
            result = string.gsub(
                result,
                "(%[string \"[^\"]+\"%]):(%d+)",
                function(file, line) return stringReplacer(nil, file, line) end
            )
            return result
        end
    end
end

local function __TS__Spread(iterable)
    local arr = {}
    if type(iterable) == "string" then
        for i = 0, #iterable - 1 do
            arr[i + 1] = __TS__StringAccess(iterable, i)
        end
    else
        local len = 0
        for ____, item in __TS__Iterator(iterable) do
            len = len + 1
            arr[len] = item
        end
    end
    return __TS__Unpack(arr)
end

local function __TS__StringCharAt(self, pos)
    if pos ~= pos then
        pos = 0
    end
    if pos < 0 then
        return ""
    end
    return string.sub(self, pos + 1, pos + 1)
end

local function __TS__StringCharCodeAt(self, index)
    if index ~= index then
        index = 0
    end
    if index < 0 then
        return 0 / 0
    end
    return string.byte(self, index + 1) or 0 / 0
end

local function __TS__StringEndsWith(self, searchString, endPosition)
    if endPosition == nil or endPosition > #self then
        endPosition = #self
    end
    return string.sub(self, endPosition - #searchString + 1, endPosition) == searchString
end

local function __TS__StringPadEnd(self, maxLength, fillString)
    if fillString == nil then
        fillString = " "
    end
    if maxLength ~= maxLength then
        maxLength = 0
    end
    if maxLength == -math.huge or maxLength == math.huge then
        error("Invalid string length", 0)
    end
    if #self >= maxLength or #fillString == 0 then
        return self
    end
    maxLength = maxLength - #self
    if maxLength > #fillString then
        fillString = fillString .. string.rep(
            fillString,
            math.floor(maxLength / #fillString)
        )
    end
    return self .. string.sub(
        fillString,
        1,
        math.floor(maxLength)
    )
end

local function __TS__StringPadStart(self, maxLength, fillString)
    if fillString == nil then
        fillString = " "
    end
    if maxLength ~= maxLength then
        maxLength = 0
    end
    if maxLength == -math.huge or maxLength == math.huge then
        error("Invalid string length", 0)
    end
    if #self >= maxLength or #fillString == 0 then
        return self
    end
    maxLength = maxLength - #self
    if maxLength > #fillString then
        fillString = fillString .. string.rep(
            fillString,
            math.floor(maxLength / #fillString)
        )
    end
    return string.sub(
        fillString,
        1,
        math.floor(maxLength)
    ) .. self
end

local __TS__StringReplace
do
    local sub = string.sub
    function __TS__StringReplace(source, searchValue, replaceValue)
        local startPos, endPos = string.find(source, searchValue, nil, true)
        if not startPos then
            return source
        end
        local before = sub(source, 1, startPos - 1)
        local replacement = type(replaceValue) == "string" and replaceValue or replaceValue(nil, searchValue, startPos - 1, source)
        local after = sub(source, endPos + 1)
        return (before .. replacement) .. after
    end
end

local __TS__StringSplit
do
    local sub = string.sub
    local find = string.find
    function __TS__StringSplit(source, separator, limit)
        if limit == nil then
            limit = 4294967295
        end
        if limit == 0 then
            return {}
        end
        local result = {}
        local resultIndex = 1
        if separator == nil or separator == "" then
            for i = 1, #source do
                result[resultIndex] = sub(source, i, i)
                resultIndex = resultIndex + 1
            end
        else
            local currentPos = 1
            while resultIndex <= limit do
                local startPos, endPos = find(source, separator, currentPos, true)
                if not startPos then
                    break
                end
                result[resultIndex] = sub(source, currentPos, startPos - 1)
                resultIndex = resultIndex + 1
                currentPos = endPos + 1
            end
            if resultIndex <= limit then
                result[resultIndex] = sub(source, currentPos)
            end
        end
        return result
    end
end

local __TS__StringReplaceAll
do
    local sub = string.sub
    local find = string.find
    function __TS__StringReplaceAll(source, searchValue, replaceValue)
        if type(replaceValue) == "string" then
            local concat = table.concat(
                __TS__StringSplit(source, searchValue),
                replaceValue
            )
            if #searchValue == 0 then
                return (replaceValue .. concat) .. replaceValue
            end
            return concat
        end
        local parts = {}
        local partsIndex = 1
        if #searchValue == 0 then
            parts[1] = replaceValue(nil, "", 0, source)
            partsIndex = 2
            for i = 1, #source do
                parts[partsIndex] = sub(source, i, i)
                parts[partsIndex + 1] = replaceValue(nil, "", i, source)
                partsIndex = partsIndex + 2
            end
        else
            local currentPos = 1
            while true do
                local startPos, endPos = find(source, searchValue, currentPos, true)
                if not startPos then
                    break
                end
                parts[partsIndex] = sub(source, currentPos, startPos - 1)
                parts[partsIndex + 1] = replaceValue(nil, searchValue, startPos - 1, source)
                partsIndex = partsIndex + 2
                currentPos = endPos + 1
            end
            parts[partsIndex] = sub(source, currentPos)
        end
        return table.concat(parts)
    end
end

local function __TS__StringSlice(self, start, ____end)
    if start == nil or start ~= start then
        start = 0
    end
    if ____end ~= ____end then
        ____end = 0
    end
    if start >= 0 then
        start = start + 1
    end
    if ____end ~= nil and ____end < 0 then
        ____end = ____end - 1
    end
    return string.sub(self, start, ____end)
end

local function __TS__StringStartsWith(self, searchString, position)
    if position == nil or position < 0 then
        position = 0
    end
    return string.sub(self, position + 1, #searchString + position) == searchString
end

local function __TS__StringSubstr(self, from, length)
    if from ~= from then
        from = 0
    end
    if length ~= nil then
        if length ~= length or length <= 0 then
            return ""
        end
        length = length + from
    end
    if from >= 0 then
        from = from + 1
    end
    return string.sub(self, from, length)
end

local function __TS__StringTrim(self)
    local result = string.gsub(self, "^[%s ﻿]*(.-)[%s ﻿]*$", "%1")
    return result
end

local function __TS__StringTrimEnd(self)
    local result = string.gsub(self, "[%s ﻿]*$", "")
    return result
end

local function __TS__StringTrimStart(self)
    local result = string.gsub(self, "^[%s ﻿]*", "")
    return result
end

local __TS__SymbolRegistryFor, __TS__SymbolRegistryKeyFor
do
    local symbolRegistry = {}
    function __TS__SymbolRegistryFor(key)
        if not symbolRegistry[key] then
            symbolRegistry[key] = __TS__Symbol(key)
        end
        return symbolRegistry[key]
    end
    function __TS__SymbolRegistryKeyFor(sym)
        for key in pairs(symbolRegistry) do
            if symbolRegistry[key] == sym then
                return key
            end
        end
        return nil
    end
end

local function __TS__TypeOf(value)
    local luaType = type(value)
    if luaType == "table" then
        return "object"
    elseif luaType == "nil" then
        return "undefined"
    else
        return luaType
    end
end

local function __TS__Using(self, cb, ...)
    local args = {...}
    local thrownError
    local ok, result = xpcall(
        function() return cb(
            nil,
            __TS__Unpack(args)
        ) end,
        function(err)
            thrownError = err
            return thrownError
        end
    )
    local argArray = {__TS__Unpack(args)}
    do
        local i = #argArray - 1
        while i >= 0 do
            local ____self_0 = argArray[i + 1]
            ____self_0[Symbol.dispose](____self_0)
            i = i - 1
        end
    end
    if not ok then
        error(thrownError, 0)
    end
    return result
end

local function __TS__UsingAsync(self, cb, ...)
    local args = {...}
    return __TS__AsyncAwaiter(function(____awaiter_resolve)
        local thrownError
        local ok, result = xpcall(
            function() return cb(
                nil,
                __TS__Unpack(args)
            ) end,
            function(err)
                thrownError = err
                return thrownError
            end
        )
        local argArray = {__TS__Unpack(args)}
        do
            local i = #argArray - 1
            while i >= 0 do
                if argArray[i + 1][Symbol.dispose] ~= nil then
                    local ____self_0 = argArray[i + 1]
                    ____self_0[Symbol.dispose](____self_0)
                end
                if argArray[i + 1][Symbol.asyncDispose] ~= nil then
                    local ____self_1 = argArray[i + 1]
                    __TS__Await(____self_1[Symbol.asyncDispose](____self_1))
                end
                i = i - 1
            end
        end
        if not ok then
            error(thrownError, 0)
        end
        return ____awaiter_resolve(nil, result)
    end)
end

return {
  __TS__ArrayAt = __TS__ArrayAt,
  __TS__ArrayConcat = __TS__ArrayConcat,
  __TS__ArrayEntries = __TS__ArrayEntries,
  __TS__ArrayEvery = __TS__ArrayEvery,
  __TS__ArrayFill = __TS__ArrayFill,
  __TS__ArrayFilter = __TS__ArrayFilter,
  __TS__ArrayForEach = __TS__ArrayForEach,
  __TS__ArrayFind = __TS__ArrayFind,
  __TS__ArrayFindIndex = __TS__ArrayFindIndex,
  __TS__ArrayFrom = __TS__ArrayFrom,
  __TS__ArrayIncludes = __TS__ArrayIncludes,
  __TS__ArrayIndexOf = __TS__ArrayIndexOf,
  __TS__ArrayIsArray = __TS__ArrayIsArray,
  __TS__ArrayJoin = __TS__ArrayJoin,
  __TS__ArrayMap = __TS__ArrayMap,
  __TS__ArrayPush = __TS__ArrayPush,
  __TS__ArrayPushArray = __TS__ArrayPushArray,
  __TS__ArrayReduce = __TS__ArrayReduce,
  __TS__ArrayReduceRight = __TS__ArrayReduceRight,
  __TS__ArrayReverse = __TS__ArrayReverse,
  __TS__ArrayUnshift = __TS__ArrayUnshift,
  __TS__ArraySort = __TS__ArraySort,
  __TS__ArraySlice = __TS__ArraySlice,
  __TS__ArraySome = __TS__ArraySome,
  __TS__ArraySplice = __TS__ArraySplice,
  __TS__ArrayToObject = __TS__ArrayToObject,
  __TS__ArrayFlat = __TS__ArrayFlat,
  __TS__ArrayFlatMap = __TS__ArrayFlatMap,
  __TS__ArraySetLength = __TS__ArraySetLength,
  __TS__ArrayToReversed = __TS__ArrayToReversed,
  __TS__ArrayToSorted = __TS__ArrayToSorted,
  __TS__ArrayToSpliced = __TS__ArrayToSpliced,
  __TS__ArrayWith = __TS__ArrayWith,
  __TS__AsyncAwaiter = __TS__AsyncAwaiter,
  __TS__Await = __TS__Await,
  __TS__Class = __TS__Class,
  __TS__ClassExtends = __TS__ClassExtends,
  __TS__CloneDescriptor = __TS__CloneDescriptor,
  __TS__CountVarargs = __TS__CountVarargs,
  __TS__Decorate = __TS__Decorate,
  __TS__DecorateLegacy = __TS__DecorateLegacy,
  __TS__DecorateParam = __TS__DecorateParam,
  __TS__Delete = __TS__Delete,
  __TS__DelegatedYield = __TS__DelegatedYield,
  __TS__DescriptorGet = __TS__DescriptorGet,
  __TS__DescriptorSet = __TS__DescriptorSet,
  Error = Error,
  RangeError = RangeError,
  ReferenceError = ReferenceError,
  SyntaxError = SyntaxError,
  TypeError = TypeError,
  URIError = URIError,
  __TS__FunctionBind = __TS__FunctionBind,
  __TS__Generator = __TS__Generator,
  __TS__InstanceOf = __TS__InstanceOf,
  __TS__InstanceOfObject = __TS__InstanceOfObject,
  __TS__Iterator = __TS__Iterator,
  __TS__LuaIteratorSpread = __TS__LuaIteratorSpread,
  Map = Map,
  __TS__MapGroupBy = __TS__MapGroupBy,
  __TS__Match = __TS__Match,
  __TS__MathAtan2 = __TS__MathAtan2,
  __TS__MathModf = __TS__MathModf,
  __TS__MathSign = __TS__MathSign,
  __TS__MathTrunc = __TS__MathTrunc,
  __TS__New = __TS__New,
  __TS__Number = __TS__Number,
  __TS__NumberIsFinite = __TS__NumberIsFinite,
  __TS__NumberIsInteger = __TS__NumberIsInteger,
  __TS__NumberIsNaN = __TS__NumberIsNaN,
  __TS__ParseInt = __TS__ParseInt,
  __TS__ParseFloat = __TS__ParseFloat,
  __TS__NumberToString = __TS__NumberToString,
  __TS__NumberToFixed = __TS__NumberToFixed,
  __TS__ObjectAssign = __TS__ObjectAssign,
  __TS__ObjectDefineProperty = __TS__ObjectDefineProperty,
  __TS__ObjectEntries = __TS__ObjectEntries,
  __TS__ObjectFromEntries = __TS__ObjectFromEntries,
  __TS__ObjectGetOwnPropertyDescriptor = __TS__ObjectGetOwnPropertyDescriptor,
  __TS__ObjectGetOwnPropertyDescriptors = __TS__ObjectGetOwnPropertyDescriptors,
  __TS__ObjectGroupBy = __TS__ObjectGroupBy,
  __TS__ObjectKeys = __TS__ObjectKeys,
  __TS__ObjectRest = __TS__ObjectRest,
  __TS__ObjectValues = __TS__ObjectValues,
  __TS__ParseFloat = __TS__ParseFloat,
  __TS__ParseInt = __TS__ParseInt,
  __TS__Promise = __TS__Promise,
  __TS__PromiseAll = __TS__PromiseAll,
  __TS__PromiseAllSettled = __TS__PromiseAllSettled,
  __TS__PromiseAny = __TS__PromiseAny,
  __TS__PromiseRace = __TS__PromiseRace,
  Set = Set,
  __TS__SetDescriptor = __TS__SetDescriptor,
  __TS__SparseArrayNew = __TS__SparseArrayNew,
  __TS__SparseArrayPush = __TS__SparseArrayPush,
  __TS__SparseArraySpread = __TS__SparseArraySpread,
  WeakMap = WeakMap,
  WeakSet = WeakSet,
  __TS__SourceMapTraceBack = __TS__SourceMapTraceBack,
  __TS__Spread = __TS__Spread,
  __TS__StringAccess = __TS__StringAccess,
  __TS__StringCharAt = __TS__StringCharAt,
  __TS__StringCharCodeAt = __TS__StringCharCodeAt,
  __TS__StringEndsWith = __TS__StringEndsWith,
  __TS__StringIncludes = __TS__StringIncludes,
  __TS__StringPadEnd = __TS__StringPadEnd,
  __TS__StringPadStart = __TS__StringPadStart,
  __TS__StringReplace = __TS__StringReplace,
  __TS__StringReplaceAll = __TS__StringReplaceAll,
  __TS__StringSlice = __TS__StringSlice,
  __TS__StringSplit = __TS__StringSplit,
  __TS__StringStartsWith = __TS__StringStartsWith,
  __TS__StringSubstr = __TS__StringSubstr,
  __TS__StringSubstring = __TS__StringSubstring,
  __TS__StringTrim = __TS__StringTrim,
  __TS__StringTrimEnd = __TS__StringTrimEnd,
  __TS__StringTrimStart = __TS__StringTrimStart,
  __TS__Symbol = __TS__Symbol,
  Symbol = Symbol,
  __TS__SymbolRegistryFor = __TS__SymbolRegistryFor,
  __TS__SymbolRegistryKeyFor = __TS__SymbolRegistryKeyFor,
  __TS__TypeOf = __TS__TypeOf,
  __TS__Unpack = __TS__Unpack,
  __TS__Using = __TS__Using,
  __TS__UsingAsync = __TS__UsingAsync
}
 end,
["src.auras"] = function(...) 
local ____lualib = require("lualib_bundle")
local __TS__ArrayMap = ____lualib.__TS__ArrayMap
local __TS__ArrayIncludes = ____lualib.__TS__ArrayIncludes
local ____exports = {}
---
-- @noSelfInFile
local defensiveCdsWeTrack = __TS__ArrayMap(
    {
        "Barkskin",
        "Ironbark",
        "Obsidian Scales",
        "Renewing Blaze",
        "Survival Instincts",
        "Die By The Sword",
        "Divine Shield",
        "Shield of Vengeance",
        "Blessing of Protection",
        "Blessing of Sacrifice",
        "Icebound Fortitude",
        "Pain Suppression",
        "Astral Shift",
        "Evasion",
        "Cloak Of Shadows",
        "Ice Block",
        "Alter Time",
        "Blur",
        "Darkness",
        "Aspect of the Turtle",
        "Anti-magic Zone",
        "Fortifying brew",
        "Dampen Harm",
        "Diffuse Magic",
        "Unending Resolve"
    },
    function(____, s) return string.lower(s) end
)
____exports.dangerousDebuffs = {
    "Feral Frenzy",
    "Final Reckoning",
    "Vendetta",
    "Deathmark",
    "Summon Demonic Tyrant",
    "Unstable Affliction"
}
local offensiveCdsWeTrack = __TS__ArrayMap(
    {
        "Avatar",
        "Bladestorm",
        "Recklessness",
        "Metamorphosis",
        "Pillar of Frost",
        "Unholy Frenzy",
        "Berserk",
        "Celestial Alignment",
        "Ascendance",
        "Bloodlust",
        "Trueshot Aura",
        "Bestial Wrath",
        "Combustion",
        "Icy Veins",
        "Arcane Power",
        "Serenity",
        "Avenging Wrath",
        "Power Infusion",
        "Voidform",
        "Shadow Dance",
        "Adrenaline Rush",
        "Dark Soul: Instability",
        "Dark Soul: Misery"
    },
    function(____, s) return string.lower(s) end
)
function ____exports.getBuffIndex(playerClass, source, name, spellId)
    if source == "player" then
        if playerClass.name == "DRUID" then
            if name == "Ironbark" then
                return "externaldefbuff"
            end
            if name == "Lifebloom" then
                return 0
            end
            if name == "Rejuvenation" then
                return 1
            end
            if name == "Regrowth" then
                return 2
            end
            if name == "Cenarion Ward" then
                return 3
            end
            if name == "Wild Growth" then
                return 4
            end
        end
        if playerClass.name == "EVOKER" then
            if name == "Time Dilation" then
                return "externaldefbuff"
            end
            if spellId == 366155 then
                return 0
            end
            if spellId == 367364 then
                return 1
            end
            if spellId == 355941 then
                return 2
            end
            if spellId == 376788 then
                return 3
            end
            if name == "Spiritbloom" then
                return 4
            end
            if name == "Echo" then
                return 5
            end
            if name == "Lifebind" then
                return 6
            end
        end
        if playerClass.name == "SHAMAN" then
            if name == "Earthen Wall Totem" then
                return "externaldefbuff"
            end
            if name == "Earth Shield" then
                return 0
            end
            if name == "Riptide" then
                return 1
            end
        end
    end
    if __TS__ArrayIncludes(
        defensiveCdsWeTrack,
        string.lower(name)
    ) then
        return "defcd"
    end
    if __TS__ArrayIncludes(
        offensiveCdsWeTrack,
        string.lower(name)
    ) then
        return "offcd"
    end
    return nil
end
return ____exports
 end,
["src.config"] = function(...) 
--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
function ____exports.makeConfig()
    return {
        unitFrame_fullHeight = 150,
        unitFrame_fullWidth = 400,
        unitFrame_verticalGap = 8,
        unitFrame_horizontalGap = 20,
        unitFrame_cooldownSectionPercentage = 0.4,
        unitFrame_cooldownBackgroundColor = {r = 86, g = 86, b = 86},
        unitFrame_targetHighlightColor = {r = 0, g = 0, b = 200, a = 1},
        unitFrame_focusHighlightColor = {r = 255, g = 20, b = 147, a = 1},
        unitFrame_bigIconSize = 48,
        unitFrame_bigIconGap = 8,
        unitFrame_smallIconSize = 32,
        unitFrame_smallIconGap = 6
    }
end
return ____exports
 end,
["src.utils"] = function(...) 
local ____lualib = require("lualib_bundle")
local Error = ____lualib.Error
local RangeError = ____lualib.RangeError
local ReferenceError = ____lualib.ReferenceError
local SyntaxError = ____lualib.SyntaxError
local TypeError = ____lualib.TypeError
local URIError = ____lualib.URIError
local __TS__New = ____lualib.__TS__New
local ____exports = {}
---
-- @noSelfInFile
function ____exports.isNil(t)
    return t == nil or t == nil
end
function ____exports.checkAllCasesHandled(a)
    error(
        __TS__New(
            Error,
            "Can't be here: " .. JSON:stringify(a)
        ),
        0
    )
end
return ____exports
 end,
["src.dispellable"] = function(...) 
--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
local specCanDispel
local ____utils = require("src.utils")
local isNil = ____utils.isNil
function ____exports.playerCanDispelFromParty(dispelType)
    local specIndex = GetSpecialization() or 1
    local spec = GetSpecializationInfo(specIndex)
    if not isNil(spec) then
        local specDispels = specCanDispel[spec[1]]
        if specDispels and specDispels[dispelType] == true then
            return true
        else
            return false
        end
    else
        return false
    end
end
specCanDispel = {
    [62] = {Curse = true},
    [63] = {Curse = true},
    [64] = {Curse = true},
    [65] = {Magic = true, Poison = true, Disease = true},
    [66] = {Poison = true, Disease = true},
    [70] = {Poison = true, Disease = true},
    [102] = {Curse = true, Poison = true},
    [103] = {Curse = true, Poison = true},
    [104] = {Curse = true, Poison = true},
    [105] = {Magic = true, Curse = true, Poison = true},
    [256] = {Magic = true, Disease = true},
    [257] = {Magic = true, Disease = true},
    [258] = {Magic = true, Disease = true},
    [262] = {Curse = true},
    [263] = {Curse = true},
    [264] = {Magic = true, Curse = true},
    [268] = {Poison = true, Disease = true},
    [269] = {Poison = true, Disease = true},
    [270] = {Magic = true, Poison = true, Disease = true},
    [1467] = {
        Poison = true,
        Disease = function() return (IsUsableSpell((GetSpellInfo(374251)))) end,
        Curse = function() return (IsUsableSpell((GetSpellInfo(374251)))) end
    },
    [1468] = {
        Magic = true,
        Poison = true,
        Disease = function() return (IsUsableSpell((GetSpellInfo(374251)))) end,
        Curse = function() return (IsUsableSpell((GetSpellInfo(374251)))) end
    },
    [1473] = {
        Poison = true,
        Disease = function() return (IsUsableSpell((GetSpellInfo(374251)))) end,
        Curse = function() return (IsUsableSpell((GetSpellInfo(374251)))) end
    },
    [577] = {Magic = false},
    [581] = {Magic = false}
}
return ____exports
 end,
["src.global"] = function(...) 
--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
return ____exports
 end,
["src.sources"] = function(...) 
local ____lualib = require("lualib_bundle")
local __TS__New = ____lualib.__TS__New
local __TS__ObjectAssign = ____lualib.__TS__ObjectAssign
local __TS__Class = ____lualib.__TS__Class
local __TS__ArrayForEach = ____lualib.__TS__ArrayForEach
local __TS__ArrayMap = ____lualib.__TS__ArrayMap
local ____exports = {}
local function makeHealthInfo()
    return {
        exists = __TS__New(____exports.Source, false),
        guid = __TS__New(____exports.Source, ""),
        class = __TS__New(____exports.Source, "WARRIOR"),
        health = {
            max = __TS__New(____exports.Source, 100),
            current = __TS__New(____exports.Source, 100)
        }
    }
end
local function makeTargetInfo()
    return {target = __TS__New(____exports.Source, nil)}
end
local function makeFocusInfo()
    return {focus = __TS__New(____exports.Source, nil)}
end
local function makeDefensiveCdInfo()
    return {defensiveCooldownActive = __TS__New(____exports.Source, nil)}
end
local function makeOffensiveCdInfo()
    return {offensiveCooldownActive = __TS__New(____exports.Source, nil)}
end
local function makeArenaInfo()
    return {arenaDpsIndex = __TS__New(____exports.Source, nil)}
end
local function makeExternalDefFromPlayerInfo()
    return {externalDefFromPlayerActive = __TS__New(____exports.Source, nil)}
end
local function makeHotInfo()
    return {
        hot0 = __TS__New(____exports.Source, nil),
        hot1 = __TS__New(____exports.Source, nil),
        hot2 = __TS__New(____exports.Source, nil),
        hot3 = __TS__New(____exports.Source, nil),
        hot4 = __TS__New(____exports.Source, nil),
        hot5 = __TS__New(____exports.Source, nil),
        hot6 = __TS__New(____exports.Source, nil)
    }
end
local function makeDotInfo()
    return {dots = __TS__New(____exports.Source, {})}
end
function ____exports.makeSources()
    local makePartySources, makeRaidSources, makeArenaSources
    function makePartySources()
        return __TS__ObjectAssign(
            {},
            makeHealthInfo(),
            makeTargetInfo(),
            makeDefensiveCdInfo(),
            makeExternalDefFromPlayerInfo(),
            makeOffensiveCdInfo(),
            makeHotInfo(),
            makeDotInfo()
        )
    end
    function makeRaidSources()
        return __TS__ObjectAssign(
            {},
            makeHealthInfo(),
            makeDefensiveCdInfo(),
            makeExternalDefFromPlayerInfo(),
            makeHotInfo(),
            makeDotInfo()
        )
    end
    function makeArenaSources()
        return __TS__ObjectAssign(
            {},
            makeHealthInfo(),
            makeTargetInfo(),
            makeDefensiveCdInfo(),
            makeOffensiveCdInfo(),
            makeArenaInfo()
        )
    end
    return {
        playerGroupIndexZeroBased = __TS__New(____exports.Source, 0),
        player = __TS__ObjectAssign(
            {},
            makeHealthInfo(),
            makeTargetInfo(),
            makeFocusInfo(),
            makeDefensiveCdInfo(),
            makeExternalDefFromPlayerInfo(),
            makeOffensiveCdInfo(),
            makeHotInfo(),
            makeDotInfo()
        ),
        party1 = makePartySources(),
        party2 = makePartySources(),
        party3 = makePartySources(),
        party4 = makePartySources(),
        myraid1 = makeRaidSources(),
        myraid2 = makeRaidSources(),
        myraid3 = makeRaidSources(),
        myraid4 = makeRaidSources(),
        myraid5 = makeRaidSources(),
        arena1 = makeArenaSources(),
        arena2 = makeArenaSources(),
        arena3 = makeArenaSources()
    }
end
____exports.Source = __TS__Class()
local Source = ____exports.Source
Source.name = "Source"
function Source.prototype.____constructor(self, value)
    self.value = value
    self.observers = {}
end
function Source.prototype.get(self)
    return self.value
end
function Source.prototype.set(self, newval)
    if self.value ~= newval then
        self.value = newval
        __TS__ArrayForEach(
            self.observers,
            function(self, obs)
                obs(newval)
            end
        )
    end
end
function Source.prototype.observe(self, f)
    local ____self_observers_0 = self.observers
    ____self_observers_0[#____self_observers_0 + 1] = f
    f(self:get())
end
function ____exports.observeAll(sources, cb)
    for ____, source in ipairs(sources) do
        source:observe(function()
            cb(__TS__ArrayMap(
                sources,
                function(____, source) return source:get() end
            ))
        end)
    end
end
return ____exports
 end,
["src.draw.shared"] = function(...) 
--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
local ____utils = require("src.utils")
local isNil = ____utils.isNil
function ____exports.createAuraFrame(name, parent, borderColor)
    local auraF = CreateFrame("Button", name, parent, "GladiusExAuraFrame")
    auraF.cooldown:SetDrawSwipe(true)
    auraF.cooldown:SetReverse(false)
    local swipecolor = {r = 0, g = 0, b = 0, a = 0.8}
    auraF.cooldown:SetSwipeColor(swipecolor.r, swipecolor.g, swipecolor.b, swipecolor.a)
    if not isNil(borderColor) then
        auraF.border:SetVertexColor(borderColor.r, borderColor.g, borderColor.b)
        auraF.border:Show()
    end
    return auraF
end
function ____exports.applyAuraToAuraframe(aura, auraF)
    if isNil(aura) then
        auraF:Hide()
    else
        auraF.icon:SetTexture(aura.icon)
        if aura.duration > 0 then
            CooldownFrame_Set(
                nil,
                auraF.cooldown,
                aura.expirationTime - aura.duration,
                aura.duration,
                1
            )
            auraF.cooldown:Show()
        else
            CooldownFrame_Set(
                nil,
                auraF.cooldown,
                0,
                0,
                0
            )
            auraF.cooldown:Hide()
        end
        auraF.count:SetText(aura.applications > 1 and tostring(aura.applications) or nil)
        auraF:Show()
    end
end
return ____exports
 end,
["src.draw.arenatargets"] = function(...) 
--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
local ____sources = require("src.sources")
local observeAll = ____sources.observeAll
local ____shared = require("src.draw.shared")
local applyAuraToAuraframe = ____shared.applyAuraToAuraframe
local createAuraFrame = ____shared.createAuraFrame
function ____exports.drawPartyTargetedByFrames(config, namePrefix, parent, sources, arena)
    local observeAndUpdate, arenaDps1TargetFrame, arenaDps2TargetFrame
    function observeAndUpdate(unitGuidS, arenaUnit)
        observeAll(
            {
                unitGuidS,
                arenaUnit.arenaDpsIndex,
                arenaUnit.class,
                arenaUnit.target,
                arenaUnit.offensiveCooldownActive
            },
            function(____bindingPattern0)
                local offensiveCooldownActive
                local targetGuid
                local class_
                local arenaDpsIndex
                local unitGuid
                unitGuid = ____bindingPattern0[1]
                arenaDpsIndex = ____bindingPattern0[2]
                class_ = ____bindingPattern0[3]
                targetGuid = ____bindingPattern0[4]
                offensiveCooldownActive = ____bindingPattern0[5]
                local ____temp_0
                if arenaDpsIndex == nil then
                    ____temp_0 = nil
                else
                    ____temp_0 = arenaDpsIndex == 1 and arenaDps1TargetFrame or arenaDps2TargetFrame
                end
                local frame = ____temp_0
                if not frame then
                    return
                end
                if unitGuid ~= targetGuid then
                    return
                end
                if offensiveCooldownActive then
                    applyAuraToAuraframe(offensiveCooldownActive, frame)
                    frame.border:SetVertexColor(255, 0, 0)
                else
                    frame.border:SetVertexColor(0, 0, 0)
                    frame.cooldown:Hide()
                    frame.icon:SetTexture(("Interface\\AddOns\\DefaultUIScript\\ClassIcons\\" .. class_) .. ".tga")
                    frame.icon:SetAllPoints(frame)
                end
            end
        )
    end
    arenaDps1TargetFrame = createAuraFrame(namePrefix .. "arenaDps1Target", parent, {r = 0, g = 0, b = 0})
    arenaDps1TargetFrame:SetSize(config.unitFrame_bigIconSize, config.unitFrame_bigIconSize)
    arenaDps1TargetFrame:SetPoint(
        "TOPRIGHT",
        parent,
        "TOPRIGHT",
        -4,
        4
    )
    arenaDps2TargetFrame = createAuraFrame(namePrefix .. "arenaDps2Target", parent, {r = 0, g = 0, b = 0})
    arenaDps2TargetFrame:SetSize(config.unitFrame_bigIconSize, config.unitFrame_bigIconSize)
    arenaDps2TargetFrame:SetPoint(
        "TOPRIGHT",
        parent,
        "TOPRIGHT",
        -4 - (config.unitFrame_bigIconSize + config.unitFrame_bigIconGap),
        4
    )
    observeAndUpdate(sources.guid, arena.arena1)
    observeAndUpdate(sources.guid, arena.arena2)
    observeAndUpdate(sources.guid, arena.arena3)
    return {arenaDps1TargetFrame = arenaDps1TargetFrame, arenaDps2TargetFrame = arenaDps2TargetFrame}
end
function ____exports.drawArenaTargetedByFrames(config, namePrefix, parent, sources, party)
    local observeAndUpdate
    function observeAndUpdate(unitGuidS, partyUnit, frame)
        observeAll(
            {unitGuidS, partyUnit.class, partyUnit.target, partyUnit.offensiveCooldownActive},
            function(____bindingPattern0)
                local offensiveCooldownActive
                local targetGuid
                local class_
                local unitGuid
                unitGuid = ____bindingPattern0[1]
                class_ = ____bindingPattern0[2]
                targetGuid = ____bindingPattern0[3]
                offensiveCooldownActive = ____bindingPattern0[4]
                if unitGuid ~= targetGuid then
                    return
                end
                if offensiveCooldownActive then
                    applyAuraToAuraframe(offensiveCooldownActive, frame)
                    frame.border:SetVertexColor(255, 0, 0)
                else
                    frame.icon:SetTexture(("Interface\\AddOns\\DefaultUIScript\\ClassIcons\\" .. class_) .. ".tga")
                    frame.icon:SetAllPoints(frame)
                end
            end
        )
    end
    local arenaTargetedBy1Frame = createAuraFrame(namePrefix .. "arenaTargetedBy1", parent, {r = 0, g = 0, b = 0})
    arenaTargetedBy1Frame:SetSize(config.unitFrame_bigIconSize, config.unitFrame_bigIconSize)
    arenaTargetedBy1Frame:SetPoint(
        "TOPRIGHT",
        parent,
        "TOPRIGHT",
        -4,
        4
    )
    local arenaTargetedBy2Frame = createAuraFrame(namePrefix .. "arenaTargetedBy2", parent, {r = 0, g = 0, b = 0})
    arenaTargetedBy2Frame:SetSize(config.unitFrame_bigIconSize, config.unitFrame_bigIconSize)
    arenaTargetedBy2Frame:SetPoint(
        "TOPRIGHT",
        parent,
        "TOPRIGHT",
        -4 - (config.unitFrame_bigIconSize + config.unitFrame_bigIconGap),
        4
    )
    observeAndUpdate(sources.guid, party.party1, arenaTargetedBy1Frame)
    observeAndUpdate(sources.guid, party.party2, arenaTargetedBy2Frame)
    return {arenaTargetedBy1Frame = arenaTargetedBy1Frame, arenaTargetedBy2Frame = arenaTargetedBy2Frame}
end
return ____exports
 end,
["src.draw.cooldowns"] = function(...) 
--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
local ____shared = require("src.draw.shared")
local applyAuraToAuraframe = ____shared.applyAuraToAuraframe
local createAuraFrame = ____shared.createAuraFrame
local barTexturePath = "Interface\\TargetingFrame\\UI-StatusBar"
function ____exports.drawFriendlyCooldownSection(config, namePrefix, container, sources)
    local cooldownSection = CreateFrame("FRAME", namePrefix .. "CooldownSection", container)
    cooldownSection:SetSize(config.unitFrame_fullWidth, config.unitFrame_fullHeight * config.unitFrame_cooldownSectionPercentage)
    cooldownSection:SetPoint(
        "TOPRIGHT",
        container,
        "TOPRIGHT",
        0,
        0
    )
    local cooldownSectionBg = cooldownSection:CreateTexture(namePrefix .. "CooldownSectionBackground")
    cooldownSectionBg:SetTexture(barTexturePath)
    cooldownSectionBg:SetAllPoints(cooldownSection)
    cooldownSectionBg:SetVertexColor(config.unitFrame_cooldownBackgroundColor.r, config.unitFrame_cooldownBackgroundColor.g, config.unitFrame_cooldownBackgroundColor.b, 1)
    cooldownSectionBg:SetHorizTile(false)
    cooldownSectionBg:SetVertTile(false)
    local defensiveCdFrame = createAuraFrame(namePrefix .. "DefensiveCd", cooldownSection, {r = 0, g = 0, b = 0})
    defensiveCdFrame:SetPoint(
        "TOPLEFT",
        cooldownSection,
        "TOPLEFT",
        4,
        -4
    )
    defensiveCdFrame:SetSize(config.unitFrame_bigIconSize, config.unitFrame_bigIconSize)
    sources.defensiveCooldownActive:observe(function(aura) return applyAuraToAuraframe(aura, defensiveCdFrame) end)
    local externalDefCdFrame = createAuraFrame(namePrefix .. "ExternalDefCd", cooldownSection, {r = 0, g = 0, b = 0})
    externalDefCdFrame:SetPoint(
        "TOPLEFT",
        cooldownSection,
        "TOPLEFT",
        4 + config.unitFrame_bigIconGap + config.unitFrame_bigIconSize,
        -4
    )
    externalDefCdFrame:SetSize(config.unitFrame_bigIconSize, config.unitFrame_bigIconSize)
    sources.externalDefFromPlayerActive:observe(function(aura) return applyAuraToAuraframe(aura, defensiveCdFrame) end)
end
return ____exports
 end,
["src.draw.dots"] = function(...) 
local ____lualib = require("lualib_bundle")
local __TS__ArrayIncludes = ____lualib.__TS__ArrayIncludes
local __TS__ArrayForEach = ____lualib.__TS__ArrayForEach
local ____exports = {}
local ____auras = require("src.auras")
local dangerousDebuffs = ____auras.dangerousDebuffs
local ____utils = require("src.utils")
local isNil = ____utils.isNil
local ____shared = require("src.draw.shared")
local applyAuraToAuraframe = ____shared.applyAuraToAuraframe
local createAuraFrame = ____shared.createAuraFrame
function ____exports.drawDotFrames(config, nameP, parent, sources)
    local dotAuraFrames = {}
    for ____, i in ipairs({
        0,
        1,
        2,
        3,
        4,
        5
    }) do
        local dotAuraFrame = createAuraFrame(
            (nameP .. "Dot") .. tostring(i),
            parent,
            {r = 0, g = 0, b = 0}
        )
        dotAuraFrame:SetSize(config.unitFrame_smallIconSize, config.unitFrame_smallIconSize)
        dotAuraFrame:SetPoint(
            "BOTTOMRIGHT",
            parent,
            "BOTTOMRIGHT",
            4 + i * (config.unitFrame_smallIconGap + config.unitFrame_smallIconSize),
            -4
        )
    end
    sources.dots:observe(function(dots)
        __TS__ArrayForEach(
            dots,
            function(____, dotinfo, i)
                local dotAuraFrame = dotAuraFrames[i + 1]
                if not isNil(dotAuraFrame) then
                    applyAuraToAuraframe(dotinfo, dotAuraFrame)
                end
                if __TS__ArrayIncludes(dangerousDebuffs, dotinfo.name) then
                    dotAuraFrame:SetScale(1.5)
                else
                    dotAuraFrame:SetScale(1)
                end
            end
        )
    end)
end
return ____exports
 end,
["src.draw.healthbar"] = function(...) 
--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
local barTexturePath = "Interface\\TargetingFrame\\UI-StatusBar"
function ____exports.drawHealthbarFrames(config, namePrefix, container, sources)
    local healthbar = CreateFrame("STATUSBAR", namePrefix .. "Healthbar", container)
    healthbar:SetSize(config.unitFrame_fullWidth, config.unitFrame_fullHeight * (1 - config.unitFrame_cooldownSectionPercentage))
    healthbar:SetPoint(
        "TOPLEFT",
        container,
        "TOPLEFT",
        0,
        0
    )
    healthbar:SetStatusBarTexture(barTexturePath)
    healthbar:GetStatusBarTexture():SetHorizTile(false)
    healthbar:GetStatusBarTexture():SetVertTile(false)
    healthbar:SetMinMaxValues(0, 100)
    healthbar:SetValue(100)
    sources.class:observe(function(className)
        local color = C_ClassColor.GetClassColor(className)
        healthbar:SetStatusBarColor(color.r, color.g, color.b, 1)
    end)
    sources.health.max:observe(function(maxhealth)
        healthbar:SetMinMaxValues(0, maxhealth)
    end)
    sources.health.current:observe(function(currhealth)
        healthbar:SetValue(currhealth)
    end)
    local healthbarBgColor = {r = 1, g = 1, b = 1, a = 0.3}
    local healthbarBackground = healthbar:CreateTexture(namePrefix .. "HealthbarBackground", "BACKGROUND")
    healthbarBackground:SetAllPoints(healthbar)
    healthbarBackground:SetTexture(barTexturePath)
    healthbarBackground:SetVertexColor(healthbarBgColor.r, healthbarBgColor.g, healthbarBgColor.b, healthbarBgColor.a)
    healthbarBackground:SetHorizTile(false)
    healthbarBackground:SetVertTile(false)
    return healthbar
end
return ____exports
 end,
["src.draw.highlight"] = function(...) 
--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
local ____sources = require("src.sources")
local observeAll = ____sources.observeAll
function ____exports.drawHighlightFrames(config, namePrefix, container, unitSources, playerSources)
    local highlightContainerFrame = CreateFrame("Frame", namePrefix .. "BorderContainer", container, "BackdropTemplate")
    highlightContainerFrame:SetAllPoints(container)
    highlightContainerFrame:SetFrameStrata("HIGH")
    local highlightFrame = CreateFrame("Frame", namePrefix .. "Border", container)
    highlightFrame:SetAllPoints(container)
    highlightFrame:SetFrameStrata("HIGH")
    local highlightTexture = highlightFrame:CreateTexture(nil, "OVERLAY")
    highlightTexture:SetAllPoints(highlightFrame)
    observeAll(
        {unitSources.guid, playerSources.target, playerSources.focus},
        function(____bindingPattern0)
            local focusGuid
            local targetGuid
            local unitGuid
            unitGuid = ____bindingPattern0[1]
            targetGuid = ____bindingPattern0[2]
            focusGuid = ____bindingPattern0[3]
            local color = unitGuid == focusGuid and config.unitFrame_focusHighlightColor or (unitGuid == targetGuid and config.unitFrame_targetHighlightColor or nil)
            if color then
                highlightContainerFrame:SetBackdropBorderColor(color.r, color.g, color.b, color.a)
            else
                highlightContainerFrame:SetBackdropBorderColor(0, 0, 0, 0)
            end
        end
    )
end
return ____exports
 end,
["src.draw.hots"] = function(...) 
--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
local ____utils = require("src.utils")
local checkAllCasesHandled = ____utils.checkAllCasesHandled
local ____shared = require("src.draw.shared")
local applyAuraToAuraframe = ____shared.applyAuraToAuraframe
local createAuraFrame = ____shared.createAuraFrame
function ____exports.hotIndexToHotName(i)
    return i == 0 and "hot0" or (i == 1 and "hot1" or (i == 2 and "hot2" or (i == 3 and "hot3" or (i == 4 and "hot4" or (i == 5 and "hot5" or (i == 6 and "hot6" or checkAllCasesHandled(i)))))))
end
function ____exports.drawHotFrames(config, nameP, parent, sources)
    for ____, i in ipairs({
        0,
        1,
        2,
        3,
        4,
        5,
        6
    }) do
        local hotAuraFrame = createAuraFrame(
            (nameP .. "Hot") .. tostring(i),
            parent,
            {r = 0, g = 0, b = 0}
        )
        hotAuraFrame:SetSize(config.unitFrame_smallIconSize, config.unitFrame_smallIconSize)
        hotAuraFrame:SetPoint(
            "BOTTOMLEFT",
            parent,
            "BOTTOMLEFT",
            4 + i * (config.unitFrame_smallIconGap + config.unitFrame_smallIconSize),
            -4
        )
        local hotname = ____exports.hotIndexToHotName(i)
        sources[hotname]:observe(function(hotinfo) return applyAuraToAuraframe(hotinfo, hotAuraFrame) end)
    end
end
return ____exports
 end,
["src.unit"] = function(...) 
local ____lualib = require("lualib_bundle")
local __TS__StringStartsWith = ____lualib.__TS__StringStartsWith
local __TS__StringSubstring = ____lualib.__TS__StringSubstring
local __TS__ParseInt = ____lualib.__TS__ParseInt
local ____exports = {}
local ____utils = require("src.utils")
local isNil = ____utils.isNil
function ____exports.unitIsPlayer(u)
    return u == "player"
end
function ____exports.unitIsParty(u)
    return __TS__StringStartsWith(u, "party")
end
function ____exports.unitIsRaidUnit(u)
    return __TS__StringStartsWith(u, "raid")
end
function ____exports.unitIsPlayerPartyRaid(u)
    return ____exports.unitIsPlayer(u) or ____exports.unitIsParty(u) or ____exports.unitIsRaidUnit(u)
end
function ____exports.unitIsArena(u)
    if __TS__StringStartsWith(u, "arena") then
        return true
    else
        return false
    end
end
____exports.allArenaUnits = {"arena1", "arena2", "arena3"}
____exports.allPlayerPartyAndRaidUnits = {
    "player",
    "party1",
    "party2",
    "party3",
    "party4",
    "raid1",
    "raid2",
    "raid3",
    "raid4",
    "raid5",
    "raid6",
    "raid7",
    "raid8",
    "raid9",
    "raid10",
    "raid11",
    "raid12",
    "raid13",
    "raid14",
    "raid15",
    "raid16",
    "raid17",
    "raid18",
    "raid19",
    "raid20",
    "raid21",
    "raid22",
    "raid23",
    "raid24",
    "raid25",
    "raid26",
    "raid27",
    "raid28",
    "raid29",
    "raid30",
    "raid31",
    "raid32",
    "raid33",
    "raid34",
    "raid35",
    "raid36",
    "raid37",
    "raid38",
    "raid39",
    "raid40"
}
____exports.allSupportedTranslatedUnits = {
    "player",
    "party1",
    "party2",
    "party3",
    "party4",
    "myraid1",
    "myraid2",
    "myraid3",
    "myraid4",
    "myraid5",
    "arena1",
    "arena2",
    "arena3"
}
____exports.allSupportedUnits = {
    "player",
    "party1",
    "party2",
    "party3",
    "party4",
    "raid1",
    "raid2",
    "raid3",
    "raid4",
    "raid5",
    "raid6",
    "raid7",
    "raid8",
    "raid9",
    "raid10",
    "arena1",
    "arena2",
    "arena3"
}
function ____exports.unitIsInPlayerRaidGroup(unit)
    local playerIndex = UnitInRaid("player")
    if isNil(playerIndex) then
        return false
    end
    local playerGroup = math.floor(playerIndex / 5)
    local unitGroup = math.floor(__TS__ParseInt(__TS__StringSubstring(unit, 4, 6)) / 5)
    return playerGroup == unitGroup
end
return ____exports
 end,
["src.draw.position"] = function(...) 
local ____lualib = require("lualib_bundle")
local __TS__StringSubstring = ____lualib.__TS__StringSubstring
local __TS__ParseInt = ____lualib.__TS__ParseInt
local ____exports = {}
local getUnitGridIndex
local ____unit = require("src.unit")
local unitIsArena = ____unit.unitIsArena
local unitIsParty = ____unit.unitIsParty
local unitIsPlayerPartyRaid = ____unit.unitIsPlayerPartyRaid
local unitIsRaidUnit = ____unit.unitIsRaidUnit
local ____utils = require("src.utils")
local checkAllCasesHandled = ____utils.checkAllCasesHandled
function getUnitGridIndex(unit)
    if unit == "player" then
        return {x = 0, y = 0}
    elseif unitIsParty(unit) then
        local i = __TS__ParseInt(__TS__StringSubstring(unit, 5, 6))
        return {x = 0, y = i}
    elseif unitIsArena(unit) then
        local i = __TS__ParseInt(__TS__StringSubstring(unit, 5, 6))
        return {x = 0, y = i - 1}
    elseif unitIsRaidUnit(unit) then
        local unitRaidIndex = __TS__ParseInt(__TS__StringSubstring(unit, 4, 6)) - 1
        return {x = 1, y = unitRaidIndex % 5}
    else
        return checkAllCasesHandled(unit)
    end
end
function ____exports.setPosition(config, parent, frame, unit)
    local point = unitIsPlayerPartyRaid(unit) and "TOPRIGHT" or "TOPLEFT"
    local ____getUnitGridIndex_result_0 = getUnitGridIndex(unit)
    local x = ____getUnitGridIndex_result_0.x
    local y = ____getUnitGridIndex_result_0.y
    frame:SetPoint(
        point,
        parent,
        point,
        x * (config.unitFrame_horizontalGap + config.unitFrame_fullWidth),
        y * (config.unitFrame_verticalGap + config.unitFrame_fullHeight)
    )
end
return ____exports
 end,
["src.testmode"] = function(...) 
local ____lualib = require("lualib_bundle")
local Error = ____lualib.Error
local RangeError = ____lualib.RangeError
local ReferenceError = ____lualib.ReferenceError
local SyntaxError = ____lualib.SyntaxError
local TypeError = ____lualib.TypeError
local URIError = ____lualib.URIError
local __TS__New = ____lualib.__TS__New
local ____exports = {}
function ____exports.makeTestAura(spell)
    local spellIds = {
        Barkskin = 22812,
        Rejuvenation = 774,
        Avatar = 107574,
        Ironbark = 102342,
        ["Unstable Affliction"] = 30108,
        ["Shadow Word: Pain"] = 589
    }
    local spellId = spellIds[spell]
    if not spellId then
        error(
            __TS__New(Error, "Invalid spell"),
            0
        )
    end
    local spellInfo = {GetSpellInfo(spellId)}
    return {
        applications = 1,
        auraInstanceID = 123,
        canApplyAura = false,
        charges = 0,
        dispelName = "Magic",
        duration = 10,
        expirationTime = 7,
        icon = spellInfo[3],
        isBossAura = false,
        isFromPlayerOrPlayerPet = false,
        isHarmful = true,
        isHelpful = true,
        isNameplateOnly = true,
        isRaid = true,
        isStealable = true,
        maxCharges = 0,
        name = spell,
        nameplateShowAll = false,
        nameplateShowPersonal = false,
        points = {},
        sourceUnit = "player",
        spellId = spellId,
        timeMod = 0
    }
end
function ____exports.startTest(sources)
    sources.playerGroupIndexZeroBased:set(1)
    sources.player.health.max:set(1000)
    sources.player.health.current:set(500)
    sources.player.exists:set(true)
    sources.player.focus:set("party1guid")
    sources.player.target:set("arena1guid")
    sources.player.guid:set("playerguid")
    sources.player.class:set("DRUID")
    sources.player.defensiveCooldownActive:set(____exports.makeTestAura("Barkskin"))
    sources.player.offensiveCooldownActive:set(____exports.makeTestAura("Avatar"))
    sources.player.externalDefFromPlayerActive:set(____exports.makeTestAura("Ironbark"))
    sources.player.dots:set({
        ____exports.makeTestAura("Unstable Affliction"),
        ____exports.makeTestAura("Shadow Word: Pain"),
        ____exports.makeTestAura("Shadow Word: Pain"),
        ____exports.makeTestAura("Shadow Word: Pain"),
        ____exports.makeTestAura("Shadow Word: Pain"),
        ____exports.makeTestAura("Shadow Word: Pain")
    })
    sources.player.hot0:set(____exports.makeTestAura("Rejuvenation"))
    sources.player.hot1:set(____exports.makeTestAura("Rejuvenation"))
    sources.player.hot2:set(____exports.makeTestAura("Rejuvenation"))
    sources.player.hot3:set(____exports.makeTestAura("Rejuvenation"))
    sources.player.hot4:set(____exports.makeTestAura("Rejuvenation"))
    sources.player.hot5:set(____exports.makeTestAura("Rejuvenation"))
    sources.player.hot6:set(____exports.makeTestAura("Rejuvenation"))
    sources.party1.health.max:set(1000)
    sources.party1.health.current:set(500)
    sources.party1.exists:set(true)
    sources.party1.target:set("arena1guid")
    sources.party1.class:set("MAGE")
    sources.party2.health.max:set(1000)
    sources.party2.health.current:set(500)
    sources.party2.exists:set(true)
    sources.party2.target:set("arena1guid")
    sources.party2.class:set("MONK")
    sources.party3.health.max:set(1000)
    sources.party3.health.current:set(200)
    sources.party3.exists:set(true)
    sources.party3.class:set("DEATHKNIGHT")
    sources.party4.health.max:set(1000)
    sources.party4.health.current:set(500)
    sources.party4.exists:set(true)
    sources.party4.class:set("ROGUE")
    sources.myraid1.health.max:set(1000)
    sources.myraid1.health.current:set(500)
    sources.myraid1.exists:set(true)
    sources.myraid1.class:set("SHAMAN")
    sources.myraid2.health.max:set(1000)
    sources.myraid2.health.current:set(500)
    sources.myraid2.exists:set(true)
    sources.myraid2.class:set("PALADIN")
    sources.myraid3.health.max:set(1000)
    sources.myraid3.health.current:set(500)
    sources.myraid3.exists:set(true)
    sources.myraid3.class:set("EVOKER")
    sources.arena1.exists:set(true)
    sources.arena1.guid:set("arena1guid")
    sources.arena1.class:set("WARRIOR")
    sources.arena1.arenaDpsIndex:set(1)
    sources.arena1.health.max:set(1000)
    sources.arena1.health.current:set(800)
    sources.arena1.target:set("playerguid")
    sources.arena1.offensiveCooldownActive:set(____exports.makeTestAura("Avatar"))
    sources.arena2.exists:set(true)
    sources.arena2.class:set("WARLOCK")
    sources.arena2.arenaDpsIndex:set(2)
    sources.arena2.health.max:set(1000)
    sources.arena2.health.current:set(800)
    sources.arena2.target:set("playerguid")
    sources.arena3.exists:set(true)
    sources.arena3.class:set("PRIEST")
    sources.arena3.arenaDpsIndex:set(nil)
    sources.arena3.health.max:set(1000)
    sources.arena3.health.current:set(800)
    sources.arena3.target:set(nil)
end
return ____exports
 end,
["src.main"] = function(...) 
local ____lualib = require("lualib_bundle")
local __TS__ArrayFind = ____lualib.__TS__ArrayFind
local __TS__ArrayFilter = ____lualib.__TS__ArrayFilter
local __TS__ArrayIncludes = ____lualib.__TS__ArrayIncludes
local __TS__ArraySort = ____lualib.__TS__ArraySort
local ____exports = {}
local start, handleWowEvent, updateInfo, processAuraUpdateInfo, translateUnit, processNewHelpfulAura, clearAuraIfCorrectId, updateAuraIfCorrectId, sortDots, eventsWeListenTo, sources, allFrameparts
local ____auras = require("src.auras")
local dangerousDebuffs = ____auras.dangerousDebuffs
local getBuffIndex = ____auras.getBuffIndex
local ____config = require("src.config")
local makeConfig = ____config.makeConfig
local ____dispellable = require("src.dispellable")
local playerCanDispelFromParty = ____dispellable.playerCanDispelFromParty
local ____arenatargets = require("src.draw.arenatargets")
local drawArenaTargetedByFrames = ____arenatargets.drawArenaTargetedByFrames
local drawPartyTargetedByFrames = ____arenatargets.drawPartyTargetedByFrames
local ____cooldowns = require("src.draw.cooldowns")
local drawFriendlyCooldownSection = ____cooldowns.drawFriendlyCooldownSection
local ____dots = require("src.draw.dots")
local drawDotFrames = ____dots.drawDotFrames
local ____healthbar = require("src.draw.healthbar")
local drawHealthbarFrames = ____healthbar.drawHealthbarFrames
local ____highlight = require("src.draw.highlight")
local drawHighlightFrames = ____highlight.drawHighlightFrames
local ____hots = require("src.draw.hots")
local drawHotFrames = ____hots.drawHotFrames
local hotIndexToHotName = ____hots.hotIndexToHotName
local ____position = require("src.draw.position")
local setPosition = ____position.setPosition
local ____sources = require("src.sources")
local makeSources = ____sources.makeSources
local ____testmode = require("src.testmode")
local startTest = ____testmode.startTest
local ____unit = require("src.unit")
local allSupportedTranslatedUnits = ____unit.allSupportedTranslatedUnits
local allSupportedUnits = ____unit.allSupportedUnits
local unitIsArena = ____unit.unitIsArena
local unitIsParty = ____unit.unitIsParty
local unitIsPlayer = ____unit.unitIsPlayer
local unitIsPlayerPartyRaid = ____unit.unitIsPlayerPartyRaid
local ____utils = require("src.utils")
local checkAllCasesHandled = ____utils.checkAllCasesHandled
local isNil = ____utils.isNil
function ____exports.stopTest()
    handleWowEvent(sources, "PLAYER_ENTERING_WORLD", nil, nil)
end
function start()
    local sources = makeSources()
    local config = makeConfig()
    local friendlyFramesParent = CreateFrame("Frame", "GladiusExPartyFrame", UIParent)
    local arenaFramesParent = CreateFrame("Frame", "GladiusExArenaFrame", UIParent)
    local nameP_ = "SimonUnitFrames"
    for ____, unit in ipairs(allSupportedTranslatedUnits) do
        local nameP = nameP_ .. unit
        local parent = unitIsArena(unit) and arenaFramesParent or friendlyFramesParent
        local container = CreateFrame("Frame", nameP, parent, "BackdropTemplate")
        container:SetSize(config.unitFrame_fullWidth, config.unitFrame_fullHeight)
        container:SetClampedToScreen(true)
        setPosition(config, parent, container, unit)
        if unitIsPlayerPartyRaid(unit) then
            local unitSource = sources[unit]
            drawHealthbarFrames(config, nameP, container, unitSource)
            drawHighlightFrames(
                config,
                nameP,
                container,
                unitSource,
                sources.player
            )
            drawFriendlyCooldownSection(config, nameP, container, unitSource)
            drawHotFrames(config, nameP, container, unitSource)
            drawDotFrames(config, nameP, container, unitSource)
        end
        if unitIsPlayer(unit) or unitIsParty(unit) then
            local unitSource = sources[unit]
            drawPartyTargetedByFrames(
                config,
                nameP,
                container,
                unitSource,
                sources
            )
        end
        if unitIsArena(unit) then
            local unitSource = sources[unit]
            drawHealthbarFrames(config, nameP, container, unitSource)
            drawArenaTargetedByFrames(
                config,
                nameP,
                container,
                unitSource,
                sources
            )
        end
    end
    local eventFrame = CreateFrame("Frame")
    for ____, eventName in ipairs(eventsWeListenTo) do
        eventFrame:RegisterEvent(eventName)
    end
    eventFrame:SetScript(
        "OnEvent",
        function(ev, arg1, arg2) return handleWowEvent(sources, ev, arg1, arg2) end
    )
    return sources
end
function handleWowEvent(sources, eventName, arg1, arg2)
    repeat
        local ____switch14 = eventName
        local ____cond14 = ____switch14 == "PLAYER_ENTERING_WORLD"
        if ____cond14 then
            do
                print("hello, world")
                local playerRaidIndex = UnitInRaid("player")
                sources.playerGroupIndexZeroBased:set(isNil(playerRaidIndex) and 0 or math.floor(playerRaidIndex / 5))
                updateInfo(sources, "all", "all")
                return
            end
        end
        ____cond14 = ____cond14 or ____switch14 == "GROUP_ROSTER_UPDATE"
        if ____cond14 then
            do
                local playerRaidIndex = UnitInRaid("player")
                sources.playerGroupIndexZeroBased:set(isNil(playerRaidIndex) and 0 or math.floor(playerRaidIndex / 5))
                updateInfo(sources, "all", "all")
                return
            end
        end
        ____cond14 = ____cond14 or (____switch14 == "ARENA_OPPONENT_UPDATE" or ____switch14 == "ARENA_PREP_OPPONENT_SPECIALIZATIONS")
        if ____cond14 then
            do
                updateInfo(sources, "arena1", "all")
                updateInfo(sources, "arena2", "all")
                updateInfo(sources, "arena3", "all")
                return
            end
        end
        ____cond14 = ____cond14 or ____switch14 == "PLAYER_REGEN_ENABLED"
        if ____cond14 then
            do
                updateInfo(sources, "all", "all")
                return
            end
        end
        ____cond14 = ____cond14 or ____switch14 == "UNIT_HEALTH"
        if ____cond14 then
            do
                updateInfo(sources, arg1, {tag = "health"})
            end
        end
        ____cond14 = ____cond14 or ____switch14 == "UNIT_MAXHEALTH"
        if ____cond14 then
            do
                updateInfo(sources, arg1, {tag = "maxhealth"})
            end
        end
        ____cond14 = ____cond14 or (____switch14 == "UNIT_POWER_UPDATE" or ____switch14 == "UNIT_MAXPOWER")
        if ____cond14 then
            do
                updateInfo(sources, arg1, {tag = "power"})
            end
        end
        ____cond14 = ____cond14 or ____switch14 == "UNIT_ABSORB_AMOUNT_CHANGED"
        if ____cond14 then
            do
                updateInfo(sources, arg1, {tag = "absorb"})
            end
        end
        ____cond14 = ____cond14 or ____switch14 == "UNIT_NAME_UPDATE"
        if ____cond14 then
            do
                updateInfo(sources, arg1, {tag = "character"})
            end
        end
        ____cond14 = ____cond14 or ____switch14 == "PLAYER_FOCUS_CHANGED"
        if ____cond14 then
            do
                return updateInfo(sources, "all", {tag = "focus"})
            end
        end
        ____cond14 = ____cond14 or ____switch14 == "PLAYER_TARGET_CHANGED"
        if ____cond14 then
            do
                return updateInfo(sources, "all", {tag = "target"})
            end
        end
        ____cond14 = ____cond14 or ____switch14 == "UNIT_TARGET"
        if ____cond14 then
            do
                return updateInfo(sources, arg1, {tag = "target"})
            end
        end
        ____cond14 = ____cond14 or ____switch14 == "UNIT_AURA"
        if ____cond14 then
            do
                local unitId = arg1
                if isNil(arg2) then
                    return updateInfo(sources, unitId, {tag = "aura", auraUpdateInfo = nil})
                else
                    return updateInfo(sources, unitId, {tag = "aura", auraUpdateInfo = arg2})
                end
            end
        end
        do
            do
                return checkAllCasesHandled(eventName)
            end
        end
    until true
end
function updateInfo(sources, target, part_in)
    local units = target == "all" and allSupportedUnits or __TS__ArrayFilter(
        {__TS__ArrayFind(
            allSupportedUnits,
            function(____, u) return u == target end
        ) or nil},
        function(____, u) return not isNil(u) end
    )
    local infos = part_in == "all" and allFrameparts or ({part_in})
    for ____, unit in ipairs(units) do
        do
            local __continue34
            repeat
                local targetForSource = translateUnit(sources, unit)
                if targetForSource == nil then
                    __continue34 = true
                    break
                end
                local unitSource = sources[targetForSource]
                if not UnitExists(unit) then
                    unitSource.exists:set(false)
                else
                    unitSource.exists:set(true)
                end
                for ____, info in ipairs(infos) do
                    if info.tag == "health" then
                        unitSource.health.current:set(UnitHealth(unit))
                    elseif info.tag == "maxhealth" then
                        unitSource.health.max:set(UnitHealthMax(unit))
                    elseif info.tag == "character" then
                        local cl = select(
                            2,
                            UnitClass(unit)
                        )
                        unitSource.class:set(cl)
                        unitSource.guid:set(UnitGUID(unit) or "")
                    elseif info.tag == "power" or info.tag == "absorb" then
                    elseif info.tag == "target" then
                        if unitSource.target ~= nil then
                            unitSource.target:set(UnitGUID(unit .. "target") or nil)
                        end
                    elseif info.tag == "focus" then
                        if unit == "player" then
                            sources.player.focus:set(UnitGUID("focus") or nil)
                        end
                    elseif info.tag == "aura" then
                        if isNil(info.auraUpdateInfo) or info.auraUpdateInfo.isFullUpdate == true then
                            unitSource.defensiveCooldownActive:set(nil)
                            if unitSource.externalDefFromPlayerActive ~= nil then
                                unitSource.externalDefFromPlayerActive:set(nil)
                            end
                            if unitSource.offensiveCooldownActive ~= nil then
                                unitSource.offensiveCooldownActive:set(nil)
                            end
                            if unitSource.hot0 ~= nil then
                                unitSource.hot0:set(nil)
                                unitSource.hot1:set(nil)
                                unitSource.hot2:set(nil)
                                unitSource.hot3:set(nil)
                                unitSource.hot4:set(nil)
                                unitSource.hot5:set(nil)
                                unitSource.hot6:set(nil)
                            end
                            AuraUtil:ForEachAura(
                                unit,
                                "HELPFUL",
                                function(aura) return processNewHelpfulAura(
                                    sources.player.class:get(),
                                    unitSource,
                                    aura
                                ) end,
                                true
                            )
                            if unitSource.dots ~= nil then
                                local newDots = {}
                                AuraUtil:ForEachAura(
                                    unit,
                                    "HARMFUL",
                                    function(aura)
                                        if aura.dispelName ~= nil and (aura.dispelName == "Curse" or aura.dispelName == "Magic" or aura.dispelName == "Disease" or aura.dispelName == "Poison") and playerCanDispelFromParty(aura.dispelName) then
                                            newDots[#newDots + 1] = aura
                                        elseif __TS__ArrayIncludes(dangerousDebuffs, aura.name) then
                                            newDots[#newDots + 1] = aura
                                        end
                                    end,
                                    true
                                )
                                __TS__ArraySort(newDots, sortDots)
                                unitSource.dots:set(newDots)
                            end
                        else
                            processAuraUpdateInfo(info, unit, unitSource, sources)
                        end
                    else
                        checkAllCasesHandled(info)
                    end
                end
                __continue34 = true
            until true
            if not __continue34 then
                break
            end
        end
    end
end
function processAuraUpdateInfo(info, unit, unitSource, sources)
    local auraUpdateInfo = info.auraUpdateInfo
    if isNil(auraUpdateInfo) then
        return
    end
    if not isNil(auraUpdateInfo.updatedAuraInstanceIDs) then
        for ____, auraInstanceID in ipairs(auraUpdateInfo.updatedAuraInstanceIDs) do
            if unitSource.defensiveCooldownActive ~= nil then
                updateAuraIfCorrectId(unit, auraInstanceID, unitSource.defensiveCooldownActive)
            end
            if unitSource.externalDefFromPlayerActive ~= nil then
                updateAuraIfCorrectId(unit, auraInstanceID, unitSource.externalDefFromPlayerActive)
            end
            if unitSource.offensiveCooldownActive ~= nil then
                updateAuraIfCorrectId(unit, auraInstanceID, unitSource.offensiveCooldownActive)
            end
            if unitSource.hot0 ~= nil then
                updateAuraIfCorrectId(unit, auraInstanceID, unitSource.hot0)
                updateAuraIfCorrectId(unit, auraInstanceID, unitSource.hot1)
                updateAuraIfCorrectId(unit, auraInstanceID, unitSource.hot2)
                updateAuraIfCorrectId(unit, auraInstanceID, unitSource.hot3)
                updateAuraIfCorrectId(unit, auraInstanceID, unitSource.hot4)
                updateAuraIfCorrectId(unit, auraInstanceID, unitSource.hot5)
                updateAuraIfCorrectId(unit, auraInstanceID, unitSource.hot6)
            end
            if unitSource.dots ~= nil then
                local curr = unitSource.dots:get()
                local found = __TS__ArrayFind(
                    curr,
                    function(____, old) return old.auraInstanceID ~= auraInstanceID end
                )
                if found then
                    local newaura = C_UnitAuras.GetAuraDataByAuraInstanceID(unit, auraInstanceID)
                    if newaura then
                        local afterFilter = __TS__ArrayFilter(
                            curr,
                            function(____, old) return old.auraInstanceID ~= auraInstanceID end
                        )
                        afterFilter[#afterFilter + 1] = newaura
                        __TS__ArraySort(afterFilter, sortDots)
                        unitSource.dots:set(afterFilter)
                    end
                end
            end
        end
    end
    if not isNil(auraUpdateInfo.removedAuraInstanceIDs) then
        for ____, auraInstanceID in ipairs(auraUpdateInfo.removedAuraInstanceIDs) do
            if unitSource.defensiveCooldownActive ~= nil then
                clearAuraIfCorrectId(auraInstanceID, unitSource.defensiveCooldownActive)
            end
            if unitSource.externalDefFromPlayerActive ~= nil then
                clearAuraIfCorrectId(auraInstanceID, unitSource.externalDefFromPlayerActive)
            end
            if unitSource.offensiveCooldownActive ~= nil then
                clearAuraIfCorrectId(auraInstanceID, unitSource.offensiveCooldownActive)
            end
            if unitSource.hot0 ~= nil then
                clearAuraIfCorrectId(auraInstanceID, unitSource.hot0)
                clearAuraIfCorrectId(auraInstanceID, unitSource.hot1)
                clearAuraIfCorrectId(auraInstanceID, unitSource.hot2)
                clearAuraIfCorrectId(auraInstanceID, unitSource.hot3)
                clearAuraIfCorrectId(auraInstanceID, unitSource.hot4)
                clearAuraIfCorrectId(auraInstanceID, unitSource.hot5)
                clearAuraIfCorrectId(auraInstanceID, unitSource.hot6)
            end
            if unitSource.dots ~= nil then
                local curr = unitSource.dots:get()
                local afterFilter = __TS__ArrayFilter(
                    curr,
                    function(____, old) return old.auraInstanceID ~= auraInstanceID end
                )
                if #curr ~= #afterFilter then
                    unitSource.dots:set(afterFilter)
                end
            end
        end
    end
    if not isNil(auraUpdateInfo.addedAuras) then
        for ____, aura in ipairs(auraUpdateInfo.addedAuras) do
            if aura.isHelpful then
                processNewHelpfulAura(
                    sources.player.class:get(),
                    unitSource,
                    aura
                )
            end
            if unitSource.dots ~= nil and aura.isHarmful and not isNil(aura.dispelName) and (aura.dispelName == "Curse" or aura.dispelName == "Magic" or aura.dispelName == "Disease" or aura.dispelName == "Poison") and playerCanDispelFromParty(aura.dispelName) then
                local curr = unitSource.dots:get()
                curr[#curr + 1] = aura
                __TS__ArraySort(curr, sortDots)
                unitSource.dots:set(curr)
            end
        end
    end
end
function translateUnit(sources, target_)
    if target_ == "player" or target_ == "party1" or target_ == "party2" or target_ == "party3" or target_ == "party4" or target_ == "arena1" or target_ == "arena2" or target_ == "arena3" then
        return target_
    end
    if target_ == "raid1" or target_ == "raid2" or target_ == "raid3" or target_ == "raid4" or target_ == "raid5" then
        if sources.playerGroupIndexZeroBased:get() == 0 then
            return nil
        else
            return target_ == "raid1" and "myraid1" or (target_ == "raid2" and "myraid2" or (target_ == "raid3" and "myraid3" or (target_ == "raid4" and "myraid4" or (target_ == "raid5" and "myraid5" or checkAllCasesHandled(target_)))))
        end
    end
    if target_ == "raid6" or target_ == "raid7" or target_ == "raid8" or target_ == "raid9" or target_ == "raid10" then
        if sources.playerGroupIndexZeroBased:get() == 0 then
            return target_ == "raid6" and "myraid1" or (target_ == "raid7" and "myraid2" or (target_ == "raid8" and "myraid3" or (target_ == "raid9" and "myraid4" or (target_ == "raid10" and "myraid5" or checkAllCasesHandled(target_)))))
        else
            return nil
        end
    end
    return nil
end
function processNewHelpfulAura(playerClass, unitSource, aura)
    local hotIndex = getBuffIndex({name = playerClass}, aura.sourceUnit, aura.name, aura.spellId)
    if hotIndex == nil then
        return
    elseif hotIndex == "defcd" then
        if unitSource.defensiveCooldownActive ~= nil then
            unitSource.defensiveCooldownActive:set(aura)
        end
    elseif hotIndex == "externaldefbuff" then
        if unitSource.externalDefFromPlayerActive ~= nil then
            unitSource.externalDefFromPlayerActive:set(aura)
        end
    elseif hotIndex == "offcd" then
        if unitSource.offensiveCooldownActive ~= nil then
            unitSource.offensiveCooldownActive:set(aura)
        end
    else
        local hotname = hotIndexToHotName(hotIndex)
        if unitSource.hot0 ~= nil then
            local s = unitSource[hotname]
            s:set(aura)
        end
    end
end
function clearAuraIfCorrectId(auraInstanceID, s)
    local curr = s:get()
    if curr and curr.auraInstanceID == auraInstanceID then
        s:set(nil)
    end
end
function updateAuraIfCorrectId(unit, auraInstanceID, s)
    local curr = s:get()
    if curr and curr.auraInstanceID == auraInstanceID then
        local newaura = C_UnitAuras.GetAuraDataByAuraInstanceID(unit, auraInstanceID)
        if newaura then
            s:set(newaura)
        end
    end
end
function sortDots(a, b)
    local prioA = __TS__ArrayIncludes(dangerousDebuffs, a.name) and 99999999 or a.spellId
    local prioB = __TS__ArrayIncludes(dangerousDebuffs, b.name) and 99999999 or b.spellId
    return prioA > prioB and 1 or -1
end
eventsWeListenTo = {
    "PLAYER_ENTERING_WORLD",
    "UNIT_NAME_UPDATE",
    "UNIT_HEALTH",
    "UNIT_MAXHEALTH",
    "GROUP_ROSTER_UPDATE",
    "PLAYER_REGEN_ENABLED",
    "UNIT_AURA",
    "UNIT_POWER_UPDATE",
    "UNIT_MAXPOWER",
    "UNIT_ABSORB_AMOUNT_CHANGED",
    "PLAYER_FOCUS_CHANGED",
    "PLAYER_TARGET_CHANGED",
    "UNIT_TARGET",
    "ARENA_OPPONENT_UPDATE",
    "ARENA_PREP_OPPONENT_SPECIALIZATIONS"
}
sources = start()
SLASH_TEST1 = "/simontest"
local testing = false
SlashCmdList.TEST = function(self)
    local ____testing_0
    if testing then
        ____testing_0 = startTest(sources)
    else
        ____testing_0 = ____exports.stopTest()
    end
    testing = not testing
end
allFrameparts = {
    {tag = "health"},
    {tag = "maxhealth"},
    {tag = "power"},
    {tag = "absorb"},
    {tag = "character"},
    {tag = "target"},
    {tag = "focus"},
    {tag = "aura", auraUpdateInfo = nil}
}
return ____exports
 end,
}
return require("src.main", ...)
