import Ticket from '@/app/(models)/Ticket';
import { NextResponse } from 'next/server';


export async function GET(req, {params}) {
    try {
        const { id } = params;
        const ticket = await Ticket.findById({_id : id});
        return NextResponse.json({ ticket }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
}

export async function PUT(req, {params}) {
    try {
        const { id } = params;
        const body = await req.json()
        const ticket = await body.ticket

        const updateTicketData = await Ticket.findByIdAndUpdate(id, {...ticket});
        console.log("put ran", ticket)
        return NextResponse.json({ ticket }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
}

export async function DELETE(req, {params}) {
    try {
        const { id } = params;
        await Ticket.findByIdAndDelete(id);
        return NextResponse.json({ message: "Ticket Deleted" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
}