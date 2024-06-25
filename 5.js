class Device
{
    constructor(name, power)
    {
        this.name = name;
        this.power = power;
        this.isOn = false;
    }

    turnOn()
    {
        console.log(this.name + " подключен(а)");
        this.isOn = true;
    }

    getPowerUsed()
    {
        return this.isOn ? this.power : 0;
    }
}

const lamp = new Device('Лампа', 15);
const pc = new Device('ПК', 800);

console.log(lamp.getPowerUsed() + pc.getPowerUsed());

lamp.turnOn();
console.log(lamp.getPowerUsed() + pc.getPowerUsed());

pc.turnOn();
console.log(lamp.getPowerUsed() + pc.getPowerUsed());
